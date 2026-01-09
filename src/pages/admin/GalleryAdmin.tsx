
import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Shield, Cloud, Image, RefreshCw, LogIn, CheckCircle, AlertCircle, Settings } from 'lucide-react';

// Types
interface GooglePhoto {
    id: string;
    baseUrl: string;
    filename: string;
    mediaMetadata: {
        creationTime: string;
        width: string;
        height: string;
    }
}

interface Album {
    id: string;
    title: string;
    mediaItemsCount: string;
    coverPhotoBaseUrl: string;
}

const GalleryAdmin = () => {
    // Config State
    const [config, setConfig] = useState({
        cloudName: localStorage.getItem('cloudinary_cloud_name') || '',
        uploadPreset: localStorage.getItem('cloudinary_preset') || '',
        googleClientId: localStorage.getItem('google_client_id') || ''
    });

    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [syncStatus, setSyncStatus] = useState<{ total: number, current: number, logs: string[] }>({ total: 0, current: 0, logs: [] });
    const [isSyncing, setIsSyncing] = useState(false);

    // Save Config
    const handleConfigSave = () => {
        localStorage.setItem('cloudinary_cloud_name', config.cloudName);
        localStorage.setItem('cloudinary_preset', config.uploadPreset);
        localStorage.setItem('google_client_id', config.googleClientId);
        alert("Configuration Saved!");
        window.location.reload(); // Reload to pick up new Client ID for Provider if needed
    };

    // 1. Google Auth
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setAccessToken(codeResponse.access_token);
            fetchAlbums(codeResponse.access_token);
        },
        scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
        onError: (error) => console.log('Login Failed:', error)
    });

    // 2. Fetch Albums
    const fetchAlbums = async (token: string) => {
        try {
            const res = await axios.get('https://photoslibrary.googleapis.com/v1/albums', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAlbums(res.data.albums || []);
            log("Albums fetched successfully.");
        } catch (err) {
            log("Error fetching albums: " + err);
        }
    };

    // Logger
    const log = (msg: string) => {
        setSyncStatus(prev => ({ ...prev, logs: [...prev.logs, `[${new Date().toLocaleTimeString()}] ${msg}`] }));
    };

    // 3. Sync Logic
    const startSync = async () => {
        if (!selectedAlbum || !accessToken) return;
        setIsSyncing(true);
        setSyncStatus({ total: 0, current: 0, logs: [] });
        log(`Starting sync for album: ${selectedAlbum.title}`);

        try {
            // A. Fetch Photos from GPhotos
            let photos: GooglePhoto[] = [];
            let nextPageToken = '';

            do {
                log("Fetching page of photos...");
                const res = await axios.post('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
                    albumId: selectedAlbum.id,
                    pageSize: 100,
                    pageToken: nextPageToken
                }, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });

                if (res.data.mediaItems) photos = [...photos, ...res.data.mediaItems];
                nextPageToken = res.data.nextPageToken;
            } while (nextPageToken);

            setSyncStatus(prev => ({ ...prev, total: photos.length }));
            log(`Found ${photos.length} photos. Starting upload to Cloudinary...`);

            // B. Upload to Cloudinary
            for (let i = 0; i < photos.length; i++) {
                const photo = photos[i];
                setSyncStatus(prev => ({ ...prev, current: i + 1 }));

                // Prepare Data
                const year = photo.mediaMetadata.creationTime.split('-')[0];
                const cleanTitle = selectedAlbum.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
                const tags = ['gallery', cleanTitle, `year-${year}`].join(',');

                // Context (Metadata)
                const context = `caption=${photo.filename}|date=${photo.mediaMetadata.creationTime}|alt=${selectedAlbum.title}`;

                // Download full size image as Blob
                const imageBlob = await fetch(`${photo.baseUrl}=d`).then(r => r.blob());

                const formData = new FormData();
                formData.append('file', imageBlob);
                formData.append('upload_preset', config.uploadPreset);
                formData.append('folder', 'gallery-sync');
                formData.append('tags', tags);
                formData.append('context', context);
                // Use GID to prevent duplicates
                formData.append('public_id', `gphotos_${photo.id}`);

                try {
                    await axios.post(
                        `https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`,
                        formData
                    );
                    log(`Uploaded ${i + 1}/${photos.length}: ${photo.filename}`);
                } catch (upErr: any) {
                    log(`Failed to upload ${photo.filename}: ${upErr.message}`);
                }
            }
            log("Sync complete!");

        } catch (err: any) {
            log("Critical Error during sync: " + err.message);
        } finally {
            setIsSyncing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-800 dark:text-gray-200">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <div className="p-3 bg-blue-600 rounded-lg shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold dark:text-white">Gallery Admin</h1>
                        <p className="text-gray-500">Google Photos → Cloudinary Sync Tool</p>
                    </div>
                </div>

                {/* Configuration Panel */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
                        <Settings className="w-5 h-5" /> 1. Configuration
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Google Client ID</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                value={config.googleClientId}
                                onChange={e => setConfig({ ...config, googleClientId: e.target.value })}
                                placeholder="OAuth Client ID"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Cloudinary Cloud Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                value={config.cloudName}
                                onChange={e => setConfig({ ...config, cloudName: e.target.value })}
                                placeholder="e.g. dyx...123"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Cloudinary Unsigned Preset</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                value={config.uploadPreset}
                                onChange={e => setConfig({ ...config, uploadPreset: e.target.value })}
                                placeholder="Settings > Upload > Upload Presets (Unsigned)"
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleConfigSave}
                        className="mt-4 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded hover:bg-gray-800"
                    >
                        Save Configuration
                    </button>
                </div>

                {/* Auth Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 opacity-90">
                    <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
                        <LogIn className="w-5 h-5" /> 2. Access
                    </h2>
                    {!config.googleClientId ? (
                        <div className="flex items-center gap-2 text-amber-500 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                            <AlertCircle className="w-5 h-5" />
                            Please configure Client ID first.
                        </div>
                    ) : (
                        <button
                            onClick={() => login()}
                            disabled={!!accessToken}
                            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-bold text-lg transition-all ${accessToken
                                    ? 'bg-green-100 text-green-700 cursor-default'
                                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                                }`}
                        >
                            {accessToken ? (
                                <><CheckCircle className="w-6 h-6" /> Connected to Google</>
                            ) : (
                                <><Image className="w-6 h-6" /> Sign in with Google Photos</>
                            )}
                        </button>
                    )}
                </div>

                {/* Album Selection & Sync */}
                {accessToken && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
                            <Cloud className="w-5 h-5" /> 3. Sync Albums
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {albums.map(album => (
                                <div
                                    key={album.id}
                                    onClick={() => setSelectedAlbum(album)}
                                    className={`cursor-pointer rounded-lg p-2 border-2 transition-all ${selectedAlbum?.id === album.id
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                                            : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <div className="h-32 rounded-md overflow-hidden bg-gray-200 mb-2">
                                        <img src={album.coverPhotoBaseUrl} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-bold truncate">{album.title}</h4>
                                    <p className="text-xs text-gray-500">{album.mediaItemsCount} items</p>
                                </div>
                            ))}
                        </div>

                        {selectedAlbum && (
                            <div className="border-t dark:border-gray-700 pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">Sync "{selectedAlbum.title}"</h3>
                                        <p className="text-sm text-gray-500">
                                            This will upload {selectedAlbum.mediaItemsCount} photos to Cloudinary "{config.cloudName}".
                                        </p>
                                    </div>
                                    <button
                                        onClick={startSync}
                                        disabled={isSyncing}
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                    >
                                        {isSyncing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Cloud className="w-5 h-5" />}
                                        {isSyncing ? 'Syncing...' : 'Start Sync'}
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                {syncStatus.total > 0 && (
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                                                style={{ width: `${(syncStatus.current / syncStatus.total) * 100}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-xs font-bold font-mono">
                                            <span>{Math.round((syncStatus.current / syncStatus.total) * 100)}%</span>
                                            <span>{syncStatus.current} / {syncStatus.total}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Console Output */}
                <div className="bg-black text-green-400 p-4 rounded-xl font-mono text-sm h-64 overflow-y-auto">
                    {syncStatus.logs.length === 0 ? (
                        <span className="opacity-50">System Logs will appear here...</span>
                    ) : (
                        syncStatus.logs.map((log, i) => <div key={i}>{log}</div>)
                    )}
                </div>

            </div>
        </div>
    );
};

export default GalleryAdmin;

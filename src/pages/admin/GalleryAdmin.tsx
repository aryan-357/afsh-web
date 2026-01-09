
import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {
    Cloud,
    Image as ImageIcon,
    Upload,
    LogIn,
    X,
    Loader2,
    CheckCircle,
    LogOut,
    Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---
// ideally these should be in .env, but we'll use localStorage/Constants for now if .env is missing
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || localStorage.getItem('cloudinary_cloud_name') || '';
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET || localStorage.getItem('cloudinary_preset') || '';

// --- Types ---
interface GooglePhoto {
    id: string;
    baseUrl: string;
    filename: string;
    mediaMetadata: {
        creationTime: string;
    }
}

interface Album {
    id: string;
    title: string;
    mediaItemsCount: string;
    coverPhotoBaseUrl: string;
}

const GalleryAdmin = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [userProfile, setUserProfile] = useState<any>(null);

    // UI States
    const [isGPhotosModalOpen, setGPhotosModalOpen] = useState(false);
    const [isUploadModalOpen, setUploadModalOpen] = useState(false);

    // Data States
    const [albums, setAlbums] = useState<Album[]>([]);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [syncStatus, setSyncStatus] = useState({ total: 0, current: 0, active: false, log: '' });

    // 1. Google Auth Logic
    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            setAccessToken(codeResponse.access_token);
            // Fetch User Info
            try {
                const res = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
                    headers: { Authorization: `Bearer ${codeResponse.access_token}` }
                });
                setUserProfile(res.data);
                fetchAlbums(codeResponse.access_token);
            } catch (err) {
                console.error("Failed to fetch user profile", err);
            }
        },
        scope: 'https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/userinfo.profile',
        onError: (error) => console.log('Login Failed:', error)
    });

    const logout = () => {
        setAccessToken(null);
        setUserProfile(null);
        setAlbums([]);
    };

    // 2. Fetch GPhotos Albums
    const fetchAlbums = async (token: string) => {
        try {
            const res = await axios.get('https://photoslibrary.googleapis.com/v1/albums', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAlbums(res.data.albums || []);
        } catch (err) {
            console.error(err);
        }
    };

    // 3. Sync Logic (GPhotos -> Cloudinary)
    const handleSync = async () => {
        if (!selectedAlbum || !accessToken) return;
        setSyncStatus({ total: 0, current: 0, active: true, log: 'Initiating...' });

        try {
            let photos: GooglePhoto[] = [];
            let nextPageToken = '';

            // Fetch all photos
            do {
                setSyncStatus(prev => ({ ...prev, log: `Fetching from Google... (${photos.length} found)` }));
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

            setSyncStatus(prev => ({ ...prev, total: photos.length, log: 'Starting Upload...' }));

            // Upload
            for (let i = 0; i < photos.length; i++) {
                const photo = photos[i];
                setSyncStatus(prev => ({ ...prev, current: i + 1, log: `Uploading: ${photo.filename}` }));

                const imageBlob = await fetch(`${photo.baseUrl}=d`).then(r => r.blob());
                await uploadToCloudinary(imageBlob, photo.filename, {
                    date: photo.mediaMetadata.creationTime,
                    album: selectedAlbum.title,
                    source: 'google-photos'
                });
            }
            setSyncStatus(prev => ({ ...prev, active: false, log: 'Done!' }));
            alert("Sync Complete!");
            setGPhotosModalOpen(false);

        } catch (err: any) {
            alert("Sync Failed: " + err.message);
            setSyncStatus(prev => ({ ...prev, active: false }));
        }
    };

    // 4. Local Upload Logic
    const handleLocalUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const files = Array.from(e.target.files);

        setSyncStatus({ total: files.length, current: 0, active: true, log: 'Starting Local Upload...' });

        for (let i = 0; i < files.length; i++) {
            setSyncStatus(prev => ({ ...prev, current: i + 1, log: `Uploading: ${files[i].name}` }));
            await uploadToCloudinary(files[i], files[i].name, {
                date: new Date().toISOString(),
                album: 'Local Upload',
                source: 'local'
            });
        }
        setSyncStatus(prev => ({ ...prev, active: false, log: 'Done!' }));
        alert("Upload Complete!");
        setUploadModalOpen(false);
    };

    // Shared Upload Helper
    const uploadToCloudinary = async (file: Blob, filename: string, meta: { date: string, album: string, source: string }) => {
        if (!CLOUD_NAME || !UPLOAD_PRESET) {
            throw new Error("Cloudinary Configuration Missing!");
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);
        formData.append('folder', 'gallery-sync');

        // Tags for frontend filtering
        const tags = ['gallery', meta.album.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase(), `year-${meta.date.split('-')[0]}`];
        formData.append('tags', tags.join(','));

        // Context for metadata
        const context = `caption=${filename}|date=${meta.date}|alt=${meta.album}`;
        formData.append('context', context);

        await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
        );
    };


    // --- Render ---

    if (!accessToken) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
                >
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Cloud className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-2xl font-bold dark:text-white mb-2">Gallery Admin</h1>
                    <p className="text-gray-500 mb-8">Sign in to manage gallery photos and sync from Google Photos.</p>

                    <button
                        onClick={() => login()}
                        className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg"
                    >
                        <LogIn className="w-5 h-5" /> Sign in with Google
                    </button>

                    {(!CLOUD_NAME || !UPLOAD_PRESET) && (
                        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-600 text-xs rounded-lg text-left">
                            <strong>Config Warning:</strong> Cloudinary keys not found in environment. Please ensure VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_PRESET are set in .env
                        </div>
                    )}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
                            {userProfile?.given_name?.[0] || 'A'}
                        </div>
                        <div>
                            <h1 className="font-bold text-lg">Welcome, {userProfile?.given_name || 'Admin'}</h1>
                            <p className="text-xs text-green-500 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Connected
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Dashboard */}
            <main className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Action 1: Upload Locally */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500/20 cursor-pointer group"
                        onClick={() => setUploadModalOpen(true)}
                    >
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Upload from Device</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Select photos from your computer or phone storage to add to the gallery.
                        </p>
                    </motion.div>

                    {/* Action 2: Google Photos */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500/20 cursor-pointer group"
                        onClick={() => setGPhotosModalOpen(true)}
                    >
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ImageImageIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Google Photos Import</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Browse your Google Photos albums and sync them directly to the gallery.
                        </p>
                    </motion.div>

                </div>
            </main>

            {/* --- Modals --- */}

            {/* 1. Google Photos Modal */}
            <AnimatePresence>
                {isGPhotosModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-gray-900 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            <div className="p-6 border-b dark:border-gray-700 flex justify-between items-center">
                                <h3 className="text-xl font-bold">Select Request Album</h3>
                                <button onClick={() => setGPhotosModalOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto flex-1 bg-gray-50 dark:bg-gray-950">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {albums.map(album => (
                                        <div
                                            key={album.id}
                                            onClick={() => setSelectedAlbum(album === selectedAlbum ? null : album)}
                                            className={`relative group cursor-pointer rounded-xl overflow-hidden aspect-square border-4 transition-all ${selectedAlbum?.id === album.id ? 'border-blue-600 scale-95' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'
                                                }`}
                                        >
                                            <img src={album.coverPhotoBaseUrl} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                                                <p className="text-white font-bold text-sm truncate">{album.title}</p>
                                                <p className="text-gray-300 text-xs">{album.mediaItemsCount} items</p>
                                            </div>
                                            {selectedAlbum?.id === album.id && (
                                                <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
                                                    <CheckCircle className="w-5 h-5" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 border-t dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-900">
                                <div className="text-sm text-gray-500">
                                    {selectedAlbum ? `Selected: ${selectedAlbum.title}` : 'Select an album to sync'}
                                </div>
                                <button
                                    onClick={handleSync}
                                    disabled={!selectedAlbum || syncStatus.active}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold disabled:opacity-50 flex items-center gap-2 hover:bg-blue-700 transition-colors"
                                >
                                    {syncStatus.active ? <Loader2 className="animate-spin w-5 h-5" /> : <Cloud className="w-5 h-5" />}
                                    {syncStatus.active ? 'Syncing...' : 'Start Import'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* 2. Upload Modal */}
            <AnimatePresence>
                {isUploadModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl p-8 text-center"
                        >
                            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Upload className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Upload Files</h2>
                            <p className="text-gray-500 mb-8">Choose images from your device</p>

                            {syncStatus.active ? (
                                <div className="space-y-4">
                                    <Loader2 className="w-12 h-12 animate-spin mx-auto text-blue-600" />
                                    <p className="text-sm font-mono">{syncStatus.log}</p>
                                </div>
                            ) : (
                                <label className="block w-full cursor-pointer">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleLocalUpload}
                                        className="hidden"
                                    />
                                    <div className="w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 font-bold">
                                        <Plus className="w-5 h-5" /> Select Files
                                    </div>
                                </label>
                            )}

                            <button
                                onClick={() => setUploadModalOpen(false)}
                                className="mt-6 text-gray-500 hover:text-gray-700 text-sm underline"
                            >
                                Cancel
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Sync Status Toast/Overlay */}
            {syncStatus.active && !isUploadModalOpen && (
                <div className="fixed bottom-8 right-8 bg-blue-900 text-white p-6 rounded-xl shadow-2xl z-50 min-w-[300px]">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                        <Loader2 className="animate-spin w-4 h-4" /> Processing...
                    </h3>
                    <div className="w-full bg-blue-800 rounded-full h-2 mb-2 overflow-hidden">
                        <div
                            className="bg-blue-400 h-full transition-all duration-300"
                            style={{ width: `${(syncStatus.current / syncStatus.total) * 100}%` }}
                        />
                    </div>
                    <p className="text-xs font-mono opacity-80">{syncStatus.log}</p>
                </div>
            )}

        </div>
    );
};

export default GalleryAdmin;

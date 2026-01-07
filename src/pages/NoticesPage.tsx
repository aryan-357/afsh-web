import React, { useEffect, useState } from 'react';
import { fetchNotices } from '../services/noticeService';
import { Notice } from '../types/strapi';
import NoticeCard from '../components/ui/NoticeCard';
import { AlertCircle, Loader2 } from 'lucide-react';

const NoticesPage: React.FC = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNotices = async () => {
            try {
                const response = await fetchNotices();
                setNotices(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to load notices. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadNotices();
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                        Important Notices
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest announcements, circulars, and information from the administration.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Oops! Something went wrong</h2>
                        <p className="text-gray-600 dark:text-gray-400">{error}</p>
                    </div>
                ) : notices.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-600 dark:text-gray-400 text-lg">No notices found at the moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notices.map((notice) => (
                            <NoticeCard key={notice.id} notice={notice} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticesPage;

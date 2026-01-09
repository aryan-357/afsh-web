import React, { useEffect, useState } from 'react';
import { fetchNotices } from '../services/noticeService';
import { Notice } from '../types/strapi';
import { Calendar, ChevronRight, ChevronDown, Download, AlertCircle, Loader2, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Silk from '../components/ui/Silk';

const NoticesPage: React.FC = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openNoticeId, setOpenNoticeId] = useState<number | null>(null);

    // Animation Variants
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.4, ease: "easeOut" }
    };

    const slideInFromLeft = {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.4, ease: "easeOut" }
    };

    const slideInFromRight = {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.4, ease: "easeOut" }
    };

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

    const toggleNotice = (id: number) => {
        setOpenNoticeId(openNoticeId === id ? null : id);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'short' }),
            full: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
        };
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pb-12 transition-colors duration-300">
            {/* Hero Section - Matching NewsPage */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <Silk speed={3} scale={1.5} color="#1a365d" noiseIntensity={1.2} rotation={0} fullScreen={false} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                </div>

                <motion.div className="container mx-auto px-6 relative z-10 text-center pt-20" {...fadeIn}>
                    <motion.h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg" {...slideInFromLeft} transition={{ delay: 0.2 }}>
                        Notices & <span className="text-af-gold">Circulars</span>
                    </motion.h1>
                    <motion.p className="text-lg text-blue-100 max-w-2xl mx-auto drop-shadow" {...slideInFromRight} transition={{ delay: 0.3 }}>
                        Stay updated with the latest announcements, important circulars, and official information from the administration.
                    </motion.p>
                    <motion.div className="w-24 h-1 bg-af-gold mx-auto mt-6" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.6 }} />
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-10 h-10 text-af-blue animate-spin" />
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {notices.map((notice) => {
                                const attributes = notice?.attributes;
                                if (!attributes) return null;
                                const { title, date, content, isNew, file } = attributes;
                                const formattedDate = formatDate(date);
                                const isOpen = openNoticeId === notice.id;
                                const fileUrl = file?.data?.attributes?.url;

                                return (
                                    <div key={notice.id} className="group">
                                        <button
                                            onClick={() => toggleNotice(notice.id)}
                                            className={`w-full text-left p-6 flex items-start gap-6 transition-all duration-300 focus:outline-none ${isOpen ? 'bg-blue-50/30 dark:bg-af-blue/5' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                                        >
                                            <div className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-af-blue dark:text-af-light w-16 h-16 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
                                                <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">{formattedDate.month}</span>
                                                <span className="text-2xl font-black leading-none">{formattedDate.day}</span>
                                            </div>
                                            <div className="flex-grow pt-1">
                                                <h4 className={`font-bold transition-colors duration-300 text-lg leading-snug ${isOpen ? 'text-af-blue dark:text-af-light' : 'text-gray-800 dark:text-gray-200 group-hover:text-af-blue'}`}>
                                                    {title}
                                                    {isNew && (
                                                        <span className="inline-block ml-3 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse shadow-lg shadow-red-500/30">
                                                            NEW
                                                        </span>
                                                    )}
                                                </h4>
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
                                                    {isOpen ? 'Click to collapse' : 'Click to read detailed announcement'}
                                                </p>
                                            </div>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-af-blue text-white rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-af-blue/10 group-hover:text-af-blue'}`}>
                                                <ChevronDown size={20} />
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-8 pl-[6.5rem] pr-10">
                                                        <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl border border-blue-100 dark:border-af-blue/20 shadow-inner">
                                                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm whitespace-pre-line">
                                                                {content || "Please refer to the attached document for more details."}
                                                            </p>
                                                            <div className="flex flex-wrap gap-4">
                                                                {fileUrl ? (
                                                                    <motion.a
                                                                        whileHover={{ scale: 1.02 }}
                                                                        whileTap={{ scale: 0.98 }}
                                                                        href={fileUrl}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-2 bg-af-blue text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-af-blue/20 transition-all hover:bg-af-dark hover:shadow-af-blue/40"
                                                                    >
                                                                        <Download size={16} /> Download PDF
                                                                    </motion.a>
                                                                ) : (
                                                                    <span className="text-xs text-gray-400 italic">No attachment available</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default NoticesPage;

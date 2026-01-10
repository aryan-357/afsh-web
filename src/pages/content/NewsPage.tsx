import React, { useEffect, useState } from 'react';
import { Calendar, ChevronRight, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types/blog';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp } from '../../utils/animations';
import { PostService } from '../../services/postService';
import { getStrapiMedia, extractImageUrl } from '../../utils/strapi';

const NewsPage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState('all');



    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await PostService.getAllPosts();
                if (fetchedPosts && Array.isArray(fetchedPosts)) {
                    setPosts(fetchedPosts);
                } else {
                    setError("No articles found or invalid API format.");
                }
            } catch (err: any) {
                console.error("Failed to fetch posts", err);
                setError(err.message || "Could not load news posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const getImageUrl = (url?: string) => {
        const mediaUrl = getStrapiMedia(url);
        return mediaUrl || 'https://picsum.photos/800/600';
    };

    const newsCategories = [
        { id: 'all', label: 'All Updates' },
        { id: 'academic', label: 'Academics' },
        { id: 'events', label: 'Events' },
        { id: 'sports', label: 'Sports' },
        { id: 'circulars', label: 'Circulars' },
    ];

    const featuredPost = posts.length > 0 ? posts[0] : null;
    const remainingPosts = posts.length > 0 ? posts.slice(1) : [];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-af-blue"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 text-center">
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Connection Issue</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-af-blue text-white rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <PageAnimate className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pb-12 transition-colors duration-300">
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <Silk speed={3} scale={1.5} color="#1a365d" noiseIntensity={1.2} rotation={0} fullScreen={false} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                </div>

                <motion.div
                    className="container mx-auto px-6 relative z-10 text-center pt-20"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
                        variants={fadeInUp}
                        custom={1}
                    >
                        News & <span className="text-af-gold">Chronicles</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-blue-100 max-w-2xl mx-auto drop-shadow"
                        variants={fadeInUp}
                        custom={2}
                    >
                        Stay updated with the latest happenings, achievements, and announcements from Air Force School Hindan.
                    </motion.p>
                    <motion.div
                        className="w-24 h-1 bg-af-gold mx-auto mt-6"
                        variants={fadeInUp}
                        custom={3}
                    />
                </motion.div>
            </section>

            <div className="container mx-auto px-6">
                {featuredPost && (
                    <motion.section
                        className="mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-af-gold rounded-full"></span>
                            Featured Story
                        </motion.h2>
                        <motion.div
                            className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative overflow-hidden h-[300px] md:h-auto">
                                <img src={getImageUrl(extractImageUrl(featuredPost.coverContent))} alt={featuredPost.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/error/800/600'; }} />
                                <div className="absolute top-4 left-4 bg-af-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {featuredPost.category?.name || 'Update'}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{
                                        (featuredPost.authors && featuredPost.authors.length > 0)
                                            ? featuredPost.authors.map(a => a.name).join(', ')
                                            : featuredPost.author?.name ||
                                            (featuredPost.createdBy?.firstname || featuredPost.createdBy?.lastname
                                                ? `${featuredPost.createdBy?.firstname || ''} ${featuredPost.createdBy?.lastname || ''}`.trim()
                                                : featuredPost.createdBy?.username) ||
                                            'School Admin'
                                    }</span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                                    {featuredPost.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                                    {featuredPost.description || "Read more about this update."}
                                </p>
                                <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-af-blue dark:text-af-light font-bold uppercase tracking-wider text-sm hover:underline">
                                    Read Full Story <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.section>
                )}

                <motion.div
                    className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {newsCategories.map((cat, index) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat.id ? 'bg-af-blue text-white shadow-lg scale-105' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingPosts.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={idx}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img src={getImageUrl(extractImageUrl(item.coverContent))} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/error/400/300'; }} />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                    {item.category?.name || 'News'}
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2 block flex items-center gap-1">
                                    <Calendar size={12} /> {new Date(item.publishedAt).toLocaleDateString()}
                                </span>
                                <h4 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                    {item.description || "Read more to see the full details..."}
                                </p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-gray-700">
                                    <Link to={`/blog/${item.slug}`} className="text-sm font-bold text-af-blue dark:text-af-light flex items-center gap-1 hover:gap-2 transition-all">
                                        Read More <ChevronRight size={14} />
                                    </Link>
                                    <button className="text-gray-400 hover:text-af-blue dark:hover:text-af-light transition-colors">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageAnimate>
    );
};

export default NewsPage;

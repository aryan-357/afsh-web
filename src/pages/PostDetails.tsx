import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import BlocksRenderer from '../components/ui/BlocksRenderer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, User, ArrowLeft, ChevronDown } from 'lucide-react';
import { PostService } from '../services/postService';
import { getStrapiMedia, extractImageUrl } from '../utils/strapi';

const PostDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);



    const { scrollY } = useScroll();
    const bgScale = useTransform(scrollY, [0, 800], [1, 1.2]);
    const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const contentY = useTransform(scrollY, [0, 400], [0, -50]);

    useEffect(() => {
        const loadData = async () => {
            if (!slug) return;
            setLoading(true);
            try {
                // Parallel fetch
                const [fetchedPost, fetchedRelated] = await Promise.all([
                    PostService.getPostBySlug(slug),
                    PostService.getRelatedPosts(slug)
                ]);

                setPost(fetchedPost);
                setRelatedPosts(fetchedRelated);
            } catch (err) {
                console.error("Failed to load post details:", err);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [slug]);

    const getImageUrl = (url?: string) => {
        const mediaUrl = getStrapiMedia(url);
        return mediaUrl || 'https://picsum.photos/1200/600';
    };



    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-af-blue"></div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-af-blue hover:underline">Back to Blog</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pb-20">
            {/* Hero Image */}
            <div className="h-screen w-full relative overflow-hidden flex items-center justify-center">
                <motion.img
                    src={getImageUrl(extractImageUrl(post?.coverContent))}
                    alt={post?.title || 'Hero Image'}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ scale: bgScale }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>





                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Content Area */}
            <motion.article
                className="container mx-auto px-6 relative z-10 py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                <div className="max-w-5xl mx-auto">
                    <header className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-12">
                        <motion.h1
                            className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-8 leading-tight"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {post.title}
                        </motion.h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 text-sm font-medium">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} className="text-af-blue dark:text-af-gold" /> {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Recent'}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={16} className="text-af-blue dark:text-af-gold" /> {
                                    (post.authors && post.authors.length > 0)
                                        ? post.authors.map(a => a.name).join(', ')
                                        : post.author?.name ||
                                        (post.createdBy?.firstname || post.createdBy?.lastname
                                            ? `${post.createdBy?.firstname || ''} ${post.createdBy?.lastname || ''}`.trim()
                                            : post.createdBy?.username) ||
                                        'School Admin'
                                }
                            </span>
                            {post.category && (
                                <span className="px-3 py-1 bg-af-blue/10 text-af-blue dark:bg-af-gold/10 dark:text-af-gold rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {post.category.name}
                                </span>
                            )}
                        </div>
                    </header>

                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
                        prose-p:font-serif prose-p:leading-relaxed prose-p:text-gray-800 dark:prose-p:text-gray-300 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
                        prose-img:rounded-xl prose-a:text-af-blue dark:prose-a:text-af-gold hover:prose-a:underline transition-all">
                        <BlocksRenderer content={post.body} />
                    </div>
                </div>
            </motion.article>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <section className="container mx-auto px-6 py-24 border-t border-gray-100 dark:border-gray-800">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                Discover More
                            </h2>
                            <Link to="/blog" className="text-sm font-bold text-af-blue dark:text-af-gold hover:underline flex items-center gap-2">
                                All News <ArrowLeft className="rotate-180" size={16} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((rPost, idx) => (
                                <motion.div
                                    key={rPost.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <Link to={`/blog/${rPost.slug}`}>
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 shadow-lg">
                                            <motion.img
                                                src={getImageUrl(extractImageUrl(rPost.coverContent))}
                                                alt={rPost.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white leading-tight group-hover:text-af-blue transition-colors">
                                            {rPost.title}
                                        </h3>
                                        <div className="mt-2 text-xs uppercase tracking-widest text-af-blue/60 dark:text-af-gold/60 font-bold">
                                            {rPost.category?.name || 'Latest News'}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default PostDetails;

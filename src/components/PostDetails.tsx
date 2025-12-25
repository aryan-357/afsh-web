import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const PostDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_STRAPI_URL;

    useEffect(() => {
        fetch(`${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`)
            .then(res => res.json())
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setPost(response.data[0]);
                } else {
                    setPost(null);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug, API_URL]);

    const getImageUrl = (url?: string) => {
        if (!url) return 'https://picsum.photos/1200/600';
        if (url.startsWith('http')) return url;
        return `${API_URL}${url}`;
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
            <div className="h-[400px] md:h-[500px] w-full relative">
                <img
                    src={getImageUrl(post.cover?.url)}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="mr-2" size={20} /> Back to News
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <Calendar size={18} /> {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={18} /> {post.author?.name || 'School Admin'}
                            </span>
                            {post.category && (
                                <span className="px-3 py-1 bg-af-blue rounded-full text-xs font-bold uppercase tracking-wider">
                                    {post.category.name}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="container mx-auto px-6 -mt-10 relative z-10">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-img:rounded-xl prose-a:text-af-blue hover:prose-a:text-blue-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>
        </div>
    );
};

export default PostDetails;

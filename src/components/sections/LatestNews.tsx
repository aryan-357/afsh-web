import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { PostService } from '../../services/postService';
import { getStrapiMedia, extractImageUrl } from '../../utils/strapi';
import { tinaField } from "tinacms/dist/react";

interface LatestNewsProps {
  title?: string;
  count?: number;
  block?: any;
}

const LatestNews: React.FC<LatestNewsProps> = ({ title, count = 3, block }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);


  const borderColors = ["border-af-gold", "border-af-blue", "border-red-600"];

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const fetchedPosts = await PostService.getLatestPosts(count);
        if (fetchedPosts) {
          setPosts(fetchedPosts);
        }
      } catch (err) {
        console.error("Failed to fetch latest news", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, [count]);

  const getImageUrl = (url?: string) => {
    const mediaUrl = getStrapiMedia(url);
    return mediaUrl || 'https://picsum.photos/800/1000';
  };

  if (loading) {
    return (
      <div className="h-[550px] flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-af-blue"></div>
      </div>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="group bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      {title && (
        <div className="container mx-auto px-6 py-8">
          <h2
            data-tina-field={block ? tinaField(block, 'title') : undefined}
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </h2>
        </div>
      )}
      <div className="w-full">
        {/* News Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(posts.length, 3)}`}>
          {posts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative h-[550px] group overflow-hidden cursor-pointer border-t-8 ${borderColors[idx % borderColors.length]} shadow-2xl`}
            >
              {/* Background Image */}
              <motion.img
                src={getImageUrl(extractImageUrl(item.coverContent))}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${item.id}/800/1000`; }}
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-500" />

              {/* Content Container */}
              <div className={`absolute inset-0 p-10 flex flex-col justify-end items-start text-left`}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-af-blue/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full mb-6 shadow-xl border border-white/10"
                >
                  {item.category?.name || 'Latest'}
                </motion.span>

                <h3 className="text-white font-serif font-bold text-3xl md:text-4xl leading-tight mb-8 drop-shadow-2xl group-hover:text-af-light transition-colors duration-300 line-clamp-3">
                  {item.title}
                </h3>

                <Link
                  to={`/blog/${item.slug}`}
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-serif italic text-lg hover:bg-white hover:text-black transition-all duration-500 rounded-lg group/btn shadow-xl"
                >
                  Read Story
                  <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Redirect Link */}
        <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
          <div className="container mx-auto px-6 py-6 flex justify-end">
            <Link
              to="/blog"
              className="group flex items-center gap-3 text-gray-500 dark:text-gray-400 font-serif italic text-xl hover:text-af-blue dark:hover:text-af-light transition-all pb-1 border-b-2 border-transparent hover:border-af-blue dark:hover:border-border-white"
            >
              <span>View All Stories</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowUpRight size={24} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

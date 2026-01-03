import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  alignment: 'center' | 'bottom';
  hasButton: boolean;
  borderColor: string;
  link: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Air Force Day Celebrations: A Tribute to Our Heroes",
    image: "https://picsum.photos/seed/afday2024/800/1000",
    alignment: "bottom",
    hasButton: true,
    borderColor: "border-af-gold",
    link: "/news",
    category: "Events"
  },
  {
    id: 2,
    title: "Class XII Board Results: Toppers Felicitated",
    image: "https://picsum.photos/seed/exam2024/800/1000",
    alignment: "bottom",
    hasButton: true,
    borderColor: "border-af-blue",
    link: "/news",
    category: "Academic"
  },
  {
    id: 3,
    title: "Join us for the Annual Sports Meet 2024",
    image: "https://picsum.photos/seed/sports2024/800/1000",
    alignment: "bottom",
    hasButton: true,
    borderColor: "border-red-600",
    link: "/student-life#sports",
    category: "Sports"
  }
];

const LatestNews: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-950 pb-16 transition-colors duration-500 overflow-hidden">
      <div className="w-full">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative h-[550px] group overflow-hidden cursor-pointer border-t-8 ${item.borderColor} shadow-2xl`}
            >
              {/* Background Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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
                  {item.category}
                </motion.span>

                <h3 className="text-white font-serif font-bold text-3xl md:text-4xl leading-tight mb-8 drop-shadow-2xl group-hover:text-af-light transition-colors duration-300">
                  {item.title}
                </h3>

                {item.hasButton && (
                  <Link
                    to={item.link}
                    className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-serif italic text-lg hover:bg-white hover:text-black transition-all duration-500 rounded-lg group/btn shadow-xl"
                  >
                    Read Story
                    <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Redirect Link */}
        <div className="container mx-auto px-6 mt-12 flex justify-end">
          <Link
            to="/news"
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
    </section>
  );
};

export default LatestNews;

import React, { useState, Suspense } from 'react';
import { ChevronDown, Image as ImageIcon, Calendar, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Silk from '@/src/components/ui/Silk';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    // Academic Events
    {
      id: 1,
      title: 'Science Fair 2024',
      category: 'academics',
      image: 'https://picsum.photos/seed/sciencefair1/600/400',
      description: 'Students showcasing innovative science projects'
    },
    {
      id: 2,
      title: 'Annual Debate Competition',
      category: 'academics',
      image: 'https://picsum.photos/seed/debate1/600/400',
      description: 'Inter-school debate championship'
    },
    {
      id: 3,
      title: 'Mathematics Olympiad',
      category: 'academics',
      image: 'https://picsum.photos/seed/olympiad1/600/400',
      description: 'Competitive mathematics event'
    },
    {
      id: 4,
      title: 'Book Reading Session',
      category: 'academics',
      image: 'https://picsum.photos/seed/library1/600/400',
      description: 'Literature and reading program'
    },

    // Sports Events
    {
      id: 5,
      title: 'Annual Sports Day',
      category: 'sports',
      image: 'https://picsum.photos/seed/sports1/600/400',
      description: 'Track and field competitions'
    },
    {
      id: 6,
      title: 'Football Tournament',
      category: 'sports',
      image: 'https://picsum.photos/seed/football1/600/400',
      description: 'Inter-house football championship'
    },
    {
      id: 7,
      title: 'Cricket Match',
      category: 'sports',
      image: 'https://picsum.photos/seed/cricket1/600/400',
      description: 'School cricket tournament'
    },
    {
      id: 8,
      title: 'Badminton Championship',
      category: 'sports',
      image: 'https://picsum.photos/seed/badminton1/600/400',
      description: 'Badminton tournament finals'
    },

    // Cultural Events
    {
      id: 9,
      title: 'Annual Day Performance',
      category: 'cultural',
      image: 'https://picsum.photos/seed/dance1/600/400',
      description: 'Dance and music performances'
    },
    {
      id: 10,
      title: 'School Assembly',
      category: 'cultural',
      image: 'https://picsum.photos/seed/assembly1/600/400',
      description: 'Morning assembly and flag hoisting'
    },
    {
      id: 11,
      title: 'Independence Day Celebration',
      category: 'cultural',
      image: 'https://picsum.photos/seed/independence1/600/400',
      description: 'National Day celebrations'
    },
    {
      id: 12,
      title: 'Art Exhibition',
      category: 'cultural',
      image: 'https://picsum.photos/seed/art1/600/400',
      description: 'Student artwork display'
    },

    // Campus Life
    {
      id: 13,
      title: 'Classroom Sessions',
      category: 'campus',
      image: 'https://picsum.photos/seed/classroom1/600/400',
      description: 'Interactive learning in progress'
    },
    {
      id: 14,
      title: 'School Grounds',
      category: 'campus',
      image: 'https://picsum.photos/seed/campus1/600/400',
      description: 'Aerial view of school campus'
    },
    {
      id: 15,
      title: 'Lunch Break Activities',
      category: 'campus',
      image: 'https://picsum.photos/seed/lunch1/600/400',
      description: 'Students enjoying lunch and recreation'
    },
    {
      id: 16,
      title: 'School Building',
      category: 'campus',
      image: 'https://picsum.photos/seed/building1/600/400',
      description: 'Main school building facade'
    },

    // Awards & Achievements
    {
      id: 17,
      title: 'Academic Awards Ceremony',
      category: 'awards',
      image: 'https://picsum.photos/seed/awards1/600/400',
      description: 'Felicitation of top performers'
    },
    {
      id: 18,
      title: 'Board Exam Toppers',
      category: 'awards',
      image: 'https://picsum.photos/seed/toppers1/600/400',
      description: 'CBSE board examination toppers'
    },
    {
      id: 19,
      title: 'Sports Excellence',
      category: 'awards',
      image: 'https://picsum.photos/seed/sportstrophy1/600/400',
      description: 'Trophy presentation ceremony'
    },
    {
      id: 20,
      title: 'NCC Recognition',
      category: 'awards',
      image: 'https://picsum.photos/seed/ncc1/600/400',
      description: 'NCC cadets felicitation'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', icon: '📸' },
    { id: 'academics', label: 'Academics', icon: '📚' },
    { id: 'sports', label: 'Sports', icon: '⚽' },
    { id: 'cultural', label: 'Cultural', icon: '🎭' },
    { id: 'campus', label: 'Campus Life', icon: '🏫' },
    { id: 'awards', label: 'Awards', icon: '🏆' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.5}
            color="#1a365d"
            noiseIntensity={1.2}
            rotation={0}
            fullScreen={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center pt-20"
          {...fadeIn}
          transition={{ delay: 0.1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
            {...slideInFromLeft}
            transition={{ delay: 0.2 }}
          >
            Our <span className="text-af-gold">Gallery</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow"
            {...slideInFromRight}
            transition={{ delay: 0.3 }}
          >
            Explore the vibrant moments, achievements, and activities of Air Force School Hindan
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </section>

      {/* Category Filter */}
      <motion.section 
        className="container mx-auto px-4 mb-12"
        {...fadeIn}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 transform ${selectedCategory === cat.id
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              {...scaleIn}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{cat.icon}</span>{cat.label}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section 
        className="container mx-auto px-4"
        {...fadeIn}
        transition={{ delay: 0.7 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
              {...scaleIn}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Container */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-af-gold font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Photo <span className="ml-2">→</span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-af-blue dark:bg-af-light text-white dark:text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {categories.find(c => c.id === item.category)?.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No images found in this category.</p>
          </div>
        )}
      </motion.section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Photos', value: galleryItems.length },
            { label: 'Events Covered', value: Math.ceil(galleryItems.length / 4) },
            { label: 'Categories', value: categories.length - 1 },
            { label: 'This Year', value: 2024 }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-af-blue dark:hover:border-af-light transition-colors duration-300">
              <div className="text-3xl font-bold text-af-blue dark:text-af-light mb-2">{stat.value}+</div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-gray-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 backdrop-blur-md"
            >
              ✕
            </button>

            {/* Image */}
            <div className="flex-1 overflow-auto">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <div className="flex items-center gap-2">
                <span className="bg-af-blue text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <motion.section 
        className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center"
        {...scaleIn}
        transition={{ delay: 1.2 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.h2 
          className="text-3xl font-serif font-bold mb-4"
          {...slideInFromLeft}
          transition={{ delay: 1.3 }}
        >
          Got Photos to Share?
        </motion.h2>
        <motion.p 
          className="text-blue-100 mb-6 max-w-2xl mx-auto"
          {...slideInFromRight}
          transition={{ delay: 1.4 }}
        >
          Have captured memorable moments from school events? We'd love to feature them in our gallery!
        </motion.p>
        <motion.div
          {...fadeIn}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/alumni/photos"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors duration-300 inline-block"
            >
              Send Your Photos
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default GalleryPage;

import React, { useState } from 'react';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const galleryImages = [
  { id: 1, url: 'https://picsum.photos/seed/g1/800/600', category: 'Campus', caption: 'Main Administrative Block' },
  { id: 2, url: 'https://picsum.photos/seed/g2/800/600', category: 'Sports', caption: 'Annual Sports Day 2023' },
  { id: 3, url: 'https://picsum.photos/seed/g3/800/600', category: 'Events', caption: 'Cultural Fest Performance' },
  { id: 4, url: 'https://picsum.photos/seed/g4/800/600', category: 'Academics', caption: 'Science Exhibition Projects' },
  { id: 5, url: 'https://picsum.photos/seed/g5/800/600', category: 'Campus', caption: 'School Library' },
  { id: 6, url: 'https://picsum.photos/seed/g6/800/600', category: 'Sports', caption: 'Basketball Tournament' },
  { id: 7, url: 'https://picsum.photos/seed/g7/800/600', category: 'Events', caption: 'Independence Day Parade' },
  { id: 8, url: 'https://picsum.photos/seed/g8/800/600', category: 'Academics', caption: 'Computer Lab Session' },
  { id: 9, url: 'https://picsum.photos/seed/g9/800/600', category: 'Campus', caption: 'Playground & Activity Area' },
  { id: 10, url: 'https://picsum.photos/seed/g10/800/600', category: 'Events', caption: 'Award Ceremony' },
  { id: 11, url: 'https://picsum.photos/seed/g11/800/600', category: 'Academics', caption: 'Art & Craft Workshop' },
  { id: 12, url: 'https://picsum.photos/seed/g12/800/600', category: 'Sports', caption: 'Yoga Session' },
];

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const activeImage = galleryImages.find(img => img.id === selectedImage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in-down">
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-af-blue dark:text-af-light hover:underline mb-6 font-medium group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </button>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">School Gallery</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Explore the vibrant life at Air Force School Hindan through our lens. From academic achievements to sports glories and cultural extravaganzas.
            </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                        filter === cat 
                        ? 'bg-af-blue text-white border-af-blue shadow-lg scale-105' 
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in-up">
            {filteredImages.map((image) => (
                <div 
                    key={image.id}
                    onClick={() => setSelectedImage(image.id)}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all"
                >
                    <img 
                        src={image.url} 
                        alt={image.caption}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <ZoomIn className="text-white drop-shadow-md" size={32} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-bold truncate">{image.caption}</p>
                        <p className="text-gray-300 text-xs">{image.category}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && activeImage && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in">
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                >
                    <X size={40} />
                </button>
                
                <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                    <img 
                        src={activeImage.url} 
                        alt={activeImage.caption}
                        className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
                    />
                    <div className="mt-4 text-center">
                        <h3 className="text-2xl font-serif font-bold text-white">{activeImage.caption}</h3>
                        <p className="text-af-gold uppercase tracking-widest text-sm mt-1">{activeImage.category}</p>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
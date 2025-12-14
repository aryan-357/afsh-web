import React, { useState, useEffect } from 'react';
import { Filter, X, ZoomIn } from 'lucide-react';
import Footer from '@/components/Footer';
import { GalleryImage } from '@/types';

const galleryImages: GalleryImage[] = [
  { id: 1, url: "https://picsum.photos/seed/g1/600/400", category: "Academics", caption: "Science Lab Experiment" },
  { id: 2, url: "https://picsum.photos/seed/g2/400/600", category: "Sports", caption: "Annual Sports Meet Relay" },
  { id: 3, url: "https://picsum.photos/seed/g3/600/600", category: "Events", caption: "Independence Day Celebration" },
  { id: 4, url: "https://picsum.photos/seed/g4/600/400", category: "Campus", caption: "Main School Building" },
  { id: 5, url: "https://picsum.photos/seed/g5/400/500", category: "Academics", caption: "Computer Lab Session" },
  { id: 6, url: "https://picsum.photos/seed/g6/600/400", category: "Sports", caption: "Basketball Championship" },
  { id: 7, url: "https://picsum.photos/seed/g7/500/500", category: "Events", caption: "Annual Function Dance" },
  { id: 8, url: "https://picsum.photos/seed/g8/400/600", category: "Campus", caption: "Library Reading Hall" },
  { id: 9, url: "https://picsum.photos/seed/g9/600/400", category: "Academics", caption: "Art & Craft Workshop" },
  { id: 10, url: "https://picsum.photos/seed/g10/600/800", category: "Sports", caption: "Cricket Team Practice" },
  { id: 11, url: "https://picsum.photos/seed/g11/600/400", category: "Events", caption: "Debate Competition Winners" },
  { id: 12, url: "https://picsum.photos/seed/g12/500/400", category: "Campus", caption: "Playground in Autumn" },
];

const categories = ['All', 'Academics', 'Sports', 'Events', 'Campus'];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <div className="pt-24 bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
        
        {/* Header Section */}
        <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0">
             <img src="https://picsum.photos/seed/school1/1920/600" className="w-full h-full object-cover opacity-20" alt="Gallery Header"/>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">School Gallery</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Capturing moments of joy, learning, and excellence at Air Force School Hindan.
            </p>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="container mx-auto px-4 py-12">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-af-blue text-white border-af-blue shadow-lg scale-105' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-af-blue dark:hover:border-af-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img) => (
              <div 
                key={img.id} 
                className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-af-gold text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <p className="text-white font-serif text-lg leading-tight">{img.caption}</p>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
             <div className="text-center py-20 text-gray-400">
               <p>No images found in this category.</p>
             </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>
            
            <div className="max-w-5xl w-full max-h-[90vh] relative">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption}
                className="w-full h-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-6">
                <h3 className="text-white font-serif text-2xl">{selectedImage.caption}</h3>
                <span className="text-af-gold uppercase tracking-widest text-xs font-bold mt-2 inline-block">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}

        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default GalleryPage;
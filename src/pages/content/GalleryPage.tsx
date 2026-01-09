import React, { useState, useMemo } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Grid,
  Folder,
  X,
  Calendar,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { galleryData, Photo } from "@/src/data/gallery-data";
import Silk from '@/src/components/ui/Silk';

// --- Types ---
type ViewMode = 'photos' | 'albums';
type SortOrder = 'latest' | 'oldest';

// --- Sidebar Component ---
const FilterSidebar = ({
  isOpen,
  onClose,
  years,
  selectedYears,
  toggleYear,
  sortOrder,
  setSortOrder
}: {
  isOpen: boolean;
  onClose: () => void;
  years: string[];
  selectedYears: string[];
  toggleYear: (y: string) => void;
  sortOrder: SortOrder;
  setSortOrder: (s: SortOrder) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 border-b dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Filters</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Sort Section */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-af-blue dark:text-af-light mb-4">
                <ArrowUpDown className="w-4 h-4" /> Sort By
              </h3>
              <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                <button
                  onClick={() => setSortOrder('latest')}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${sortOrder === 'latest'
                    ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-300'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                    }`}
                >
                  Latest
                </button>
                <button
                  onClick={() => setSortOrder('oldest')}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${sortOrder === 'oldest'
                    ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-300'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                    }`}
                >
                  Oldest
                </button>
              </div>
            </div>

            {/* Years Section */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-af-blue dark:text-af-light mb-4">
                <Calendar className="w-4 h-4" /> Years
              </h3>
              <div className="space-y-3">
                {years.map(year => (
                  <label key={year} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`
                      w-5 h-5 rounded border flex items-center justify-center transition-colors
                      ${selectedYears.includes(year)
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300 dark:border-gray-600 group-hover:border-blue-400'}
                    `}>
                      {selectedYears.includes(year) && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedYears.includes(year)}
                      onChange={() => toggleYear(year)}
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {year}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Placeholder for Tags (as requested) */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-af-blue dark:text-af-light mb-4">
                Tags
              </h3>
              <p className="text-sm text-gray-500 italic">
                Album tags will appear here...
              </p>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// --- Main Page Component ---
// --- Animation Variants ---
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

const GalleryPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('photos');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter States
  const [sortOrder, setSortOrder] = useState<SortOrder>('latest');
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  // --- Derived Data ---
  const years = useMemo(() => {
    const y = new Set(galleryData.map(p => p.date.split('-')[0]));
    return Array.from(y).sort().reverse();
  }, []);

  const filteredPhotos = useMemo(() => {
    let data = [...galleryData];
    if (selectedAlbum) {
      data = data.filter(p => p.album === selectedAlbum);
    }
    if (selectedYears.length > 0) {
      data = data.filter(p => selectedYears.includes(p.date.split('-')[0]));
    }
    data.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });
    return data;
  }, [selectedYears, sortOrder, selectedAlbum]);

  const albums = useMemo(() => {
    const groups: Record<string, Photo[]> = {};
    galleryData.forEach(p => {
      if (!groups[p.album]) groups[p.album] = [];
      groups[p.album].push(p);
    });
    return Object.entries(groups).map(([name, photos]) => ({
      name,
      cover: photos[0],
      count: photos.length,
      dateRange: `${photos[photos.length - 1].date.split('-')[0]} - ${photos[0].date.split('-')[0]}`
    }));
  }, []);

  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const paginatedPhotos = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPhotos.slice(start, start + itemsPerPage);
  }, [filteredPhotos, currentPage]);

  const toggleYear = (y: string) => {
    setSelectedYears(prev =>
      prev.includes(y) ? prev.filter(year => year !== y) : [...prev, y]
    );
    setCurrentPage(1);
  };

  const handleAlbumClick = (albumName: string) => {
    setSelectedAlbum(albumName);
    setViewMode('photos');
    setCurrentPage(1);
  };

  const photosForAlbum = paginatedPhotos.map(p => ({
    src: p.src,
    width: p.width,
    height: p.height,
    title: p.title
  }));

  const slides = filteredPhotos.map(p => ({
    src: p.src,
    title: p.title,
    description: `Taken on ${p.date} • ${p.album}`
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pb-12 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <Silk speed={3} scale={1.5} color="#1a365d" noiseIntensity={1.2} rotation={0} fullScreen={false} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>

        <motion.div className="container mx-auto px-6 relative z-10 text-center pt-20" {...fadeIn}>
          <motion.h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg" {...slideInFromLeft} transition={{ delay: 0.2 }}>
            Our <span className="text-af-gold">Gallery</span>
          </motion.h1>
          <motion.p className="text-lg text-blue-100 max-w-2xl mx-auto drop-shadow" {...slideInFromRight} transition={{ delay: 0.3 }}>
            Explore the vibrant moments, achievements, and activities of Air Force School Hindan.
          </motion.p>
          <motion.div className="w-24 h-1 bg-af-gold mx-auto mt-6" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.4, duration: 0.6 }} />
        </motion.div>
      </section>

      {/* Header/Toolbar */}
      <div className="bg-white dark:bg-gray-900 sticky top-[70px] z-30 shadow-sm border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">

          {/* Title & Breadcrumbs */}
          <div className="flex items-center gap-3">
            {selectedAlbum && (
              <button
                onClick={() => setSelectedAlbum(null)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
              {selectedAlbum || "Our Gallery"}
            </h1>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-0.5 rounded-full text-xs font-bold">
              {selectedAlbum ? filteredPhotos.length : viewMode === 'photos' ? filteredPhotos.length : albums.length} items
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* View Switcher */}
            {!selectedAlbum && (
              <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('photos')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'photos' ? 'bg-white dark:bg-gray-700 shadow text-blue-600' : 'text-gray-500'}`}
                  title="All Photos"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('albums')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'albums' ? 'bg-white dark:bg-gray-700 shadow text-blue-600' : 'text-gray-500'}`}
                  title="Albums"
                >
                  <Folder className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Filter Trigger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-af-gold text-white rounded-lg hover:bg-yellow-600 transition-colors shadow-md font-bold text-sm"
            >
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 min-h-[60vh]">

        {viewMode === 'photos' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Photo Grid */}
            <PhotoAlbum
              layout="rows"
              photos={photosForAlbum}
              onClick={({ index: current }) => setIndex((currentPage - 1) * itemsPerPage + current)}
              targetRowHeight={300}
              componentsProps={{ image: { className: "rounded-lg shadow-sm hover:brightness-110 transition-all duration-300 cursor-zoom-in" } }}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(c => c - 1)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${currentPage === i + 1
                        ? 'bg-blue-600 text-white shadow-lg scale-110'
                        : 'bg-white dark:bg-gray-800 text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(c => c + 1)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          /* Album Grid */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {albums.map((album) => (
              <div
                key={album.name}
                onClick={() => handleAlbumClick(album.name)}
                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={album.cover.src}
                    alt={album.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Grid className="w-3 h-3" /> {album.count}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {album.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {album.dateRange}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </main>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        years={years}
        selectedYears={selectedYears}
        toggleYear={toggleYear}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

    </div>
  );
};

export default GalleryPage;

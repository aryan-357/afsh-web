import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FileText, Calendar, Users, Image, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Silk from '../components/ui/Silk';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  icon: React.ReactNode;
}

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search data - in a real app, this would come from an API
  const mockData: SearchResult[] = [
    {
      id: '1',
      title: 'About Air Force School Hindan',
      description: 'Learn about our rich history, mission, and vision for excellence in education.',
      category: 'About',
      url: '/about',
      icon: <FileText size={20} />
    },
    {
      id: '2',
      title: 'Admission Procedure 2024-25',
      description: 'Complete guide to the admission process, eligibility criteria, and required documents.',
      category: 'Admissions',
      url: '/admissions',
      icon: <BookOpen size={20} />
    },
    {
      id: '3',
      title: 'Academic Curriculum',
      description: 'Explore our comprehensive curriculum designed for holistic development.',
      category: 'Academics',
      url: '/academics',
      icon: <BookOpen size={20} />
    },
    {
      id: '4',
      title: 'School Calendar',
      description: 'Important dates, holidays, and events for the academic year.',
      category: 'Calendar',
      url: '/calendar',
      icon: <Calendar size={20} />
    },
    {
      id: '5',
      title: 'Photo Gallery',
      description: 'Browse through our collection of school events, activities, and campus life.',
      category: 'Gallery',
      url: '/gallery',
      icon: <Image size={20} />
    },
    {
      id: '6',
      title: 'Alumni Network',
      description: 'Connect with our distinguished alumni and stay updated with reunions.',
      category: 'Alumni',
      url: '/alumni',
      icon: <Users size={20} />
    },
    {
      id: '7',
      title: 'Student Life Activities',
      description: 'Discover the vibrant student life with clubs, sports, and extracurricular activities.',
      category: 'Student Life',
      url: '/student-life',
      icon: <Users size={20} />
    },
    {
      id: '8',
      title: 'Contact Information',
      description: 'Get in touch with us for inquiries, visits, and admissions.',
      category: 'Contact',
      url: '/contact',
      icon: <FileText size={20} />
    }
  ];

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => {
        const filteredResults = mockData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
        setIsSearching(false);
      }, 500);
    }
  }, [query]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'About': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Admissions': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Academics': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Calendar': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Gallery': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      'Alumni': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'Student Life': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Contact': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Search size={32} className="text-white" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Search Results
              </h1>
            </div>
            <p className="text-xl text-white">
              {query && `Showing results for "${query}"`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-32">
        {isSearching ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-af-blue border-t-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Searching...</p>
          </motion.div>
        ) : query && searchResults.length > 0 ? (
          <motion.div {...fadeIn}>
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
              </p>
            </div>
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700"
                >
                  <Link to={result.url} className="block group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-af-blue dark:text-af-light group-hover:bg-af-blue group-hover:text-white transition-colors">
                        {result.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                            {result.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(result.category)}`}>
                            {result.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2 text-af-blue dark:text-af-light text-sm font-medium">
                          <span>Visit Page</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : query ? (
          <motion.div {...fadeIn} className="text-center py-20">
            <div className="max-w-md mx-auto">
              <Search size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any results for "{query}". Try searching with different keywords.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-af-blue hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div {...fadeIn} className="text-center py-20">
            <Search size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Enter a search term
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Use the search bar in the navigation to find what you're looking for.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default SearchPage;

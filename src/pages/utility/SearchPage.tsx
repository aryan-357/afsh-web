import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FileText, Calendar, Users, Image, BookOpen, ArrowLeft, Building, Trophy, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Silk from '../../components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp } from '../../utils/animations';


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
      title: 'School Facilities',
      description: 'Explore our world-class infrastructure including smart classrooms, labs, sports complex, and more.',
      category: 'Facilities',
      url: '/facilities',
      icon: <Building size={20} />
    },
    {
      id: '9',
      title: 'Mandatory Disclosure',
      description: 'Access all mandatory documents and compliance information as per educational board guidelines.',
      category: 'Compliance',
      url: '/mandatory-disclosure',
      icon: <Shield size={20} />
    },
    {
      id: '10',
      title: 'Contact Information',
      description: 'Get in touch with us for inquiries, visits, and admissions.',
      category: 'Contact',
      url: '/contact',
      icon: <FileText size={20} />
    },
    {
      id: '11',
      title: 'Development Team',
      description: 'Meet the talented developers who created this modern school website - Anagh Singh and Aryan Rajput.',
      category: 'Development',
      url: '/development',
      icon: <Code size={20} />
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


  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'About': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Admissions': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Academics': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Calendar': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Gallery': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      'Alumni': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'Student Life': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Facilities': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      'Achievements': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      'Compliance': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Contact': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      'Development': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <PageAnimate className="min-h-screen bg-gray-50 dark:bg-gray-950">
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
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                variants={fadeInUp}
                custom={1}
              >
                <Link
                  to="/"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to Home
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              variants={fadeInUp}
              custom={2}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Search size={32} className="text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Search Results
              </h1>
            </motion.div>
            <motion.p
              className="text-xl text-white"
              variants={fadeInUp}
              custom={3}
            >
              {query && `Showing results for "${query}"`}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="container mx-auto px-4 py-32"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {isSearching ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block rounded-full h-12 w-12 border-4 border-af-blue border-t-transparent"
            ></motion.div>
            <motion.p
              className="mt-4 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              Searching...
            </motion.p>
          </motion.div>
        ) : searchResults.length > 0 ? (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
              </p>
            </div>
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  variants={fadeInUp}
                  custom={index + 1}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-af-blue/5 hover:to-af-light/5 group"
                >
                  <Link to={result.url} className="block group">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-af-blue dark:text-af-light group-hover:bg-af-blue group-hover:text-white transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        {result.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                            {result.title}
                          </h3>
                          <motion.span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(result.category)}`}
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {result.category}
                          </motion.span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {result.description}
                        </p>
                        <motion.div
                          className="flex items-center gap-2 text-af-blue dark:text-af-light text-sm font-medium"
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <span>Visit Page</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : query ? (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center py-20"
          >
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
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <Search size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Enter a search term
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Use the search bar in the navigation to find what you're looking for.
            </p>
          </motion.div>
        )}
      </motion.section>
    </PageAnimate >
  );
};

export default SearchPage;

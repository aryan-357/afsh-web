import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParallaxCarousel from '../../components/sections/parallax-carousel/ParallaxCarousel';
import NoticeBoard from '../../components/sections/NoticeBoard';
import LatestNews from '../../components/sections/LatestNews';
import TopperSection from '../../components/sections/TopperSection';
import PageAnimate from '../../components/ui/PageAnimate';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const HomePage: React.FC = () => {
    return (
        <PageAnimate className="overflow-hidden">
            <ParallaxCarousel />

            {/* Visual News Grid Section */}
            <motion.section
                id="news"
                {...fadeIn}
            >
                <LatestNews />
            </motion.section>

            <motion.section
                id="admission"
                {...fadeIn}
                transition={{ delay: 0.2 }}
            >
                <NoticeBoard />
            </motion.section>

            <motion.section
                {...fadeIn}
                transition={{ delay: 0.3 }}
            >
                <TopperSection />
            </motion.section>

            {/* About/Vision Snippet Section */}
            <motion.section
                id="academics"
                className="bg-white dark:bg-gray-900 py-16 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
                {...fadeIn}
            >
                <div className="container mx-auto px-4 text-center">
                    <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Philosophy</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-10 max-w-3xl mx-auto leading-tight">
                        Fostering Excellence, Integrity, and Service
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        {[
                            { title: 'Academic Excellence', icon: '🎓', desc: 'Rigorous curriculum designed to challenge and inspire students to reach their full potential.' },
                            { title: 'Character Building', icon: '⭐', desc: 'Instilling core values of discipline, honesty, and social responsibility.' },
                            { title: 'Physical Fitness', icon: '🏆', desc: 'Comprehensive sports programs to build a healthy body and a competitive spirit.' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl transition duration-500 border border-gray-100 dark:border-gray-700 group shadow-lg"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition duration-500 inline-block">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Gallery Preview */}
            <motion.section
                id="student-life"
                className="py-24 bg-gray-950 text-white relative"
                {...fadeIn}
            >
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-af-blue/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-af-light font-bold tracking-widest text-xs uppercase mb-2 block">Visual Tour</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold">Campus Life</h2>
                            <p className="text-gray-500 mt-4 max-w-xl text-lg">Experience the vibrant atmosphere and state-of-the-art facilities at Air Force School Hindan.</p>
                        </div>
                        <Link
                            to="/gallery"
                            className="hidden md:flex items-center gap-2 bg-white text-black px-8 py-4 hover:bg-af-blue hover:text-white transition duration-300 uppercase text-xs font-bold tracking-widest rounded-full shadow-xl"
                        >
                            Explore Gallery
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 0.98 }}
                                className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-2xl"
                            >
                                <img
                                    src={`https://picsum.photos/seed/campus${i}/600/800`}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    alt={`Campus life ${i}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-sm font-medium tracking-wide">Campus Event {i}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        to="/gallery"
                        className="md:hidden mt-8 w-full bg-white text-black px-8 py-4 hover:bg-af-blue hover:text-white transition duration-300 uppercase text-xs font-bold tracking-widest rounded-full text-center block"
                    >
                        Explore Gallery
                    </Link>
                </div>
            </motion.section>
        </PageAnimate>
    );
};

export default HomePage;

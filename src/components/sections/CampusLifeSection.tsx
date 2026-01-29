import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CampusLifeSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    linkText?: string;
    linkUrl?: string;
    images?: string[];
}

const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({
    title = 'Campus Life',
    subtitle = 'Visual Tour',
    description = 'Experience the vibrant atmosphere and state-of-the-art facilities at Air Force School Hindan.',
    linkText = 'Explore Gallery',
    linkUrl = '/gallery',
    images
}) => {
    const displayImages = images || [1, 2, 3, 4].map(i => `https://picsum.photos/seed/campus${i}/600/800`);

    return (
        <motion.section
            id="student-life"
            className="py-24 bg-gray-950 text-white relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-af-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-af-light font-bold tracking-widest text-xs uppercase mb-2 block">{subtitle}</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">{title}</h2>
                        <p className="text-gray-500 mt-4 max-w-xl text-lg">{description}</p>
                    </div>
                    <Link
                        to={linkUrl}
                        className="hidden md:flex items-center gap-2 bg-white text-black px-8 py-4 hover:bg-af-blue hover:text-white transition duration-300 uppercase text-xs font-bold tracking-widest rounded-full shadow-xl"
                    >
                        {linkText}
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {displayImages.map((src, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 0.98 }}
                            className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-2xl"
                        >
                            <img
                                src={src}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                alt={`Campus life ${i}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <p className="text-sm font-medium tracking-wide">Campus Event {i + 1}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Link
                    to={linkUrl}
                    className="md:hidden mt-8 w-full bg-white text-black px-8 py-4 hover:bg-af-blue hover:text-white transition duration-300 uppercase text-xs font-bold tracking-widest rounded-full text-center block"
                >
                    {linkText}
                </Link>
            </div>
        </motion.section>
    );
};

export default CampusLifeSection;

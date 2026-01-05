import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Building, 
    BookOpen, 
    Dumbbell, 
    Beaker, 
    Computer, 
    Music, 
    Palette, 
    Trophy,
    Users,
    Wifi,
    Shield,
    Bus,
    Award
} from 'lucide-react';
import Silk from '../components/ui/Silk';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const FacilitiesPage: React.FC = () => {
    const facilities = [
        {
            icon: Building,
            title: "Smart Classrooms",
            description: "Modern, technology-enabled classrooms with interactive whiteboards and digital learning tools.",
            features: ["Interactive Boards", "Projectors", "Audio Systems", "High-Speed WiFi", "Digital Learning Platforms"],
            highlight: "50+ smart classrooms equipped with latest educational technology"
        },
        {
            icon: BookOpen,
            title: "Library & Resource Center",
            description: "Well-stocked library with thousands of books, journals, and digital resources for research and learning.",
            features: ["10,000+ Books", "Digital Library", "Reading Rooms", "Research Facilities", "E-Resource Access"],
            highlight: "Digital catalog with 24/7 online access to educational resources"
        },
        {
            icon: Beaker,
            title: "Science Laboratories",
            description: "Fully equipped physics, chemistry, and biology labs for hands-on experimental learning.",
            features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab", "Safety Equipment"],
            highlight: "Advanced lab equipment following CBSE safety standards"
        },
        {
            icon: Dumbbell,
            title: "Sports Complex",
            description: "Comprehensive sports facilities including grounds, courts, and equipment for various sports.",
            features: ["Football Ground", "Basketball Courts", "Volleyball Courts", "Athletics Track", "Gymnasium"],
            highlight: "Professional coaching for 15+ sports disciplines"
        },
        {
            icon: Computer,
            title: "Computer Labs",
            description: "State-of-the-art computer labs with latest hardware and software for digital literacy.",
            features: ["100+ Systems", "High-Speed Internet", "Latest Software", "Technical Support", "Programming Labs"],
            highlight: "1:1 student-computer ratio with industry-standard software"
        },
        {
            icon: Music,
            title: "Performing Arts",
            description: "Dedicated spaces for music, dance, and drama to nurture artistic talents.",
            features: ["Music Room", "Dance Studio", "Auditorium", "Practice Rooms", "Sound Equipment"],
            highlight: "300-seat auditorium with professional acoustics"
        },
        {
            icon: Palette,
            title: "Art & Craft Studios",
            description: "Creative spaces for visual arts, crafts, and design activities.",
            features: ["Art Studio", "Craft Room", "Exhibition Area", "Storage Facilities", "Pottery Wheel"],
            highlight: "Regular art exhibitions and inter-school competitions"
        },
        {
            icon: Trophy,
            title: "Indoor Sports",
            description: "Indoor facilities for table tennis, chess, carrom, and other indoor games.",
            features: ["Table Tennis", "Chess Room", "Carrom", "Badminton Court", "Yoga Studio"],
            highlight: "Climate-controlled indoor sports complex"
        }
    ];

    const amenities = [
        { icon: Wifi, title: "High-Speed WiFi Campus", description: "Seamless internet connectivity throughout the campus with 1Gbps backbone", detail: "Covering all classrooms, labs, library, and common areas" },
        { icon: Shield, title: "24/7 Security", description: "CCTV surveillance and trained security personnel", detail: "150+ CCTV cameras with facial recognition and emergency response team" },
        { icon: Bus, title: "Transport Facility", description: "Safe and reliable bus services covering major routes", detail: "15 bus routes covering 25+ km radius with GPS tracking" },
        { icon: Users, title: "Counseling Center", description: "Professional counseling and guidance services", detail: "Dedicated counselors for academic and personal development" },
        { icon: Award, title: "Medical Facility", description: "Well-equipped infirmary with qualified medical staff", detail: "Full-time nurse and monthly doctor visits with emergency response" },
        { icon: Building, title: "Cafeteria", description: "Hygienic and nutritious food options for students", detail: "ISO certified kitchen with diverse menu options" }
    ];

    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <motion.section 
                className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden -mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
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

                <div className="container mx-auto px-4 relative z-10 pt-16">
                    <motion.div 
                        className="text-center max-w-4xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg">Our Infrastructure</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                            World-Class <span className="text-af-gold">Facilities</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium drop-shadow-lg leading-relaxed">
                            Providing an exceptional learning environment with state-of-the-art infrastructure 
                            designed to nurture young minds and foster holistic development.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Facilities Grid */}
            <motion.section 
                className="py-20 bg-gray-50 dark:bg-gray-800"
                {...fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Academic Excellence</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            Learning Infrastructure
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Modern facilities designed to provide the best possible learning experience for our students.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                            >
                                <div className="w-16 h-16 bg-af-blue/10 dark:bg-af-light/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-af-blue dark:group-hover:bg-af-light transition-colors duration-300">
                                    <facility.icon className="w-8 h-8 text-af-blue dark:text-af-light group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors duration-300">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                    {facility.description}
                                </p>
                                <ul className="space-y-2">
                                    {facility.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                            <div className="w-1.5 h-1.5 bg-af-blue dark:bg-af-light rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-xs font-semibold text-af-blue dark:text-af-light">
                                        {facility.highlight}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Campus Amenities */}
            <motion.section 
                className="py-20 bg-white dark:bg-gray-900"
                {...fadeIn}
                transition={{ delay: 0.2 }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Student Life</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            Campus Amenities
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Additional facilities and services to ensure a comfortable and enriching campus experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-af-blue/5 to-af-light/5 dark:from-af-blue/10 dark:to-af-light/10 border border-af-blue/20 dark:border-af-light/20 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-20 h-20 bg-af-blue dark:bg-af-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <amenity.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                    {amenity.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                                    {amenity.description}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                                    {amenity.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                className="py-20 bg-gradient-to-r from-af-blue to-af-light text-white relative overflow-hidden"
                {...fadeIn}
                transition={{ delay: 0.3 }}
            >
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Visit Our Campus
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Experience our world-class facilities firsthand. Schedule a campus tour to see 
                            how we create the perfect environment for learning and growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-af-blue font-bold uppercase tracking-wider text-sm rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                            >
                                Schedule a Visit
                            </Link>
                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white hover:text-af-blue transition-colors duration-300"
                            >
                                Virtual Tour
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default FacilitiesPage;

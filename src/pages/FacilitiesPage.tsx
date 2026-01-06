import React, { useState } from 'react';
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
    Award,
    Camera,
    Image as ImageIcon,
    Maximize2,
    ArrowLeft,
    ArrowRight,
    X
} from 'lucide-react';
import Silk from '../components/ui/Silk';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const slideInFromLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const slideInFromRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const FacilitiesPage: React.FC = () => {
    const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const facilities = [
        {
            icon: Building,
            title: "Smart Classrooms",
            description: "Modern, technology-enabled classrooms with interactive whiteboards and digital learning tools.",
            features: ["Interactive Boards", "Projectors", "Audio Systems", "High-Speed WiFi", "Digital Learning Platforms"],
            highlight: "50+ smart classrooms equipped with latest educational technology",
            images: [
                "https://picsum.photos/seed/classroom-modern/800/600",
                "https://picsum.photos/seed/smartboard-education/800/600",
                "https://picsum.photos/seed/students-learning/800/600",
                "https://picsum.photos/seed/digital-classroom/800/600"
            ]
        },
        {
            icon: BookOpen,
            title: "Library & Resource Center",
            description: "Well-stocked library with thousands of books, journals, and digital resources for research and learning.",
            features: ["10,000+ Books", "Digital Library", "Reading Rooms", "Research Facilities", "E-Resource Access"],
            highlight: "Digital catalog with 24/7 online access to educational resources",
            images: [
                "https://picsum.photos/seed/school-library/800/600",
                "https://picsum.photos/seed/students-studying/800/600",
                "https://picsum.photos/seed/bookshelves-education/800/600",
                "https://picsum.photos/seed/reading-room/800/600"
            ]
        },
        {
            icon: Beaker,
            title: "Science Laboratories",
            description: "Fully equipped physics, chemistry, and biology labs for hands-on experimental learning.",
            features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab", "Safety Equipment"],
            highlight: "Advanced lab equipment following CBSE safety standards",
            images: [
                "https://picsum.photos/seed/science-laboratory/800/600",
                "https://picsum.photos/seed/chemistry-experiment/800/600",
                "https://picsum.photos/seed/biology-microscope/800/600",
                "https://picsum.photos/seed/physics-equipment/800/600"
            ]
        },
        {
            icon: Dumbbell,
            title: "Sports Complex",
            description: "Comprehensive sports facilities including grounds, courts, and equipment for various sports.",
            features: ["Football Ground", "Basketball Courts", "Volleyball Courts", "Athletics Track", "Gymnasium"],
            highlight: "Professional coaching for 15+ sports disciplines",
            images: [
                "https://picsum.photos/seed/school-football-field/800/600",
                "https://picsum.photos/seed/basketball-court-school/800/600",
                "https://picsum.photos/seed/athletics-track/800/600",
                "https://picsum.photos/seed/school-gymnasium/800/600"
            ]
        },
        {
            icon: Computer,
            title: "Computer Labs",
            description: "State-of-the-art computer labs with latest hardware and software for digital literacy.",
            features: ["100+ Systems", "High-Speed Internet", "Latest Software", "Technical Support", "Programming Labs"],
            highlight: "1:1 student-computer ratio with industry-standard software",
            images: [
                "https://picsum.photos/seed/computer-lab-school/800/600",
                "https://picsum.photos/seed/students-computers/800/600",
                "https://picsum.photos/seed/technology-education/800/600",
                "https://picsum.photos/seed/programming-class/800/600"
            ]
        },
        {
            icon: Music,
            title: "Performing Arts",
            description: "Dedicated spaces for music, dance, and drama to nurture artistic talents.",
            features: ["Music Room", "Dance Studio", "Auditorium", "Practice Rooms", "Sound Equipment"],
            highlight: "300-seat auditorium with professional acoustics",
            images: [
                "https://picsum.photos/seed/music-room-school/800/600",
                "https://picsum.photos/seed/dance-studio-education/800/600",
                "https://picsum.photos/seed/school-auditorium/800/600",
                "https://picsum.photos/seed/musical-instruments/800/600"
            ]
        },
        {
            icon: Palette,
            title: "Art & Craft Studios",
            description: "Creative spaces for visual arts, crafts, and design activities.",
            features: ["Art Studio", "Craft Room", "Exhibition Area", "Storage Facilities", "Pottery Wheel"],
            highlight: "Regular art exhibitions and inter-school competitions",
            images: [
                "https://picsum.photos/seed/art-classroom/800/600",
                "https://picsum.photos/seed/student-painting/800/600",
                "https://picsum.photos/seed/art-exhibition/800/600",
                "https://picsum.photos/seed/craft-room-school/800/600"
            ]
        },
        {
            icon: Trophy,
            title: "Indoor Sports",
            description: "Indoor facilities for table tennis, chess, carrom, and other indoor games.",
            features: ["Table Tennis", "Chess Room", "Carrom", "Badminton Court", "Yoga Studio"],
            highlight: "Climate-controlled indoor sports complex",
            images: [
                "https://picsum.photos/seed/table-tennis-school/800/600",
                "https://picsum.photos/seed/chess-tournament/800/600",
                "https://picsum.photos/seed/badminton-court-indoor/800/600",
                "https://picsum.photos/seed/yoga-class-school/800/600"
            ]
        }
    ];

    const amenities = [
        { icon: Wifi, title: "High-Speed WiFi Campus", description: "Seamless internet connectivity throughout the campus with 1Gbps backbone", detail: "Covering all classrooms, labs, library, and common areas", image: "https://picsum.photos/seed/school-wifi-network/400/300" },
        { icon: Shield, title: "24/7 Security", description: "CCTV surveillance and trained security personnel", detail: "150+ CCTV cameras with facial recognition and emergency response team", image: "https://picsum.photos/seed/school-security-system/400/300" },
        { icon: Bus, title: "Transport Facility", description: "Safe and reliable bus services covering major routes", detail: "15 bus routes covering 25+ km radius with GPS tracking", image: "https://picsum.photos/seed/school-bus-transport/400/300" },
        { icon: Users, title: "Counseling Center", description: "Professional counseling and guidance services", detail: "Dedicated counselors for academic and personal development", image: "https://picsum.photos/seed/student-counseling/400/300" },
        { icon: Award, title: "Medical Facility", description: "Well-equipped infirmary with qualified medical staff", detail: "Full-time nurse and monthly doctor visits with emergency response", image: "https://picsum.photos/seed/school-medical-room/400/300" },
        { icon: Building, title: "Cafeteria", description: "Hygienic and nutritious food options for students", detail: "ISO certified kitchen with diverse menu options", image: "https://picsum.photos/seed/school-cafeteria-food/400/300" }
    ];

    const openGallery = (facilityTitle: string) => {
        setSelectedGallery(facilityTitle);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedGallery(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        const facility = facilities.find(f => f.title === selectedGallery);
        if (facility) {
            setCurrentImageIndex((prev) => (prev + 1) % facility.images.length);
        }
    };

    const prevImage = () => {
        const facility = facilities.find(f => f.title === selectedGallery);
        if (facility) {
            setCurrentImageIndex((prev) => (prev - 1 + facility.images.length) % facility.images.length);
        }
    };

    const currentFacility = facilities.find(f => f.title === selectedGallery);

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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                            >
                                {/* Image Gallery */}
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={facility.images[0]} 
                                        alt={facility.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Gallery Controls */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <button
                                            onClick={() => openGallery(facility.title)}
                                            className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
                                        >
                                            <Camera className="w-4 h-4 text-gray-900 dark:text-white" />
                                        </button>
                                        <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                                            <ImageIcon className="w-4 h-4 text-gray-900 dark:text-white" />
                                        </button>
                                    </div>
                                    
                                    {/* Image Counter */}
                                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                        {facility.images.length} Photos
                                    </div>
                                    
                                    {/* Facility Icon */}
                                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-af-blue rounded-2xl flex items-center justify-center shadow-lg">
                                        <facility.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors duration-300">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {facility.description}
                                    </p>
                                    
                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {facility.features.slice(0, 4).map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <div className="w-2 h-2 bg-af-blue dark:bg-af-light rounded-full mr-2"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Highlight */}
                                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-sm font-semibold text-af-blue dark:text-af-light">
                                            {facility.highlight}
                                        </p>
                                    </div>
                                    
                                    {/* View Gallery Button */}
                                    <button
                                        onClick={() => openGallery(facility.title)}
                                        className="mt-6 w-full py-3 bg-af-blue dark:bg-af-light text-white rounded-xl font-semibold hover:bg-af-blue/90 dark:hover:bg-af-light/90 transition-colors duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Maximize2 className="w-4 h-4" />
                                        View Gallery
                                    </button>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={amenity.image} 
                                        alt={amenity.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    
                                    {/* Icon Overlay */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                        <amenity.icon className="w-6 h-6 text-af-blue dark:text-af-light" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors duration-300">
                                        {amenity.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                                        {amenity.description}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                                        {amenity.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Image Gallery Modal */}
            {selectedGallery && currentFacility && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeGallery}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeGallery}
                            className="absolute -top-12 right-0 p-2 text-white hover:text-af-gold transition-colors duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Main Image */}
                        <div className="relative">
                            <img 
                                src={currentFacility.images[currentImageIndex]} 
                                alt={currentFacility.title}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
                            />
                            
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 dark:bg-gray-800/20 rounded-full backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors duration-300"
                            >
                                <ArrowLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 dark:bg-gray-800/20 rounded-full backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors duration-300"
                            >
                                <ArrowRight className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Image Counter and Title */}
                        <div className="mt-4 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{currentFacility.title}</h3>
                            <p className="text-gray-300">
                                {currentImageIndex + 1} / {currentFacility.images.length}
                            </p>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                            {currentFacility.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                        index === currentImageIndex 
                                            ? 'border-af-gold scale-110' 
                                            : 'border-transparent hover:border-white/50'
                                    }`}
                                >
                                    <img 
                                        src={image} 
                                        alt={`${currentFacility.title} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}

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

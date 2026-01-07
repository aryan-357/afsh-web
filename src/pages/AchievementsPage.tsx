import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Trophy, 
    Award, 
    Star, 
    Target, 
    Medal, 
    Flag,
    Users,
    BookOpen,
    Music,
    Palette,
    Dumbbell,
    GraduationCap
} from 'lucide-react';
import Silk from '../components/ui/Silk';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const AchievementsPage: React.FC = () => {
    const achievementCategories = [
        {
            icon: Trophy,
            title: "Academic Excellence",
            description: "Outstanding performance in academics and board examinations",
            achievements: [
                { title: "CBSE Board Toppers", description: "Students scoring 95%+ in Class X & XII", count: "15+" },
                { title: "District Rank Holders", description: "Top 10 positions in district", count: "8" },
                { title: "Subject Excellence", description: "100% results in core subjects", count: "12" },
                { title: "Scholarship Winners", description: "National and state level scholarships", count: "25+" }
            ],
            highlight: "Consistent 95%+ board results for 5 consecutive years"
        },
        {
            icon: Dumbbell,
            title: "Sports Achievements",
            description: "Excellence in various sports at regional and national levels",
            achievements: [
                { title: "National Champions", description: "Athletics and basketball", count: "3" },
                { title: "State Level Winners", description: "Multiple sports disciplines", count: "12+" },
                { title: "Inter-School Champions", description: "Annual sports meet victories", count: "8" },
                { title: "Individual Medals", description: "Gold, silver, bronze winners", count: "50+" }
            ],
            highlight: "150+ sports medals in the last academic year"
        },
        {
            icon: Music,
            title: "Cultural Excellence",
            description: "Outstanding performances in cultural activities and arts",
            achievements: [
                { title: "National Dance Competition", description: "Classical and folk dance", count: "2" },
                { title: "Music Excellence", description: "Vocal and instrumental", count: "6" },
                { title: "Drama Winners", description: "State level drama competitions", count: "4" },
                { title: "Art Exhibition", description: "Best school award", count: "3" }
            ],
            highlight: "Cultural team selected for national youth festival"
        },
        {
            icon: Users,
            title: "Social Impact",
            description: "Contributions to community service and social initiatives",
            achievements: [
                { title: "Community Service", description: "1000+ hours of service", count: "200+" },
                { title: "Environmental Projects", description: "Green school initiatives", count: "5" },
                { title: "Charity Drives", description: "Fundraising for social causes", count: "8" },
                { title: "Awareness Campaigns", description: "Social impact programs", count: "12" }
            ],
            highlight: "Awarded for excellence in community service"
        },
        {
            icon: BookOpen,
            title: "Innovation & Technology",
            description: "Excellence in science fairs, robotics, and technology",
            achievements: [
                { title: "Science Fair Winners", description: "National level recognition", count: "6" },
                { title: "Robotics Competition", description: "Regional champions", count: "2" },
                { title: "Innovation Projects", description: "Student innovations", count: "15+" },
                { title: "Tech Symposium", description: "Best presentation awards", count: "4" }
            ],
            highlight: "Innovation lab established with industry partnerships"
        },
        {
            icon: Star,
            title: "School Recognition",
            description: "Prestigious awards and recognitions for the institution",
            achievements: [
                { title: "Best School Award", description: "District level recognition", count: "3" },
                { title: "Excellence in Education", description: "State education department", count: "2" },
                { title: "Infrastructure Excellence", description: "CBSE recognition", count: "1" },
                { title: "Digital School Award", description: "Technology integration", count: "1" }
            ],
            highlight: "Ranked among top 10 schools in the district"
        }
    ];

    const recentAchievements = [
        {
            date: "March 2024",
            title: "National Science Exhibition Winner",
            description: "Our students secured first place in the National Science Exhibition with their innovative project on renewable energy.",
            category: "Academic",
            icon: Trophy
        },
        {
            date: "February 2024",
            title: "State Basketball Champions",
            description: "Girls' basketball team won the state championship after defeating 12 teams in the tournament.",
            category: "Sports",
            icon: Dumbbell
        },
        {
            date: "January 2024",
            title: "Cultural Festival Excellence",
            description: "School cultural team won overall championship at the Inter-School Cultural Festival 2024.",
            category: "Cultural",
            icon: Music
        },
        {
            date: "December 2023",
            title: "Community Service Award",
            description: "Recognized for outstanding contribution to community service and social awareness programs.",
            category: "Social",
            icon: Users
        }
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
                        <span className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg">Excellence & Recognition</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                            Our <span className="text-af-gold">Achievements</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium drop-shadow-lg leading-relaxed">
                            Celebrating excellence in academics, sports, cultural activities, and community service 
                            that makes Air Force School Hindan proud.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Recent Achievements */}
            <motion.section 
                className="py-20 bg-gray-50 dark:bg-gray-800"
                {...fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Recent Wins</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            Latest Achievements
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Our most recent accomplishments that showcase the excellence of our students and faculty.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {recentAchievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-af-blue/10 dark:bg-af-light/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <achievement.icon className="w-6 h-6 text-af-blue dark:text-af-light" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-semibold text-af-blue dark:text-af-light uppercase tracking-wider">
                                                {achievement.category}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {achievement.date}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Achievement Categories */}
            <motion.section 
                className="py-20 bg-white dark:bg-gray-900"
                {...fadeIn}
                transition={{ delay: 0.2 }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Areas of Excellence</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            Achievement Categories
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Comprehensive excellence across all domains of education and development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievementCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                            >
                                <div className="w-16 h-16 bg-af-blue/10 dark:bg-af-light/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-af-blue dark:group-hover:bg-af-light transition-colors duration-300">
                                    <category.icon className="w-8 h-8 text-af-blue dark:text-af-light group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors duration-300">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="space-y-3">
                                    {category.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {achievement.title}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                            <span className="text-lg font-bold text-af-blue dark:text-af-light">
                                                {achievement.count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-xs font-semibold text-af-blue dark:text-af-light">
                                        {category.highlight}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Statistics Section */}
            <motion.section 
                className="py-20 bg-gradient-to-r from-af-blue to-af-light text-white"
                {...fadeIn}
                transition={{ delay: 0.3 }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            Achievement Statistics
                        </h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Numbers that reflect our commitment to excellence and continuous improvement.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "200+", label: "Awards Won", description: "Last 5 years" },
                            { number: "50+", label: "National Participants", description: "Various competitions" },
                            { number: "95%", label: "Success Rate", description: "In competitions" },
                            { number: "15+", label: "Different Categories", description: "Of excellence" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {stat.label}
                                </h3>
                                <p className="text-blue-100 text-sm">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                className="py-20 bg-gray-50 dark:bg-gray-800"
                {...fadeIn}
                transition={{ delay: 0.4 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-af-blue dark:bg-af-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Trophy className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Join Our Legacy of Excellence
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            Be part of a institution that celebrates achievement and fosters excellence in every field. 
                            Our students continue to make us proud with their accomplishments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/admissions"
                                className="inline-flex items-center justify-center px-8 py-4 bg-af-blue text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-xl"
                            >
                                Join Us
                            </Link>
                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-900 text-af-blue dark:text-af-light font-bold uppercase tracking-wider text-sm rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 shadow-xl"
                            >
                                View Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default AchievementsPage;

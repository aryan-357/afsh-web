import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    FileText, 
    Download, 
    Shield, 
    Scale, 
    Users, 
    BookOpen,
    Award,
    Building
} from 'lucide-react';
import Silk from '../../components/ui/Silk';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const MandatoryDisclosurePage: React.FC = () => {
    const disclosureCategories = [
        {
            icon: Building,
            title: "School Information",
            description: "Basic information about the school establishment and infrastructure",
            documents: [
                { name: "School Recognition Certificate", type: "PDF", size: "2.3 MB", year: "2023" },
                { name: "Affiliation Details", type: "PDF", size: "1.8 MB", year: "2023" },
                { name: "School Infrastructure Report", type: "PDF", size: "3.1 MB", year: "2024" },
                { name: "Land & Building Details", type: "PDF", size: "2.7 MB", year: "2023" },
                { name: "Trust Registration Certificate", type: "PDF", size: "1.5 MB", year: "2023" }
            ],
            lastUpdated: "March 2024"
        },
        {
            icon: Users,
            title: "Management Committee",
            description: "Details of school management committee and governing body",
            documents: [
                { name: "Managing Committee List", type: "PDF", size: "1.2 MB", year: "2024" },
                { name: "Committee Meeting Minutes", type: "PDF", size: "2.5 MB", year: "2024" },
                { name: "Management Structure", type: "PDF", size: "1.5 MB", year: "2023" },
                { name: "Roles & Responsibilities", type: "PDF", size: "1.8 MB", year: "2023" }
            ],
            lastUpdated: "February 2024"
        },
        {
            icon: BookOpen,
            title: "Academic Information",
            description: "Curriculum details and academic performance reports",
            documents: [
                { name: "Academic Calendar", type: "PDF", size: "1.8 MB", year: "2024" },
                { name: "Syllabus & Curriculum", type: "PDF", size: "4.2 MB", year: "2024" },
                { name: "Examination Results", type: "PDF", size: "2.9 MB", year: "2023" },
                { name: "Academic Performance Report", type: "PDF", size: "3.5 MB", year: "2023" },
                { name: "NCERT Curriculum Details", type: "PDF", size: "2.1 MB", year: "2024" }
            ],
            lastUpdated: "April 2024"
        },
        {
            icon: Shield,
            title: "Compliance & Certificates",
            description: "Regulatory compliance and mandatory certificates",
            documents: [
                { name: "Fire Safety Certificate", type: "PDF", size: "1.3 MB", year: "2024" },
                { name: "Building Safety Certificate", type: "PDF", size: "1.7 MB", year: "2024" },
                { name: "Water & Sanitation Report", type: "PDF", size: "2.1 MB", year: "2023" },
                { name: "Environmental Compliance", type: "PDF", size: "1.9 MB", year: "2023" },
                { name: "No Objection Certificate", type: "PDF", size: "1.4 MB", year: "2023" }
            ],
            lastUpdated: "January 2024"
        },
        {
            icon: Scale,
            title: "Legal & Financial",
            description: "Financial transparency and legal disclosures",
            documents: [
                { name: "Fee Structure Details", type: "PDF", size: "1.4 MB", year: "2024" },
                { name: "Audited Financial Statements", type: "PDF", size: "3.8 MB", year: "2023" },
                { name: "Budget & Expenditure Report", type: "PDF", size: "2.6 MB", year: "2023" },
                { name: "Income Tax Returns", type: "PDF", size: "2.2 MB", year: "2023" },
                { name: "GST Registration Details", type: "PDF", size: "1.1 MB", year: "2023" }
            ],
            lastUpdated: "March 2024"
        },
        {
            icon: Award,
            title: "Achievements & Recognition",
            description: "School achievements and recognition details",
            documents: [
                { name: "Awards & Certificates", type: "PDF", size: "3.1 MB", year: "2024" },
                { name: "Sports Achievements", type: "PDF", size: "2.4 MB", year: "2023" },
                { name: "Academic Excellence Awards", type: "PDF", size: "1.8 MB", year: "2023" },
                { name: "CBSE Board Results", type: "PDF", size: "2.7 MB", year: "2023" }
            ],
            lastUpdated: "February 2024"
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
                        <span className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg">Transparency & Compliance</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                            Mandatory <span className="text-af-gold">Disclosure</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium drop-shadow-lg leading-relaxed">
                            Complete transparency in school operations as per regulatory requirements 
                            and educational board guidelines.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Introduction Section */}
            <motion.section 
                className="py-20 bg-gray-50 dark:bg-gray-800"
                {...fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Commitment to Transparency
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            Air Force School Hindan is committed to maintaining complete transparency in all aspects 
                            of school operations. As per the guidelines from CBSE and other regulatory bodies, 
                            we provide comprehensive information about our infrastructure, academic performance, 
                            financial management, and compliance with various educational norms.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Disclosure Categories */}
            <motion.section 
                className="py-20 bg-white dark:bg-gray-900"
                {...fadeIn}
                transition={{ delay: 0.2 }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Information Categories</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            Disclosure Documents
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Access all mandatory disclosure documents organized by category for easy reference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {disclosureCategories.map((category, index) => (
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
                                    {category.documents.map((doc, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-4 h-4 text-af-blue dark:text-af-light" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{doc.name}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{doc.type} • {doc.size} • {doc.year}</p>
                                                </div>
                                            </div>
                                            <button className="p-2 text-af-blue dark:text-af-light hover:bg-af-blue/10 dark:hover:bg-af-light/10 rounded-lg transition-colors duration-200">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Last Updated: <span className="font-medium">{category.lastUpdated}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Statistics Section */}
            <motion.section 
                className="py-20 bg-gray-50 dark:bg-gray-800"
                {...fadeIn}
                transition={{ delay: 0.4 }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">By The Numbers</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                            School at a Glance
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Key metrics and statistics that reflect our commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "3500+", label: "Students Enrolled", description: "From Nursery to Class XII" },
                            { number: "120+", label: "Teaching Staff", description: "Highly qualified educators" },
                            { number: "25", label: "Academic Years", description: "Of educational excellence" },
                            { number: "95%", label: "Board Results", description: "Consistent success rate" },
                            { number: "15+", label: "Sports Activities", description: "Indoor and outdoor sports" },
                            { number: "8:1", label: "Student Teacher Ratio", description: "Personalized attention" },
                            { number: "50+", label: "Classrooms", description: "Smart and well-equipped" },
                            { number: "100%", label: "Safety Compliance", description: "All safety standards met" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-af-blue dark:text-af-light mb-2">
                                    {stat.number}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {stat.label}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Important Notice */}
            <motion.section 
                className="py-16 bg-af-blue text-white"
                {...fadeIn}
                transition={{ delay: 0.3 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Important Notice</h3>
                        <p className="text-blue-100 leading-relaxed mb-6">
                            All documents provided here are authentic and updated as per the latest available information. 
                            For any queries or verification requests, please contact the school administration office 
                            during working hours. The school reserves the right to update these documents as and when 
                            required by regulatory authorities.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-af-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            Contact Administration
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default MandatoryDisclosurePage;

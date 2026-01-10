import React, { Suspense } from 'react';
import { Shield, Award, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import EDMessage from '@/src/components/sections/EDMessage';
const PrincipalMessage = React.lazy(() => import('@/src/components/sections/PrincipalMessage'));
import type { FacultyMember } from '@/src/components/sections/FacultyCarousel';
const FacultyCarousel = React.lazy(() => import('@/src/components/sections/FacultyCarousel'));
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';

// Neutral placeholder for face-free identity - Optimized size
const neutralPlaceholder = "https://picsum.photos/id/22/600/800";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const pgtFaculty: FacultyMember[] = [
    {
        name: "Teacher Name",
        designation: "PGT - Political Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "History is a guide to navigation in perilous times.",
        description: "An expert in modern and ancient history, dedicated to bringing the past alive for students through critical analysis and storytelling."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Chem.",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Chemistry is the study of change.",
        description: "Specializing in organic and inorganic chemistry, she leads students through complex laboratory experiments and theoretical concepts."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Eco.",
        department: "Commerce",
        image: neutralPlaceholder,
        quote: "Economics is everywhere, and understanding it is key to understanding the world.",
        description: "Passionate about macroeconomics and global markets, helping students navigate the complexities of financial systems."
    },
    {
        name: "Teacher Name",
        designation: "PGT - IP",
        department: "Technology",
        image: neutralPlaceholder,
        quote: "Code is the language of the future.",
        description: "Expert in Informatics Practices and software development, grooming students for the digital era through hands-on programming."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Maths",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Mathematics is the music of reason.",
        description: "Focused on advanced calculus and logic, helps students solve complex problems with structured thinking."
    },
    {
        name: "Teacher Name",
        designation: "PGT - PET",
        department: "Sports",
        image: neutralPlaceholder,
        quote: "A healthy mind resides in a healthy body.",
        description: "Promoting physical fitness and sportsmanship across all senior grades through rigorous training and discipline."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Bio.",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Biology is the most powerful technology ever created.",
        description: "Specializing in biotechnology and genetics, fosters a deep appreciation for the living world."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Eng.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "The limit of my language is the limit of my world.",
        description: "Nurturing analytical reading and eloquent expression through literature and creative writing."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Hindi",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Sahitya hi jeevan ka darpan hai.",
        description: "Dedicated to the beauty of Hindi literature and linguistics, instilling a sense of cultural pride in students."
    },
    {
        name: "Teacher Name",
        designation: "PGT - Commerce",
        department: "Commerce",
        image: neutralPlaceholder,
        quote: "Business is more than money; it's about value.",
        description: "Leading the commerce stream with a focus on accountancy and business studies."
    }
];

const tgtFaculty: FacultyMember[] = [
    {
        name: "Teacher Name",
        designation: "TGT - S. Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Understanding society is the first step to changing it.",
        description: "Passionate about social sciences and civic awareness, helping students understand the world around them."
    },
    {
        name: "Teacher Name",
        designation: "TGT - Sanskrit",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Sanskrit is the foundation of our culture.",
        description: "Keeping the ancient language alive through traditional teaching methods and modern engagement."
    },
    {
        name: "Teacher Name",
        designation: "TGT - Maths",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Numbers never lie.",
        description: "Creating a strong mathematical foundation for middle school students through interactive problem-solving."
    },
    {
        name: "Teacher Name",
        designation: "TGT - Science",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Science is magic that works.",
        description: "Focusing on experimental learning and scientific observation in the secondary grades."
    },
    {
        name: "Teacher Name",
        designation: "TGT - Music & Dance",
        department: "Arts",
        image: neutralPlaceholder,
        quote: "Where words fail, music speaks.",
        description: "Nurturing creative talents and cultural expression through performing arts."
    },
    {
        name: "Teacher Name",
        designation: "TGT - S.Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Geography is the study of home.",
        description: "Specializing in geography and history, bringing the world closer to the classroom."
    },
    {
        name: "Teacher Name",
        designation: "TGT - Librarian",
        department: "Library",
        image: neutralPlaceholder,
        quote: "A library is a hospital for the mind.",
        description: "Curating a vast collection of knowledge and fostering a reading culture throughout the school."
    },
    {
        name: "Teacher Name",
        designation: "TGT - PET",
        department: "Sports",
        image: neutralPlaceholder,
        quote: "Champions are made, not born.",
        description: "Leading school teams and individual athletes to excellence on the field."
    },
    {
        name: "Teacher Name",
        designation: "TGT - S. Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "History is what we choose to remember.",
        description: "Engaging students with historical narratives and societal developments."
    },
    {
        name: "Teacher Name",
        designation: "TGT - Science",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Curiosity is the wick in the candle of learning.",
        description: "Encouraging inquiry and exploration in the foundational sciences."
    }
];

const prtFaculty: FacultyMember[] = [
    {
        name: "Teacher Name",
        designation: "Head Mistress",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Education is the manifestation of perfection already in man.",
        description: "Leading the primary department with a vision for holistic early childhood development."
    },
    {
        name: "Teacher Name",
        designation: "PRT - Music",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Music is the language of the soul.",
        description: "Introducing our youngest learners to the world of rhythm and melody."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Every child is unique.",
        description: "Dedicated to nurturing individual potential in the foundational years."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Kindness is the highest form of intelligence.",
        description: "Creating a nurturing classroom environment where students feel safe to explore."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Learning should be an adventure.",
        description: "Bringing creativity and joy to primary school education through active learning."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Teaching is a work of heart.",
        description: "Supporting students through their first steps of academic and social growth."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Believe in yourself.",
        description: "Building confidence and curiosity in our primary grade students."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Knowledge is power.",
        description: "Focusing on literacy and numeracy foundations for primary learners."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Keep climbing higher.",
        description: "Encouraging resilience and hard work in early education."
    },
    {
        name: "Teacher Name",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Small steps lead to big changes.",
        description: "Nurturing the small steps of our primary students every day."
    }
];

const AboutPage: React.FC = () => {
    return (
        <PageAnimate className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            {/* Hero Section */}
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg">Established 1950</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                            Our <span className="text-af-gold">Legacy</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-lg">
                            Nurturing young minds with values of excellence and character for over seven decades.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ED's Message Section */}
            <motion.div
                id="ed-message"
                className="border-b border-gray-50 dark:border-gray-800"
                style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}
                {...fadeIn}
            >
                <EDMessage />
            </motion.div>

            {/* Principal's Message Section */}
            <Suspense fallback={<div className="h-[600px] flex items-center justify-center">Loading principal message...</div>}>
                <motion.div
                    id="principal"
                    className="border-b border-gray-50 dark:border-gray-800"
                    style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}
                    {...fadeIn}
                >
                    <PrincipalMessage />
                </motion.div>
            </Suspense>

            {/* Faculty Section Title */}
            <motion.div
                className="pt-24 pb-8 container mx-auto px-6 text-center"
                {...fadeIn}
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white relative inline-block">
                    Our Dedicated Faculty
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-af-gold rounded-full -mb-4"></span>
                </h2>
                <p className="mt-8 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Meet our team of experienced educators committed to shaping the future of our students.</p>
            </motion.div>

            {/* PGT Teachers */}
            <motion.div
                className="py-16 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-900"
                style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}
                {...fadeIn}
            >
                <div className="container mx-auto px-6 mb-10">
                    <h3 className="text-2xl font-serif font-bold text-af-blue dark:text-blue-400 uppercase tracking-[0.2em] flex items-center gap-4">
                        <span className="w-12 h-1 bg-af-blue rounded-full"></span>
                        Post Graduate Teachers (PGT)
                    </h3>
                </div>
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading faculty grid...</div>}>
                    <FacultyCarousel faculty={pgtFaculty} />
                </Suspense>
            </motion.div>

            {/* TGT Teachers */}
            <motion.div
                className="py-16 bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-900/10 dark:to-gray-900"
                style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}
                {...fadeIn}
            >
                <div className="container mx-auto px-6 mb-10">
                    <h3 className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em] flex items-center gap-4">
                        <span className="w-12 h-1 bg-amber-500 rounded-full"></span>
                        Trained Graduate Teachers (TGT)
                    </h3>
                </div>
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading faculty grid...</div>}>
                    <FacultyCarousel faculty={tgtFaculty} />
                </Suspense>
            </motion.div>

            {/* PRT Teachers */}
            <motion.div
                className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-900/10 dark:to-gray-900"
                style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}
                {...fadeIn}
            >
                <div className="container mx-auto px-6 mb-10">
                    <h3 className="text-2xl font-serif font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-4">
                        <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
                        Primary Teachers (PRT)
                    </h3>
                </div>
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading faculty grid...</div>}>
                    <FacultyCarousel faculty={prtFaculty} />
                </Suspense>
            </motion.div>

            {/* Core Values */}
            <motion.section
                id="admin"
                className="py-24 bg-gray-950 text-white relative"
                {...fadeIn}
            >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20">
                        Our Core <span className="text-af-gold">Values</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: Shield, title: 'Integrity', desc: 'Upholding unwavering honesty and strong moral principles in all actions.', color: 'text-blue-400', bg: 'bg-blue-400/10 shadow-blue-400/5' },
                            { icon: Award, title: 'Excellence', desc: 'Striving for highest standards in academics, sports, and life skills.', color: 'text-af-gold', bg: 'bg-af-gold/10 shadow-af-gold/5' },
                            { icon: BookOpen, title: 'Innovation', desc: 'Embracing creative and modern approaches to curriculum and pedagogy.', color: 'text-emerald-400', bg: 'bg-emerald-400/10 shadow-emerald-400/5' },
                            { icon: Heart, title: 'Compassion', desc: 'Fostering a nurturing environment with empathy and respect for all.', color: 'text-rose-400', bg: 'bg-rose-400/10 shadow-rose-400/5' },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group p-8 bg-white/5 border border-white/5 backdrop-blur-sm rounded-[2rem] transition-all duration-500 hover:bg-white/10 shadow-2xl"
                            >
                                <div className={`w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl ${value.bg} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                                    <value.icon className={value.color} size={40} />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 tracking-tight">{value.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </PageAnimate>
    );
};


export default AboutPage;

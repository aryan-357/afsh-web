import React, { Suspense } from 'react';
import { Shield, Award, BookOpen, Heart } from 'lucide-react';
import EDMessage from './EDMessage';
const PrincipalMessage = React.lazy(() => import('./PrincipalMessage'));
import type { FacultyMember } from './FacultyCarousel';
const FacultyCarousel = React.lazy(() => import('./FacultyCarousel'));
const Silk = React.lazy(() => import('./Silk'));

// Neutral placeholder for face-free identity
const neutralPlaceholder = "/faculty-placeholder.png";

const pgtFaculty: FacultyMember[] = [
    {
        name: "Ms. Pooja",
        designation: "PGT - Political Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "History is a guide to navigation in perilous times.",
        description: "An expert in modern and ancient history, dedicated to bringing the past alive for students through critical analysis and storytelling."
    },
    {
        name: "Mrs. Kavita Sharma",
        designation: "PGT - Chem.",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Chemistry is the study of change.",
        description: "Specializing in organic and inorganic chemistry, she leads students through complex laboratory experiments and theoretical concepts."
    },
    {
        name: "Miss. Sushma Bhardwaj",
        designation: "PGT - Eco.",
        department: "Commerce",
        image: neutralPlaceholder,
        quote: "Economics is everywhere, and understanding it is key to understanding the world.",
        description: "Passionate about macroeconomics and global markets, helping students navigate the complexities of financial systems."
    },
    {
        name: "Mr. Vivek Giri",
        designation: "PGT - IP",
        department: "Technology",
        image: neutralPlaceholder,
        quote: "Code is the language of the future.",
        description: "Expert in Informatics Practices and software development, grooming students for the digital era through hands-on programming."
    },
    {
        name: "Mr. PS Gangwar",
        designation: "PGT - Maths",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Mathematics is the music of reason.",
        description: "Focused on advanced calculus and logic, Mr. Gangwar helps students solve complex problems with structured thinking."
    },
    {
        name: "Mr. Vikram (Manzar Ziadi Replacement)",
        designation: "PGT - PET",
        department: "Sports",
        image: neutralPlaceholder,
        quote: "A healthy mind resides in a healthy body.",
        description: "Promoting physical fitness and sportsmanship across all senior grades through rigorous training and discipline."
    },
    {
        name: "Mrs. Namrata Mishra",
        designation: "PGT - Bio.",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Biology is the most powerful technology ever created.",
        description: "Specializing in biotechnology and genetics, she fosters a deep appreciation for the living world."
    },
    {
        name: "Mr. Naresh Khanna",
        designation: "PGT - Eng.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "The limit of my language is the limit of my world.",
        description: "Nurturing analytical reading and eloquent expression through literature and creative writing."
    },
    {
        name: "Mrs. Sunita Malik",
        designation: "PGT - Hindi",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Sahitya hi jeevan ka darpan hai.",
        description: "Dedicated to the beauty of Hindi literature and linguistics, instilling a sense of cultural pride in her students."
    },
    {
        name: "Mrs. Ayushi Tyagi",
        designation: "PGT - Commerce",
        department: "Commerce",
        image: neutralPlaceholder,
        quote: "Business is more than money; it's about value.",
        description: "Leading the commerce stream with a focus on accountancy and business studies."
    }
];

const tgtFaculty: FacultyMember[] = [
    {
        name: "Mrs. Anjali Mishra",
        designation: "TGT - S. Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Understanding society is the first step to changing it.",
        description: "Passionate about social sciences and civic awareness, helping students understand the world around them."
    },
    {
        name: "Mr. JK Jha",
        designation: "TGT - Sanskrit",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Sanskrit is the foundation of our culture.",
        description: "Keeping the ancient language alive through traditional teaching methods and modern engagement."
    },
    {
        name: "Mrs. Sweta Jain",
        designation: "TGT - Maths",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Numbers never lie.",
        description: "Creating a strong mathematical foundation for middle school students through interactive problem-solving."
    },
    {
        name: "Mrs. Subhara Paul",
        designation: "TGT - Science",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Science is magic that works.",
        description: "Focusing on experimental learning and scientific observation in the secondary grades."
    },
    {
        name: "Mrs. Prachi Sharma",
        designation: "TGT - Music & Dance",
        department: "Arts",
        image: neutralPlaceholder,
        quote: "Where words fail, music speaks.",
        description: "Nurturing creative talents and cultural expression through performing arts."
    },
    {
        name: "Mrs. Binita Sinha",
        designation: "TGT - S.Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Geography is the study of home.",
        description: "Specializing in geography and history, bringing the world closer to the classroom."
    },
    {
        name: "Mrs. Sweta Srivastava",
        designation: "TGT - Librarian",
        department: "Library",
        image: neutralPlaceholder,
        quote: "A library is a hospital for the mind.",
        description: "Curating a vast collection of knowledge and fostering a reading culture throughout the school."
    },
    {
        name: "Mr. Vikram",
        designation: "TGT - PET",
        department: "Sports",
        image: neutralPlaceholder,
        quote: "Champions are made, not born.",
        description: "Leading school teams and individual athletes to excellence on the field."
    },
    {
        name: "Mrs. Neelkamal",
        designation: "TGT - S. Sci.",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "History is what we choose to remember.",
        description: "Engaging students with historical narratives and societal developments."
    },
    {
        name: "Ms. Poonam Bhardwaj",
        designation: "TGT - Science",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Curiosity is the wick in the candle of learning.",
        description: "Encouraging inquiry and exploration in the foundational sciences."
    }
];

const prtFaculty: FacultyMember[] = [
    {
        name: "Mrs. Annpurna Srivastava",
        designation: "Head Mistress",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Education is the manifestation of perfection already in man.",
        description: "Leading the primary department with a vision for holistic early childhood development."
    },
    {
        name: "Mrs. Supti Bhattacharya",
        designation: "PRT - Music",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Music is the language of the soul.",
        description: "Introducing our youngest learners to the world of rhythm and melody."
    },
    {
        name: "Mrs. Usha Chauhan",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Every child is unique.",
        description: "Dedicated to nurturing individual potential in the foundational years."
    },
    {
        name: "Mrs. Anita Sarkar",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Kindness is the highest form of intelligence.",
        description: "Creating a nurturing classroom environment where students feel safe to explore."
    },
    {
        name: "Mrs. Anshu Bhardwaj",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Learning should be an adventure.",
        description: "Bringing creativity and joy to primary school education through active learning."
    },
    {
        name: "Mrs. Manju Sharma",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Teaching is a work of heart.",
        description: "Supporting students through their first steps of academic and social growth."
    },
    {
        name: "Mrs. Poonam Sharma",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Believe in yourself.",
        description: "Building confidence and curiosity in our primary grade students."
    },
    {
        name: "Mrs. Saroj Yadav",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Knowledge is power.",
        description: "Focusing on literacy and numeracy foundations for primary learners."
    },
    {
        name: "Mrs. Renu Lata",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Keep climbing higher.",
        description: "Encouraging resilience and hard work in early education."
    },
    {
        name: "Mrs. Mala Tiku",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Small steps lead to big changes.",
        description: "Nurturing the small steps of our primary students every day."
    }
];

const AboutPage: React.FC = () => {
    return (
        <div className="relative min-h-screen pt-32 pb-20">
            <Suspense fallback={<div>Loading background...</div>}>
                <Silk
                    speed={3}
                    scale={1.5}
                    color="#1a365d"
                    noiseIntensity={1.2}
                    rotation={0}
                />
            </Suspense>

            {/* Content wrapper with relative positioning */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up drop-shadow-lg">
                            About Our <span className="text-af-gold">Institution</span>
                        </h1>
                    </div>
                </section>

                {/* ED's Message Section */}
                <div id="ed-message">
                    <EDMessage />
                </div>

                {/* Principal's Message Section */}
                <Suspense fallback={<div>Loading principal message...</div>}>
                    <div id="principal">
                        <PrincipalMessage />
                    </div>
                </Suspense>

                {/* Faculty Section Title */}
                <div className="pt-24 pb-8 container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-white drop-shadow-lg border-b-4 border-af-gold inline-block pb-2">Our Dedicated Faculty</h2>
                </div>

                {/* PGT Teachers */}
                <div className="py-12 bg-white/5 backdrop-blur-md">
                    <div className="container mx-auto px-6 mb-8">
                        <h3 className="text-2xl font-serif font-bold text-white drop-shadow uppercase tracking-widest">PGT Teachers</h3>
                    </div>
                    <Suspense fallback={<div>Loading PGT faculty...</div>}>
                        <FacultyCarousel faculty={pgtFaculty} />
                    </Suspense>
                </div>

                {/* TGT Teachers */}
                <div className="py-12 bg-white/10 backdrop-blur-lg">
                    <div className="container mx-auto px-6 mb-8">
                        <h3 className="text-2xl font-serif font-bold text-white drop-shadow uppercase tracking-widest">TGT Teachers</h3>
                    </div>
                    <Suspense fallback={<div>Loading TGT faculty...</div>}>
                        <FacultyCarousel faculty={tgtFaculty} />
                    </Suspense>
                </div>

                {/* PRT Teachers */}
                <div className="py-12 bg-white/5 backdrop-blur-md">
                    <div className="container mx-auto px-6 mb-8">
                        <h3 className="text-2xl font-serif font-bold text-white drop-shadow uppercase tracking-widest">PRT Teachers</h3>
                    </div>
                    <Suspense fallback={<div>Loading PRT faculty...</div>}>
                        <FacultyCarousel faculty={prtFaculty} />
                    </Suspense>
                </div>

                {/* Core Values */}
                <section id="admin" className="py-24 bg-black/50 backdrop-blur-xl text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">
                            Our Core <span className="text-af-gold">Values</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { icon: Shield, title: 'Integrity', desc: 'Upholding honesty in all actions.' },
                                { icon: Award, title: 'Excellence', desc: 'Striving for the best results.' },
                                { icon: BookOpen, title: 'Innovation', desc: 'Creative approaches to learning.' },
                                { icon: Heart, title: 'Compassion', desc: 'Empathy for every student.' },
                            ].map((value, idx) => (
                                <div key={idx} className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-af-gold/20 transition-all duration-300">
                                        <value.icon className="text-af-gold" size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;

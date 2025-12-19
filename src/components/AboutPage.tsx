import React from 'react';
import { Shield, Award, BookOpen, Heart } from 'lucide-react';
import PrincipalMessage from './PrincipalMessage';
import FacultyCarousel, { FacultyMember } from './FacultyCarousel';

// Neutral placeholder for face-free identity
const neutralPlaceholder = "https://placehold.co/600x800/f3f4f6/9ca3af?text=FACULTY";

const pgtFaculty: FacultyMember[] = [
    {
        name: "Mrs. Savita Jaitly",
        designation: "PGT - English",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Literature is the most agreeable way of ignoring life.",
        description: "Leading the English department with a passion for classical literature and modern linguistics, ensuring students develop a profound command of the language."
    },
    {
        name: "Mr. Vivek Giri",
        designation: "PGT - Mathematics",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Mathematics is the music of reason.",
        description: "Specializing in advanced calculus and algebra, Mr. Giri makes complex mathematical concepts accessible and engaging through logical deduction."
    },
    {
        name: "Mrs. Kavita Sharma",
        designation: "PGT - Science",
        department: "Science",
        image: neutralPlaceholder,
        quote: "Somewhere, something incredible is waiting to be known.",
        description: "A dedicated science educator focused on practical experimentation and fostering a scientific temper among senior secondary students."
    }
];

const tgtFaculty: FacultyMember[] = [
    {
        name: "Mrs. Anjali Mishra",
        designation: "TGT - Social Science",
        department: "Humanities",
        image: neutralPlaceholder,
        quote: "Those who do not remember the past are condemned to repeat it.",
        description: "Bringing history and geography to life for junior high students, Mrs. Mishra emphasizes the importance of global citizenship."
    },
    {
        name: "Mr. JK Jha",
        designation: "TGT - Physical Education",
        department: "Sports",
        image: neutralPlaceholder,
        quote: "Sound mind in a sound body.",
        description: "A veteran in physical training, Mr. Jha focuses on discipline, teamwork, and the physical well-being of every student."
    },
    {
        name: "Mrs. Sweta Jain",
        designation: "TGT - Computer Science",
        department: "Technology",
        image: neutralPlaceholder,
        quote: "The only way to do great work is to love what you do.",
        description: "Empowering the next generation with digital literacy and coding skills, Mrs. Jain stays at the forefront of educational technology."
    }
];

const prtFaculty: FacultyMember[] = [
    {
        name: "Mrs. Annpurna Srivastava",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "The influence of a good teacher can never be erased.",
        description: "Dedicated to the foundational years, Mrs. Srivastava creates a vibrant learning environment where curiosity is nurtured."
    },
    {
        name: "Mrs. Supti Bhattacharya",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "Every child is a gifted child.",
        description: "Focusing on holistic development and creative expression for our youngest learners in the primary department."
    },
    {
        name: "Mrs. Usha Chauhan",
        designation: "PRT Staff",
        department: "Primary",
        image: neutralPlaceholder,
        quote: "To teach is to touch a heart.",
        description: "Expert in early childhood pedagogy, Mrs. Chauhan emphasizes empathy and social skills alongside academic basics."
    }
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756ebafe1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="absolute inset-0 bg-af-blue/50 dark:bg-gray-900/80 backdrop-blur-[1px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up">
                        About Our <span className="text-af-gold">Institution</span>
                    </h1>
                </div>
            </section>

            {/* Principal's Message Section */}
            <div id="principal" className="border-b border-gray-50 dark:border-gray-800">
                <PrincipalMessage />
            </div>

            {/* Faculty Section Title */}
            <div className="pt-24 pb-8 container mx-auto px-6">
                <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white border-b-4 border-af-gold inline-block pb-2">Meet Our Educators</h2>
            </div>

            {/* PGT Teachers */}
            <div className="py-12">
                <div className="container mx-auto px-6 mb-8">
                    <h3 className="text-2xl font-serif font-bold text-af-blue dark:text-af-light uppercase tracking-widest">PGT Teachers</h3>
                </div>
                <FacultyCarousel faculty={pgtFaculty} />
            </div>

            {/* TGT Teachers */}
            <div className="py-12 bg-gray-50 dark:bg-gray-800/30">
                <div className="container mx-auto px-6 mb-8">
                    <h3 className="text-2xl font-serif font-bold text-af-blue dark:text-af-light uppercase tracking-widest">TGT Teachers</h3>
                </div>
                <FacultyCarousel faculty={tgtFaculty} />
            </div>

            {/* PRT Teachers */}
            <div className="py-12">
                <div className="container mx-auto px-6 mb-8">
                    <h3 className="text-2xl font-serif font-bold text-af-blue dark:text-af-light uppercase tracking-widest">PRT Teachers</h3>
                </div>
                <FacultyCarousel faculty={prtFaculty} />
            </div>

            {/* Core Values */}
            <section id="admin" className="py-24 bg-gray-900 text-white">
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
                            <div key={idx} className="group">
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-af-gold/20 transition-all duration-300">
                                    <value.icon className="text-af-gold" size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

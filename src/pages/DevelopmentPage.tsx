import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Zap, Users, Award, Github, Linkedin, Mail } from 'lucide-react';
import Silk from '@/src/components/ui/Silk';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const DevelopmentPage: React.FC = () => {
    const developers = [
        {
            name: "Aryan Rajput",
            role: "Lead Full-Stack Developer",
            avatar: "https://picsum.photos/seed/aryan-rajput/400/400",
            bio: "A passionate full-stack developer with expertise in modern web technologies and exceptional leadership skills. Aryan led the technical architecture and full-stack implementation of the entire school website.",
            skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "Express.js"],
            contributions: [
                "Designed and implemented the complete full-stack architecture",
                "Developed responsive frontend layouts and interactive components",
                "Built robust backend APIs and database systems",
                "Integrated modern animations and user interactions",
                "Led the technical decision-making process",
                "Optimized performance and accessibility across the stack"
            ],
            social: {
                github: "https://github.com/aryan-357",
                email: "iamaryan357@gmail.com"
            }
        },
        {
            name: "Anagh Singh",
            role: "Full-Stack Developer",
            avatar: "https://picsum.photos/seed/anagh-singh/400/400",
            bio: "A creative full-stack developer who excels at both frontend design and backend development. Anagh brought the vision to life through stunning visuals and robust server-side implementation.",
            skills: ["React", "Node.js", "UI/UX Design", "MongoDB", "CSS3", "Express.js", "Adobe Creative Suite"],
            contributions: [
                "Created the complete visual design system and frontend components",
                "Developed backend APIs and database schemas",
                "Designed responsive layouts for all screen sizes",
                "Implemented interactive components and animations",
                "Ensured accessibility and usability standards",
                "Crafted the modern aesthetic and brand identity"
            ],
            social: {
                github: "https://github.com/anaghsinghcodingo",
                email: "anaghsingh2013@gmail.com"
            }
        }
    ];

    const techStack = [
        { icon: Code, name: "React", description: "Modern frontend framework" },
        { icon: Palette, name: "Tailwind CSS", description: "Utility-first styling" },
        { icon: Zap, name: "Framer Motion", description: "Smooth animations" },
        { icon: Globe, name: "React Router", description: "Navigation system" },
        { icon: Users, name: "Lucide Icons", description: "Icon library" },
        { icon: Award, name: "TypeScript", description: "Type safety" }
    ];

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
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
                        <span className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg">Development Team</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                            Behind the <span className="text-af-gold">Code</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-lg">
                            Meet the talented developers who brought Air Force School Hindan's digital presence to life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Developers Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeIn}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Our <span className="text-af-gold">Developers</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            The brilliant minds behind the development of this modern school website
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {developers.map((developer, index) => (
                            <motion.div
                                key={index}
                                {...scaleIn}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                            >
                                {/* Developer Header */}
                                <div className="relative h-48 bg-gradient-to-br from-af-blue to-af-light flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="relative z-10">
                                        <img
                                            src={developer.avatar}
                                            alt={developer.name}
                                            className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Developer Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {developer.name}
                                    </h3>
                                    <p className="text-af-gold font-semibold mb-4">{developer.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {developer.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {developer.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 bg-af-blue/10 text-af-blue dark:bg-af-blue/20 dark:text-af-light text-sm rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contributions */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Contributions</h4>
                                        <ul className="space-y-2">
                                            {developer.contributions.map((contribution, contribIndex) => (
                                                <li key={contribIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="text-af-gold mr-2 mt-1">•</span>
                                                    {contribution}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-4">
                                        <a
                                            href={developer.social.github}
                                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-af-blue/10 dark:hover:bg-af-blue/20 transition-colors"
                                        >
                                            <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                        <a
                                            href={`mailto:${developer.social.email}`}
                                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-af-blue/10 dark:hover:bg-af-blue/20 transition-colors"
                                        >
                                            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeIn}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Technology <span className="text-af-gold">Stack</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Modern technologies used to build this responsive and interactive website
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                {...scaleIn}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 bg-af-blue/10 dark:bg-af-blue/20 rounded-2xl flex items-center justify-center group-hover:bg-af-blue/20 dark:group-hover:bg-af-blue/30 transition-colors">
                                    <tech.icon className="w-10 h-10 text-af-blue dark:text-af-light" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Stats */}
            <section className="py-20 bg-gradient-to-r from-af-blue to-af-light text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeIn}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Project <span className="text-af-gold">Achievements</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "100%", label: "Responsive Design" },
                            { number: "A+", label: "Performance Grade" },
                            { number: "50+", label: "Components Built" },
                            { number: "2", label: "Weeks Development" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                {...scaleIn}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-af-gold mb-2">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevelopmentPage;

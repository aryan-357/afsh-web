import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp } from '../../utils/animations';

const ReactLogo = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
);

const ViteLogo = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
    </svg>
);

const TypeScriptLogo = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
);

const StrapiLogo = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.32 0c-3.922 0-5.882 0-7.1 1.219C0 2.438 0 4.399 0 8.32v7.36c0 3.922 0 5.882 1.219 7.101C2.438 24 4.399 24 8.32 24h7.36c3.922 0 5.882 0 7.101-1.219C24 21.562 24 19.601 24 15.68V8.32c0-3.922 0-5.882-1.219-7.101C21.562 0 19.601 0 15.68 0H8.32zm.41 7.28h7.83a.16.16 0 0 1 .16.16v7.83h-3.87v-3.71a.41.41 0 0 0-.313-.398l-.086-.012h-3.72V7.28zm-.5.25v3.87H4.553a.08.08 0 0 1-.057-.136L8.23 7.529zm.25 4.12h3.87v3.87H8.64a.16.16 0 0 1-.16-.16v-3.71zm4.12 4.12h3.87l-3.734 3.734a.08.08 0 0 1-.136-.057V15.77z" />
    </svg>
);

const ReactSpringLogo = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 2000 2000" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="880" y="1160" width="240" height="240" fill="currentColor" />
        <rect x="880" y="880" width="240" height="240" fill="currentColor" />
        <rect x="600" y="880" width="240" height="240" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1160 600H880V840H1160V1120H1400V600H1160Z" fill="currentColor" />
    </svg>
);


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
        { icon: ReactLogo, name: "React", description: "Modern frontend framework" },
        { icon: ViteLogo, name: "Vite", description: "Next Generation Frontend Tooling" },
        { icon: TypeScriptLogo, name: "TypeScript", description: "Typed JavaScript at Any Scale" },
        { icon: StrapiLogo, name: "Strapi", description: "Open source Node.js Headless CMS" },
        { icon: ReactSpringLogo, name: "React Spring", description: "Spring-physics based animation library" }
    ];

    return (
        <PageAnimate className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
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
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg"
                            variants={fadeInUp}
                            custom={1}
                        >
                            Development Team
                        </motion.span>
                        <motion.h1
                            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl"
                            variants={fadeInUp}
                            custom={2}
                        >
                            Behind the <span className="text-af-gold">Code</span>
                        </motion.h1>
                        <motion.p
                            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-lg"
                            variants={fadeInUp}
                            custom={3}
                        >
                            Meet the talented developers who brought Air Force School Hindan's digital presence to life.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Developers Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
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
                                variants={fadeInUp}
                                custom={index}
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
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
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
                                variants={fadeInUp}
                                custom={index}
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
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
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
                                variants={fadeInUp}
                                custom={index}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-af-gold mb-2">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageAnimate>
    );
};

export default DevelopmentPage;

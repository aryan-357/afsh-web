import React from 'react';
import { motion } from 'framer-motion';
import { tinaField } from "tinacms/dist/react";

export interface PhilosophyItem {
    title: string;
    icon: string;
    desc: string;
}

interface PhilosophySectionProps {
    title?: string;
    subtitle?: string;
    items?: PhilosophyItem[];
    block?: any; // TinaCMS block data for contextual editing
}

const defaultItems: PhilosophyItem[] = [
    { title: 'Academic Excellence', icon: '🎓', desc: 'Rigorous curriculum designed to challenge and inspire students to reach their full potential.' },
    { title: 'Character Building', icon: '⭐', desc: 'Instilling core values of discipline, honesty, and social responsibility.' },
    { title: 'Physical Fitness', icon: '🏆', desc: 'Comprehensive sports programs to build a healthy body and a competitive spirit.' },
];

const PhilosophySection: React.FC<PhilosophySectionProps> = ({
    title = 'Fostering Excellence, Integrity, and Service',
    subtitle = 'Our Philosophy',
    items = defaultItems,
    block
}) => {
    return (
        <motion.section
            id="academics"
            className="bg-white dark:bg-gray-900 py-16 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4 text-center">
                <span
                    data-tina-field={block ? tinaField(block, 'subtitle') : undefined}
                    className="text-af-blue dark:text-af-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block"
                >
                    {subtitle}
                </span>
                <h2
                    data-tina-field={block ? tinaField(block, 'title') : undefined}
                    className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-10 max-w-3xl mx-auto leading-tight"
                >
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            data-tina-field={block ? tinaField(block.items[idx], 'title') : undefined}
                            // Note: field selection for array items requires passing the specific item object if we want to deep select,
                            // but usually tinaField(block, `items.${idx}`) is complex.
                            // Better to just let them click the main block or use the array UI in sidebar.
                            // But if block.items exists and corresponds to this, we can try.
                            // However, block.items in the prop might be the simple array. The 'block' prop has the metadata.
                            // Let's stick to title/subtitle for now to avoid errors if structure differs.
                            className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl transition duration-500 border border-gray-100 dark:border-gray-700 group shadow-lg"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-110 transition duration-500 inline-block">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default PhilosophySection;

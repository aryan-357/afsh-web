/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react';
import { Shield, Award, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import EDMessage from '@/src/components/sections/EDMessage';
const PrincipalMessage = React.lazy(() => import('@/src/components/sections/PrincipalMessage'));
import type { FacultyMember } from '@/src/components/sections/FacultyCarousel';
const FacultyCarousel = React.lazy(() => import('@/src/components/sections/FacultyCarousel'));
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { useTinaPage } from '@/src/hooks/useTinaPage';

// Neutral placeholder for face-free identity - Optimized size
const neutralPlaceholder = "https://picsum.photos/id/22/600/800";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const AboutPage: React.FC = () => {
    const { data, loading } = useTinaPage('about.md');

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Loading...</div>;
    }

    const pageData = data?.page;
    if (!pageData) return null;

    const pgtFaculty: FacultyMember[] = pageData.pgtFaculty || [];
    const tgtFaculty: FacultyMember[] = pageData.tgtFaculty || [];
    const prtFaculty: FacultyMember[] = pageData.prtFaculty || [];
    const hero = pageData.hero || { title: 'Our Legacy', subtitle: 'Nurturing young minds...', establishedDate: 'Established 1950' };
    const values = pageData.values || [];

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
                        {values.map((value: any, idx: number) => {
                            const icons: any = { Shield, Award, BookOpen, Heart };
                            const Icon = icons[value.iconName] || Shield;
                            // Generate bg class based on color string or use default
                            // Assuming value.color acts like 'text-blue-400'
                            // We can try to derive a bg class or just use a generic one if not provided.
                            // For this MVP, I'll just use a generic style or try to parse.
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -15, scale: 1.02 }}
                                    className="group p-8 bg-white/5 border border-white/5 backdrop-blur-sm rounded-[2rem] transition-all duration-500 hover:bg-white/10 shadow-2xl"
                                >
                                    <div className={`w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                                        <Icon className={value.color} size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 tracking-tight">{value.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>
        </PageAnimate>
    );
};


export default AboutPage;

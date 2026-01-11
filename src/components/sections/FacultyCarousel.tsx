import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';


export interface FacultyMember {
    name: string;
    designation: string;
    department: string;
    image: string;
    quote: string;
    description: string;
}

interface FacultyCarouselProps {
    faculty: FacultyMember[];
    autoSlideInterval?: number;
}



const FacultyCard = React.memo(({
    member,
    index,
    openedMemberIndex,
    onClick
}: {
    member: FacultyMember;
    index: number;
    openedMemberIndex: number | null;
    onClick: (index: number) => void;
}) => {
    const isOpened = openedMemberIndex === index;
    const isBlurred = openedMemberIndex !== null && !isOpened;

    return (
        <div
            className={`flex-[0_0_80%] md:flex-[0_0_35%] lg:flex-[0_0_28%] pl-6 transition-[transform,opacity] duration-500 will-change-transform
                    ${isBlurred ? 'scale-95 opacity-50 contrast-[0.8]' : 'scale-100 opacity-100'}
                `}
        >
            <div
                onClick={() => onClick(index)}
                className={`relative h-[500px] cursor-pointer rounded-[40px] overflow-hidden group transition-[border-color,box-shadow,transform] duration-500
                        bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 shadow-xl
                        ${isOpened ? 'ring-2 ring-af-blue/30' : ''}
                    `}
            >
                {/* Static Image Layer */}
                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                    </div>
                </div>

                {/* Content (Visible state) */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                    <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                        <p className="text-af-gold font-bold tracking-widest text-xs uppercase mb-2">
                            {member.designation}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                            {member.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                            {member.department}
                        </p>

                        {/* Expanded detail placeholder (simplified for initial view) */}
                        <div className={`mt-4 overflow-hidden transition-all duration-500 ${isOpened ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                                "{member.quote}"
                            </p>
                            <div className="inline-flex items-center text-xs font-bold text-af-blue uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                                Details <ChevronRight size={14} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Open/Close indicator */}
                <div className="absolute top-6 right-6 z-30">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-90">
                        {isOpened ? <X size={20} /> : <ChevronRight size={20} />}
                    </div>
                </div>
            </div>
        </div>
    );
});

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
    faculty,
    autoSlideInterval = 5000
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 30,
        align: 'start'
    }, [
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openedMemberIndex, setOpenedMemberIndex] = useState<number | null>(null);
    const onPrevClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const onNextClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);

        return () => { };
    }, [emblaApi, onSelect]);

    const handleCardClick = useCallback((index: number) => {
        setOpenedMemberIndex(prev => prev === index ? null : index);
    }, []);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Navigation Buttons Moved higher relative to viewport */}
                <div className="flex justify-end mb-8 gap-4">
                    <button
                        onClick={onPrevClick}
                        className="group p-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:bg-af-blue hover:text-white transition-all duration-300"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={onNextClick}
                        className="group p-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:bg-af-blue hover:text-white transition-all duration-300"
                        aria-label="Next"
                    >
                        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Embla Viewport */}
            <div className="container mx-auto px-6">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-6">
                        {faculty.map((member, index) => (
                            <FacultyCard
                                key={index}
                                member={member}
                                index={index}
                                openedMemberIndex={openedMemberIndex}
                                onClick={handleCardClick}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dedicated Open View (Modal-like or Inline Expansion) */}
            {/* For the requested "others become blurry" and "one card opened",
                    I've implemented the inline blur. If a full detail view is needed,
                    we can add a modal or an expanded section below.
                    Given the design image shows a side-by-side Image + Info,
                    let's implement a more prominent expanded state.
                */}
            {/* Dots Pagination */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-center mt-12 gap-3">
                    {faculty.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => emblaApi?.scrollTo(idx)}
                            className={`transition-all duration-500 rounded-full ${selectedIndex === idx
                                ? 'w-12 h-3 bg-af-blue'
                                : 'w-3 h-3 bg-gray-300 dark:bg-white/10'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Expanded Modal Layer with Transitions */}
            {openedMemberIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none"
                    onClick={() => setOpenedMemberIndex(null)}
                >
                    {/* Backdrop Overlay with Fade */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity duration-500 animate-in fade-in fill-mode-both" />

                    <div
                        className={`w-full max-w-5xl bg-white/80 dark:bg-gray-900/95 backdrop-blur-2xl rounded-[50px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/20 flex flex-col md:flex-row pointer-events-auto relative z-10
                            transition-all duration-500 transform
                            animate-in fade-in zoom-in-90 slide-in-from-bottom-10
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
                            <img
                                src={faculty[openedMemberIndex].image}
                                alt={faculty[openedMemberIndex].name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                        </div>
                        <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative">
                            <button
                                onClick={() => setOpenedMemberIndex(null)}
                                className="absolute top-8 right-8 p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 hover:rotate-90"
                            >
                                <X size={24} />
                            </button>

                            <p className="text-af-blue font-bold tracking-[0.3em] text-xs uppercase mb-4 animate-in fade-in slide-in-from-left duration-700">
                                {faculty[openedMemberIndex].designation}
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-2 animate-in fade-in slide-in-from-left duration-700 delay-100">
                                {faculty[openedMemberIndex].name}
                            </h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 font-medium animate-in fade-in slide-in-from-left duration-700 delay-200">
                                {faculty[openedMemberIndex].department}
                            </p>

                            <div className="h-0.5 w-16 bg-af-blue/30 mb-8 animate-in fade-in slide-in-from-left duration-700 delay-300"></div>

                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 animate-in fade-in duration-1000 delay-400">
                                {faculty[openedMemberIndex].description}
                            </p>

                            <blockquote className="border-l-4 border-af-blue pl-6 italic text-gray-600 dark:text-gray-400 text-xl py-2 animate-in fade-in duration-1000 delay-500">
                                "{faculty[openedMemberIndex].quote}"
                            </blockquote>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FacultyCarousel;

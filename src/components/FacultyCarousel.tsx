import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
    faculty,
    autoSlideInterval = 6000
}) => {
    // For infinite loop, we pad the array
    const paddedFaculty = [...faculty, ...faculty, ...faculty];
    const initialIndex = faculty.length; // Start at the first item of the middle set

    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionStyle, setTransitionStyle] = useState('transform 250ms ease');

    const trackRef = useRef<HTMLDivElement>(null);

    const handleNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTransitionStyle('transform 250ms ease');
        setCurrentIndex(prev => prev + 1);
    }, [isTransitioning]);

    const handlePrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTransitionStyle('transform 250ms ease');
        setCurrentIndex(prev => prev - 1);
    }, [isTransitioning]);

    // Handle loop resetting without animation
    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            setIsTransitioning(false);

            // If we've reached the end of the middle set or the beginning
            if (currentIndex >= faculty.length * 2) {
                setTransitionStyle('none');
                setCurrentIndex(faculty.length);
            } else if (currentIndex < faculty.length) {
                setTransitionStyle('none');
                setCurrentIndex(faculty.length * 2 - 1);
            }
        }, 250); // Match transition duration

        return () => clearTimeout(timer);
    }, [currentIndex, isTransitioning, faculty.length]);

    useEffect(() => {
        const timer = setInterval(handleNext, autoSlideInterval);
        return () => clearInterval(timer);
    }, [handleNext, autoSlideInterval]);

    return (
        <section className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden py-12">
            <div className="container mx-auto px-6 max-w-7xl relative">

                {/* Navigation Arrows - Fixed relative to container */}
                <div className="absolute top-0 right-6 lg:right-[30%] flex gap-2 z-30 pointer-events-auto">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all bg-white dark:bg-gray-900"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all bg-white dark:bg-gray-900"
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="relative overflow-hidden w-full">
                    {/* The Track */}
                    <div
                        ref={trackRef}
                        className="flex flex-row flex-nowrap items-stretch"
                        style={{
                            transform: `translate3d(-${(currentIndex / paddedFaculty.length) * 100}%, 0, 0)`,
                            transition: transitionStyle,
                            width: `${paddedFaculty.length * 100}%`
                        }}
                    >
                        {paddedFaculty.map((item, idx) => {
                            // Extract next two for the PREVIEW column
                            const n1 = paddedFaculty[(idx + 1) % paddedFaculty.length];
                            const n2 = paddedFaculty[(idx + 2) % paddedFaculty.length];

                            return (
                                <div key={idx} className="flex-none w-[calc(100%/var(--items))] flex flex-col lg:flex-row items-stretch gap-10 min-h-[450px]" style={{ '--items': paddedFaculty.length } as React.CSSProperties}>
                                    {/* 1. Main Portrait */}
                                    <div className="w-full lg:w-[32%] shrink-0">
                                        <div className="aspect-[3/4] h-full overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800 shadow-md">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover filter grayscale"
                                            />
                                        </div>
                                    </div>

                                    {/* 2. Content */}
                                    <div className="w-full lg:w-[41%] flex flex-col justify-center px-4">
                                        <div className="border-t-2 border-af-blue dark:border-af-light w-12 mb-8"></div>
                                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                                            Meet {item.name.split(' ').slice(1).join(' ')}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-8 line-clamp-4">
                                            {item.description}
                                        </p>
                                        <button className="self-start text-xs font-bold italic tracking-widest border-b border-black dark:border-white pb-1 hover:text-af-blue transition-colors uppercase">
                                            Read More
                                        </button>
                                    </div>

                                    {/* 3. Previews - These are identical to the portraits of the next slides */}
                                    <div className="hidden lg:flex w-[27%] gap-4 pr-10">
                                        <div className="w-1/2 aspect-[2/3] self-center overflow-hidden rounded-sm bg-gray-50 dark:bg-gray-800 opacity-40">
                                            <img src={n1.image} alt="Next" className="w-full h-full object-cover filter grayscale" />
                                        </div>
                                        <div className="w-1/2 aspect-[2/3] self-center overflow-hidden rounded-sm bg-gray-50 dark:bg-gray-800 opacity-20">
                                            <img src={n2.image} alt="Next Next" className="w-full h-full object-cover filter grayscale" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-12 gap-1">
                    {faculty.map((_, idx) => {
                        const activeIndex = (currentIndex % faculty.length);
                        return (
                            <div
                                key={idx}
                                className={`h-[2px] transition-all duration-300 ${activeIndex === idx ? 'w-10 bg-af-blue' : 'w-4 bg-gray-200 dark:bg-gray-800'}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FacultyCarousel;

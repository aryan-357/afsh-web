import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
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

const TWEEN_FACTOR_BASE = 0.1;

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
    faculty,
    autoSlideInterval = 5000
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        duration: 30
    }, [Autoplay({ delay: autoSlideInterval, stopOnInteraction: false })]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openedMemberIndex, setOpenedMemberIndex] = useState<number | null>(null);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const onPrevClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const onNextClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.parallax-layer') as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === 'scroll';

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const translateRaw = diffToTarget * (-1 * tweenFactor.current) * 100;
                    // Clamp translation to stay within the 25% buffer (16.6% of 150% width)
                    const translate = Math.max(-16, Math.min(16, translateRaw));
                    const tweenNode = tweenNodes.current[slideIndex];
                    if (tweenNode) {
                        tweenNode.style.transform = `translateX(${translate}%)`;
                    }
                });
            });
        },
        []
    );

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);
        onSelect(emblaApi);

        const autoplay = emblaApi.plugins().autoplay;

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('reInit', onSelect)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
            .on('select', onSelect);

        // Pause/Resume autoplay based on modal state
        if (openedMemberIndex !== null) {
            autoplay?.stop();
        } else {
            autoplay?.play();
        }

        return () => { };
    }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor, onSelect, openedMemberIndex]);

    const handleCardClick = (index: number) => {
        if (openedMemberIndex === index) {
            setOpenedMemberIndex(null);
        } else {
            setOpenedMemberIndex(index);
        }
    };

    return (
        <section className="py-20 relative overflow-hidden transition-colors duration-500">
            {/* Background decorative elements for "Liquid" feel */}
            <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-af-blue/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animation-delay-2000"></div>

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
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6">
                    {faculty.map((member, index) => (
                        <div
                            key={index}
                            className={`flex-[0_0_80%] md:flex-[0_0_35%] lg:flex-[0_0_28%] pl-6 transition-all duration-500 transform
                                    ${openedMemberIndex !== null && openedMemberIndex !== index ? 'blur-sm scale-95 opacity-50' : 'blur-0 scale-100 opacity-100'}
                                `}
                        >
                            <div
                                onClick={() => handleCardClick(index)}
                                className={`relative h-[500px] cursor-pointer rounded-[40px] overflow-hidden group transition-all duration-500
                                        bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl
                                        hover:shadow-af-blue/20 hover:border-af-blue/30
                                        ${openedMemberIndex === index ? 'ring-2 ring-af-blue/50' : ''}
                                    `}
                            >
                                {/* Parallax Image Layer - Increased buffer for movement */}
                                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                                    <div className="parallax-layer absolute inset-0 w-[150%] -left-[25%]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    </div>
                                </div>

                                {/* Content (Visible state) */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                    <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                                        <p className="text-af-blue font-bold tracking-widest text-xs uppercase mb-2">
                                            {member.designation}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-4">
                                            {member.department}
                                        </p>

                                        {/* Expanded detail placeholder (simplified for initial view) */}
                                        <div className={`mt-4 overflow-hidden transition-all duration-500 ${openedMemberIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                                                "{member.quote}"
                                            </p>
                                            <div className="inline-flex items-center text-xs font-bold text-af-blue uppercase tracking-widest">
                                                Details <ChevronRight size={14} className="ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Open/Close indicator */}
                                <div className="absolute top-6 right-6 z-30">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-300 rotate-0 group-hover:rotate-90">
                                        {openedMemberIndex === index ? <X size={20} /> : <ChevronRight size={20} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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

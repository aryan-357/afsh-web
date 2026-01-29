import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './parallax-carousel.css';

const TWEEN_FACTOR_BASE = 0.2;

export interface ParallaxSlide {
    id: number;
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
}

const defaultSlides: ParallaxSlide[] = [
    {
        id: 1,
        imageUrl: '/img/IAF_Garud_commando.jpg',
        title: 'Guardians of the Sky',
        subtitle: 'Elite Garud Commando Force',
        buttonText: 'Join Us',
        buttonLink: '/admissions'
    },
    {
        id: 2,
        imageUrl: '/img/wp5534129-lca-tejas-wallpapers.jpg',
        title: 'LCA Tejas',
        subtitle: 'Pride of Indian Aviation',
        buttonText: 'Our Fleet',
        buttonLink: '/academics'
    },
    {
        id: 3,
        imageUrl: '/img/wp6738688-indian-air-force-desktop-wallpapers.jpg',
        title: 'Sky Warriors',
        subtitle: 'Defending the Skies with Valor',
        buttonText: 'Learn More',
        buttonLink: '/about'
    },
    {
        id: 4,
        imageUrl: '/img/wp6739097-indian-air-force-desktop-wallpapers.jpg',
        title: 'Air Superiority',
        subtitle: 'Touch the Sky with Glory',
        buttonText: 'Gallery',
        buttonLink: '/gallery'
    }
];

const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    duration: 25 // Snappy feel
};

interface ParallaxCarouselProps {
    slides?: ParallaxSlide[];
}

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ slides = defaultSlides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const onPrevClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const onNextClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const onDotClick = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla-parallax__layer') as HTMLElement;
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

                    const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
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

        setScrollSnaps(emblaApi.scrollSnapList());
        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);
        onSelect(emblaApi);

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('reInit', onSelect)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
            .on('select', onSelect);
    }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor, onSelect]);

    return (
        <div className="embla-parallax">
            <div className="embla-parallax__viewport" ref={emblaRef}>
                <div className="embla-parallax__container">
                    {slides.map((slide, index) => (
                        <div className="embla-parallax__slide" key={slide.id}>
                            <div className="embla-parallax__inner">
                                <div className="embla-parallax__layer">
                                    <img
                                        className="embla-parallax__img"
                                        src={slide.imageUrl}
                                        alt={slide.title}
                                    />
                                </div>

                                {/* Visual Overlay */}
                                <div className="absolute inset-0 bg-black/40 z-[5]"></div>

                                {/* Content Container */}
                                <div className="embla-parallax__content">
                                    <h2 className="embla-parallax__title text-4xl md:text-7xl lg:text-8xl">
                                        {slide.title}
                                    </h2>
                                    <p className="embla-parallax__subtitle text-xl md:text-2xl lg:text-3xl">
                                        {slide.subtitle}
                                    </p>
                                    <Link
                                        to={slide.buttonLink || '#'}
                                        className="px-10 py-4 bg-af-blue hover:bg-blue-700 text-white font-bold rounded-sm transition duration-300 shadow-2xl border-2 border-transparent hover:border-white text-lg tracking-wider uppercase pointer-events-auto inline-block"
                                    >
                                        {slide.buttonText || 'Learn More'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla-parallax__controls">
                <div className="embla-parallax__buttons">
                    <button
                        className="embla-parallax__button"
                        onClick={onPrevClick}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        className="embla-parallax__button"
                        onClick={onNextClick}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="embla-parallax__dots">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onDotClick(index)}
                            className={`embla-parallax__dot ${index === selectedIndex ? 'embla-parallax__dot--selected' : ''
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParallaxCarousel;

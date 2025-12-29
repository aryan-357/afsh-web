import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselSlide } from '../types';

const slides: CarouselSlide[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/school1/1920/1080',
    title: 'Excellence in Education',
    subtitle: 'Nurturing the future leaders of tomorrow'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/school2/1920/1080',
    title: 'Holistic Development',
    subtitle: 'Sports, Arts, and Academics in perfect harmony'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/school3/1920/1080',
    title: 'State of the Art Facilities',
    subtitle: 'Providing the best environment for learning'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased slightly to enjoy the animation
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[92vh] overflow-hidden bg-gray-900 group">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className={`w-full h-full object-cover opacity-60 transition-transform duration-[10000ms] ease-out origin-center transform ${
                    isActive ? 'scale-110' : 'scale-100'
                    }`}
                />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
              
              {/* Title */}
              <h2 
                className={`text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-xl transition-all duration-1000 delay-300 ease-out transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                } max-w-5xl leading-tight`}
              >
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p 
                className={`text-xl md:text-2xl lg:text-3xl text-gray-100 font-light drop-shadow-md max-w-3xl mb-10 tracking-wide transition-all duration-1000 delay-500 ease-out transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>

              {/* Button */}
              <div 
                 className={`transition-all duration-1000 delay-700 ease-out transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                 }`}
              >
                <button className="px-10 py-4 bg-af-blue hover:bg-blue-700 text-white font-bold rounded-sm transition duration-300 shadow-2xl border-2 border-transparent hover:border-white text-lg tracking-wider uppercase">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-20 pointer-events-none">
        <button 
            onClick={prevSlide}
            className="bg-transparent border border-white/30 hover:bg-white/20 text-white p-4 rounded-full transition backdrop-blur-sm group pointer-events-auto"
        >
            <ChevronLeft size={36} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
            onClick={nextSlide}
            className="bg-transparent border border-white/30 hover:bg-white/20 text-white p-4 rounded-full transition backdrop-blur-sm group pointer-events-auto"
        >
            <ChevronRight size={36} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ease-out ${
              index === currentSlide ? 'bg-af-gold w-16' : 'bg-white/40 hover:bg-white w-8'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
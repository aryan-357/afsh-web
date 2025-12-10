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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg transform transition-transform duration-700 translate-y-0">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl text-gray-200 font-light drop-shadow-md">
              {slide.subtitle}
            </p>
            <button className="mt-8 px-6 py-3 bg-af-blue hover:bg-blue-700 text-white font-bold rounded-md transition duration-300 shadow-lg border-2 border-transparent hover:border-af-gold">
              Learn More
            </button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-af-gold w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
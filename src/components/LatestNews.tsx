import React from 'react';
import './latest-news.css';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  alignment: 'center' | 'bottom';
  hasButton: boolean;
  borderColor: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Air Force Day Celebrations: A Tribute to Our Heroes",
    image: "https://picsum.photos/seed/afday2024/800/600",
    alignment: "center",
    hasButton: true,
    borderColor: "border-af-gold",
    link: "#"
  },
  {
    id: 2,
    title: "Class XII Board Results: Toppers Felicitated",
    image: "https://picsum.photos/seed/exam2024/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-af-blue",
    link: "#"
  },
  {
    id: 3,
    title: "Join us for the Annual Sports Meet 2024",
    image: "https://picsum.photos/seed/sports2024/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-red-600",
    link: "#"
  }
];

const LatestNews: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 flex justify-between items-end">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Latest News</h2>
          {/* View All Redirect Link */}
          <a 
            href="https://airforceschoolhindan.in/news" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block text-gray-500 dark:text-gray-400 font-serif italic text-lg hover:text-af-blue dark:hover:text-af-light transition-colors border-b border-transparent hover:border-af-blue dark:hover:border-af-light"
          >
            View All News
          </a>
        </div>
        
        {/* News Grid - Static 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative h-[400px] group overflow-hidden cursor-pointer border-t-4 ${item.borderColor} bg-gray-800 rounded-xl shadow-lg transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-105" 
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              />
              
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 ease-out" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }} />
              
              <div className={`absolute inset-0 p-8 flex flex-col ${item.alignment === 'center' ? 'justify-center items-center text-center' : 'justify-end items-center text-center pb-12'}`}>
                <h3 className="text-white font-serif font-bold text-2xl leading-tight mb-6 drop-shadow-xl">
                  {item.title}
                </h3>
                
                {item.hasButton && (
                  <a 
                    href={item.link} 
                    className="inline-block px-8 py-2.5 border-2 border-white text-white font-serif italic text-sm hover:bg-white hover:text-black transition-all duration-500 ease-out transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  >
                    Read Story
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden flex justify-center">
          <a 
            href="https://airforceschoolhindan.in/news" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 dark:text-gray-400 font-serif italic text-lg hover:text-af-blue transition-colors border-b border-af-blue"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

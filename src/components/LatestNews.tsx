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
    <section className="bg-white dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="w-full">
        {/* Section Header */}
        <div className="container mx-auto px-4 mb-6">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Latest News</h2>
        </div>
        
        {/* News Carousel - Continuous Scrolling */}
        <div className="news-carousel-container dark:bg-gray-800">
          <div className="news-carousel">
            {/* First set of items */}
            {newsItems.map((item) => (
              <div 
                key={item.id} 
                className={`news-carousel-item relative h-[350px] group overflow-hidden cursor-pointer border-t-4 ${item.borderColor} bg-gray-800 rounded-lg flex-shrink-0 w-[90vw] md:w-[350px]`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                <div className={`absolute inset-0 p-6 flex flex-col ${item.alignment === 'center' ? 'justify-center items-center text-center' : 'justify-end items-center text-center pb-8'}`}>
                  <h3 className="text-white font-serif font-bold text-xl md:text-2xl leading-tight mb-4 drop-shadow-lg">
                    {item.title}
                  </h3>
                  
                  {item.hasButton && (
                    <a 
                      href={item.link} 
                      className="inline-block px-6 py-2 border border-white text-white font-serif italic text-sm hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      Read Story
                    </a>
                  )}
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {newsItems.map((item) => (
              <div 
                key={`${item.id}-dup`} 
                className={`news-carousel-item relative h-[350px] group overflow-hidden cursor-pointer border-t-4 ${item.borderColor} bg-gray-800 rounded-lg flex-shrink-0 w-[90vw] md:w-[350px]`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                <div className={`absolute inset-0 p-6 flex flex-col ${item.alignment === 'center' ? 'justify-center items-center text-center' : 'justify-end items-center text-center pb-8'}`}>
                  <h3 className="text-white font-serif font-bold text-xl md:text-2xl leading-tight mb-4 drop-shadow-lg">
                    {item.title}
                  </h3>
                  
                  {item.hasButton && (
                    <a 
                      href={item.link} 
                      className="inline-block px-6 py-2 border border-white text-white font-serif italic text-sm hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      Read Story
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Redirect Link */}
        <div className="container mx-auto px-4 mt-6 flex justify-end">
          <a 
            href="https://airforceschoolhindan.in/news" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 dark:text-gray-400 font-serif italic text-lg hover:text-af-blue dark:hover:text-af-light transition-colors border-b border-transparent hover:border-af-blue dark:hover:border-af-light"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

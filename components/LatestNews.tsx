import React from 'react';

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
    borderColor: "border-af-gold", // Gold top border
    link: "#"
  },
  {
    id: 2,
    title: "Class XII Board Results: Toppers Felicitated",
    image: "https://picsum.photos/seed/exam2024/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-af-blue", // Blue top border
    link: "#"
  },
  {
    id: 3,
    title: "Join us for the Annual Sports Meet 2024",
    image: "https://picsum.photos/seed/sports2024/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-red-600", // Red top border accent
    link: "#"
  }
];

const LatestNews: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pb-8 transition-colors duration-300">
      <div className="w-full">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
            {newsItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`relative h-[450px] group overflow-hidden cursor-pointer border-t-4 ${item.borderColor}`}
                >
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    {/* Content Container */}
                    <div className={`absolute inset-0 p-8 flex flex-col ${item.alignment === 'center' ? 'justify-center items-center text-center' : 'justify-end items-center text-center pb-12'}`}>
                        <h3 className="text-white font-serif font-bold text-2xl md:text-3xl leading-tight mb-6 drop-shadow-lg max-w-sm">
                            {item.title}
                        </h3>
                        
                        {item.hasButton && (
                            <a 
                              href={item.link} 
                              className="inline-block px-8 py-3 border border-white text-white font-serif italic text-lg hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                Read Story
                            </a>
                        )}
                    </div>
                </div>
            ))}
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
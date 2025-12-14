import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import { NewsItem } from '@/types';
import { Calendar, ChevronRight } from 'lucide-react';

const fullNewsList: NewsItem[] = [
  {
    id: 1,
    title: "Air Force Day Celebrations: A Tribute to Our Heroes",
    image: "https://picsum.photos/seed/afday2024/800/600",
    alignment: "center",
    hasButton: true,
    borderColor: "border-af-gold",
    link: "#",
    date: "Oct 8, 2023",
    category: "Events",
    excerpt: "The school celebrated the 91st Air Force Day with great enthusiasm. Students performed a special assembly dedicated to the brave warriors of the sky."
  },
  {
    id: 2,
    title: "Class XII Board Results: Toppers Felicitated",
    image: "https://picsum.photos/seed/exam2024/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-af-blue",
    link: "#",
    date: "May 15, 2023",
    category: "Academics",
    excerpt: "We are proud to announce 100% pass results in CBSE Class XII examinations. The school topper secured 98.4% in the Science stream."
  },
  {
    id: 3,
    title: "Join us for the Annual Sports Meet 2024",
    image: "https://picsum.photos/seed/sports2024/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-red-600",
    link: "#",
    date: "Nov 10, 2023",
    category: "Sports",
    excerpt: "The much-awaited Annual Sports Meet is scheduled for November. Preparations are in full swing as houses compete for the championship trophy."
  },
  {
    id: 4,
    title: "Workshop on Digital Wellness and Cyber Safety",
    image: "https://picsum.photos/seed/tech/800/600",
    alignment: "bottom",
    hasButton: true,
    borderColor: "border-green-500",
    link: "#",
    date: "Sep 22, 2023",
    category: "Workshops",
    excerpt: "A session was organized for students of classes IX-XII on cyber safety and responsible use of social media by expert guest speakers."
  },
  {
    id: 5,
    title: "Inter-School Debate Competition Winners",
    image: "https://picsum.photos/seed/debate/800/600",
    alignment: "center",
    hasButton: false,
    borderColor: "border-purple-500",
    link: "#",
    date: "Aug 12, 2023",
    category: "Achievements",
    excerpt: "Our school debate team secured the first position in the zonal level competition. Congratulations to the winners for their articulate performance."
  },
  {
    id: 6,
    title: "Plantation Drive: Green School Initiative",
    image: "https://picsum.photos/seed/nature/800/600",
    alignment: "bottom",
    hasButton: false,
    borderColor: "border-emerald-600",
    link: "#",
    date: "Jul 05, 2023",
    category: "Community",
    excerpt: "Over 500 saplings were planted in and around the school campus as part of the Van Mahotsav week celebrations."
  }
];

const NewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0">
             <img src="https://picsum.photos/seed/newsheader/1920/600" className="w-full h-full object-cover opacity-20" alt="News Header"/>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">News & Happenings</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay updated with the latest events, achievements, and announcements from Air Force School Hindan.
            </p>
          </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullNewsList.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group flex flex-col h-full">
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-af-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {item.category || 'News'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{item.date || 'Recent'}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>

                <a href={item.link} className="inline-flex items-center gap-2 text-af-blue dark:text-af-light font-bold text-sm hover:underline mt-auto">
                  Read Full Story <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-12 flex justify-center">
           <div className="flex gap-2">
             <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition">1</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-af-blue text-white shadow-lg">2</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition">3</button>
             <span className="flex items-end px-2 text-gray-400">...</span>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition">8</button>
           </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
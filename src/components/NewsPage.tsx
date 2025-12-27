import React from 'react';
import { Calendar, ChevronRight, Share2, ArrowRight } from 'lucide-react';
import Silk from './Silk';

const newsCategories = [
    { id: 'all', label: 'All Updates' },
    { id: 'academic', label: 'Academics' },
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Sports' },
    { id: 'circulars', label: 'Circulars' },
];

const featuredNews = {
    id: 1,
    title: "Annual Sports Day 2024: Celebrating Excellence in Athletics",
    date: "January 15, 2025",
    category: "Events",
    image: "https://picsum.photos/seed/sportsday_hero/1200/600",
    excerpt: "The school ground came alive with energy and enthusiasm as students participated in the Annual Sports Meet. Air Marshal XYZ graced the occasion as the Chief Guest.",
    author: "Sports Department"
};

const newsArticles = [
    {
        id: 2,
        title: "CBSE Class X & XII Pre-Board Schedule Released",
        date: "December 20, 2024",
        category: "Academic",
        image: "https://picsum.photos/seed/exam2/600/400",
        excerpt: "The date sheet for the upcoming pre-board examinations has been finalized. Students are advised to check the schedule and prepare accordingly."
    },
    {
        id: 3,
        title: "Inter-School Debate Competition Winners",
        date: "December 18, 2024",
        category: "Academics",
        image: "https://picsum.photos/seed/debate/600/400",
        excerpt: "Our school team secured the first position in the Regional Inter-School Debate Championship held at Delhi Public School."
    },
    {
        id: 4,
        title: "Eco-Club Plantation Drive",
        date: "December 15, 2024",
        category: "Events",
        image: "https://picsum.photos/seed/plant/600/400",
        excerpt: "Promoting a greener future, the Eco-Club organized a massive plantation drive within the school campus and surrounding roster areas."
    },
    {
        id: 5,
        title: "Winter Break Notification",
        date: "December 10, 2024",
        category: "Circulars",
        image: "https://picsum.photos/seed/winter/600/400",
        excerpt: "The school will remain closed for winter break from Dec 30th to Jan 10th. Administrative offices will remain open."
    },
    {
        id: 6,
        title: "New Robotics Lab Inauguration",
        date: "December 05, 2024",
        category: "Academics",
        image: "https://picsum.photos/seed/robot/600/400",
        excerpt: "To foster innovation and technical skills, a state-of-the-art Robotics Lab was inaugurated by the Principal today."
    },
];

const NewsPage = () => {
    const [activeCategory, setActiveCategory] = React.useState('all');

    const filteredNews = activeCategory === 'all'
        ? newsArticles
        : newsArticles.filter(n => n.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(n.category.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pb-12 transition-colors duration-300">

            {/* Header Section */}
            <div className="relative text-white pt-32 pb-16 mb-12 overflow-hidden">
                {/* Silk Background */}
                <Silk
                    speed={3}
                    scale={1.5}
                    color="#1a365d"
                    noiseIntensity={1.2}
                    rotation={0}
                />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in-up drop-shadow-lg">News & Chronicles</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-100 drop-shadow">
                        Stay updated with the latest happenings, achievements, and announcements from Air Force School Hindan.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">

                {/* Featured Article */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-af-gold rounded-full"></span>
                        Featured Story
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                        <div className="relative overflow-hidden h-[300px] md:h-auto">
                            <img
                                src={featuredNews.image}
                                alt={featuredNews.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-af-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {featuredNews.category}
                            </div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredNews.date}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>{featuredNews.author}</span>
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                                {featuredNews.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {featuredNews.excerpt}
                            </p>
                            <button className="flex items-center gap-2 text-af-blue dark:text-af-light font-bold uppercase tracking-wider text-sm hover:underline">
                                Read Full Story <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Categories & Filter */}
                <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                    {newsCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-af-blue text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map((item, idx) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2 block flex items-center gap-1">
                                    <Calendar size={12} /> {item.date}
                                </span>
                                <h4 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                    {item.excerpt}
                                </p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-gray-700">
                                    <button className="text-sm font-bold text-af-blue dark:text-af-light flex items-center gap-1 hover:gap-2 transition-all">
                                        Read More <ChevronRight size={14} />
                                    </button>
                                    <button className="text-gray-400 hover:text-af-blue dark:hover:text-af-light transition-colors">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup (Optional Polish) */}
                <div className="mt-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-af-blue rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-af-gold rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10">Subscribe to School Newsletter</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">Get the latest updates, circulars, and event notifications delivered directly to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative z-10">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-af-blue flex-1 backdrop-blur-sm"
                        />
                        <button className="px-8 py-3 bg-af-blue hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/50">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;

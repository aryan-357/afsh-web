import React, { useState } from 'react';
import { Trophy, Award, Star } from 'lucide-react';

export interface Topper {
  id: number;
  name: string;
  percentage: number;
  position: number;
  classStr: string;
  image: string;
}

const defaultToppers12: Topper[] = [
  {
    id: 1,
    name: 'Kritika Singh',
    percentage: 92.00,
    position: 1,
    classStr: 'Science',
    image: 'https://picsum.photos/seed/topper1/400/400'
  },
  {
    id: 2,
    name: 'Arinav Attri',
    percentage: 91.00,
    position: 2,
    classStr: 'Commerce',
    image: 'https://picsum.photos/seed/topper2/400/400'
  },
  {
    id: 3,
    name: 'Pratigya Chaudhary',
    percentage: 90.00,
    position: 3,
    classStr: 'Humanities',
    image: 'https://picsum.photos/seed/topper3/400/400'
  }
];

const defaultToppers10: Topper[] = [
  {
    id: 1,
    name: 'Ananya Singh',
    percentage: 98.60,
    position: 1,
    classStr: 'Class X',
    image: 'https://picsum.photos/seed/topper4/400/400'
  },
  {
    id: 2,
    name: 'Anuska Gupta',
    percentage: 98.00,
    position: 2,
    classStr: 'Class X',
    image: 'https://picsum.photos/seed/topper5/400/400'
  },
  {
    id: 3,
    name: 'Arunima Saxena',
    percentage: 97.40,
    position: 3,
    classStr: 'Class X',
    image: 'https://picsum.photos/seed/topper6/400/400'
  }
];

interface TopperSectionProps {
  class12Toppers?: Topper[];
  class10Toppers?: Topper[];
}

const TopperSection: React.FC<TopperSectionProps> = ({
  class12Toppers = defaultToppers12,
  class10Toppers = defaultToppers10
}) => {
  const [activeTab, setActiveTab] = useState<'XII' | 'X'>('X');

  const currentToppers = activeTab === 'XII' ? class12Toppers : class10Toppers;

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-white" />;
      case 2:
        return <Award className="w-6 h-6 text-white" />;
      case 3:
        return <Star className="w-6 h-6 text-white" />;
      default:
        return null;
    }
  };

  const getRankColor = (position: number) => {
    switch (position) {
      case 1:
        return 'from-af-gold/20 to-transparent border-af-gold/30';
      case 2:
        return 'from-gray-300/20 to-transparent border-gray-300/30';
      case 3:
        return 'from-orange-400/20 to-transparent border-orange-400/30';
      default:
        return 'from-af-blue/10 to-transparent border-af-blue/20';
    }
  };

  const getBadgeColor = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-500';
      case 2:
        return 'bg-gray-400';
      case 3:
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-af-blue dark:text-af-light font-bold tracking-widest text-xs uppercase mb-2 block">Academic Excellence</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Academic Toppers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Celebrating our outstanding achievers who have demonstrated exceptional academic performance
          </p>

          {/* Tabs */}
          <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-full p-1 border border-gray-200 dark:border-gray-600">
            <button
              onClick={() => setActiveTab('XII')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'XII'
                ? 'bg-white dark:bg-gray-800 text-af-blue dark:text-af-light shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
            >
              Class XII
            </button>
            <button
              onClick={() => setActiveTab('X')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'X'
                ? 'bg-white dark:bg-gray-800 text-af-blue dark:text-af-light shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
            >
              Class X
            </button>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {currentToppers.map((topper) => (
            <div
              key={topper.id}
              className={`relative group bg-gradient-to-br ${getRankColor(topper.position)} backdrop-blur-sm border rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center`}
            >
              {/* Position Badge with Icon */}
              <div className={`absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full ${getBadgeColor(topper.position)} shadow-lg z-10`}>
                {getRankIcon(topper.position)}
              </div>

              {/* Image */}
              <div className="relative mb-6 mt-4">
                <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-br ${getRankColor(topper.position).replace('from-', 'from-').replace('to-', 'to-')} `}>
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">#{topper.position}</span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
                {topper.name}
              </h3>

              {/* Class */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                {topper.classStr}
              </p>

              {/* Percentage Bar */}
              <div className="w-full mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Score</span>
                  <span className="text-lg font-bold text-af-blue dark:text-af-light">
                    {topper.percentage.toFixed(2)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-af-blue to-af-light dark:from-af-light dark:to-blue-300 h-full rounded-full transition-all duration-1000 ease-out group-hover:from-af-gold group-hover:to-af-light"
                    style={{ width: `${topper.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto hidden md:grid">
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-3xl font-bold text-af-blue dark:text-af-light">98.6%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Highest Score</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-3xl font-bold text-af-blue dark:text-af-light">95%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Average Top 10</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-3xl font-bold text-af-blue dark:text-af-light">🏆</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Excellence Badge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopperSection;

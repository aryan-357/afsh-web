import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

interface Topper {
  id: number;
  name: string;
  percentage: number;
  position: number;
  class: string;
}

const TopperSection: React.FC = () => {
  const toppers: Topper[] = [
    {
      id: 1,
      name: 'Kritika Singh',
      percentage: 92.00,
      position: 1,
      class: 'Science'
    },
    {
      id: 2,
      name: 'Arinav Attri',
      percentage: 91.00,
      position: 2,
      class: 'Commerce'
    },
    {
      id: 3,
      name: 'Pratigya Chaudhary',
      percentage: 90.00,
      position: 3,
      class: 'Humanities'
    }
  ];

  const getRankIcon = (position: number) => {
    switch(position) {
      case 1:
        return <Trophy className="w-6 h-6 text-af-gold" />;
      case 2:
        return <Award className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Star className="w-6 h-6 text-orange-600" />;
      default:
        return null;
    }
  };

  const getRankColor = (position: number) => {
    switch(position) {
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

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-af-blue dark:text-af-light font-bold tracking-widest text-xs uppercase mb-2 block">Academic Excellence</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Academic Toppers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrating our outstanding achievers who have demonstrated exceptional academic performance
          </p>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {toppers.map((topper) => (
            <div
              key={topper.id}
              className={`relative group bg-gradient-to-br ${getRankColor(topper.position)} backdrop-blur-sm border rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 p-8`}
            >
              {/* Position Badge */}
              <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-af-blue dark:bg-af-light text-white dark:text-gray-900 font-bold text-lg">
                #{topper.position}
              </div>

              {/* Rank Icon */}
              <div className="flex justify-center mb-6">
                {getRankIcon(topper.position)}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {topper.name}
              </h3>

              {/* Class */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
                {topper.class}
              </p>

              {/* Percentage Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Score</span>
                  <span className="text-lg font-bold text-af-blue dark:text-af-light">
                    {topper.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-af-blue to-af-light dark:from-af-light dark:to-blue-300 h-full rounded-full transition-all duration-300 group-hover:from-af-gold group-hover:to-af-light"
                    style={{ width: `${topper.percentage}%` }}
                  />
                </div>
              </div>

              {/* Decorative Line */}
              <div className="h-1 bg-gradient-to-r from-af-blue via-af-gold to-af-light dark:from-af-light dark:via-af-gold dark:to-blue-300 rounded-full mb-4" />

              {/* Achievement Button */}
              <button className="w-full py-2 px-4 rounded-lg bg-af-blue dark:bg-af-light text-white dark:text-gray-900 font-semibold text-sm hover:shadow-lg hover:scale-105 transition duration-300">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-3xl font-bold text-af-blue dark:text-af-light">98.5%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Highest Score</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-3xl font-bold text-af-blue dark:text-af-light">97%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Average Score</p>
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


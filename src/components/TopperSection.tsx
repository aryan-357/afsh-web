import React, { useState } from 'react';

interface Topper {
  id: number;
  name: string;
  percentage: number;
  position: number;
  class: string;
  image: string;
}

const TopperSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'XII' | 'X'>('XII');

  const toppersXII: Topper[] = [
    { id: 1, name: 'Ananya Singh', percentage: 98.6, position: 1, class: 'Class XII', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya' },
    { id: 2, name: 'Anuska Gupta', percentage: 98.0, position: 2, class: 'Class XII', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anuska' },
    { id: 3, name: 'Arunima Saxena', percentage: 97.4, position: 3, class: 'Class XII', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arunima' },
  ];

  const toppersX: Topper[] = [
    { id: 4, name: 'Rahul Sharma', percentage: 97.8, position: 1, class: 'Class X', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul' },
    { id: 5, name: 'Priya Verma', percentage: 97.2, position: 2, class: 'Class X', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
    { id: 6, name: 'Amit Singh', percentage: 96.5, position: 3, class: 'Class X', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit' },
  ];

  const currentToppers = activeTab === 'XII' ? toppersXII : toppersX;

  return (
    <section className="py-16 bg-white dark:bg-[#111827] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif font-bold mb-4">Academic Toppers</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
            Celebrating our outstanding achievers who have demonstrated exceptional academic performance
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-[#1f2937] p-1 rounded-full flex gap-1">
            <button
              onClick={() => setActiveTab('XII')}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'XII' ? 'bg-white dark:bg-[#374151] text-af-blue dark:text-white shadow-md dark:shadow-lg' : 'text-gray-500 dark:text-gray-400 hover:text-af-blue dark:hover:text-white'
              }`}
            >
              Class XII
            </button>
            <button
              onClick={() => setActiveTab('X')}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'X' ? 'bg-white dark:bg-[#374151] text-af-blue dark:text-white shadow-md dark:shadow-lg' : 'text-gray-500 dark:text-gray-400 hover:text-af-blue dark:hover:text-white'
              }`}
            >
              Class X
            </button>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {currentToppers.map((topper) => (
            <div
              key={topper.id}
              className={`relative rounded-2xl p-8 border border-opacity-20 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-xl ${
                topper.position === 1 ? 'bg-yellow-50/50 dark:bg-[#1a1a10] border-yellow-500' :
                topper.position === 2 ? 'bg-gray-50/50 dark:bg-[#111827] border-gray-400' :
                'bg-orange-50/50 dark:bg-[#1a1310] border-orange-500'
              }`}
            >
              {/* Rank Icon */}
              <div className="absolute top-4 right-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  topper.position === 1 ? 'bg-yellow-500 text-black' :
                  topper.position === 2 ? 'bg-gray-400 text-black' :
                  'bg-orange-500 text-white'
                }`}>
                  {topper.position === 1 ? '🏆' : topper.position === 2 ? '🥈' : '⭐'}
                </div>
              </div>

              {/* Profile Image Circle */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white dark:border-[#1f2937] overflow-hidden bg-white shadow-md">
                    <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-[#111827] px-3 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 text-[10px] font-bold shadow-sm">
                    #{topper.position}
                  </div>
                </div>
              </div>

              {/* Name & Class */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{topper.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{topper.class}</p>
              </div>

              {/* Score Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Score</span>
                  <span className="text-lg font-bold text-af-blue dark:text-blue-500">{topper.percentage.toFixed(2)}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-af-blue dark:bg-blue-500 rounded-full"
                    style={{ width: `${topper.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#1f2937] rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
            <p className="text-4xl font-bold text-af-blue dark:text-blue-400 mb-1">98.6%</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Highest Score</p>
          </div>
          <div className="bg-white dark:bg-[#1f2937] rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
            <p className="text-4xl font-bold text-af-blue dark:text-blue-400 mb-1">95%</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Average Top 10</p>
          </div>
          <div className="bg-white dark:bg-[#1f2937] rounded-xl p-6 text-center border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300 flex flex-col items-center justify-center">
            <span className="text-3xl mb-1">🏆</span>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">Excellence Badge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopperSection;

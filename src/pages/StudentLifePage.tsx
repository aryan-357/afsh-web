<<<<<<< HEAD
import React, { useState, Suspense } from 'react';
import { Trophy, Users, Zap, Award, Shield } from 'lucide-react';
import Silk from '@/src/components/ui/Silk';

const StudentLifePage: React.FC = () => {
  const [activeHouse, setActiveHouse] = useState<string | null>(null);

  const houses = [
    {
      id: 'arjan',
      name: 'Arjan House',
      color: '#2563EB',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-600',
      icon: '🦅',
      description: 'The Sky Guardians',
      motto: 'Excellence through Courage',
      achievements: ['Annual Sports Championship', 'Academic Excellence Award', 'Community Service Leadership'],
      members: '185+ Students',
      house_master: 'Mr. Rajesh Kumar'
    },
    {
      id: 'sekhon',
      name: 'Sekhon House',
      color: '#DC2626',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-600',
      icon: '🔥',
      description: 'The Brave Hearts',
      motto: 'Unity in Strength',
      achievements: ['Debating Champions', 'Cultural Fest Winners', 'Best Team Spirit'],
      members: '192+ Students',
      house_master: 'Mrs. Seema Kori'
    },
    {
      id: 'subroto',
      name: 'Subroto House',
      color: '#FBBF24',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-600',
      icon: '⭐',
      description: 'The Shining Stars',
      motto: 'Integrity and Honor',
      achievements: ['Quiz Master Award', 'Science Fair Winners', 'Sporting Legends'],
      members: '178+ Students',
      house_master: 'Mrs. Prachi Sharma'
    },
    {
      id: 'katre',
      name: 'Katre House',
      color: '#16A34A',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-600',
      icon: '🌟',
      description: 'The Green Guardians',
      motto: 'Wisdom and Service',
      achievements: ['Environmental Champions', 'Literary Excellence', 'Humanitarian Award'],
      members: '188+ Students',
      house_master: 'Mr. Vikram Patel'
    }
  ];

  const clubs = [
    { name: 'Debate Club', icon: '🎤', desc: 'Develop public speaking and critical thinking skills' },
    { name: 'Science Club', icon: '🔬', desc: 'Explore innovations and conduct experiments' },
    { name: 'Literary Society', icon: '📖', desc: 'Creative writing, poetry, and storytelling' },
    { name: 'Art & Design', icon: '🎨', desc: 'Visual arts, photography, and creative expression' },
    { name: 'Music Club', icon: '🎵', desc: 'Classical, contemporary, and ensemble performances' },
    { name: 'Robotics Club', icon: '🤖', desc: 'Build and program robots for competitions' },
    { name: 'Drama Society', icon: '🎭', desc: 'Theater, acting, and stage productions' },
    { name: 'Cultural Society', icon: '🎪', desc: 'Celebrate diverse cultures and traditions' }
  ];

  const sports = [
    { name: 'Cricket', icon: '🏏', level: 'Inter-School Championship' },
    { name: 'Football', icon: '⚽', level: 'Regional Tournament' },
    { name: 'Basketball', icon: '🏀', level: 'State Championship' },
    { name: 'Badminton', icon: '🏸', level: 'National Qualifier' },
    { name: 'Tennis', icon: '🎾', level: 'District Level' },
    { name: 'Athletics', icon: '🏃', level: 'State Track & Field' },
    { name: 'Swimming', icon: '🏊', level: 'Regional Meet' },
    { name: 'Volleyball', icon: '🏐', level: 'Inter-House Championship' },
    { name: 'Table Tennis', icon: '🏓', level: 'State Tournament' },
    { name: 'Martial Arts', icon: '🥋', level: 'Karate & Judo Training' }
  ];

  const nccInfo = {
    title: 'NCC - National Cadet Corps',
    motto: 'Unity and Discipline',
    description: 'Develop Character, Discipline, and Leadership among the youth of India',
    units: '2 Units - Senior and Junior',
    strength: '200+ Cadets',
    achievements: [
      'National Cadet Prize - COAS Award',
      'Republic Day Parade Participants',
      'Annual Camp Excellence',
      'Leadership Development Program',
      'Community Service Initiatives'
    ],
    commandant: 'Colonel (Retd.) Harpreet Singh'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.5}
            color="#1a365d"
            noiseIntensity={1.2}
            rotation={0}
            fullScreen={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up drop-shadow-lg">
            Student <span className="text-af-gold">Life</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up delay-100 drop-shadow">
            Vibrant world of houses, clubs, sports, and co-curricular activities
          </p>
          <div className="w-24 h-1 bg-af-gold mx-auto mt-6 animate-fade-in-up delay-200"></div>
        </div>
      </section>

      {/* Houses Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">The Four Houses</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Houses foster healthy competition and foster brotherhood and sisterhood among students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {houses.map((house) => (
            <div
              key={house.id}
              className={`relative rounded-2xl overflow-hidden border-2 ${house.borderColor} transition-all duration-300 cursor-pointer group hover:shadow-2xl`}
              onClick={() => setActiveHouse(activeHouse === house.id ? null : house.id)}
            >
              {/* Background Color */}
              <div className={`${house.bgColor} p-8 relative`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-6xl mb-4">{house.icon}</div>
                    <h3 className={`text-3xl font-bold ${house.textColor} font-serif`}>{house.name}</h3>
                    <p className={`text-sm font-semibold ${house.textColor} mt-2 tracking-wide`}>{house.description}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-white dark:bg-gray-800 border-2 ${house.borderColor}`}>
                    <span className={`font-bold text-sm ${house.textColor}`}>{house.members}</span>
                  </div>
                </div>

                {/* Motto */}
                <div className="mb-6 pb-6 border-b-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold italic">
                    <span className={`${house.textColor}`}>Motto:</span> {house.motto}
                  </p>
                </div>

                {/* House Master */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">House Master</p>
                  <p className={`text-lg font-bold ${house.textColor}`}>{house.house_master}</p>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Notable Achievements</p>
                  <ul className="space-y-2">
                    {house.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <Trophy size={16} className={`flex-shrink-0 mt-0.5 ${house.textColor}`} />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand Button */}
                <div className={`text-center mt-4 transition-all duration-300 ${activeHouse === house.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <button className={`text-sm font-bold uppercase tracking-widest ${house.textColor}`}>
                    {activeHouse === house.id ? '− Collapse' : '+ Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Societies Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Clubs & Societies</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Explore diverse interests and develop your passions through our thriving clubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{club.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{club.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Sports Program</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive sports programs developing physical fitness and competitive spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sports.map((sport, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{sport.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{sport.name}</h3>
              <p className="text-xs text-af-blue dark:text-af-light font-semibold uppercase tracking-wide">{sport.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NCC Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 rounded-2xl container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">🎖️</div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-2">{nccInfo.title}</h2>
              <p className="text-blue-100 italic text-lg">"{nccInfo.motto}"</p>
            </div>
          </div>

          <p className="text-blue-50 text-lg mb-8 leading-relaxed">{nccInfo.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Shield size={32} className="mb-2 text-yellow-400" />
              <p className="text-sm text-blue-100">Units</p>
              <p className="text-2xl font-bold text-white">{nccInfo.units}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Users size={32} className="mb-2 text-yellow-400" />
              <p className="text-sm text-blue-100">Cadets Strength</p>
              <p className="text-2xl font-bold text-white">{nccInfo.strength}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award size={32} className="mb-2 text-yellow-400" />
              <p className="text-sm text-blue-100">Commandant</p>
              <p className="text-xl font-bold text-white text-center">{nccInfo.commandant}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Notable Achievements</h3>
            <ul className="space-y-3">
              {nccInfo.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-blue-50">
                  <Zap size={20} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Join Us</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Be part of a vibrant community that celebrates excellence, friendship, and personal growth
        </p>
        <button className="bg-white text-af-blue hover:bg-blue-50 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors duration-300">
          Explore More
        </button>
      </section>
    </div>
  );
};

export default StudentLifePage;

=======
import React, { useState, Suspense } from 'react';
import { Trophy, Users, Zap, Award, Shield } from 'lucide-react';
import Silk from '@/src/components/ui/Silk';

const StudentLifePage: React.FC = () => {
  const [activeHouse, setActiveHouse] = useState<string | null>(null);

  const houses = [
    {
      id: 'arjan',
      name: 'Arjan House',
      color: '#2563EB',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-600',
      icon: '🦅',
      description: 'The Sky Guardians',
      motto: 'Excellence through Courage',
      achievements: ['Annual Sports Championship', 'Academic Excellence Award', 'Community Service Leadership'],
      members: '185+ Students',
      house_master: 'Mr. Rajesh Kumar'
    },
    {
      id: 'sekhon',
      name: 'Sekhon House',
      color: '#DC2626',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-600',
      icon: '🔥',
      description: 'The Brave Hearts',
      motto: 'Unity in Strength',
      achievements: ['Debating Champions', 'Cultural Fest Winners', 'Best Team Spirit'],
      members: '192+ Students',
      house_master: 'Mrs. Seema Kori'
    },
    {
      id: 'subroto',
      name: 'Subroto House',
      color: '#FBBF24',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-600',
      icon: '⭐',
      description: 'The Shining Stars',
      motto: 'Integrity and Honor',
      achievements: ['Quiz Master Award', 'Science Fair Winners', 'Sporting Legends'],
      members: '178+ Students',
      house_master: 'Mrs. Prachi Sharma'
    },
    {
      id: 'katre',
      name: 'Katre House',
      color: '#16A34A',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-600',
      icon: '🌟',
      description: 'The Green Guardians',
      motto: 'Wisdom and Service',
      achievements: ['Environmental Champions', 'Literary Excellence', 'Humanitarian Award'],
      members: '188+ Students',
      house_master: 'Mr. Vikram Patel'
    }
  ];

  const clubs = [
    { name: 'Debate Club', icon: '🎤', desc: 'Develop public speaking and critical thinking skills' },
    { name: 'Science Club', icon: '🔬', desc: 'Explore innovations and conduct experiments' },
    { name: 'Literary Society', icon: '📖', desc: 'Creative writing, poetry, and storytelling' },
    { name: 'Art & Design', icon: '🎨', desc: 'Visual arts, photography, and creative expression' },
    { name: 'Music Club', icon: '🎵', desc: 'Classical, contemporary, and ensemble performances' },
    { name: 'Robotics Club', icon: '🤖', desc: 'Build and program robots for competitions' },
    { name: 'Drama Society', icon: '🎭', desc: 'Theater, acting, and stage productions' },
    { name: 'Cultural Society', icon: '🎪', desc: 'Celebrate diverse cultures and traditions' }
  ];

  const sports = [
    { name: 'Cricket', icon: '🏏', level: 'Inter-School Championship' },
    { name: 'Football', icon: '⚽', level: 'Regional Tournament' },
    { name: 'Basketball', icon: '🏀', level: 'State Championship' },
    { name: 'Badminton', icon: '🏸', level: 'National Qualifier' },
    { name: 'Tennis', icon: '🎾', level: 'District Level' },
    { name: 'Athletics', icon: '🏃', level: 'State Track & Field' },
    { name: 'Swimming', icon: '🏊', level: 'Regional Meet' },
    { name: 'Volleyball', icon: '🏐', level: 'Inter-House Championship' },
    { name: 'Table Tennis', icon: '🏓', level: 'State Tournament' },
    { name: 'Martial Arts', icon: '🥋', level: 'Karate & Judo Training' }
  ];

  const nccInfo = {
    title: 'NCC - National Cadet Corps',
    motto: 'Unity and Discipline',
    description: 'Develop Character, Discipline, and Leadership among the youth of India',
    units: '2 Units - Senior and Junior',
    strength: '200+ Cadets',
    achievements: [
      'National Cadet Prize - COAS Award',
      'Republic Day Parade Participants',
      'Annual Camp Excellence',
      'Leadership Development Program',
      'Community Service Initiatives'
    ],
    commandant: 'Colonel (Retd.) Harpreet Singh'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.5}
            color="#1a365d"
            noiseIntensity={1.2}
            rotation={0}
            fullScreen={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up drop-shadow-lg">
            Student <span className="text-af-gold">Life</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up delay-100 drop-shadow">
            Vibrant world of houses, clubs, sports, and co-curricular activities
          </p>
          <div className="w-24 h-1 bg-af-gold mx-auto mt-6 animate-fade-in-up delay-200"></div>
        </div>
      </section>

      {/* Houses Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">The Four Houses</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Houses foster healthy competition and foster brotherhood and sisterhood among students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {houses.map((house) => (
            <div
              key={house.id}
              className={`relative rounded-2xl overflow-hidden border-2 ${house.borderColor} transition-all duration-300 cursor-pointer group hover:shadow-2xl`}
              onClick={() => setActiveHouse(activeHouse === house.id ? null : house.id)}
            >
              {/* Background Color */}
              <div className={`${house.bgColor} p-8 relative`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-6xl mb-4">{house.icon}</div>
                    <h3 className={`text-3xl font-bold ${house.textColor} font-serif`}>{house.name}</h3>
                    <p className={`text-sm font-semibold ${house.textColor} mt-2 tracking-wide`}>{house.description}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-white dark:bg-gray-800 border-2 ${house.borderColor}`}>
                    <span className={`font-bold text-sm ${house.textColor}`}>{house.members}</span>
                  </div>
                </div>

                {/* Motto */}
                <div className="mb-6 pb-6 border-b-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold italic">
                    <span className={`${house.textColor}`}>Motto:</span> {house.motto}
                  </p>
                </div>

                {/* House Master */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">House Master</p>
                  <p className={`text-lg font-bold ${house.textColor}`}>{house.house_master}</p>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Notable Achievements</p>
                  <ul className="space-y-2">
                    {house.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <Trophy size={16} className={`flex-shrink-0 mt-0.5 ${house.textColor}`} />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand Button */}
                <div className={`text-center mt-4 transition-all duration-300 ${activeHouse === house.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <button className={`text-sm font-bold uppercase tracking-widest ${house.textColor}`}>
                    {activeHouse === house.id ? '− Collapse' : '+ Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Societies Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Clubs & Societies</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Explore diverse interests and develop your passions through our thriving clubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{club.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{club.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Sports Program</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive sports programs developing physical fitness and competitive spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sports.map((sport, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{sport.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{sport.name}</h3>
              <p className="text-xs text-af-blue dark:text-af-light font-semibold uppercase tracking-wide">{sport.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NCC Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 rounded-2xl container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">🎖️</div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-2">{nccInfo.title}</h2>
              <p className="text-blue-100 italic text-lg">"{nccInfo.motto}"</p>
            </div>
          </div>

          <p className="text-blue-50 text-lg mb-8 leading-relaxed">{nccInfo.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Shield size={32} className="mb-2 text-yellow-400" />
              <p className="text-sm text-blue-100">Units</p>
              <p className="text-2xl font-bold text-white">{nccInfo.units}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Users size={32} className="mb-2 text-yellow-400" />
              <p className="text-sm text-blue-100">Cadets Strength</p>
              <p className="text-2xl font-bold text-white">{nccInfo.strength}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award size={32} className="mb-2 text-yellow-400" />
              <p className="text-sm text-blue-100">Commandant</p>
              <p className="text-xl font-bold text-white text-center">{nccInfo.commandant}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Notable Achievements</h3>
            <ul className="space-y-3">
              {nccInfo.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-blue-50">
                  <Zap size={20} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Join Us</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Be part of a vibrant community that celebrates excellence, friendship, and personal growth
        </p>
        <button className="bg-white text-af-blue hover:bg-blue-50 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors duration-300">
          Explore More
        </button>
      </section>
    </div>
  );
};

export default StudentLifePage;

>>>>>>> 167e490 (Adding Files)

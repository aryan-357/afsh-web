import React, { useState, Suspense } from 'react';
import { Trophy, Users, Zap, Award, Shield, Star, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Silk from '@/src/components/ui/Silk';

const StudentLifePage: React.FC = () => {
  const [activeHouse, setActiveHouse] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const slideInFromLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

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

        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center pt-20"
          {...fadeIn}
          transition={{ delay: 0.1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
            {...slideInFromLeft}
            transition={{ delay: 0.2 }}
          >
            Student <span className="text-af-gold">Life</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow"
            {...slideInFromRight}
            transition={{ delay: 0.3 }}
          >
            Vibrant world of houses, clubs, sports, and co-curricular activities
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </section>

      {/* Houses Section */}
      <motion.section 
        className="container mx-auto px-4 mb-20"
        {...fadeIn}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="text-center mb-12"
          {...slideInFromLeft}
          transition={{ delay: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
            {...scaleIn}
            transition={{ delay: 0.7 }}
          >
            The Four Houses
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            {...slideInFromRight}
            transition={{ delay: 0.8 }}
          >
            Houses foster healthy competition and foster brotherhood and sisterhood among students
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {houses.map((house, index) => (
            <motion.div
              key={house.id}
              className={`relative rounded-2xl overflow-hidden border-2 ${house.borderColor} transition-all duration-300 cursor-pointer group hover:shadow-2xl`}
              onClick={() => setActiveHouse(activeHouse === house.id ? null : house.id)}
              {...scaleIn}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Clubs & Societies Section */}
      <motion.section 
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20"
        {...fadeIn}
        transition={{ delay: 1.3 }}
      >
        <motion.div 
          className="container mx-auto px-4"
          {...slideInFromLeft}
          transition={{ delay: 1.4 }}
        >
          <motion.div 
            className="text-center mb-12"
            {...scaleIn}
            transition={{ delay: 1.5 }}
          >
            <motion.h2 
              className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
              {...slideInFromRight}
              transition={{ delay: 1.6 }}
            >
              Clubs & Societies
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
              {...fadeIn}
              transition={{ delay: 1.7 }}
            >
              Explore diverse interests and develop your passions through our thriving clubs
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
                {...scaleIn}
                transition={{ delay: 1.8 + idx * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {club.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{club.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{club.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Sports Section */}
      <motion.section 
        className="container mx-auto px-4 mb-20"
        {...fadeIn}
        transition={{ delay: 2.2 }}
      >
        <motion.div 
          className="text-center mb-12"
          {...slideInFromLeft}
          transition={{ delay: 2.3 }}
        >
          <motion.h2 
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
            {...scaleIn}
            transition={{ delay: 2.4 }}
          >
            Sports Program
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            {...slideInFromRight}
            transition={{ delay: 2.5 }}
          >
            Comprehensive sports programs developing physical fitness and competitive spirit
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sports.map((sport, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800 group"
              {...scaleIn}
              transition={{ delay: 2.6 + idx * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.6 }}
              >
                {sport.icon}
              </motion.div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{sport.name}</h3>
              <p className="text-xs text-af-blue dark:text-af-light font-semibold uppercase tracking-wide">{sport.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* NCC Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 rounded-2xl container mx-auto px-4 mb-20"
        {...scaleIn}
        transition={{ delay: 3.1 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeIn}
          transition={{ delay: 3.2 }}
        >
          <motion.div 
            className="flex items-start gap-6 mb-8"
            {...slideInFromLeft}
            transition={{ delay: 3.3 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎖️
            </motion.div>
            <div>
              <motion.h2 
                className="text-4xl font-serif font-bold mb-2"
                {...slideInFromRight}
                transition={{ delay: 3.4 }}
              >
                {nccInfo.title}
              </motion.h2>
              <motion.p 
                className="text-blue-100 italic text-lg"
                {...fadeIn}
                transition={{ delay: 3.5 }}
              >
                "{nccInfo.motto}"
              </motion.p>
            </div>
          </motion.div>

          <motion.p 
            className="text-blue-50 text-lg mb-8 leading-relaxed"
            {...slideInFromLeft}
            transition={{ delay: 3.6 }}
          >
            {nccInfo.description}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              {...scaleIn}
              transition={{ delay: 3.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Shield size={32} className="mb-2 text-yellow-400" />
              </motion.div>
              <p className="text-sm text-blue-100">Units</p>
              <p className="text-2xl font-bold text-white">{nccInfo.units}</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              {...scaleIn}
              transition={{ delay: 3.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users size={32} className="mb-2 text-yellow-400" />
              </motion.div>
              <p className="text-sm text-blue-100">Cadets Strength</p>
              <p className="text-2xl font-bold text-white">{nccInfo.strength}</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              {...scaleIn}
              transition={{ delay: 3.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award size={32} className="mb-2 text-yellow-400" />
              </motion.div>
              <p className="text-sm text-blue-100">Commandent</p>
              <p className="text-xl font-bold text-white text-center">{nccInfo.commandant}</p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20"
            {...fadeIn}
            transition={{ delay: 4.0 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-yellow-400"
              {...slideInFromLeft}
              transition={{ delay: 4.1 }}
            >
              Notable Achievements
            </motion.h3>
            <ul className="space-y-3">
              {nccInfo.achievements.map((achievement, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start gap-3 text-blue-50"
                  {...slideInFromRight}
                  transition={{ delay: 4.2 + idx * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap size={20} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                  </motion.div>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Join Us</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Be part of a vibrant community that celebrates excellence, friendship, and personal growth
        </p>
        <Link to="/">
          <button className="bg-white text-af-blue hover:bg-blue-50 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors duration-300">
            Explore More
          </button>
        </Link>
      </section>
    </div>
  );
};

export default StudentLifePage;


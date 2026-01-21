/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, Suspense } from 'react';
import { BookOpen, CheckCircle, Trophy, ArrowRight, GraduationCap, Award, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp, fadeIn, slideInFromLeft, slideInFromRight, scaleIn } from '../../utils/animations';
import { useTinaPage } from '@/src/hooks/useTinaPage';

const AcademicsPage: React.FC = () => {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const { data, loading } = useTinaPage('academics.md');

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Loading...</div>;
  }

  const pageData = data?.page;
  if (!pageData) return null;

  const departments = pageData.departments || [];
  const curriculum = pageData.curriculum || [];
  const scholars = pageData.scholars || [];
  const academicCalendar = pageData.academicCalendar || [];
  const hero = pageData.hero || { title: 'Academic Excellence', subtitle: 'Comprehensive curriculum...' };
  const cta = pageData.cta || { title: 'Ready to Excel?', text: 'Join our community...', buttonText: 'Explore Admissions', buttonLink: '/admissions' };

  return (
    <PageAnimate className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden mb-20">
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
          className="container mx-auto px-4 relative z-10 text-center pt-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
            variants={fadeInUp}
            custom={1}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow"
            variants={fadeInUp}
            custom={2}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            variants={fadeInUp}
            custom={3}
          />
        </motion.div>
      </section>

      <motion.section
        className="container mx-auto px-4 mb-20"
        id="curriculum"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Our Curriculum
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            CBSE Curriculum following the latest educational guidelines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculum.map((item, index) => (
            <motion.div
              key={item.class}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700"
              variants={fadeInUp}
              custom={index}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm font-bold text-af-blue dark:text-af-light uppercase tracking-widest">{item.class}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{item.title}</h3>
                  <p className="text-af-blue dark:text-af-light font-semibold mt-1">{item.focus}</p>
                </div>
                <BookOpen className="w-8 h-8 text-af-blue dark:text-af-light flex-shrink-0" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{item.description}</p>
              <div className="space-y-2">
                {item.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Departments Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20"
        id="departments"
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
              Academic Departments
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-lg"
              {...fadeIn}
              transition={{ delay: 1.7 }}
            >
              Specialized subject departments with expert faculty
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-all duration-300"
                {...scaleIn}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <button
                  onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{dept.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{dept.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{dept.description} • {dept.faculty}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-6 h-6 text-af-blue dark:text-af-light transition-transform duration-300 ${expandedDept === dept.id ? 'rotate-90' : ''}`} />
                </button>

                {expandedDept === dept.id && (
                  <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span>📖</span> Subjects Offered
                        </h4>
                        <ul className="space-y-2">
                          {dept.subjects.map((subject, idx) => (
                            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                              <span className="w-2 h-2 bg-af-blue dark:bg-af-light rounded-full"></span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3">🏆 Achievements</h4>
                          <ul className="space-y-2">
                            {dept.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <span className="text-af-gold">★</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-500">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-bold text-gray-900 dark:text-white">Department Head:</span><br />
                            {dept.staffLead}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Academic Calendar Section */}
      <motion.section
        className="container mx-auto px-4 mb-20"
        id="calendar"
        {...fadeIn}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="text-center mb-12"
          {...slideInFromLeft}
          transition={{ delay: 2.6 }}
        >
          <motion.h2
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
            {...scaleIn}
            transition={{ delay: 2.7 }}
          >
            Academic Calendar 2024-25
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg"
            {...slideInFromRight}
            transition={{ delay: 2.8 }}
          >
            Important dates and events throughout the year
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academicCalendar.map((event, idx) => {
            const typeColors = {
              'Start': 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
              'Activity': 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
              'Exam': 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
              'Event': 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
              'Result': 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
            };
            const typeIcons = {
              'Start': '🚀',
              'Activity': '🎯',
              'Exam': '✏️',
              'Event': '🎉',
              'Result': '📊'
            };

            return (
              <div key={idx} className={`rounded-lg p-6 border-l-4 ${typeColors[event.type as keyof typeof typeColors]} border-l-af-blue`}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{typeIcons[event.type as keyof typeof typeIcons]}</span>
                  <div>
                    <p className="text-sm font-bold text-af-blue dark:text-af-light uppercase tracking-widest">{event.month}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.event}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Scholars Section */}
      <motion.section
        className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 mb-20"
        id="scholars"
        {...scaleIn}
        transition={{ delay: 3.0 }}
        whileHover={{
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="text-center mb-12"
          {...fadeIn}
          transition={{ delay: 3.1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          </motion.div>
          <motion.h2
            className="text-4xl font-serif font-bold mb-2"
            {...slideInFromLeft}
            transition={{ delay: 3.2 }}
          >
            Top Academic Achievers
          </motion.h2>
          <motion.p
            className="text-blue-100"
            {...slideInFromRight}
            transition={{ delay: 3.3 }}
          >
            Celebrating excellence and outstanding performance
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {scholars.map((scholar, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              {...scaleIn}
              transition={{ delay: 3.4 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-6xl mb-4">{scholar.icon}</div>
              <p className="text-yellow-300 font-bold text-sm uppercase tracking-widest mb-2">Rank #{scholar.rank}</p>
              <h3 className="text-2xl font-bold mb-2">{scholar.name}</h3>
              <p className="text-blue-100 text-sm mb-3">{scholar.class}</p>
              <div className="bg-white/20 rounded-lg py-2 px-4">
                <p className="text-2xl font-bold text-yellow-300">{scholar.percentage}</p>
                <p className="text-xs text-blue-100">Aggregate Score</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Highlights */}
      <motion.section
        className="container mx-auto px-4 mb-20"
        {...fadeIn}
        transition={{ delay: 3.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '👨‍🏫', title: 'Expert Faculty', desc: '85+ Qualified & Experienced Teachers' },
            { icon: '📚', title: 'Rich Library', desc: '10,000+ Books & Digital Resources' },
            { icon: '🔬', title: 'Modern Labs', desc: 'State-of-the-art Science Laboratories' },
            { icon: '💻', title: 'Tech-Enabled', desc: 'Smart Classrooms & Digital Learning' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
              {...scaleIn}
              transition={{ delay: 3.9 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center"
        {...scaleIn}
        transition={{ delay: 4.3 }}
        whileHover={{
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.h2
          className="text-3xl font-serif font-bold mb-4"
          {...slideInFromLeft}
          transition={{ delay: 4.4 }}
        >
          Ready to Excel?
        </motion.h2>
        <motion.p
          className="text-blue-100 mb-6 max-w-2xl mx-auto"
          {...slideInFromRight}
          transition={{ delay: 4.5 }}
        >
          Join our community of learners and achievers. Explore our academic programs and discover your potential.
        </motion.p>
        <motion.div
          {...fadeIn}
          transition={{ delay: 4.6 }}
        >
          <Link to="/admissions">
            <motion.button
              className="bg-white text-af-blue hover:bg-blue-50 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors duration-300"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Admissions
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </PageAnimate>
  );
};

export default AcademicsPage;

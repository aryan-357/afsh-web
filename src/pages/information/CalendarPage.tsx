import React, { Suspense } from 'react';
import { Calendar as CalendarIcon, Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';

const CalendarPage: React.FC = () => {
  const academicCalendar = [
    { month: 'April', event: 'Academic Year Begins', type: 'Start' },
    { month: 'May-June', event: 'Summer Activities & Camps', type: 'Activity' },
    { month: 'September', event: 'Mid-Term Examinations', type: 'Exam' },
    { month: 'October', event: 'Sports & Cultural Week', type: 'Event' },
    { month: 'December', event: 'Annual Examinations Begin', type: 'Exam' },
    { month: 'January', event: 'Results Declared', type: 'Result' },
    { month: 'February', event: 'Annual Day Celebrations', type: 'Event' },
    { month: 'March', event: 'Board Exams (Classes X, XII)', type: 'Exam' },
  ];

  const typeColors: Record<string, string> = {
    'Start': 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    'Activity': 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    'Exam': 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    'Event': 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    'Result': 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  };

  const typeIcons: Record<string, string> = {
    'Start': '🚀',
    'Activity': '🎯',
    'Exam': '✏️',
    'Event': '🎉',
    'Result': '📊'
  };

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

  return (
    <PageAnimate className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20">
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
          className="container mx-auto px-4 relative z-10 text-center"
          {...fadeIn}
          transition={{ delay: 0.1 }}
        >
          <motion.div
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
            <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-af-gold drop-shadow-lg" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
            {...slideInFromLeft}
            transition={{ delay: 0.2 }}
          >
            Academic <span className="text-af-gold">Calendar</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow"
            {...slideInFromRight}
            transition={{ delay: 0.3 }}
          >
            Important dates and events throughout the academic year 2024-25
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar Content */}
          <motion.div
            className="lg:col-span-2"
            {...fadeIn}
            transition={{ delay: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {academicCalendar.map((event, idx) => (
                <motion.div
                  key={idx}
                  className={`rounded-xl p-6 border-l-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group ${typeColors[event.type]} border-l-af-blue`}
                  {...scaleIn}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    borderLeftWidth: '8px',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl filter drop-shadow-sm">{typeIcons[event.type]}</span>
                    <div>
                      <p className="text-sm font-bold text-af-blue dark:text-af-light uppercase tracking-widest">{event.month}</p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{event.event}</h3>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight className="text-gray-300 dark:text-gray-600 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            {...slideInFromRight}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-af-gold pl-4">Download Resources</h3>
              <div className="space-y-4">
                <motion.button
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white transition-all group border border-transparent hover:border-blue-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <Download className="text-af-blue dark:text-af-light group-hover:text-white" size={20} />
                    <span className="font-medium">Academic Calendar 2024-25</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-blue-200">PDF</span>
                </motion.button>
                <motion.button
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white transition-all group border border-transparent hover:border-blue-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <Download className="text-af-blue dark:text-af-light group-hover:text-white" size={20} />
                    <span className="font-medium">List of Holidays 2024</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-blue-200">PDF</span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-af-blue to-blue-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Important Note</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Academic dates and event schedules are subject to change based on CBSE guidelines or school administration decisions.
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <CalendarIcon size={160} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageAnimate>
  );
};

export default CalendarPage;

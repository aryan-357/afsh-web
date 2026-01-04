import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, ChevronRight, ChevronDown, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Notice } from '../../types';

const notices: Notice[] = [
  {
    id: '1',
    date: '25 Oct 2023',
    title: 'Admissions Open for Session 2024-25 (Class I to IX)',
    link: '/admissions',
    isNew: true,
    content: 'Registration forms for the academic session 2024-25 are now available online. Parents are requested to fill out the form before the deadline. Entrance tests for classes VI to IX will be conducted in the second week of December. Please ensure all required documents are ready for upload.'
  },
  {
    id: '2',
    date: '20 Oct 2023',
    title: 'Annual Sports Meet Schedule Released',
    link: '/student-life#sports',
    content: 'The Annual Sports Meet will be held from November 10th to November 12th. Events include Track & Field, Basketball, and Volleyball. House captains are requested to submit the final list of participants by October 30th. Parents are cordially invited to witness the opening ceremony.'
  },
  {
    id: '3',
    date: '15 Oct 2023',
    title: 'Parent Teacher Meeting on 30th October',
    link: '/calendar',
    content: 'A mandatory Parent Teacher Meeting (PTM) is scheduled for October 30th, 2023, from 08:30 AM to 12:30 PM. We will be discussing the Mid-Term results and student progress. Students must accompany their parents in proper school uniform.'
  },
  {
    id: '4',
    date: '10 Oct 2023',
    title: 'Winter Uniform Mandatory from 1st November',
    link: '/contact',
    content: 'All students are hereby informed that wearing the complete winter uniform is mandatory starting November 1st, 2023. Blazers must be worn by students of Class VI onwards. Please refer to the school diary for detailed uniform specifications.'
  },
  {
    id: '5',
    date: '05 Oct 2023',
    title: 'Result of Inter-School Debate Competition',
    link: '/news',
    content: 'We are proud to announce that Air Force School Hindan bagged the First Prize in the Inter-School Debate Competition held at DPS Ghaziabad. Congratulations to the winning team: Aryan Sharma (Class X) and Sneha Gupta (Class IX).'
  },
];

const NoticeBoard: React.FC = () => {
  const [openNoticeId, setOpenNoticeId] = useState<string | null>(null);

  const toggleNotice = (id: string) => {
    setOpenNoticeId(openNoticeId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Marquee Section */}
      <div className="bg-af-blue text-white py-3 overflow-hidden flex items-center relative z-10 shadow-lg">
        <div className="bg-af-gold text-af-blue font-black px-6 py-1 text-xs absolute left-0 z-20 h-full flex items-center shadow-[5px_0_15px_rgba(0,0,0,0.3)] skew-x-[-15deg] -ml-2">
          <span className="skew-x-[15deg] tracking-tighter">LATEST NEWS</span>
        </div>
        <div className="marquee-container w-full pl-36">
          <div className="marquee-content text-sm font-bold tracking-wide">
            {notices.map((n) => (
              <span key={n.id} className="mx-12 inline-flex items-center group cursor-pointer">
                <span className="w-2 h-2 bg-af-gold rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                <span className="hover:text-af-gold transition-colors">{n.title}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Notice Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Notices Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-af-blue/10 rounded-xl flex items-center justify-center">
                    <Bell className="text-af-blue" size={20} />
                  </div>
                  Notice Board
                </h3>
                <Link to="/news" className="text-sm font-bold text-af-blue dark:text-af-light hover:underline flex items-center gap-1 group">
                  View All Notices <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {notices.map((notice, idx) => {
                  const isOpen = openNoticeId === notice.id;
                  return (
                    <div key={notice.id} className="group">
                      <button
                        onClick={() => toggleNotice(notice.id)}
                        className={`w-full text-left p-6 flex items-start gap-6 transition-all duration-300 focus:outline-none ${isOpen ? 'bg-blue-50/30 dark:bg-af-blue/5' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                      >
                        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-af-blue dark:text-af-light w-16 h-16 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
                          <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">{notice.date.split(' ')[1]}</span>
                          <span className="text-2xl font-black leading-none">{notice.date.split(' ')[0]}</span>
                        </div>
                        <div className="flex-grow pt-1">
                          <h4 className={`font-bold transition-colors duration-300 text-lg leading-snug ${isOpen ? 'text-af-blue dark:text-af-light' : 'text-gray-800 dark:text-gray-200 group-hover:text-af-blue'}`}>
                            {notice.title}
                            {notice.isNew && (
                              <span className="inline-block ml-3 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse shadow-lg shadow-red-500/30">
                                NEW
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
                            {isOpen ? 'Click to collapse' : 'Click to read detailed announcement'}
                          </p>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-af-blue text-white rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-af-blue/10 group-hover:text-af-blue'}`}>
                          <ChevronDown size={20} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-8 pl-[6.5rem] pr-10">
                              <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl border border-blue-100 dark:border-af-blue/20 shadow-inner">
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">{notice.content || "Please contact the school administration for more details regarding this notice."}</p>
                                <div className="flex flex-wrap gap-4">
                                  <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={notice.link}
                                    className="inline-flex items-center gap-2 bg-af-blue text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-af-blue/20 transition-all hover:bg-af-dark hover:shadow-af-blue/40"
                                  >
                                    <Download size={16} /> Download PDF
                                  </motion.a>
                                  <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={notice.link}
                                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all hover:bg-gray-200 dark:hover:bg-gray-600"
                                  >
                                    <FileText size={16} /> View Details
                                  </motion.a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Side Panel */}
            <div className="space-y-8">
              {/* Events Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-af-gold/10 rounded-xl flex items-center justify-center">
                    <Calendar className="text-af-gold" size={20} />
                  </div>
                  Upcoming Events
                </h3>
                <div className="space-y-6">
                  {[
                    { title: 'Annual Day Function', date: '15th November 2023', color: 'bg-af-blue' },
                    { title: 'Science Exhibition', date: '20th November 2023', color: 'bg-af-gold' }
                  ].map((event, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className={`w-1 h-full min-h-[45px] ${event.color} rounded-full transition-all group-hover:w-1.5`}></div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm group-hover:text-af-blue transition-colors">{event.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Link to="/calendar" className="mt-8 w-full block text-center py-3 border border-gray-100 dark:border-gray-800 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                  Full School Calendar
                </Link>
              </motion.div>

              {/* Quick Links Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-af-blue text-white rounded-3xl shadow-xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/20 transition-all duration-700" />
                <h3 className="text-xl font-serif font-bold mb-6 relative z-10">Student Services</h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    { label: 'Student Life', href: '/student-life' },
                    { label: 'Online Fee Payment', href: '/admissions#fees' },
                    { label: 'Download Prospectus', href: '/admissions' },
                    { label: 'TC Verification', href: '/admissions#tc' }
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.href}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/5 transition-all group/link"
                      >
                        <span className="text-sm font-bold">{link.label}</span>
                        <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;

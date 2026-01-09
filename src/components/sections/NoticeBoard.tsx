import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, ChevronRight, ChevronDown, Download, FileText, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Notice } from '../../types/strapi';
import { fetchRecentNotices } from '../../services/noticeService';

const NoticeBoard: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [openNoticeId, setOpenNoticeId] = useState<number | null>(null);

  useEffect(() => {
    const loadNotices = async () => {
      try {
        const response = await fetchRecentNotices(5); // Fetch top 5 notices
        setNotices(response.data);
      } catch (error) {
        console.error('Failed to load notices:', error);
      } finally {
        setLoading(false);
      }
    };
    loadNotices();
  }, []);

  const toggleNotice = (id: number) => {
    setOpenNoticeId(openNoticeId === id ? null : id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      full: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    };
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
            {loading ? (
              <span className="mx-12">Loading updates...</span>
            ) : notices.length > 0 ? (
              notices.map((n) => (
                <span key={n.id} className="mx-12 inline-flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-af-gold rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="hover:text-af-gold transition-colors">{n.title || 'Announcement'}</span>
                </span>
              ))
            ) : (
              <span className="mx-12">Welcome to Air Force School Hindan</span>
            )}
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
                <Link to="/notices" className="text-sm font-bold text-af-blue dark:text-af-light hover:underline flex items-center gap-1 group">
                  View All Notices <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {loading ? (
                  <div className="p-10 flex justify-center">
                    <Loader2 className="animate-spin text-af-blue" size={30} />
                  </div>
                ) : notices.length === 0 ? (
                  <div className="p-10 text-center text-gray-500">
                    No notices available at the moment.
                  </div>
                ) : (
                  notices.map((notice) => {
                    const { title, date, content, isNew, file } = notice;
                    const formattedDate = formatDate(date);
                    const isOpen = openNoticeId === notice.id;
                    const fileUrl = file?.url;

                    return (
                      <div key={notice.id} className="group">
                        <button
                          onClick={() => toggleNotice(notice.id)}
                          className={`w-full text-left p-6 flex items-start gap-6 transition-all duration-300 focus:outline-none \${isOpen ? 'bg-blue-50/30 dark:bg-af-blue/5' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                        >
                          <div className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-af-blue dark:text-af-light w-16 h-16 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
                            <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">{formattedDate.month}</span>
                            <span className="text-2xl font-black leading-none">{formattedDate.day}</span>
                          </div>
                          <div className="flex-grow pt-1">
                            <h4 className={`font-bold transition-colors duration-300 text-lg leading-snug \${isOpen ? 'text-af-blue dark:text-af-light' : 'text-gray-800 dark:text-gray-200 group-hover:text-af-blue'}`}>
                              {title}
                              {isNew && (
                                <span className="inline-block ml-3 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse shadow-lg shadow-red-500/30">
                                  NEW
                                </span>
                              )}
                            </h4>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
                              {isOpen ? 'Click to collapse' : 'Click to read detailed announcement'}
                            </p>
                          </div>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 \${isOpen ? 'bg-af-blue text-white rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-af-blue/10 group-hover:text-af-blue'}`}>
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
                                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                                    {content || "Please refer to the attached document for more details."}
                                  </p>
                                  <div className="flex flex-wrap gap-4">
                                    {fileUrl ? (
                                      <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-af-blue text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-af-blue/20 transition-all hover:bg-af-dark hover:shadow-af-blue/40"
                                      >
                                        <Download size={16} /> Download PDF
                                      </motion.a>
                                    ) : (
                                      <span className="text-xs text-gray-400 italic">No attachment available</span>
                                    )}

                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                )}
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
                      <div className={`w-1 h-full min-h-[45px] \${event.color} rounded-full transition-all group-hover:w-1.5`}></div>
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

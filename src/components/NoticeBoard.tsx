import React, { useState } from 'react';
import { Bell, Calendar, ChevronRight, ChevronDown, Download, FileText } from 'lucide-react';
import { Notice } from '../types';

const notices: Notice[] = [
  { 
    id: '1', 
    date: '25 Oct 2023', 
    title: 'Admissions Open for Session 2024-25 (Class I to IX)', 
    link: '#', 
    isNew: true,
    content: 'Registration forms for the academic session 2024-25 are now available online. Parents are requested to fill out the form before the deadline. Entrance tests for classes VI to IX will be conducted in the second week of December. Please ensure all required documents are ready for upload.'
  },
  { 
    id: '2', 
    date: '20 Oct 2023', 
    title: 'Annual Sports Meet Schedule Released', 
    link: '#',
    content: 'The Annual Sports Meet will be held from November 10th to November 12th. Events include Track & Field, Basketball, and Volleyball. House captains are requested to submit the final list of participants by October 30th. Parents are cordially invited to witness the opening ceremony.'
  },
  { 
    id: '3', 
    date: '15 Oct 2023', 
    title: 'Parent Teacher Meeting on 30th October', 
    link: '#',
    content: 'A mandatory Parent Teacher Meeting (PTM) is scheduled for October 30th, 2023, from 08:30 AM to 12:30 PM. We will be discussing the Mid-Term results and student progress. Students must accompany their parents in proper school uniform.'
  },
  { 
    id: '4', 
    date: '10 Oct 2023', 
    title: 'Winter Uniform Mandatory from 1st November', 
    link: '#',
    content: 'All students are hereby informed that wearing the complete winter uniform is mandatory starting November 1st, 2023. Blazers must be worn by students of Class VI onwards. Please refer to the school diary for detailed uniform specifications.'
  },
  { 
    id: '5', 
    date: '05 Oct 2023', 
    title: 'Result of Inter-School Debate Competition', 
    link: '#',
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
      <div className="bg-af-blue text-white py-2 overflow-hidden flex items-center relative z-10">
        <div className="bg-af-gold text-af-blue font-bold px-4 py-1 text-sm absolute left-0 z-20 h-full flex items-center shadow-md">
          LATEST NEWS
        </div>
        <div className="marquee-container w-full pl-32">
          <div className="marquee-content text-sm font-medium tracking-wide">
            {notices.map((n) => (
              <span key={n.id} className="mx-8 inline-flex items-center">
                <span className="w-2 h-2 bg-af-gold rounded-full mr-2"></span>
                {n.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Notice Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Notices Panel */}
            <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-t-4 border-af-blue overflow-hidden transition-colors duration-300">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                <h3 className="text-xl font-bold text-af-blue dark:text-af-light flex items-center gap-2">
                  <Bell className="text-af-gold" /> Notice Board
                </h3>
                <a href="#" className="text-sm text-af-blue dark:text-af-light hover:underline">View All</a>
              </div>
              <div className="p-0">
                {notices.map((notice) => {
                  const isOpen = openNoticeId === notice.id;
                  return (
                    <div key={notice.id} className="border-b border-gray-100 dark:border-gray-700 last:border-0 group">
                      <button 
                        onClick={() => toggleNotice(notice.id)}
                        className={`w-full text-left p-4 flex items-start gap-4 transition-colors duration-200 focus:outline-none ${isOpen ? 'bg-blue-50/50 dark:bg-gray-700/30' : 'hover:bg-blue-50 dark:hover:bg-gray-700/50'}`}
                      >
                        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-blue-100 dark:bg-blue-900/40 text-af-blue dark:text-blue-300 w-16 h-16 rounded-lg p-2 transition-transform duration-300 group-hover:scale-105">
                          <span className="text-xs font-bold uppercase">{notice.date.split(' ')[1]}</span>
                          <span className="text-2xl font-bold leading-none">{notice.date.split(' ')[0]}</span>
                        </div>
                        <div className="flex-grow pt-1">
                          <h4 className="font-medium text-gray-800 dark:text-gray-100 group-hover:text-af-blue dark:group-hover:text-af-light transition-colors text-lg leading-snug">
                            {notice.title}
                            {notice.isNew && (
                              <span className="inline-block ml-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse align-middle">
                                NEW
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {isOpen ? 'Click to collapse' : 'Click to read details'}
                          </p>
                        </div>
                        <div className={`transform transition-transform duration-300 text-gray-400 self-center ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown />
                        </div>
                      </button>

                      {/* Accordion Body */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                         <div className="px-4 pb-4 pl-[5.5rem] pr-8 text-gray-600 dark:text-gray-300 text-sm">
                            <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600/50">
                                <p className="mb-4 leading-relaxed">{notice.content || "Please contact the school administration for more details regarding this notice."}</p>
                                <div className="flex gap-4">
                                    <a href={notice.link} className="inline-flex items-center gap-2 text-af-blue dark:text-af-light font-bold text-xs uppercase tracking-wide hover:underline border border-af-blue dark:border-af-light px-3 py-1.5 rounded hover:bg-af-blue hover:text-white dark:hover:bg-af-light dark:hover:text-gray-900 transition-colors">
                                        <Download size={14}/> Download PDF
                                    </a>
                                    <a href={notice.link} className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-wide hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                                        <FileText size={14}/> View Details
                                    </a>
                                </div>
                            </div>
                         </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links & Events */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-af-gold transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Calendar className="text-af-blue dark:text-af-light" /> Upcoming Events
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-af-blue dark:bg-af-light rounded"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">Annual Day Function</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">15th November 2023</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-af-blue dark:bg-af-light rounded"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">Science Exhibition</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">20th November 2023</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-af-blue text-white rounded-lg shadow-lg p-6">
                 <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                 <ul className="space-y-2 text-sm">
                   <li><a href="#" className="flex items-center gap-2 hover:text-af-gold transition"><ChevronRight size={14}/> Student Login</a></li>
                   <li><a href="#" className="flex items-center gap-2 hover:text-af-gold transition"><ChevronRight size={14}/> Online Fee Payment</a></li>
                   <li><a href="#" className="flex items-center gap-2 hover:text-af-gold transition"><ChevronRight size={14}/> Download Prospectus</a></li>
                   <li><a href="#" className="flex items-center gap-2 hover:text-af-gold transition"><ChevronRight size={14}/> TC Verification</a></li>
                 </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
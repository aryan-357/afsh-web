import React from 'react';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import { Notice } from '../types';

const notices: Notice[] = [
  { id: '1', date: '25 Oct 2023', title: 'Admissions Open for Session 2024-25 (Class I to IX)', link: '#', isNew: true },
  { id: '2', date: '20 Oct 2023', title: 'Annual Sports Meet Schedule Released', link: '#' },
  { id: '3', date: '15 Oct 2023', title: 'Parent Teacher Meeting on 30th October', link: '#' },
  { id: '4', date: '10 Oct 2023', title: 'Winter Uniform Mandatory from 1st November', link: '#' },
  { id: '5', date: '05 Oct 2023', title: 'Result of Inter-School Debate Competition', link: '#' },
];

const NoticeBoard: React.FC = () => {
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
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Notices Panel */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-lg border-t-4 border-af-blue overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-bold text-af-blue flex items-center gap-2">
                  <Bell className="text-af-gold" /> Notice Board
                </h3>
                <a href="#" className="text-sm text-af-blue hover:underline">View All</a>
              </div>
              <div className="p-0">
                {notices.map((notice, idx) => (
                  <div key={notice.id} className={`p-4 flex items-start gap-4 hover:bg-blue-50 transition border-b border-gray-100 last:border-0`}>
                    <div className="flex-shrink-0 flex flex-col items-center justify-center bg-blue-100 text-af-blue w-16 h-16 rounded-lg p-2">
                      <span className="text-xs font-bold uppercase">{notice.date.split(' ')[1]}</span>
                      <span className="text-2xl font-bold leading-none">{notice.date.split(' ')[0]}</span>
                    </div>
                    <div className="flex-grow">
                      <a href={notice.link} className="font-medium text-gray-800 hover:text-af-blue block mb-1">
                        {notice.title}
                        {notice.isNew && (
                          <span className="inline-block ml-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">
                            NEW
                          </span>
                        )}
                      </a>
                      <p className="text-sm text-gray-500">Click to view details</p>
                    </div>
                    <ChevronRight className="text-gray-300 self-center" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links & Events */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-af-gold">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="text-af-blue" /> Upcoming Events
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-af-blue rounded"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Annual Day Function</h4>
                      <p className="text-xs text-gray-500">15th November 2023</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-af-blue rounded"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Science Exhibition</h4>
                      <p className="text-xs text-gray-500">20th November 2023</p>
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
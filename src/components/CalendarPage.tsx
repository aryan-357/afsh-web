import React from 'react';
import { Calendar as CalendarIcon, Download, ChevronRight } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mb-12">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(76, 139, 245, 0.1) 0%, transparent 50%)',
        }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-af-gold" />
          <h1 className="text-5xl font-serif font-bold mb-4 text-white">Academic Calendar 2024-25</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Important dates and events throughout the academic year
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-400 mx-auto mt-6"></div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {academicCalendar.map((event, idx) => (
                <div key={idx} className={`rounded-xl p-6 border-l-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group ${typeColors[event.type]} border-l-af-blue`}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{typeIcons[event.type]}</span>
                    <div>
                      <p className="text-sm font-bold text-af-blue dark:text-af-light uppercase tracking-widest">{event.month}</p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{event.event}</h3>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/50 dark:bg-gray-800/50">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-300 dark:text-gray-600 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-af-gold pl-4">Download Resources</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white transition-all group">
                  <div className="flex items-center gap-3">
                    <Download className="text-af-blue dark:text-af-light group-hover:text-white" size={20} />
                    <span className="font-medium">Academic Calendar 2024-25</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-blue-200">PDF</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white transition-all group">
                  <div className="flex items-center gap-3">
                    <Download className="text-af-blue dark:text-af-light group-hover:text-white" size={20} />
                    <span className="font-medium">List of Holidays 2024</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-blue-200">PDF</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-af-blue to-blue-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Important Note</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Academic dates and event schedules are subject to change based on CBSE guidelines or school administration decisions.
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <CalendarIcon size={160} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;

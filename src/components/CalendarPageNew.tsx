import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarEvent {
  date: number;
  month: number;
  year: number;
  title: string;
  type: 'exam' | 'event' | 'activity' | 'holiday';
  color: string;
}

const CalendarPageNew: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 3, 1));

  const events: CalendarEvent[] = [
    { date: 15, month: 3, year: 2024, title: 'Math Olympiad', type: 'exam', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' },
    { date: 20, month: 3, year: 2024, title: 'Science Fair', type: 'event', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
    { date: 25, month: 3, year: 2024, title: 'Sports Day', type: 'activity', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
    { date: 1, month: 4, year: 2024, title: 'Academic Year Begins', type: 'holiday', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' },
    { date: 10, month: 4, year: 2024, title: 'Mid-Term Exams Start', type: 'exam', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' },
    { date: 18, month: 4, year: 2024, title: 'Cultural Program', type: 'event', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
    { date: 5, month: 5, year: 2024, title: 'Summer Camp Begins', type: 'activity', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' },
    { date: 15, month: 5, year: 2024, title: 'Annual Awards', type: 'event', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300' },
    { date: 20, month: 6, year: 2024, title: 'Summer Vacation Begins', type: 'holiday', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' },
    { date: 1, month: 8, year: 2024, title: 'New Session Starts', type: 'holiday', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' },
    { date: 15, month: 9, year: 2024, title: 'Periodic Assessment 1', type: 'exam', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' },
    { date: 25, month: 10, year: 2024, title: 'Foundation Day', type: 'event', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' },
    { date: 5, month: 11, year: 2024, title: 'Diwali Celebration', type: 'event', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
    { date: 15, month: 11, year: 2024, title: 'Mid-Term Exams', type: 'exam', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' },
    { date: 25, month: 11, year: 2024, title: 'Annual Day', type: 'event', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
    { date: 1, month: 12, year: 2024, title: 'Final Exams Begin', type: 'exam', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' },
  ];

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    return days;
  }, [currentDate]);

  const getEventsForDate = (day: number) => events.filter(e => e.date === day && e.month === currentDate.getMonth() && e.year === currentDate.getFullYear());

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 transition-colors duration-700">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mb-12">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(76, 139, 245, 0.1) 0%, transparent 50%)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Academic Calendar 2024-25</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">All important dates, events, and examinations at a glance</p>
        </div>
      </section>

      {/* Calendar */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <button onClick={prevMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110">
            <ChevronLeft className="text-af-blue dark:text-af-light" size={28} />
          </button>
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white min-w-96 text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110">
            <ChevronRight className="text-af-blue dark:text-af-light" size={28} />
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="p-4 text-center font-bold text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl shadow-lg">
          {calendarDays.map((day, idx) => {
            const dayEvents = day ? getEventsForDate(day) : [];
            return (
              <div
                key={idx}
                className={`min-h-32 p-2 rounded-lg border transition-all duration-300 ${
                  day
                    ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-af-blue dark:hover:border-af-light cursor-pointer transform hover:scale-105'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                {day && (
                  <>
                    <div className="font-bold text-gray-800 dark:text-white mb-1 text-sm">{day}</div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event, i) => (
                        <div
                          key={i}
                          className={`text-xs p-1 rounded truncate font-semibold transition-all duration-300 ${event.color}`}
                          title={event.title}
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 px-1 font-semibold">+{dayEvents.length - 2} more</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Events Legend */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Exams</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Events</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Activities</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Holidays</span>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Upcoming Events This Month</h3>
          <div className="space-y-3">
            {events
              .filter(e => e.month === currentDate.getMonth() && e.year === currentDate.getFullYear())
              .sort((a, b) => a.date - b.date)
              .map((event, idx) => (
                <div key={idx} className={`p-4 rounded-lg border-l-4 flex items-center justify-between transition-all duration-300 hover:shadow-lg transform hover:translate-x-1 ${event.color}`}>
                  <div>
                    <div className="font-bold text-lg">{event.title}</div>
                    <div className="text-sm opacity-75">{monthNames[event.month]} {event.date}, {event.year}</div>
                  </div>
                  <div className="px-4 py-2 bg-white/50 dark:bg-black/30 rounded font-semibold text-sm uppercase tracking-widest">
                    {event.type}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPageNew;

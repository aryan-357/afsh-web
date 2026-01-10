import React, { useState, useMemo, Suspense } from 'react';
import { ChevronLeft, ChevronRight, CalendarCheck, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp } from '../../utils/animations';

interface CalendarEvent {
  date: number;
  month: number;
  year: number;
  title: string;
  type: 'exam' | 'event' | 'activity' | 'holiday';
  color: string;
  startTime?: string;
  endTime?: string;
  allDay?: boolean;
}

interface DayViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date;
  events: CalendarEvent[];
}

const DayViewModal: React.FC<DayViewModalProps> = ({ isOpen, onClose, date, events }) => {
  if (!isOpen) return null;

  const sortedEvents = [...events].sort((a, b) => {
    if (a.allDay && !b.allDay) return -1;
    if (!a.allDay && b.allDay) return 1;
    return (a.startTime || '').localeCompare(b.startTime || '');
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 max-h-[80vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                {date.toLocaleDateString('en-US', { weekday: 'long' })}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {sortedEvents.length === 0 ? (
              <div className="text-center py-10 opacity-50">
                <CalendarCheck className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>No events scheduled for this day.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedEvents.map((event, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border-l-4 ${event.color} bg-opacity-10 dark:bg-opacity-20 flex gap-4`}>
                    <div className="flex-shrink-0 pt-1">
                      {event.allDay ? (
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/50 dark:bg-black/20 px-2 py-1 rounded">All Day</span>
                      ) : (
                        <div className="flex items-center gap-1 text-sm font-semibold opacity-80">
                          <Clock size={14} />
                          {new Date(event.startTime!).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight mb-1">{event.title}</h3>
                      {(event.startTime && event.endTime && !event.allDay) && (
                        <p className="text-xs opacity-70">
                          {new Date(event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(event.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

const CalendarPageNew: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [googleEvents, setGoogleEvents] = useState<CalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [debugError, setDebugError] = useState<string | null>(null);
  const [loadedIds, setLoadedIds] = useState<string[]>([]);
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const publicCalendarIds = import.meta.env.VITE_PUBLIC_CALENDAR_ID; // Can be comma separated

  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Auto-fetch public calendar events on mount
  React.useEffect(() => {
    if (apiKey && publicCalendarIds) {
      const calendarIds = publicCalendarIds.split(',').map((id: string) => id.trim().replace(/^['"]|['"]$/g, '')); // Remove extra quotes if present
      setLoadedIds(calendarIds);

      const fetchPublicEvents = async () => {
        try {
          const fetchPromises = calendarIds.map(async (calendarId: string) => {
            try {
              const response = await axios.get(
                `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
                {
                  params: {
                    key: apiKey,
                    timeMin: new Date(new Date().getFullYear(), 0, 1).toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    orderBy: 'startTime',
                  }
                }
              );
              return response.data;
            } catch (e: any) {
              const msg = e.response?.data?.error?.message || e.message;
              console.warn(`Failed to fetch events for calendar ${calendarId}`, e);
              setDebugError(prev => (prev ? `${prev} | ${calendarId}: ${msg}` : `${calendarId}: ${msg}`));
              return null;
            }
          });

          const results = await Promise.all(fetchPromises);
          const allNewEvents: CalendarEvent[] = [];

          results.forEach((data, index) => {
            if (data && data.items) {
              const calendarId = calendarIds[index];
              const isHoliday = calendarId.includes('holiday') || calendarId.includes('en.indian');

              const calendarEvents = data.items.map((event: any) => {
                const startDate = new Date(event.start.dateTime || event.start.date);
                const isAllDay = !event.start.dateTime;

                return {
                  date: startDate.getDate(),
                  month: startDate.getMonth(),
                  year: startDate.getFullYear(),
                  title: event.summary,
                  type: isHoliday ? 'holiday' : 'event',
                  color: isHoliday
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
                  startTime: event.start.dateTime || event.start.date,
                  endTime: event.end.dateTime || event.end.date,
                  allDay: isAllDay
                };
              });
              allNewEvents.push(...calendarEvents);
            }
          });

          setGoogleEvents(allNewEvents);
          // Merge with initial hardcoded events (deduplication logic skipped for simplicity, but could be added based on ID)
          setEvents(allNewEvents);
        } catch (error: any) {
          console.error('Error fetching public calendar events:', error);
          setDebugError(error.message);
        }
      };

      fetchPublicEvents();
    }
  }, [apiKey, publicCalendarIds]);



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
    <PageAnimate className="min-h-screen bg-white dark:bg-gray-900 pb-20 transition-colors duration-700">
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
            Academic <span className="text-af-gold">Calendar</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow"
            variants={fadeInUp}
            custom={2}
          >
            All important dates, events, and examinations at a glance
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            variants={fadeInUp}
            custom={3}
          />

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {(!apiKey || !publicCalendarIds) ? (
              <p className="text-sm font-semibold text-red-400 bg-red-900/20 px-4 py-2 rounded-full inline-block">
                ⚠️ API Key or Public Calendar ID missing in .env
              </p>
            ) : (
              <div className="flex flex-col gap-2 items-center">
                <div className="text-sm font-semibold text-af-blue dark:text-blue-200 bg-white/10 px-6 py-2 rounded-full inline-block border border-white/20">
                  Showing events from Public Calendar
                </div>
                {/* Debug Info - Remove before production */}
                <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 p-2 rounded max-w-lg text-left overflow-auto">
                  <p><strong>Debug Info:</strong></p>
                  <p>Loaded IDs: {loadedIds.join(', ')}</p>
                  {debugError && <p className="text-red-500 font-bold mt-1">Error: {debugError}</p>}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Day View Modal */}
      {selectedDate && (
        <DayViewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          date={selectedDate}
          events={getEventsForDate(selectedDate.getDate()).filter(e => e.month === selectedDate.getMonth() && e.year === selectedDate.getFullYear())}
        />
      )}

      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Month Navigation */}
        <motion.div
          className="flex items-center justify-between mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          {...scaleIn}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-af-blue dark:text-af-light" size={28} />
          </motion.button>
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white min-w-96 text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <motion.button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-af-blue dark:text-af-light" size={28} />
          </motion.button>
        </motion.div>

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
              <motion.div
                key={idx}
                className={`min-h-32 p-2 rounded-lg border transition-all duration-300 ${day
                  ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 cursor-pointer'
                  : 'bg-transparent border-transparent opacity-0 pointer-events-none'
                  }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * (idx % 7) }}
                whileHover={day ? {
                  scale: 1.02,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  borderColor: "#3b82f6"
                } : {}}
                onClick={() => {
                  if (day) {
                    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
                    setIsModalOpen(true);
                  }
                }}
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
              </motion.div>
            );
          })}
        </div>

        {/* Events Legend */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4"
          {...fadeIn}
          transition={{ delay: 0.8 }}
        >
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
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="mt-12"
          {...slideInFromLeft}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Upcoming Events This Month</h3>
          <div className="space-y-3">
            {events
              .filter(e => e.month === currentDate.getMonth() && e.year === currentDate.getFullYear())
              .sort((a, b) => a.date - b.date)
              .map((event, idx) => (
                <motion.div
                  key={idx}
                  className={`p-4 rounded-lg border-l-4 flex items-center justify-between transition-all duration-300 ${event.color}`}
                  {...scaleIn}
                  transition={{ delay: 1.0 + idx * 0.1 }}
                  whileHover={{ x: 5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                >
                  <div>
                    <div className="font-bold text-lg">{event.title}</div>
                    <div className="text-sm opacity-75">{monthNames[event.month]} {event.date}, {event.year}</div>
                  </div>
                  <div className="px-4 py-2 bg-white/50 dark:bg-black/30 rounded font-semibold text-sm uppercase tracking-widest">
                    {event.type}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </PageAnimate>
  );
};

export default CalendarPageNew;

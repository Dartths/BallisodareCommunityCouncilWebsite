import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, X } from 'lucide-react';

/**
 * Event interface defining the structure of calendar events
 */
export interface CalendarEvent {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  date: string; // ISO format: "2024-03-15"
  time?: string; // 24-hour format: "14:00"
  recurrence: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  image?: string;
}

/**
 * Event instance with calculated date for recurring events
 */
interface EventInstance extends CalendarEvent {
  instanceDate: Date;
}

/**
 * Component props
 */
interface EventsCalendarProps {
  events?: CalendarEvent[];
}

type ViewType = 'week' | 'month' | 'year';

const EventsCalendar: React.FC<EventsCalendarProps> = ({ events = [] }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [view, setView] = useState<ViewType>('month');
  const [selectedEvent, setSelectedEvent] = useState<EventInstance | null>(null);

  // Helper function to check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  // Helper function to get recurring event instances for a date range
  const getRecurringInstances = (
    event: CalendarEvent,
    startDate: Date,
    endDate: Date
  ): EventInstance[] => {
    const instances: EventInstance[] = [];
    const eventDate = new Date(event.date);
    
    if (event.recurrence === 'none') {
      if (eventDate >= startDate && eventDate <= endDate) {
        instances.push({ ...event, instanceDate: eventDate });
      }
      return instances;
    }

    let currentInstanceDate = new Date(eventDate);
    const maxIterations = 1000; // Safety limit
    let iterations = 0;

    while (currentInstanceDate <= endDate && iterations < maxIterations) {
      if (currentInstanceDate >= startDate) {
        instances.push({ ...event, instanceDate: new Date(currentInstanceDate) });
      }

      // Calculate next occurrence based on recurrence type
      switch (event.recurrence) {
        case 'daily':
          currentInstanceDate.setDate(currentInstanceDate.getDate() + 1);
          break;
        case 'weekly':
          currentInstanceDate.setDate(currentInstanceDate.getDate() + 7);
          break;
        case 'monthly':
          currentInstanceDate.setMonth(currentInstanceDate.getMonth() + 1);
          break;
        case 'yearly':
          currentInstanceDate.setFullYear(currentInstanceDate.getFullYear() + 1);
          break;
      }
      iterations++;
    }

    return instances;
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date): EventInstance[] => {
    const dateStart = new Date(date);
    dateStart.setHours(0, 0, 0, 0);
    const dateEnd = new Date(date);
    dateEnd.setHours(23, 59, 59, 999);

    const allInstances = events.flatMap(event => 
      getRecurringInstances(event, dateStart, dateEnd)
    );

    return allInstances.filter(instance => 
      isSameDay(instance.instanceDate, date)
    );
  };

  // Navigation handlers
  const goToPrevious = (): void => {
    const newDate = new Date(currentDate);
    if (view === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else if (view === 'month') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (view === 'year') {
      newDate.setFullYear(newDate.getFullYear() - 1);
    }
    setCurrentDate(newDate);
  };

  const goToNext = (): void => {
    const newDate = new Date(currentDate);
    if (view === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else if (view === 'month') {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (view === 'year') {
      newDate.setFullYear(newDate.getFullYear() + 1);
    }
    setCurrentDate(newDate);
  };

  const goToToday = (): void => {
    setCurrentDate(new Date());
  };

  // Get calendar title based on view
  const getCalendarTitle = (): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    if (view === 'year') {
      return currentDate.getFullYear().toString();
    }
    return currentDate.toLocaleDateString('en-US', options);
  };

  // Week View Component
  const WeekView: React.FC = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });

    return (
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-sm text-gray-600 pb-2">
            {day}
          </div>
        ))}
        {weekDays.map((date, index) => {
          const dayEvents = getEventsForDate(date);
          const isToday = isSameDay(date, new Date());

          return (
            <div
              key={index}
              className={`min-h-32 border rounded-lg p-2 ${
                isToday ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'
              }`}
            >
              <div className={`text-sm font-medium mb-2 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
                {date.getDate()}
              </div>
              <div className="space-y-1">
                {dayEvents.map((event, idx) => (
                  <button
                    key={`${event.id}-${idx}`}
                    onClick={() => setSelectedEvent(event)}
                    className="w-full text-left text-xs bg-green-100 hover:bg-green-200 text-green-800 p-1 rounded truncate transition-colors"
                    title={event.name}
                  >
                    {event.time && <span className="font-medium">{event.time} </span>}
                    {event.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Month View Component
  const MonthView: React.FC = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: Date[] = [];
    const currentDay = new Date(startDate);
    
    while (days.length < 42) { // 6 weeks
      days.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-sm text-gray-600 pb-2">
            {day}
          </div>
        ))}
        {days.map((date, index) => {
          const dayEvents = getEventsForDate(date);
          const isCurrentMonth = date.getMonth() === month;
          const isToday = isSameDay(date, new Date());

          return (
            <div
              key={index}
              className={`min-h-24 border p-1 ${
                isToday ? 'bg-blue-50 border-blue-300' :
                isCurrentMonth ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-100'
              }`}
            >
              <div className={`text-sm font-medium mb-1 ${
                isToday ? 'text-blue-600' :
                isCurrentMonth ? 'text-gray-700' : 'text-gray-400'
              }`}>
                {date.getDate()}
              </div>
              <div className="space-y-0.5">
                {dayEvents.slice(0, 3).map((event, idx) => (
                  <button
                    key={`${event.id}-${idx}`}
                    onClick={() => setSelectedEvent(event)}
                    className="w-full text-left text-xs bg-green-100 hover:bg-green-200 text-green-800 px-1 rounded truncate transition-colors"
                    title={event.name}
                  >
                    {event.name}
                  </button>
                ))}
                {dayEvents.length > 3 && (
                  <div className="text-xs text-gray-500 px-1">
                    +{dayEvents.length - 3} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Year View Component
  const YearView: React.FC = () => {
    const year = currentDate.getFullYear();
    const months = Array.from({ length: 12 }, (_, i) => i);

    return (
      <div className="grid grid-cols-3 gap-4">
        {months.map(monthIndex => {
          const monthDate = new Date(year, monthIndex, 1);
          const monthName = monthDate.toLocaleDateString('en-US', { month: 'long' });
          const firstDay = new Date(year, monthIndex, 1);
          const lastDay = new Date(year, monthIndex + 1, 0);
          const startDate = new Date(firstDay);
          startDate.setDate(startDate.getDate() - firstDay.getDay());
          
          const days: Date[] = [];
          const currentDay = new Date(startDate);
          
          while (days.length < 35) { // 5 weeks
            days.push(new Date(currentDay));
            currentDay.setDate(currentDay.getDate() + 1);
          }

          return (
            <div key={monthIndex} className="border rounded-lg p-3 bg-white">
              <h3 className="font-semibold text-center mb-2 text-gray-700">{monthName}</h3>
              <div className="grid grid-cols-7 gap-0.5">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                  <div key={idx} className="text-center text-xs font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {days.map((date, index) => {
                  const dayEvents = getEventsForDate(date);
                  const isCurrentMonth = date.getMonth() === monthIndex;
                  const isToday = isSameDay(date, new Date());

                  return (
                    <div
                      key={index}
                      className={`aspect-square flex items-center justify-center text-xs ${
                        isToday ? 'bg-blue-500 text-white rounded-full font-bold' :
                        isCurrentMonth ? 'text-gray-700' : 'text-gray-300'
                      } ${dayEvents.length > 0 && isCurrentMonth ? 'font-semibold' : ''} 
                      ${dayEvents.length > 0 && !isToday ? 'bg-green-100 rounded-full' : ''}`}
                    >
                      {date.getDate()}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Event Details Sidebar
  const EventSidebar: React.FC = () => {
    if (!selectedEvent) return null;

    return (
      <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-800 pr-8">{selectedEvent.name}</h2>
          <button
            onClick={() => setSelectedEvent(null)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {selectedEvent.image && (
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}

          <div>
            <div className="text-sm font-semibold text-gray-500 mb-1">Date & Time</div>
            <div className="text-gray-800">
              {selectedEvent.instanceDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {selectedEvent.time && (
                <span className="ml-2 text-gray-600">at {selectedEvent.time}</span>
              )}
            </div>
            {selectedEvent.recurrence !== 'none' && (
              <div className="text-sm text-green-600 mt-1">
                Recurring: {selectedEvent.recurrence}
              </div>
            )}
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-500 mb-1">Description</div>
            <p className="text-gray-700 leading-relaxed">
              {selectedEvent.fullDescription || selectedEvent.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header Controls */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{getCalendarTitle()}</h1>
          <button
            onClick={goToToday}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
          >
            Today
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* View Selector */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView('week')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                view === 'week' ? 'bg-white text-gray-800 shadow' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView('month')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                view === 'month' ? 'bg-white text-gray-800 shadow' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setView('year')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                view === 'year' ? 'bg-white text-gray-800 shadow' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Year
            </button>
          </div>

          {/* Navigation */}
          <div className="flex gap-1">
            <button
              onClick={goToPrevious}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Views */}
      <div className="bg-gray-50 rounded-lg p-4">
        {view === 'week' && <WeekView />}
        {view === 'month' && <MonthView />}
        {view === 'year' && <YearView />}
      </div>

      {/* Event Sidebar */}
      <EventSidebar />

      {/* Overlay */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventsCalendar;

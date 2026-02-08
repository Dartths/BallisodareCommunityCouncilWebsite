import React from 'react';
import EventsCalendar, { type CalendarEvent } from './EventsCalendar';

// Example usage of the EventsCalendar component
const EventsPage: React.FC = () => {
  // Sample events data - replace with your actual data
  const sampleEvents: CalendarEvent[] = [
    {
      id: '1',
      name: 'Community Meeting',
      description: 'Monthly community council meeting',
      fullDescription: 'Join us for our monthly community council meeting where we discuss ongoing projects, address community concerns, and plan upcoming events. All community members are welcome to attend and participate.',
      date: '2024-03-15',
      time: '19:00',
      recurrence: 'monthly',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400'
    },
    {
      id: '2',
      name: 'Tidy Towns Cleanup',
      description: 'Weekly village cleanup event',
      fullDescription: 'Help keep Ballisodare beautiful! Join our weekly cleanup where volunteers gather to maintain our streets, parks, and public spaces. All equipment provided. Families welcome.',
      date: '2024-03-09',
      time: '10:00',
      recurrence: 'weekly',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400'
    },
    {
      id: '3',
      name: 'Heritage Walk',
      description: 'Guided tour of historical sites',
      fullDescription: 'Explore Ballisodare\'s rich history with a guided walking tour. Visit St. Féichín\'s Temple, the Viking settlement site, and learn about our salmon fishing heritage. Suitable for all ages.',
      date: '2024-03-22',
      time: '14:00',
      recurrence: 'none',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400'
    },
    {
      id: '4',
      name: "Men's Shed Workshop",
      description: 'Open workshop session',
      fullDescription: 'Join us at the Men\'s Shed for our regular workshop session. Work on community projects, learn new skills, or just enjoy good company. Open to all ages and genders.',
      date: '2024-03-12',
      time: '14:00',
      recurrence: 'weekly',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400'
    },
    {
      id: '11',
      name: "Community Workshop",
      description: 'Open workshop session',
      fullDescription: 'Join us at the Men\'s Shed for our regular workshop session. Work on community projects, learn new skills, or just enjoy good company. Open to all ages and genders.',
      date: '2024-03-12',
      time: '15:00',
      recurrence: 'weekly',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400'
    },
    {
      id: '5',
      name: 'Youth Sports Camp',
      description: 'Summer sports activities for children',
      fullDescription: 'Week-long sports camp at the Community Sports and Amenity Area. Soccer, rugby, and various games for ages 6-14. Professional coaching and all equipment provided.',
      date: '2024-07-08',
      time: '09:00',
      recurrence: 'none',
      image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400'
    },
    {
      id: '6',
      name: 'Falls Festival',
      description: 'Annual Ballisodare Falls Festival',
      fullDescription: 'Our biggest event of the year! Celebrate local culture, music, and community spirit at the annual Falls Festival. Food stalls, live music, family activities, and more.',
      date: '2024-08-15',
      time: '12:00',
      recurrence: 'yearly',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Community Events</h1>
          <p className="text-gray-600">
            Stay updated with all upcoming events in Ballisodare. Click on any event for more details.
          </p>
        </div>
        
        <EventsCalendar events={sampleEvents} />
      </div>
    </div>
  );
};

export default EventsPage;

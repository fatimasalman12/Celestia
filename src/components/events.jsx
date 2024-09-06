// src/components/Events.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Events() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;

  return (
    <div>
      <h1>NASA Events</h1>
      {events && (
        <ul>
          <li><strong>Date:</strong> {events.date}</li>
          <li><strong>Title:</strong> {events.title}</li>
          <li><strong>Description:</strong> {events.explanation}</li>
          <li><img src={events.url} alt={events.title} style={{ maxWidth: '100%' }} /></li>
        </ul>
      )}
    </div>
  );
}

export default Events;

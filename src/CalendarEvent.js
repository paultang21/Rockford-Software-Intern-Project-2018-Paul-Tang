import React from 'react';

const CalendarEvent = ({ deletionFunction, event }) => (
  <li>
    <p>{event.title} is happening at {event.time}</p>
    <button onClick={() => deletionFunction(event.id)}>delete event</button>

  </li>
)

export default CalendarEvent;

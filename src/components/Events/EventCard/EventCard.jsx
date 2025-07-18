import React from 'react';
import './EventCard.css';

function EventCard({ event }) {
  return (
    <div className="event-card-container">
      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-date-local">
        {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time} - {event.location}
      </p>
      <p className="event-card-description">{event.description}</p>
      {event.link && (
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-card-details">
          Detalhes / Inscrição &rarr;
        </a>
      )}
    </div>
  );
}

export default EventCard;
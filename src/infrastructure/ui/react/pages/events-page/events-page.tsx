import React from "react";
import { useEvents } from "../../hooks/use-events";
import { Event } from "domain/model/event";
import { EventCard } from "../../components";
import "./style.css";
import { EventForm } from "../../components/event-form";

export const EventsPage = () => {
  const { events } = useEvents();

  return (
    <div>
      <h3>Event Page</h3>
      <div className="event-form">
        <EventForm />
      </div>
      <div className="events-list">
        {events?.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useEvents } from "../../hooks/use-events";
import { Event } from "domain/model/event";
import { EventCard } from "../../components";
import "./style.css";

export const EventsPage = () => {
  const { events } = useEvents();

  console.log(events);

  return (
    <div>
      <h3>Event Page</h3>
      <div className="events-list">
        {events?.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

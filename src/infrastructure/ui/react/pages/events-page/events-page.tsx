import React from "react";
import { useEvents } from "../../hooks/use-events";

export const EventsPage = () => {
  const { events } = useEvents();

  console.log(events);

  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};

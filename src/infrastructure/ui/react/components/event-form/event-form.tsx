import { Event } from "domain/model/event";
import React from "react";
import { useEvents } from "../../hooks";
import { EventStatusEnum } from "domain/model/event-status";

export const EventForm = () => {
  const [event, setEvent] = React.useState<Partial<Event>>({ message: "" });

  const { createEvent } = useEvents();

  const handleCreate = () => {
    const newEvent: Omit<Event, "id"> = {
      message: event.message,
      eventGroup: { id: 1, description: "Grupo 1" },
      eventStatus: { id: EventStatusEnum.UNREAD, description: "UNREAD" },
      createdAt: new Date().toISOString(),
      createdBy: "alejandrosgal",
      updatedAt: null,
    };
    createEvent(newEvent);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Event message"
        onChange={(ev) => setEvent({ ...event, message: ev.target.value })}
      />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

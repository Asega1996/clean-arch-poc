import { Event } from "domain/model/event";
import { EventStatus, EventStatusEnum } from "domain/model/event-status";

export const setEventRead = (event: Event) => {
  const eventStatusRead: EventStatus = {
    id: EventStatusEnum.READ,
    description: "Read",
  };

  const updatedEvent = {
    ...event,
    eventStatus: eventStatusRead,
    updatedAt: new Date().toISOString(),
  };

  return updatedEvent;
};

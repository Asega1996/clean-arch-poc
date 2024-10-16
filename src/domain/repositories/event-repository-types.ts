import { Event } from "domain/model/event";

export type EventRepositoryTypes = {
  list: () => Promise<Event[]>;
  create: (event: Omit<Event, "id">) => Promise<Event>;
  update: (event: Event) => Promise<Event>;
  remove: (eventId: number) => Promise<void>;
};

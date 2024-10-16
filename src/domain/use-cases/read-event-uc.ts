import { Event } from "domain/model/event";
import { EventRepositoryTypes } from "domain/repositories";

export type readEventUseCase = (
  eventRepo: EventRepositoryTypes,
  event: Event
) => Promise<Event>;

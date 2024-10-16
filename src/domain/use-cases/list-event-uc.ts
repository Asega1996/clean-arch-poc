import { Event } from "domain/model/event";
import { EventRepositoryTypes } from "domain/repositories";

export type listEventUseCase = (
  eventRepo: EventRepositoryTypes
) => Promise<Event[]>;

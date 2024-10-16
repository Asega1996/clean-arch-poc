import { Event } from "domain/model/event";
import { EventRepositoryTypes } from "domain/repositories";

export type createEventUseCase = (
  eventRepo: EventRepositoryTypes,
  event: Omit<Event, "id">
) => Promise<Event>;

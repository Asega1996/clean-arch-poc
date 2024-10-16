import { EventRepositoryTypes } from "domain/repositories/event-repository-types";
import { Event } from "domain/model/event";
import { readEventUseCase } from "domain/use-cases/read-event-uc";
import { setEventRead } from "domain/services/set-event-read";

export const readEventUseCaseImp: readEventUseCase = async (
  eventsRepo: EventRepositoryTypes,
  event: Event
) => {
  const updatedEvent: Event = setEventRead(event);
  return await eventsRepo.update(updatedEvent);
};

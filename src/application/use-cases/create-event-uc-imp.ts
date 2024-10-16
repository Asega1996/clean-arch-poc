import { Event } from "domain/model/event";
import { EventRepositoryTypes } from "domain/repositories/event-repository-types";
import { createEventUseCase } from "domain/use-cases/create-event-uc";

export const createEventUseCaseImp: createEventUseCase = async (
  eventsRepo: EventRepositoryTypes,
  event: Omit<Event, "id">
) => {
  return await eventsRepo.create(event);
};

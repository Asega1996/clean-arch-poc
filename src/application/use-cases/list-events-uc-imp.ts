import { EventRepositoryTypes } from "domain/repositories/event-repository-types";
import { listEventUseCase } from "domain/use-cases/list-event-uc";

export const listEventsUseCaseImp: listEventUseCase = async (
  eventRepo: EventRepositoryTypes
) => {
  return await eventRepo.list();
};

import { EventRepositoryTypes } from "domain/repositories/event-repository-types";
import { deleteEventUseCase } from "domain/use-cases/delete-event-uc";

export const deleteEventUseCaseImp: deleteEventUseCase = async (
  eventRepo: EventRepositoryTypes,
  id: number
) => {
  return await eventRepo.remove(id);
};

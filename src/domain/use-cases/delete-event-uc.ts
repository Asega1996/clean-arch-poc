import { EventRepositoryTypes } from "domain/repositories";

export type deleteEventUseCase = (
  eventRepo: EventRepositoryTypes,
  id: number
) => Promise<void>;

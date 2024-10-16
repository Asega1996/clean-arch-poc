import { Event } from "domain/model/event";
import { EventRepositoryTypes } from "domain/repositories/event-repository-types";
import { EventApiTypes } from "infrastructure/api/events";

export const createEventsRepository = (
  eventsApi: EventApiTypes
): EventRepositoryTypes => {
  const create = async (event: Event) => {
    return await eventsApi.create(event);
  };

  const remove = async (id: number) => {
    return await eventsApi.remove(id);
  };

  const update = async (event: Event) => {
    return await eventsApi.update(event);
  };

  const list = async () => {
    return await eventsApi.fetchAll();
  };

  return {
    create,
    remove,
    update,
    list,
  };
};

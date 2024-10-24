import { Event } from "domain/model/event";
import { DataSource } from "infrastructure/data-source/types";

export type EventApiTypes = {
  fetchAll: () => Promise<Event[]>;
  create: (event: Omit<Event, "id">) => Promise<Event>;
  remove: (eventId: number) => Promise<void>;
  update: (event: Event) => Promise<Event>;
};

export const createEventsApi: (
  dataSource: DataSource,
  url?: string
) => EventApiTypes = (dataSource: DataSource, url: string) => {
  const fetchAll = async () => {
    const res = await dataSource.list(url, "events");

    return await res.json();
  };

  const create = async (event: any) => {
    const res = await dataSource.create(url, "events", event);
    return await res.json();
  };

  const remove = async (eventId: number) => {
    await dataSource.remove(url, "events", eventId);
  };

  const update = async (event: any) => {
    const res = await dataSource.update(url, "events", event);

    return await res.json();
  };

  return {
    fetchAll,
    create,
    remove,
    update,
  };
};

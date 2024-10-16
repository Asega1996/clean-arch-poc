import { Event } from "domain/model/event";
import { Http } from "infrastructure/http/types";

const BASE_URL = "http://localhost:3001/events";

export type EventApiTypes = {
  fetchAll: () => Promise<Event[]>;
  create: (event: Omit<Event, "id">) => Promise<Event>;
  remove: (eventId: number) => Promise<void>;
  update: (event: Event) => Promise<Event>;
};

export const createEventsApi: (http: Http, url: string) => EventApiTypes = (
  httpClient: Http,
  url: string = BASE_URL
) => {
  const fetchAll = async () => {
    const res = await httpClient.get(url);

    return await res.json();
  };

  const create = async (event: any) => {
    const res = await httpClient.post(url, event);
    return await res.json();
  };

  const remove = async (eventId: number) => {
    await httpClient.del(url, eventId);
  };

  const update = async (event: any) => {
    const res = await httpClient.put(url, event);

    return await res.json();
  };

  return {
    fetchAll,
    create,
    remove,
    update,
  };
};

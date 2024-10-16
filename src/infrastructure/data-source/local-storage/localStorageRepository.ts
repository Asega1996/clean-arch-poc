import { DataSource } from "../types";

export const createLocalStorageRepository: () => DataSource = () => ({
  list: async <T>(path: string, entityName: string) => {
    const collection = JSON.parse(localStorage.getItem(entityName)) ?? [];
    const response = {
      json: () => collection,
    };

    return response as T;
  },
  listById: async <T>(
    path: string,
    entityName: string,
    id: number | string
  ) => {
    const collection: T[] = JSON.parse(localStorage.getItem(entityName)) ?? [];

    const response = {
      json: () => collection.find((ev: T & { id: number }) => ev.id === id),
    };
    return response;
  },
  create: async <T>(path: string, entityName: string, body: T) => {
    const collection: T[] = JSON.parse(localStorage.getItem(entityName)) ?? [];
    collection.push(body);
    localStorage.setItem(entityName, JSON.stringify(collection));

    const response = {
      json: () => body,
    };

    localStorage.setItem(entityName, JSON.stringify(response));

    return response as T;
  },
  update: async <T>(
    path: string,
    entityName: string,
    body: T & { id: number }
  ) => {
    const collection: any[] =
      JSON.parse(localStorage.getItem(entityName)) ?? [];

    const newCollection = collection.map((ev) =>
      ev.id === body.id ? body : ev
    );

    localStorage.setItem(entityName, JSON.stringify(newCollection));

    const response = {
      json: () => newCollection,
    };

    return response as T;
  },
  remove: async (path: string, entityName: string, id: number | string) => {
    const collection: any[] =
      JSON.parse(localStorage.getItem(entityName)) ?? [];

    const newCollection = collection.filter((ev) => ev.id !== id);

    localStorage.setItem(entityName, JSON.stringify(newCollection));
  },
});

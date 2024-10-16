import {
  delVerb,
  getVerb,
  postVerb,
  putVerb,
} from "infrastructure/data-source/http/utils/apiVerbs";
import { DataSource } from "../types";

export const createHttpRepository: () => DataSource = () => ({
  list: async <T>(path: string, entityName: string) => {
    const response = await getVerb(`${path}/${entityName}`);
    return response as T;
  },
  listById: async <T>(
    path: string,
    entityName: string,
    id: number | string
  ) => {
    const response = await getVerb(`${path}/${entityName}/${id}`);
    return response as T;
  },
  create: async <T>(path: string, entityName: string, body: T) => {
    const response = await postVerb(`${path}/${entityName}`, body);
    return response as T;
  },
  update: async <T>(path: string, entityName: string, body: T) => {
    const response = await putVerb(`${path}/${entityName}`, body);
    return response as T;
  },
  remove: async (path: string, entityName: string, id: number | string) => {
    await delVerb(`${path}/${entityName}`, id);
  },
});

import { Http } from "domain/http";
import {
  delVerb,
  getVerb,
  postVerb,
  putVerb,
} from "infrastructure/api/utils/apiVerbs";

export const httpRepository: Http = {
  get: async <T>(path: string) => {
    const response = await getVerb(path);
    return response as T;
  },
  post: async <T>(path: string, body: T) => {
    const response = await postVerb(path, body);
    return response as T;
  },
  put: async <T>(path: string, body: T) => {
    const response = await putVerb(path, body);
    return response as T;
  },
  del: async (path: string, id: number | string) => {
    await delVerb(path, id);
  },
};

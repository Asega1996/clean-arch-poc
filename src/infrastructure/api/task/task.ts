import { Http } from "domain/http";
import { Task } from "../../../domain/task/model";
import { TaskApiTypes } from "./types";

const BASE_URL = "http://localhost:3001/tasks";

export const createTaskApi: (httpClient: Http) => TaskApiTypes = (
  httpClient: Http
) => {
  const fetchAll = async (): Promise<Task[]> => {
    const res = await httpClient.get(BASE_URL);

    return await res.json();
  };

  const create = async (task: Omit<Task, "id">) => {
    const res = await httpClient.post(BASE_URL, task);
    return await res.json();
  };

  const del = async (taskId: number) => {
    await httpClient.del(BASE_URL, taskId);
  };

  const update = async (task: Task) => {
    const res = await httpClient.put(BASE_URL, task);

    return await res.json();
  };

  return {
    fetchAll,
    create,
    del,
    update,
  };
};

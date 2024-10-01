import { Task } from "../model";

export type TaskRepositoryTypes = {
  fetchTaskAll: () => Promise<Task[]>;
  createTask: (task: Omit<Task, "id">) => Promise<Task>;
  updateTask: (task: Task) => Promise<Task>;
  deleteTask: (taskId: number) => Promise<void>;
};

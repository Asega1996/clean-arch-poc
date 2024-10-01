import { Task } from "../../../domain/task/model";

export type TaskApiTypes = {
  fetchAll: () => Promise<Task[]>;
  del: (taskId: number) => Promise<void>;
  create: (task: Omit<Task, "id">) => Promise<Task>;
  update: (task: Task) => Promise<Task>;
};

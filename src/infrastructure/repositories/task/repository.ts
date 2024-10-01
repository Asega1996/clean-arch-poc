import { TaskApiTypes } from "../../api";
import { Task } from "../../../domain/task/model";
import { TaskRepositoryTypes } from "../../../domain/task/repositories/types";

export const createTaskRepository: (
  taskApi: TaskApiTypes
) => TaskRepositoryTypes = (taskApi: TaskApiTypes) => {
  const createTask: (task: Omit<Task, "id">) => Promise<Task> = async (
    task: Omit<Task, "id">
  ) => {
    return taskApi.create(task);
  };

  const deleteTask: (task: number) => Promise<void> = async (
    taskId: number
  ) => {
    return taskApi.del(taskId);
  };

  const updateTask: (task: Task) => Promise<Task> = async (task: Task) => {
    return taskApi.update(task);
  };

  const fetchTaskAll: () => Promise<Task[]> = async () => {
    return taskApi.fetchAll();
  };

  return {
    createTask,
    deleteTask,
    updateTask,
    fetchTaskAll,
  };
};

import { Task } from "../../domain/task/model";
import { TaskRepositoryTypes } from "../../domain/task/repositories/types";

export const createTask = async (
  repository: TaskRepositoryTypes,
  task: Omit<Task, "id">
) => {
  return await repository.createTask(task);
};

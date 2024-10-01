import { TaskRepositoryTypes } from "../../domain/task/repositories/types";

export const deleteTask = async (
  repository: TaskRepositoryTypes,
  taskId: number
) => {
  return await repository.deleteTask(taskId);
};

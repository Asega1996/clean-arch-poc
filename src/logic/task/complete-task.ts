import { Task } from "domain/task";
import { TaskRepositoryTypes } from "domain/task/repositories/types";
import { markTaskAsDone } from "domain/task/services/markTaskAsDone";

export const completeTask = (repository: TaskRepositoryTypes, task: Task) => {
  const updatedTask = markTaskAsDone(task);
  return repository.updateTask(updatedTask);
};

import { TaskRepositoryTypes } from "domain/task/repositories/types";

export const listTask = (repository: TaskRepositoryTypes) => {
  return repository.fetchTaskAll();
};

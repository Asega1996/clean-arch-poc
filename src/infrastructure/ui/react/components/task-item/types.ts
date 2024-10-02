import { UseMutateFunction } from "@tanstack/react-query";
import { Task } from "domain/task";

export type TaskItemTypes = {
  task: Task;
  onComplete: UseMutateFunction<Task, Error, Task, unknown>;
  onDelete: UseMutateFunction<void, Error, number, unknown>;
};

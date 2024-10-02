import { UseMutateFunction } from "@tanstack/react-query";
import { Task } from "domain/task";

export type TaskFormTypes = {
  onSubmit: UseMutateFunction<Task, Error, Omit<Task, "id">, unknown>;
};

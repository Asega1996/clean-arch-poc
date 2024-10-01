import { Task } from "../model";

export const markTaskAsDone = (task: Task) => {
  //Esto es un ejemplo dummy, aquí tendriamos lógica de negocio real
  task.isCompleted = true;
  task.completedAt = new Date();

  return task;
};

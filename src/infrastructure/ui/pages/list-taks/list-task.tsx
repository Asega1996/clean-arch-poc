import { Task } from "domain/task";
import { useTasks } from "infrastructure/ui/hooks/task/use-tasks";
import React from "react";

export const ListTask = () => {
  const { tasks, completeTask } = useTasks();

  return (
    <div>
      <ul>
        {tasks?.map((task: Task) => (
          <li key={task.id} onClick={() => completeTask(task)}>
            {task.title} {task.isCompleted ? "Completada" : "Pendiente"}
          </li>
        ))}
      </ul>
    </div>
  );
};

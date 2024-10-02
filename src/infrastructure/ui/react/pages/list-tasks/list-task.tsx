import { Task } from "domain/task";
import { TaskForm } from "infrastructure/ui/react/components/task-form/task-form";
import { TaskItem } from "infrastructure/ui/react/components/task-item/task-item";
import { useTasks } from "infrastructure/ui/react/hooks/task/use-tasks";
import React from "react";
import "./style.css";

export const ListTask = () => {
  const { tasks, completeTask, deleteTask, createTask } = useTasks();

  return (
    <div>
      <TaskForm onSubmit={createTask} />
      <ul className="task-list">
        {tasks?.map((task: Task) => (
          <TaskItem
            onComplete={completeTask}
            onDelete={deleteTask}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

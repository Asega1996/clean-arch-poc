import React from "react";
import { TaskItemTypes } from "./types";
import "./style.css";

export const TaskItem = (props: TaskItemTypes) => {
  const { task, onComplete, onDelete } = props;

  const { isCompleted, completedAt } = task;

  const renderStatus = (isCompleted: boolean) => {
    return isCompleted ? "Completada" : "Pendiente";
  };

  const getCompletedDate = (completedAt: string) => {
    const completedDate = new Date(completedAt);

    return `${completedDate.getDate()}/${
      completedDate.getMonth() + 1
    }/${completedDate.getFullYear()}`;
  };

  const handleChangeStatus = () => {
    onComplete(task);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className="task">
      <p>
        {task.title} <button onClick={handleDelete}> Eliminar</button>
      </p>
      <p>
        {renderStatus(task.isCompleted)}
        {!isCompleted && (
          <div>
            <button onClick={handleChangeStatus}>Actualizar</button>
          </div>
        )}
        {isCompleted && (
          <div>Completada el: {getCompletedDate(completedAt)}</div>
        )}
      </p>
    </li>
  );
};

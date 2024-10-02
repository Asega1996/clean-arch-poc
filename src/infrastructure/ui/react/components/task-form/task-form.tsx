import React, { useState } from "react";
import { TaskFormTypes } from "./types";
import { Task, TaskComplexity } from "domain/task";

const defaultFormState = {
  title: "",
  complexity: TaskComplexity.SIMPLE,
};

export const TaskForm = (props: TaskFormTypes) => {
  const { onSubmit } = props;

  const [formValues, setFormValues] = useState(defaultFormState);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();

    const newTask: Omit<Task, "id"> = {
      title: formValues.title,
      complexity: formValues.complexity,
      isCompleted: false,
      completedAt: null,
    };

    onSubmit(newTask);
    setFormValues(defaultFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formValues.title}
        onChange={(ev) =>
          setFormValues({ ...formValues, title: ev.target.value })
        }
        type="text"
        placeholder="Nombre tarea"
      />
      <select
        onChange={(ev) =>
          setFormValues({
            ...formValues,
            complexity: Number.parseInt(ev.target.value),
          })
        }
        value={formValues.complexity}
      >
        <option label="Simple" value={TaskComplexity.SIMPLE} />
        <option label="Compleja" value={TaskComplexity.COMPLEX} />
      </select>
      <button type="submit">Nueva Tarea</button>
    </form>
  );
};

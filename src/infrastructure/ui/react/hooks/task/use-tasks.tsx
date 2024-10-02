import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTaskRepository, Task } from "domain/task";
import { createTaskApi } from "infrastructure/api";
import { httpRepository } from "infrastructure/repositories/http/httpRepository";
import { completeTask, deleteTask, createTask, listTask } from "useCases/task";
import { useMemo } from "react";

export const useTasks = () => {
  const queryClient = useQueryClient();
  const taskApi = createTaskApi(httpRepository);
  const taskRepo = useMemo(() => createTaskRepository(taskApi), [taskApi]);

  const onSuccessCallback = {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  };

  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => listTask(taskRepo),
  });

  const { mutate: updateTaskMutation } = useMutation({
    mutationFn: (task: Task) => completeTask(taskRepo, task),
    ...onSuccessCallback,
  });

  const { mutate: deleteTaskMutation } = useMutation({
    mutationFn: (taskId: number) => deleteTask(taskRepo, taskId),
    ...onSuccessCallback,
  });

  const { mutate: createTaskMutation } = useMutation({
    mutationFn: (task: Omit<Task, "id">) => createTask(taskRepo, task),
    ...onSuccessCallback,
  });

  return {
    tasks: data,
    completeTask: updateTaskMutation,
    deleteTask: deleteTaskMutation,
    createTask: createTaskMutation,
  };
};

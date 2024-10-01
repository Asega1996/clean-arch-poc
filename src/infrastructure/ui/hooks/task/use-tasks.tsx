import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTaskRepository, Task } from "domain/task";
import { createTaskApi } from "infrastructure/api";
import { httpRepository } from "infrastructure/repositories/http/httpRepository";
import { completeTask } from "logic/task";
import { listTask } from "logic/task/listTask";
import { useMemo } from "react";

export const useTasks = () => {
  const queryClient = useQueryClient();
  const taskApi = createTaskApi(httpRepository);
  const taskRepo = useMemo(() => createTaskRepository(taskApi), [taskApi]);

  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => listTask(taskRepo),
  });

  const { mutate } = useMutation({
    mutationFn: (task: Task) => completeTask(taskRepo, task),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  return { tasks: data, completeTask: mutate };
};

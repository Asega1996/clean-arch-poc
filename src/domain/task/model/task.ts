export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  complexity: TaskComplexity;
  completedAt: null | string;
};

export enum TaskComplexity {
  SIMPLE,
  COMPLEX,
}

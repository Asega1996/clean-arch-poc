export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  complexity: TaskComplexity;
  completedAt: null | Date;
};

enum TaskComplexity {
  SIMPLE,
  COMPLEX,
}

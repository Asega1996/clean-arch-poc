export type Http = {
  get: <T>(path: string) => Promise<T | any>;
  post: <T>(path: string, body: T) => Promise<T | any>;
  put: <T>(path: string, body: T) => Promise<T | any>;
  del: (path: string, id: number | string) => Promise<void>;
};

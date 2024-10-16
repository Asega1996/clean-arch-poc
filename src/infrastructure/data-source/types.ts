export type DataSource = {
  list: (baseUrl: string, entityName: string) => Promise<any>;
  listById: (
    baseUrl: string,
    entityName: string,
    id: number | string
  ) => Promise<any>;
  create: (baseUrl: string, entityName: string, body) => Promise<any>;
  update: (baseUrl: string, entityName: string, body) => Promise<any>;
  remove: (
    baseUrl: string,
    entityName: string,
    id: number | string
  ) => Promise<void>;
};

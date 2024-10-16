import React, { useMemo } from "react";
import { ApplicationContextTypes } from "./types";
import { createHttpRepository } from "infrastructure/data-source/http/httpRepository";
import { createLocalStorageRepository } from "infrastructure/data-source/local-storage/localStorageRepository";

export const ApplicationContext = React.createContext<
  ApplicationContextTypes | undefined
>(undefined);

export const ApplicationContextProvider = ({ children }) => {
  const httpClient = createHttpRepository();
  // const localStorageClient = createLocalStorageRepository();

  const contextValue = useMemo<ApplicationContextTypes>(
    () => ({
      dataSourceClient: httpClient,
    }),
    [httpClient]
  );

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

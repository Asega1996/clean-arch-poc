import React, { useMemo } from "react";
import { ApplicationContextTypes } from "./types";
import { createHttpRepository } from "infrastructure/http/httpRepository";

export const ApplicationContext = React.createContext<
  ApplicationContextTypes | undefined
>(undefined);

export const ApplicationContextProvider = ({ children }) => {
  const httpInstance = createHttpRepository();

  const contextValue = useMemo<ApplicationContextTypes>(
    () => ({
      httpClient: httpInstance,
    }),
    [httpInstance]
  );

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

import { useContext } from "react";
import { ApplicationContextTypes } from "./types";
import { ApplicationContext } from "./application-context";

export const useApplicationContext = () => {
  const value = useContext<ApplicationContextTypes | undefined>(
    ApplicationContext
  );

  if (!value) {
    throw new Error("The application has not an http valid instance");
  }

  return value;
};

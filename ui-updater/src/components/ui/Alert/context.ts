import { createContext, useContext } from "react";
import { AlertProps } from "./types";

export const AlertContext = createContext<Partial<AlertProps> | null>(null);

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("Alert components must be used within a Alert");
  }
  return context;
};

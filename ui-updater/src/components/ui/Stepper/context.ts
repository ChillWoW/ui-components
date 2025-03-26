import { createContext, useContext } from "react";
import { StepperContextType } from "./types";

export const StepperContext = createContext<StepperContextType | null>(null);

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("Stepper components must be used within a Stepper");
  }
  return context;
};

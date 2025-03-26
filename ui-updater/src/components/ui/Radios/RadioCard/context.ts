import { createContext, useContext } from "react";
import { RadioCardProps } from "./types";

export const RadioCardContext = createContext<Partial<RadioCardProps> | null>(
  null
);

export const useRadioCardContext = () => {
  const context = useContext(RadioCardContext);
  if (!context) {
    throw new Error("RadioCard components must be used within a RadioCard");
  }
  return context;
};

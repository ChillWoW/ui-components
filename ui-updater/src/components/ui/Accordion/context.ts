import { createContext, useContext } from "react";
import { AccordionClassNames, AccordionContextType } from "./types";

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

export const AccordionItemValueContext = createContext<string | null>(null);

export const AccordionItemPropsContext = createContext<{
  isOpen: boolean;
  chevronPosition: "left" | "right";
  disableChevronRotation: boolean;
  order?: number;
  variant?: string;
  disabled?: boolean;
  classNames?: AccordionClassNames;
} | null>(null);

export const AccordionParentContext = createContext<{
  chevronPosition: "left" | "right";
  disableChevronRotation: boolean;
  order?: number;
} | null>(null);

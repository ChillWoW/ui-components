import { createContext, useContext } from "react";
import { TimelineContextType } from "./types";

export const TimelineContext = createContext<TimelineContextType | null>(null);

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error(
      "Timeline components must be used within a Timeline component"
    );
  }
  return context;
};

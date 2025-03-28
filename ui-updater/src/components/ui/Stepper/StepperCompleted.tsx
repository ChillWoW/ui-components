import React from "react";
import { cn } from "../_utils";
import { StepperCompletedProps } from "./types";
import { useStepperContext } from "./context";

export const StepperCompleted = ({
  children,
  icon,
  className,
}: StepperCompletedProps) => {
  const { active, steps } = useStepperContext();

  if (active < steps.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-4",
        className
      )}
    >
      {icon && <div className="mb-2">{icon}</div>}
      {children}
    </div>
  );
};

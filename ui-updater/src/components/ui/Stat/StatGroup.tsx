import React from "react";
import { cn } from "../_utils";
import { StatGroupProps } from "./types";

export const StatGroup = ({
  children,
  className,
  columns = 3,
  gap = "md",
  bordered = false,
}: StatGroupProps) => {
  const gapClasses = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div
      className={cn(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        bordered &&
          "border rounded-lg border-gray-200 dark:border-gray-700 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

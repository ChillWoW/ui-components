import React from "react";
import { cn } from "../_utils";
import { useAlertContext } from "./context";

export interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  className,
}) => {
  const { classNames } = useAlertContext();

  return (
    <h3
      className={cn(
        "text-base font-semibold mb-1",
        classNames?.title,
        className
      )}
    >
      {children}
    </h3>
  );
};

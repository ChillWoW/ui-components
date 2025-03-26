import React from "react";
import { useAlertContext } from "./context";
import { cn } from "../_utils";

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const AlertDescription = ({
  children,
  className,
  ...props
}: AlertDescriptionProps) => {
  const { classNames } = useAlertContext();

  return (
    <p className={cn(classNames?.description, className)} {...props}>
      {children}
    </p>
  );
};

AlertDescription.displayName = "AlertDescription";

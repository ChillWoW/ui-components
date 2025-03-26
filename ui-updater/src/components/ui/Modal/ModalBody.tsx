import React from "react";
import { cn } from "../_utils";
import { ModalBodyProps } from "./types";
import { useModalContext } from "./context";

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  padding = "md",
}) => {
  const { classNames } = useModalContext();

  const paddingClass = {
    xs: "p-2",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
    none: "p-0",
  };

  return (
    <div
      className={cn(
        "flex-1 overflow-y-auto",
        paddingClass[padding],
        classNames?.body,
        className
      )}
    >
      {children}
    </div>
  );
};

ModalBody.displayName = "ModalBody";

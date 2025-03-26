import React from "react";
import { cn } from "../_utils";
import { ModalFooterProps } from "./types";
import { useModalContext } from "./context";

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
  separator = true,
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
        "flex items-center justify-end gap-2",
        paddingClass[padding],
        separator && "border-t border-[#3e4249]",
        classNames?.footer,
        className
      )}
    >
      {children}
    </div>
  );
};

ModalFooter.displayName = "ModalFooter";

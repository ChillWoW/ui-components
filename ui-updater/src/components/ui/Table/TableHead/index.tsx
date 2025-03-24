import React from "react";
import { cn } from "../..";
import { TableHeadProps } from "../types";

export const TableHead = ({
  children,
  className,
  ...props
}: TableHeadProps) => {
  return (
    <thead
      className={cn("border-b border-[#3e4249] bg-[#1e1f25]", className)}
      {...props}
    >
      {children}
    </thead>
  );
};

import React, { useContext } from "react";
import { cn } from "../_utils";
import { AccordionPanelProps } from "./types";
import { AccordionItemPropsContext, useAccordionContext } from "./context";

export function AccordionPanel({ children, className }: AccordionPanelProps) {
  const parentProps = useContext(AccordionItemPropsContext);
  const { classNames } = useAccordionContext();
  const isOpen = parentProps?.isOpen || false;
  const variant = parentProps?.variant;

  if (!isOpen) {
    return null;
  }

  const classes = cn(
    "px-4 py-3 text-sm text-gray-300",
    classNames?.itemActiveDescription,
    className
  );

  return (
    <div className={classes} role="region" hidden={!isOpen}>
      {children}
    </div>
  );
}

export default AccordionPanel;

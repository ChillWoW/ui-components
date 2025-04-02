import React from "react";
import { TooltipProps } from "../Tooltip/types";

export type SnippetSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SnippetRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface SnippetProps {
  children: React.ReactNode;
  color?: string;
  size?: SnippetSize;
  radius?: SnippetRadius;
  className?: string;
  symbol?: React.ReactNode;
  allowCopy?: boolean;
  hideCopyButton?: boolean;
  hideSymbol?: boolean;
  disableTooltip?: boolean;
  tooltipProps?: Partial<TooltipProps>;
  timeout?: number;
  copyIcon?: React.ReactNode;
  checkIcon?: React.ReactNode;
}

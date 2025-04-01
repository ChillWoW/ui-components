import { ReactNode } from "react";

export type GridSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl" | number;
export type GridJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type GridAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type GridFlow = "row" | "col" | "dense" | "row-dense" | "col-dense";

export type GridResponsiveCols = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  "2xl"?: number;
};

export interface GridProps {
  children: ReactNode;
  cols?: number | GridResponsiveCols;
  rows?: number;
  spacing?: GridSpacing;
  verticalSpacing?: GridSpacing;
  justify?: GridJustify;
  align?: GridAlign;
  flow?: GridFlow;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
}

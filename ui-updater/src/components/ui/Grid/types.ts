import { ReactNode } from "react";

type Spacing = "none" | "xs" | "sm" | "md" | "lg" | "xl" | number;
type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";
type Align = "start" | "center" | "end" | "stretch" | "baseline";
type Flow = "row" | "col" | "dense" | "row-dense" | "col-dense";

type ResponsiveCols = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  "2xl"?: number;
};

export interface GridProps {
  children: ReactNode;
  cols?: number | ResponsiveCols;
  rows?: number;
  spacing?: Spacing;
  verticalSpacing?: Spacing;
  justify?: Justify;
  align?: Align;
  flow?: Flow;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
}

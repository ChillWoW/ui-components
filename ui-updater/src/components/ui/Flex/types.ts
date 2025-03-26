import { ReactNode } from "react";

export type FlexOrientation = "horizontal" | "vertical";
export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface FlexProps {
  children: ReactNode;
  orientation?: FlexOrientation;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  wrap?: FlexWrap;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
}

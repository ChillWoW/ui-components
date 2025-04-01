import { ReactNode, CSSProperties } from "react";

export type GroupJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type GroupAlign =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";
export type GroupWrap = "nowrap" | "wrap" | "wrap-reverse";
export type GroupGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface GroupProps {
  children: ReactNode;
  justify?: GroupJustify;
  align?: GroupAlign;
  gap?: GroupGap;
  wrap?: GroupWrap;
  grow?: boolean;
  preventGrowOverflow?: boolean;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}

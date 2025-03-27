import { ReactNode } from "react";

export type StatVariant =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type StatSize = "xs" | "sm" | "md" | "lg" | "xl";
export type StatColumns = 1 | 2 | 3 | 4 | 5 | 6;
export type StatGap = "none" | "xs" | "sm" | "md" | "lg";

export interface StatProps {
  title?: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  variant?: StatVariant;
  size?: StatSize;
  trend?: number;
  trendLabel?: string;
  loading?: boolean;
  bordered?: boolean;
  className?: string;
  valueClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export interface StatGroupProps {
  children: ReactNode;
  className?: string;
  columns?: StatColumns;
  gap?: StatGap;
  bordered?: boolean;
}

import { ReactNode } from "react";

export type TimelineLineStyle = "solid" | "dashed" | "dotted";
export type TimelineBulletShape = "circle" | "square" | "diamond";
export type TimelineAlign = "left" | "right" | "center";

export type TimelineContextType = {
  align: TimelineAlign;
  bulletSize: number;
  lineColor: string;
  lineWidth: number;
  lineStyle: TimelineLineStyle;
  bulletShape: TimelineBulletShape;
  compact: boolean;
};

export interface TimelineProps {
  children: ReactNode;
  className?: string;
  align?: TimelineAlign;
  active?: number;
  bulletSize?: number;
  color?: string;
  lineWidth?: number;
  lineStyle?: TimelineLineStyle;
  reverseActive?: boolean;
  bulletShape?: TimelineBulletShape;
  compact?: boolean;
  [key: string]: any;
}

export interface TimelineItemProps {
  children?: ReactNode;
  className?: string;
  title?: ReactNode;
  date?: ReactNode;
  description?: ReactNode;
  bullet?: ReactNode;
  bulletColor?: string;
  active?: boolean;
  index?: number;
  totalItems?: number;
  icon?: ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

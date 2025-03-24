export type ProgressSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ProgressLabelPosition = "top" | "bottom";
export type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";

export interface ProgressClassNames {
  container?: string;
  leftSideText?: string;
  rightSideText?: string;
  hint?: string;
  track?: string;
  activeTrack?: string;
}

export interface ProgressProps {
  value: number;
  color?: string;
  size?: ProgressSize;
  leftSideText?: string;
  rightSideText?: string;
  hint?: string;
  classNames?: ProgressClassNames;
  showLabel?: boolean;
  radius?: ProgressRadius;
  trackColor?: string;
  labelPosition?: ProgressLabelPosition;
}

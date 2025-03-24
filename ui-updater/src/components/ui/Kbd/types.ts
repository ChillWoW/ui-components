export type KbdSize = "xs" | "sm" | "md" | "lg" | "xl";
export type KbdVariant = "filled" | "outline" | "subtle";
export type KbdRounded = "none" | "sm" | "md" | "lg" | "full";

export interface KbdClassNames {
  container?: string;
}

export interface KbdProps {
  children: React.ReactNode;
  className?: string;
  classNames?: KbdClassNames;
  size?: KbdSize;
  variant?: KbdVariant;
  asChild?: boolean;
  onClick?: () => void;
  nowrap?: boolean;
  rounded?: KbdRounded;
  shadow?: boolean;
  disabled?: boolean;
}

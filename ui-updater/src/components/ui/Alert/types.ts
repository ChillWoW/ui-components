export type AlertColor =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "dark"
  | "light";
export type AlertVariant = "filled" | "outline" | "unstyled";
export type AlertIconPosition = "top" | "center" | "bottom";
export type AlertRadius = "none" | "sm" | "md" | "lg" | "full";
export type AlertShadow = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  color?: AlertColor;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  iconPosition?: AlertIconPosition;
  onClose?: () => void;
  closeable?: boolean;
  closeIcon?: React.ReactNode;
  compact?: boolean;
  withBorder?: boolean;
  radius?: AlertRadius;
  shadow?: AlertShadow;
  classNames?: AlertClassNames;
}

export interface AlertClassNames {
  container?: string;
  icon?: string;
  closeButton?: string;
  title?: string;
  description?: string;
}

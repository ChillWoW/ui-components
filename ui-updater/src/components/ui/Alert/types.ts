export type AlertVariant = "success" | "error" | "warning" | "info";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  iconPosition?: "top" | "center" | "bottom";
  onClose?: () => void;
  closeable?: boolean;
  closeIcon?: React.ReactNode;
  compact?: boolean;
  withBorder?: boolean;
  radius?: "sm" | "md" | "lg" | "full";
  shadow?: boolean;
}

export type CodeRadius = "sm" | "md" | "lg" | "full";

export interface CodeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  px?: number;
  py?: number;
  radius?: CodeRadius;
}

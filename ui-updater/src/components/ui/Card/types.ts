export type CardRadius = "none" | "sm" | "md" | "lg" | "full";

export interface CardClassNames {
  container?: string;
  content?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  withBorder?: boolean;
  radius?: CardRadius;
  children: React.ReactNode;
  className?: string;
  classNames?: CardClassNames;
  shadow?: boolean;
  onClick?: () => void;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

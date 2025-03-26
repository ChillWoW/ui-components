export type RadioSize = "xs" | "sm" | "md" | "lg" | "xl";
export type RadioVariant = "filled" | "outline" | "subtle" | "unstyled";
export type RadioLabelPosition = "left" | "right";

export interface RadioClassNames {
  container?: string;
  label?: string;
  radio?: string;
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
  classNames?: RadioClassNames;
  size?: RadioSize;
  variant?: RadioVariant;
  labelPosition?: RadioLabelPosition;
  value?: string | number;
}

export type RadioCardSize = "xs" | "sm" | "md" | "lg" | "xl";
export type RadioCardAlign = "left" | "center" | "right" | "between";

export interface RadioCardProps {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  size?: RadioCardSize;
  className?: string;
  classNames?: {
    container?: string;
    header?: string;
    item?: string;
  };
}

export interface RadioCardContextValue {
  selectedValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  size?: RadioCardSize;
  classNames?: {
    container?: string;
    header?: string;
    item?: string;
  };
}

export interface RadioCardItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  value: string;
  rightElement?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  tooltip?: string;
  size?: RadioCardSize;
  className?: string;
  classNames?: {
    container?: string;
    radio?: string;
    content?: string;
    icon?: string;
    label?: string;
    description?: string;
  };
}

export interface RadioCardHeaderProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
  align?: RadioCardAlign;
  actions?: React.ReactNode;
}

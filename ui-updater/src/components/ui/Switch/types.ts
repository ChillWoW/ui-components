export type SwitchSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SwitchClassNames {
  wrapper?: string;
  track?: string;
  activeTrack?: string;
  thumb?: string;
  activeThumb?: string;
  label?: string;
  requiredStar?: string;
  hint?: string;
}

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  classNames?: SwitchClassNames;
  label?: string;
  size?: SwitchSize;
  required?: boolean;
  hint?: string;
  color?: string;
  name?: string;
  id?: string;
}

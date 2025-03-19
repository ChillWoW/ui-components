export type SwitchSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SwitchClassNames {
  wrapper?: string;
  track?: string;
  thumb?: string;
  label?: string;
  activeTrack?: string;
  activeThumb?: string;
}

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  classNames?: SwitchClassNames;
  label?: string;
  size?: SwitchSize;
}

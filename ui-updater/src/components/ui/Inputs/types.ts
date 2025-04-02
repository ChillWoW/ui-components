import React from "react";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  placeholder?: string;
  className?: string;
  showWeekNumbers?: boolean;
  firstDayOfWeek?: 0 | 1; // 0 for Sunday, 1 for Monday
  clearable?: boolean;
  yearRange?: number; // Number of years to show in year dropdown
  classNames?: DatePickerClassNames;
  leftSection?: React.ReactNode;
  error?: string;
}

export interface DatePickerClassNames {
  container?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  dropdown?: string;
  calendarHeader?: string;
  dayCell?: string;
  selectedDay?: string;
  monthCell?: string;
  yearCell?: string;
  leftSection?: string;
  footer?: string;
}

export interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  hint?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  format?: "hex" | "rgb" | "rgba";
  swatches?: string[];
  swatchesPerRow?: number;
  allowEyeDropper?: boolean;
  error?: string;
  id?: string;
  classNames?: ColorPickerClassNames;
}

export interface ColorPickerClassNames {
  container?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  colorPreview?: string;
  textInput?: string;
  swatchesContainer?: string;
  swatch?: string;
  eyeDropper?: string;
  alphaSlider?: string;
}

export type ChipVariant = "filled" | "outline";
export type ChipSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ChipRadius = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface ChipProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "size"
  > {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  color?: string;
  variant?: ChipVariant;
  size?: ChipSize;
  radius?: ChipRadius;
  disabled?: boolean;
  icon?: React.ReactNode;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  value?: string;
  classNames?: ChipClassNames;
}

export interface ChipClassNames {
  root?: string;
  label?: string;
  input?: string;
  icon?: string;
  checkIcon?: string;
}

export interface ChipGroupProps {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  children: React.ReactNode;
  className?: string;
  classNames?: ChipGroupClassNames;
}

export interface ChipGroupClassNames {
  root?: string;
}

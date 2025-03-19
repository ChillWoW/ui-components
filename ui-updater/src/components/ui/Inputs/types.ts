import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  classNames?: TextInputClassNames;
}

export interface TextInputClassNames {
  container?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  leftSection?: string;
  passwordToggle?: string;
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  classNames?: TextAreaClassNames;
  autoAdjust?: boolean;
}

export interface TextAreaClassNames {
  container?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  leftSection?: string;
}

export interface SelectInputOption {
  value: string;
  label: string;
}

export interface SelectInputProps {
  options: SelectInputOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  leftSection?: React.ReactNode;
  className?: string;
  classNames?: SelectInputClassNames;
}

export interface SelectInputClassNames {
  container?: string;
  label?: string;
  hint?: string;
  error?: string;
  input?: string;
  dropdown?: string;
  option?: string;
  selectedOption?: string;
  leftSection?: string;
}

export interface PinInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  length?: number;
  onChange?: (value: string) => void;
  mask?: boolean;
  disabled?: boolean;
  label?: string;
  hint?: string;
  placeholder?: string;
  allowLetters?: boolean;
  classNames?: PinInputClassNames;
}

export interface PinInputClassNames {
  container?: string;
  label?: string;
  hint?: string;
  input?: string;
}

export interface NumberInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  label?: string;
  hint?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  icon?: React.ReactNode;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  classNames?: NumberInputClassNames;
  allowEmpty?: boolean;
  allowDecimals?: boolean;
}

export interface NumberInputClassNames {
  container?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  leftSection?: string;
  incrementButton?: string;
  decrementButton?: string;
}

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
}

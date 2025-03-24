import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  error?: string;
  disabled?: boolean;
  className?: string;
  classNames?: TextInputClassNames;
}

export interface TextInputClassNames {
  container?: string;
  inputWrapper?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  leftSection?: string;
  rightSection?: string;
  passwordToggle?: string;
}

export interface PasswordInputProps extends TextInputProps {
  eyeIcon?: {
    show?: React.ReactNode;
    hide?: React.ReactNode;
  };
}

export interface TextAreaClassNames {
  container?: string;
  label?: string;
  required?: string;
  input?: string;
  leftSection?: string;
  hint?: string;
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  autoAdjust?: boolean;
  minHeight?: number;
  maxHeight?: number;
  classNames?: TextAreaClassNames;
  error?: string;
  onHeightChange?: (height: number) => void;
}

export interface SelectInputOption {
  value: string;
  label: string;
}

export interface SelectInputOptionProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  [key: string]: any; // For any additional HTML option attributes
}

export type SelectInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SelectInputProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "size"
  > {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  classNames?: SelectInputClassNames;
  error?: string | boolean;
  leftSection?: React.ReactNode;
  clearable?: boolean;
  allowDeselect?: boolean;
  searchable?: boolean;
  nothingFoundText?: string;
  size?: SelectInputSize;
  checkedIcon?: React.ReactNode;
  searchPlaceholder?: string;
}

export interface SelectInputClassNames {
  container?: string;
  label?: string;
  required?: string;
  input?: string;
  hint?: string;
  leftSection?: string;
  dropdown?: string;
  option?: string;
  selectedOption?: string;
  scrollbar?: string;
  searchInput?: string;
  clearButton?: string;
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
  error?: string;
  classNames?: PinInputClassNames;
}

export interface PinInputClassNames {
  container?: string;
  label?: string;
  hint?: string;
  input?: string;
  required?: string;
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
  leftSection?: React.ReactNode;
  value?: number;
  error?: string;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  classNames?: NumberInputClassNames;
  allowEmpty?: boolean;
  allowDecimals?: boolean;
}

export interface NumberInputClassNames {
  container?: string;
  inputContainer?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  leftSection?: string;
  incrementButton?: string;
  decrementButton?: string;
  controlsContainer?: string;
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

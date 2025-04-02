export type StepperInputOrientation = "horizontal" | "vertical";
export type StepperInputSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface StepperInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "value"> {
  label?: string;
  hint?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  error?: string;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  classNames?: StepperInputClassNames;
  orientation?: StepperInputOrientation;
  size?: StepperInputSize;
  iconDown?: React.ReactNode;
  iconUp?: React.ReactNode;
  revertButtons?: boolean;
}

export interface StepperInputClassNames {
  container?: string;
  controlsWrapper?: string;
  label?: string;
  hint?: string;
  required?: string;
  valueDisplay?: string;
  incrementButton?: string;
  decrementButton?: string;
  controlsContainer?: string;
}

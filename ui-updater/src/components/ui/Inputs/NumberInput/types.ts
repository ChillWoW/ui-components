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

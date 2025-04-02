export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
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
  inputContainer?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  leftSection?: string;
  rightSection?: string;
  passwordToggle?: string;
}

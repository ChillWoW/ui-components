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

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

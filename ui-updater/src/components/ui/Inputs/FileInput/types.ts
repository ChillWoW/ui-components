export interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "type" | "size"
  > {
  label?: string;
  hint?: string;
  required?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  error?: string | boolean;
  disabled?: boolean;
  className?: string;
  classNames?: FileInputClassNames;
  value?: File | File[] | null;
  onChange?: (value: File | File[] | null) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  minSize?: number;
  placeholder?: string;
  dragAndDrop?: boolean;
  showFilePreview?: boolean;
  clearable?: boolean;
  fileIcon?: React.ReactNode;
}

export interface FileInputClassNames {
  container?: string;
  label?: string;
  inputContainer?: string;
  leftSection?: string;
  dropzone?: string;
  hint?: string;
  error?: string;
  previewContainer?: string;
  fileItem?: string;
  rightSection?: string;
  required?: string;
}

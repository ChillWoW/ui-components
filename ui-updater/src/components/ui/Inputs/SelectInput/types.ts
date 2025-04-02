export interface SelectInputOption {
  children?: React.ReactNode;
  value: string;
  label: string;
}

export interface SelectInputOptionProps {
  value: string;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
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
  showSearchIcon?: boolean;
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

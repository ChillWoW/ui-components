export type MultiSelectSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface MultiSelectOptionProps {
  value: string;
  label?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}

export interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "size"> {
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  classNames?: MultiSelectClassNames;
  error?: string | boolean;
  leftSection?: React.ReactNode;
  clearable?: boolean;
  searchable?: boolean;
  nothingFoundText?: string;
  size?: MultiSelectSize;
  checkedIcon?: React.ReactNode;
  searchPlaceholder?: string;
  showSearchIcon?: boolean;
}

export interface MultiSelectClassNames {
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
  selectedLabel?: string;
}

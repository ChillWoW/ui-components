export interface StepItem {
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StepClassNames {
  container?: string;
  step?: string;
  label?: string;
  description?: string;
  separator?: string;
}

export interface StepperContextType {
  active: number;
  steps: StepItem[];
  sizeClasses: any;
  variantClasses: any;
  orientation: "horizontal" | "vertical";
  disabled?: boolean;
  loading?: boolean;
  handleStepClick: (index: number) => void;
  withNumbers?: boolean;
  completedIcon?: React.ReactNode;
  classNames?: StepClassNames;
  radius: string;
  iconPosition: "left" | "right";
  iconSize?: string | number;
}

export interface StepperProps {
  steps: StepItem[];
  active: number;
  onChange?: (step: number) => void;
  variant?: "filled" | "outline" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  orientation?: "horizontal" | "vertical";
  withNumbers?: boolean;
  completedIcon?: React.ReactNode;
  className?: string;
  classNames?: StepClassNames;
  disabled?: boolean;
  allowClick?: boolean;
  allowClickOnCompleted?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  iconPosition?: "left" | "right";
  loading?: boolean;
  iconSize?: string | number;
  children?: React.ReactNode;
}

export interface StepperStepProps {
  index: number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  allowStepSelect?: boolean;
  onClick?: (e: React.MouseEvent, index: number) => void;
  className?: string;
}

export interface StepperCompletedProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

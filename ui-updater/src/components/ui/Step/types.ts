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

export interface StepProps {
    steps: StepItem[];
    active: number;
    onChange?: (step: number) => void;
    variant?: "default" | "outline";
    size?: "sm" | "md" | "lg";
    orientation?: "horizontal" | "vertical";
    withNumbers?: boolean;
    completedIcon?: React.ReactNode;
    className?: string;
    classNames?: StepClassNames;
    disabled?: boolean;
    allowClick?: boolean;
    allowClickOnCompleted?: boolean;
}

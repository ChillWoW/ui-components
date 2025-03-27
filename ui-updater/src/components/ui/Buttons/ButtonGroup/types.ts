import {
    ButtonRadius,
    ButtonSize,
    ButtonVariant,
    ButtonIntent
} from "../Button/types";

export type ButtonGroupOrientation = "horizontal" | "vertical";

export interface ButtonGroupContextType {
    variant: ButtonVariant;
    size: ButtonSize;
    orientation: ButtonGroupOrientation;
    disabled: boolean;
    radius: ButtonRadius;
    fullWidth: boolean;
    spacing: number;
    selectedValue?: string | number;
    onItemClick: (value: string | number) => void;
}

export interface ButtonGroupProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    intent?: ButtonIntent;
    size?: ButtonSize;
    radius?: ButtonRadius;
    className?: string;
    orientation?: ButtonGroupOrientation;
    disabled?: boolean;
    fullWidth?: boolean;
    spacing?: number;
    isLoading?: boolean;
    value?: string | number;
    onChange?: (value: string | number) => void;
}

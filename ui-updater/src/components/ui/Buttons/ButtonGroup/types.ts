import { ButtonRadius, ButtonSize, ButtonVariant } from "../Button/types";

export type ButtonGroupOrientation = "horizontal" | "vertical";

export interface ButtonGroupProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: ButtonRadius;
    className?: string;
    orientation?: ButtonGroupOrientation;
    disabled?: boolean;
    fullWidth?: boolean;
    spacing?: number;
    value?: string | number;
    onChange?: (value: string | number) => void;
}

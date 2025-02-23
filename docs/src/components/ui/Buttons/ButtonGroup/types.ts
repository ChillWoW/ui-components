import { ButtonProps } from "../Button/types";

export interface ButtonGroupProps {
    children: React.ReactNode;
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    className?: string;
    orientation?: "horizontal" | "vertical";
    disabled?: boolean;
}

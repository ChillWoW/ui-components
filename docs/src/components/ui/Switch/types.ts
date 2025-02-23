export type SwitchSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SwitchClassNames {
    wrapper?: string;
    thumb?: string;
    label?: string;
}

export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    classNames?: SwitchClassNames;
    label?: string;
    size?: SwitchSize;
}

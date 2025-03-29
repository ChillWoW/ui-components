export interface CheckboxClassNames {
    container?: string;
    label?: string;
    checkbox?: string;
    required?: string;
}

export type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";
export type CheckboxVariant = "filled" | "outline" | "subtle" | "unstyled";
export type CheckboxLabelPosition = "left" | "right";
export type CheckboxShadow = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
export type CheckboxRadius = "sm" | "md" | "lg" | "xl" | "full";

export interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    classNames?: CheckboxClassNames;
    label?: string;
    required?: boolean;
    size?: CheckboxSize;
    indeterminate?: boolean;
    variant?: CheckboxVariant;
    labelPosition?: CheckboxLabelPosition;
    shadow?: CheckboxShadow;
    radius?: CheckboxRadius;
}

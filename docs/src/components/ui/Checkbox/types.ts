export interface CheckboxClassNames {
    container?: string;
    label?: string;
    checkbox?: string;
    required?: string;
}

export interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    classNames?: CheckboxClassNames;
    label?: string;
    required?: boolean;
}

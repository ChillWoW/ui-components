import React from "react";
import { Radio } from "../Radio/Radio";
import {
    cn,
    RadioClassNames,
    RadioLabelPosition,
    RadioSize,
    RadioVariant
} from "../..";

export interface RadioGroupItemProps {
    className?: string;
    label?: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    size?: RadioSize;
    variant?: RadioVariant;
    labelPosition?: RadioLabelPosition;
    classNames?: RadioClassNames;
    name?: string;
    onSelect?: () => void;
}

export const RadioGroupItem = ({
    className,
    label,
    value,
    checked,
    disabled = false,
    size = "md",
    variant = "filled",
    labelPosition = "right",
    classNames,
    name,
    onSelect,
    ...props
}: RadioGroupItemProps &
    Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "size" | "checked" | "onChange"
    >) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked && onSelect) {
            onSelect();
        }
    };

    return (
        <Radio
            className={className}
            checked={checked}
            disabled={disabled}
            value={value}
            name={name}
            onChange={handleChange}
            size={size}
            variant={variant}
            labelPosition={labelPosition}
            label={label}
            classNames={classNames}
            {...props}
        />
    );
};

RadioGroupItem.displayName = "RadioGroupItem";

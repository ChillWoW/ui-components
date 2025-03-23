import React from "react";
import { cn } from "../..";
import { RadioGroupItem } from "./RadioGroupItem";
import { RadioGroupProps } from "./types";

export const RadioGroup = ({
    className,
    defaultValue,
    value,
    onChange,
    children,
    size = "md",
    variant = "filled",
    labelPosition = "right",
    disabled = false,
    classNames,
    name,
    orientation = "vertical",
    ...props
}: RadioGroupProps) => {
    const [groupValue, setGroupValue] = React.useState<string>(
        value !== undefined ? value : defaultValue || ""
    );

    React.useEffect(() => {
        if (value !== undefined) {
            setGroupValue(value);
        }
    }, [value]);

    const handleChange = (newValue: string) => {
        if (value === undefined) {
            setGroupValue(newValue);
        }
        onChange?.(newValue);
    };

    const groupName =
        name || `radio-group-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <div
            className={cn(
                "flex gap-3",
                orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
                className
            )}
            role="radiogroup"
            {...props}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return null;

                const childProps = child.props as any;

                return React.cloneElement(child, {
                    //@ts-ignore
                    checked: childProps.value === groupValue,
                    disabled: childProps.disabled || disabled,
                    onSelect: () => handleChange(childProps.value),
                    name: groupName,
                    size: childProps.size || size,
                    variant: childProps.variant || variant,
                    labelPosition: childProps.labelPosition || labelPosition,
                    classNames: childProps.classNames || classNames
                });
            })}
        </div>
    );
};

RadioGroup.Item = RadioGroupItem;
RadioGroup.displayName = "RadioGroup";

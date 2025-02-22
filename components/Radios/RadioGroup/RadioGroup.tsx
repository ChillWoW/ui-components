import React from "react";
import { cn } from "../..";

export interface RadioGroupProps {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    children: React.ReactNode;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ className, defaultValue, value, onChange, children, ...props }, ref) => {
        const [groupValue, setGroupValue] = React.useState(
            value || defaultValue
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

        return (
            <div
                ref={ref}
                className={cn("flex flex-col gap-2", className)}
                {...props}
            >
                {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) return null;
                    return React.cloneElement(child, {
                        //@ts-ignore
                        checked: child.props.value === groupValue,
                        //@ts-ignore
                        disabled: child.props.disabled,
                        //@ts-ignore
                        onChange: () => handleChange(child.props.value)
                    });
                })}
            </div>
        );
    }
);

RadioGroup.displayName = "RadioGroup";

import React from "react";
import { cn } from "../..";
import { RadioGroupItem } from "./RadioGroupItem";
import { RadioGroupProps } from "./types";

type RadioGroupComponent = React.ForwardRefExoticComponent<
    RadioGroupProps & React.RefAttributes<HTMLDivElement>
> & {
    Item: typeof RadioGroupItem;
};

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
) as RadioGroupComponent;

RadioGroup.displayName = "RadioGroup";
RadioGroup.Item = RadioGroupItem;

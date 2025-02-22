import React from "react";
import { Radio } from "../Radio/Radio";
import { cn } from "../..";

export interface RadioGroupItemProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
}

export const RadioGroupItem = React.forwardRef<
    HTMLInputElement,
    RadioGroupItemProps
>(({ className, label, ...props }, ref) => {
    return (
        <label className="flex items-center space-x-2">
            <Radio ref={ref} className={className} {...props} />
            {label && (
                <label
                    className={cn(
                        "text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-60",
                        props.disabled && "opacity-60"
                    )}
                >
                    {label}
                </label>
            )}
        </label>
    );
});

RadioGroupItem.displayName = "RadioGroupItem";

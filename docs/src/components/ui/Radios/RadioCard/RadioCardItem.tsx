import React from "react";
import { Radio } from "../Radio/Radio";
import { cn } from "../..";

export interface RadioCardItemProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description?: string;
    icon?: React.ReactNode;
    value: string;
    className?: string;
    radioClassName?: string;
}

export const RadioCardItem = React.forwardRef<
    HTMLInputElement,
    RadioCardItemProps
>(
    (
        {
            className,
            radioClassName,
            label,
            description,
            icon,
            onChange,
            checked,
            disabled,
            ...props
        },
        ref
    ) => {
        return (
            <label
                className={cn(
                    "flex flex-col gap-3 min-w-[200px] p-3",
                    "border border-[#3e4249] bg-[#252627] rounded-md cursor-pointer",
                    "transition-colors duration-200 hover:border-[#53575e]",
                    disabled && "opacity-60 cursor-not-allowed",
                    className
                )}
            >
                <div className="flex items-center justify-between gap-3">
                    {icon ? (
                        <div className="flex items-center text-[#a6abb3]">
                            {icon}
                        </div>
                    ) : (
                        <div className="text-sm font-semibold text-white">
                            {label}
                        </div>
                    )}
                    <Radio
                        ref={ref}
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                        className={radioClassName}
                        {...props}
                    />
                </div>

                <div className="flex flex-col">
                    {icon && (
                        <div className="text-sm font-semibold text-white">
                            {label}
                        </div>
                    )}
                    {description && (
                        <div className="text-sm text-[#a6abb3]">
                            {description}
                        </div>
                    )}
                </div>
            </label>
        );
    }
);

RadioCardItem.displayName = "RadioCardItem";

import React from "react";
import { Radio } from "../../Radio/Radio";
import { cn } from "../../..";
import { RadioCardItemProps } from "../types";

export const RadioCardItem = React.forwardRef<
    HTMLInputElement,
    RadioCardItemProps
>(
    (
        {
            className,
            classNames,
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
                    "flex items-start gap-4 min-w-[200px] p-4",
                    "border border-[#3e4249] bg-[#252627] rounded-lg cursor-pointer",
                    "transition-colors duration-200",
                    checked && "border-[#53575e] bg-[#333538]",
                    !checked && "hover:border-[#53575e] hover:bg-[#2a2b2c]",
                    disabled && "opacity-60 cursor-not-allowed",
                    classNames?.container,
                    className
                )}
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        {icon && (
                            <div
                                className={cn(
                                    "flex items-center justify-center text-[#727b8e]",
                                    checked && "text-white",
                                    classNames?.icon
                                )}
                            >
                                {icon}
                            </div>
                        )}
                        <div className={cn("flex-1", classNames?.content)}>
                            <div
                                className={cn(
                                    "text-sm font-medium text-white",
                                    classNames?.label
                                )}
                            >
                                {label}
                            </div>
                            {description && (
                                <div
                                    className={cn(
                                        "text-sm text-[#727b8e] mt-1",
                                        classNames?.description
                                    )}
                                >
                                    {description}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Radio
                    ref={ref}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    className={cn("mt-1", classNames?.radio)}
                    {...props}
                />
            </label>
        );
    }
);

RadioCardItem.displayName = "RadioCardItem";

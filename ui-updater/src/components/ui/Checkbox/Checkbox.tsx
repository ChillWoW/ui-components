import React, { useEffect, useState } from "react";
import { cn } from "../_utils";
import { CheckboxProps } from "./types";

export const Checkbox = ({
    checked: controlledChecked,
    defaultChecked,
    onChange,
    disabled,
    className,
    classNames,
    label,
    required,
    size = "md",
    shadow = "sm",
    radius = "md",
    indeterminate = false,
    variant = "filled",
    labelPosition = "right",
    ...props
}: CheckboxProps) => {
    const [internalChecked, setInternalChecked] = useState(
        defaultChecked || false
    );

    useEffect(() => {
        if (controlledChecked !== undefined) {
            setInternalChecked(controlledChecked);
        }
    }, [controlledChecked]);

    const isChecked =
        controlledChecked !== undefined ? controlledChecked : internalChecked;

    const sizeClasses = {
        xs: "w-3.5 h-3.5",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
        "2xl": "w-8 h-8"
    };

    const iconSizes = {
        xs: "h-2 w-2",
        sm: "h-2.5 w-2.5",
        md: "h-3.5 w-3.5",
        lg: "h-4 w-4",
        xl: "h-5 w-5",
        "2xl": "h-6 w-6"
    };

    const radiusClasses = () => {
        if (variant === "unstyled") return "";

        const styles = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full"
        };

        return styles[radius] || styles.md;
    };

    const shadowStyles = () => {
        if (variant === "unstyled") return "";

        const styles = {
            none: "",
            xs: "shadow-xs",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
            "2xl": "shadow-2xl"
        };

        return styles[shadow as keyof typeof styles] || styles.sm;
    };

    const variantClasses = {
        filled: "border border-[#4a4a4a] bg-[#2c2c2c]",
        outline:
            "border-2 border-[#5a5a5a] hover:border-[#7a7a7a] hover:bg-[#2a2a2a]/30 bg-transparent checked:bg-transparent",
        subtle: "bg-transparent hover:bg-[#3a3a3a] border border-[#3e4249] checked:bg-[#3a3a3a]",
        unstyled: ""
    };

    const checkboxDisabledClass = "cursor-not-allowed opacity-60";

    const checkboxWrapperClass = cn(
        "inline-flex items-center",
        labelPosition === "right" ? "flex-row" : "flex-row-reverse",
        disabled && checkboxDisabledClass,
        classNames?.container,
        className
    );

    const checkboxClass = cn(
        "peer appearance-none cursor-pointer transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        shadowStyles(),
        radiusClasses(),
        disabled && checkboxDisabledClass,
        classNames?.checkbox
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;

        const newChecked = e.target.checked;

        if (controlledChecked === undefined) {
            setInternalChecked(newChecked);
        }

        onChange?.(newChecked);
    };

    return (
        <div className="flex flex-col">
            <div className={checkboxWrapperClass}>
                <label
                    className={cn(
                        "flex items-center relative",
                        disabled ? "cursor-not-allowed" : "cursor-pointer"
                    )}
                >
                    <input
                        type="checkbox"
                        className={checkboxClass}
                        checked={isChecked}
                        disabled={disabled}
                        onChange={handleChange}
                        {...props}
                    />

                    {!indeterminate && (
                        <span
                            className={cn(
                                "absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100",
                                "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                disabled && checkboxDisabledClass
                            )}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={iconSizes[size]}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    )}

                    {indeterminate && (
                        <span
                            className={cn(
                                "absolute text-white pointer-events-none opacity-100",
                                "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                disabled && checkboxDisabledClass
                            )}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={iconSizes[size]}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    )}
                </label>

                {label && (
                    <div
                        className={cn(
                            "flex flex-col",
                            labelPosition === "right" ? "ml-2" : "mr-2"
                        )}
                    >
                        <div className="flex flex-row items-center gap-1">
                            <label
                                className={cn(
                                    "text-white text-sm",
                                    disabled && checkboxDisabledClass,
                                    classNames?.label
                                )}
                            >
                                {label}
                            </label>
                            {required && (
                                <span
                                    className={cn(
                                        "text-red-500 text-sm",
                                        classNames?.required
                                    )}
                                >
                                    *
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

Checkbox.displayName = "Checkbox";

import React from "react";
import clsx from "clsx";
import { cn } from "..";
import { CheckboxProps } from "./types";

export const Checkbox = ({
    checked,
    onChange,
    disabled,
    className,
    classNames,
    label,
    required,
    ...props
}: CheckboxProps) => {
    const checkboxDisabledClass = "cursor-not-allowed opacity-60";

    const checkboxWrapperClass = cn(
        "inline-flex items-center",
        disabled && checkboxDisabledClass,
        classNames?.container,
        className
    );

    const checkboxClass = cn(
        "peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md",
        "border border-[#3e4249] checked:bg-[#252627] checked:border-[#252627]",
        classNames?.checkbox
    );

    const handleChange = () => {
        if (!disabled && onChange) {
            onChange(!checked);
        }
    };

    return (
        <div className={checkboxWrapperClass} onClick={handleChange}>
            <label
                className="flex items-center cursor-pointer relative"
                htmlFor="check-2"
            >
                <input
                    type="checkbox"
                    id="check-2"
                    className={cn(
                        checkboxClass,
                        disabled && checkboxDisabledClass
                    )}
                    disabled={disabled}
                    {...props}
                />
                <span
                    className={cn(
                        "absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        disabled && checkboxDisabledClass
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
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
            </label>
            <div className="ml-2 flex flex-row gap-1">
                {label && (
                    <label
                        className={cn(
                            "cursor-pointer ml-2 text-white text-sm",
                            disabled && checkboxDisabledClass,
                            classNames?.label
                        )}
                        htmlFor="check-2"
                    >
                        {label}
                    </label>
                )}
                {required && (
                    <label
                        className={cn(
                            "text-red-500 text-sm",
                            classNames?.required
                        )}
                    >
                        *
                    </label>
                )}
            </div>
        </div>
    );
};

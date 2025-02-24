import React from "react";
import { cn } from "..";
import { StepProps } from "./types";

export const Step = ({
    steps,
    active,
    onChange,
    variant = "default",
    size = "md",
    orientation = "horizontal",
    withNumbers = true,
    completedIcon,
    className,
    classNames,
    disabled,
    allowClick = false,
    allowClickOnCompleted = false
}: StepProps) => {
    const handleStepClick = (index: number) => {
        if (disabled) return;
        if (!allowClick) return;
        if (!allowClickOnCompleted && index < active) return;
        if (onChange) onChange(index);
    };

    const sizeClasses = {
        sm: {
            container: "gap-2",
            step: "h-6 w-6 text-xs",
            label: "text-xs",
            description: "text-[10px]",
            separator: "w-8"
        },
        md: {
            container: "gap-3",
            step: "h-8 w-8 text-sm",
            label: "text-sm",
            description: "text-xs",
            separator: "w-10"
        },
        lg: {
            container: "gap-4",
            step: "h-10 w-10 text-base",
            label: "text-base",
            description: "text-sm",
            separator: "w-12"
        }
    };

    const variantClasses = {
        default: {
            active: "bg-transparent text-white border border-white",
            completed: "bg-emerald-500 text-white",
            pending: "bg-transparent border border-gray-700 text-gray-400",
            separator: "bg-emerald-500",
            pendingSeparator: "border-t-2 border-dashed border-gray-700"
        },
        outline: {
            active: "border-2 border-white text-white",
            completed: "border-2 border-emerald-500 text-emerald-500",
            pending: "border-2 border-gray-400 text-gray-400",
            separator: "bg-emerald-500",
            pendingSeparator: "border-t-2 border-dashed border-gray-400"
        }
    };

    return (
        <div
            className={cn(
                "flex w-full",
                orientation === "vertical"
                    ? "flex-col"
                    : "flex-row items-center justify-center",
                sizeClasses[size].container,
                disabled && "opacity-60 cursor-not-allowed",
                classNames?.container,
                className
            )}
        >
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div
                        className={cn(
                            "flex items-center gap-2",
                            orientation === "vertical" && "flex-col"
                        )}
                    >
                        <div
                            className={cn(
                                "flex items-center justify-center rounded-full shadow cursor-pointer transition-colors duration-200",
                                sizeClasses[size].step,
                                index === active &&
                                    variantClasses[variant].active,
                                index < active &&
                                    variantClasses[variant].completed,
                                index > active &&
                                    variantClasses[variant].pending,
                                disabled && "cursor-not-allowed",
                                classNames?.step
                            )}
                            onClick={() => handleStepClick(index)}
                        >
                            {index < active && completedIcon
                                ? completedIcon
                                : withNumbers && index + 1}
                        </div>
                        <div className="flex flex-col">
                            <span
                                className={cn(
                                    sizeClasses[size].label,
                                    "font-medium",
                                    index === active && "text-gray-200",
                                    index < active && "text-emerald-500",
                                    index > active && "text-gray-400",
                                    classNames?.label
                                )}
                            >
                                {step.label}
                            </span>
                            {step.description && (
                                <span
                                    className={cn(
                                        sizeClasses[size].description,
                                        "text-gray-400",
                                        classNames?.description
                                    )}
                                >
                                    {step.description}
                                </span>
                            )}
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={cn(
                                "hidden md:block",
                                orientation === "vertical"
                                    ? "h-8 w-0.5"
                                    : "h-0.5",
                                sizeClasses[size].separator,
                                index < active
                                    ? variantClasses[variant].separator
                                    : variantClasses[variant].pendingSeparator,
                                classNames?.separator
                            )}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

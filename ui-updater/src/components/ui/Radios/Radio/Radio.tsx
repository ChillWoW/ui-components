import React from "react";
import { cn } from "../..";
import { RadioProps } from "./types";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className, checked, disabled, title, classNames, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "relative flex items-center gap-2",
                    classNames?.container
                )}
            >
                <input
                    type="radio"
                    ref={ref}
                    className="sr-only peer"
                    checked={checked}
                    disabled={disabled}
                    {...props}
                />
                <div
                    className={cn(
                        "w-4 h-4 rounded-full border transition-all duration-200 cursor-pointer",
                        "peer-checked:border-[5px] peer-checked:border-white",
                        disabled && "opacity-50 cursor-not-allowed",
                        classNames?.radio,
                        className
                    )}
                />
                {title && (
                    <span
                        className={cn("text-sm text-white", classNames?.title)}
                    >
                        {title}
                    </span>
                )}
            </div>
        );
    }
);

Radio.displayName = "Radio";

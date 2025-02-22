import React from "react";
import { cn } from "../..";

export interface RadioProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    className?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className, checked, disabled, ...props }, ref) => {
        return (
            <div className="relative flex items-center">
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
                        "w-4 h-4 rounded-full border transition-all duration-200",
                        "peer-checked:border-[5px] peer-checked:border-white",
                        disabled && "opacity-50 cursor-not-allowed",
                        className
                    )}
                />
            </div>
        );
    }
);

Radio.displayName = "Radio";

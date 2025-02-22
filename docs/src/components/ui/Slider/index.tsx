import React, { useState } from "react";
import { cn } from "..";

export interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
}

export const Slider: React.FC<SliderProps> = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className = ""
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipValue, setTooltipValue] = useState(value);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setTooltipValue(newValue);
        onChange(newValue);
    };

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div className={cn("relative w-full", className)}>
            <input
                type="range"
                value={value}
                onChange={handleSliderChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "w-full h-2 bg-[#252627] rounded-full cursor-pointer appearance-none transition-all duration-200",
                    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#3e4249]",
                    "[&::-webkit-slider-thumb]:hover:border-[#53575e]",
                    disabled &&
                        "opacity-60 cursor-not-allowed pointer-events-none"
                )}
                style={{
                    background: disabled
                        ? "#252627"
                        : `linear-gradient(to right, #22c55e ${
                              ((value - min) / (max - min)) * 100
                          }%, #252627 0%)`
                }}
            />

            {showTooltip && !disabled && (
                <div
                    className="absolute -top-8 transform -translate-x-1/2 bg-[#252627] text-white text-xs px-2 py-1 rounded-md border border-[#3e4249] shadow-lg"
                    style={{
                        left: `${((tooltipValue - min) / (max - min)) * 100}%`
                    }}
                >
                    {tooltipValue}
                </div>
            )}
        </div>
    );
};

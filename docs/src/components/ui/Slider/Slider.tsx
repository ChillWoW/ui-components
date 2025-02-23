import React, { useState, useCallback } from "react";
import { cn } from "..";
import { SliderProps } from "./types";

export const Slider: React.FC<SliderProps> = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className = "",
    marks,
    stickToMarks = false
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipValue, setTooltipValue] = useState(value);

    const findNearestMark = useCallback(
        (value: number) => {
            if (!marks || marks.length === 0) return value;

            return marks.reduce((nearest, mark) => {
                const currentDiff = Math.abs(value - nearest);
                const newDiff = Math.abs(value - mark.value);
                return newDiff < currentDiff ? mark.value : nearest;
            }, marks[0].value);
        },
        [marks]
    );

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        const finalValue = stickToMarks ? findNearestMark(newValue) : newValue;

        setTooltipValue(finalValue);
        onChange(finalValue);
    };

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div className={cn("relative w-full", className)}>
            <div className="relative">
                {marks && (
                    <div className="absolute w-full h-6 pointer-events-none">
                        {marks.map((mark) => {
                            const position =
                                ((mark.value - min) / (max - min)) * 100;
                            const isEdgeMark =
                                position === 0 || position === 100;

                            return (
                                <div
                                    key={mark.value}
                                    className={cn(
                                        "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-colors duration-200",
                                        isEdgeMark &&
                                            (position === 0
                                                ? "ml-[2px]"
                                                : "-ml-[2px]")
                                    )}
                                    style={{
                                        left: `${position}%`,
                                        transform: "translate(-50%, -50%)"
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
                <input
                    type="range"
                    value={value}
                    onChange={handleSliderChange}
                    min={min}
                    max={max}
                    step={
                        stickToMarks && marks
                            ? marks[1].value - marks[0].value
                            : step
                    }
                    disabled={disabled}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "w-full h-2 bg-[#252627] rounded-full cursor-pointer appearance-none transition-all duration-200",
                        "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#3e4249] [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10",
                        "[&::-webkit-slider-thumb]:hover:border-[#53575e]",
                        disabled &&
                            "opacity-60 cursor-not-allowed pointer-events-none"
                    )}
                    style={{
                        background: disabled
                            ? "#252627"
                            : `linear-gradient(to right, #228be6 ${
                                  ((value - min) / (max - min)) * 100
                              }%, #252627 0%)`
                    }}
                />
            </div>

            {marks && (
                <div className="relative w-full mt-1">
                    {marks.map((mark) => (
                        <div
                            key={mark.value}
                            className="absolute flex flex-col items-center"
                            style={{
                                left: `${((mark.value - min) / (max - min)) * 100}%`,
                                transform: "translateX(-50%)"
                            }}
                        >
                            {mark.label && (
                                <span className="mt-1 text-xs text-white">
                                    {mark.label}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            )}

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

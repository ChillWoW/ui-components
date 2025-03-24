import React, { useState, useCallback, useRef, useEffect } from "react";
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
  size = "md",
  color = "#228be6",
  marks,
  stickToMarks = false,
  label,
  labelPosition = "top",
  showTooltip = true,
  tooltipAlways = false,
  thumbLabel,
  thumbChildren,
  classNames = {},
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(tooltipAlways);
  const [tooltipValue, setTooltipValue] = useState(value);
  const prevValueRef = useRef(value);

  // Update tooltip value when external value changes
  useEffect(() => {
    if (prevValueRef.current !== value) {
      setTooltipValue(value);
      prevValueRef.current = value;
    }
  }, [value]);

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

  const handleMouseEnter = () => {
    if (showTooltip && !tooltipAlways) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (showTooltip && !tooltipAlways) {
      setIsTooltipVisible(false);
    }
  };

  // Get percentage for positioning
  const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;
  const valuePercentage = getPercentage(value);

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  const thumbSizes = {
    sm: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3",
    md: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4",
    lg: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5",
  };

  const renderLabel = () => {
    if (!label) return null;

    return (
      <div className={cn("text-sm text-white mb-1", classNames.label)}>
        {label}
      </div>
    );
  };

  return (
    <div className={cn("relative w-full", className, classNames.root)}>
      {labelPosition === "top" && renderLabel()}

      <div className="relative">
        {marks && (
          <div className="absolute w-full h-6 pointer-events-none">
            {marks.map((mark) => {
              const position = getPercentage(mark.value);
              const isEdgeMark = position === 0 || position === 100;

              return (
                <div
                  key={mark.value}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-colors duration-200",
                    isEdgeMark && (position === 0 ? "ml-[4px]" : "-ml-[4px]"),
                    classNames.mark
                  )}
                  style={{
                    left: `${position}%`,
                    transform: "translate(-50%, -50%)",
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
            stickToMarks && marks && marks.length > 1
              ? marks[1].value - marks[0].value
              : step
          }
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "w-full bg-[#252627] rounded-full cursor-pointer appearance-none transition-all duration-200",
            sizeClasses[size as keyof typeof sizeClasses],
            thumbSizes[size as keyof typeof thumbSizes],
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#3e4249] [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10",
            "[&::-webkit-slider-thumb]:hover:border-[#53575e]",
            disabled && "opacity-60 cursor-not-allowed pointer-events-none",
            classNames.track
          )}
          style={{
            background: disabled
              ? "#252627"
              : `linear-gradient(to right, ${color} ${valuePercentage}%, #252627 0%)`,
          }}
        />

        {thumbChildren && (
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2",
              classNames.thumb
            )}
            style={{ left: `${valuePercentage}%` }}
          >
            {thumbChildren}
          </div>
        )}

        {thumbLabel && (
          <div
            className={cn(
              "absolute bottom-full mb-1 transform -translate-x-1/2 text-xs text-white",
              classNames.thumbLabel
            )}
            style={{ left: `${valuePercentage}%` }}
          >
            {thumbLabel}
          </div>
        )}
      </div>

      {labelPosition === "bottom" && renderLabel()}

      {marks && (
        <div className="relative w-full mt-1">
          {marks.map((mark) => (
            <div
              key={mark.value}
              className="absolute flex flex-col items-center"
              style={{
                left: `${getPercentage(mark.value)}%`,
                transform: "translateX(-50%)",
              }}
            >
              {mark.label && (
                <span
                  className={cn(
                    "mt-1 text-xs text-white",
                    classNames.markLabel
                  )}
                >
                  {mark.label}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {(isTooltipVisible || tooltipAlways) && !disabled && showTooltip && (
        <div
          className={cn(
            "absolute -top-8 transform -translate-x-1/2 bg-[#252627] text-white text-xs px-2 py-1 rounded-md border border-[#3e4249] shadow-lg",
            classNames.tooltip
          )}
          style={{
            left: `${getPercentage(tooltipValue)}%`,
          }}
        >
          {tooltipValue}
        </div>
      )}
    </div>
  );
};

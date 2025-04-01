import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../_utils";
import { ColorSwatch } from "../../ColorSwatch";
import { ColorPickerProps } from "./types";
import { formatColor, parseColor } from "./handlers";

export const ColorPicker = ({
  value,
  onChange,
  radius = "md",
  label = "For testing",
  hint,
  placeholder,
  required = true,
  error,
  disabled,
  colorPreview = true,
  readOnly,
  format = "rgba",
  className,
  classNames,
  ...props
}: ColorPickerProps) => {
  const [color, setColor] = useState(value);
  const [isValidColor, setIsValidColor] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const getRadiusClass = () => {
    const styles = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    return styles[radius] || styles.md;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setColor(newValue);

    if (!newValue.trim()) {
      setIsValidColor(false);
      return;
    }

    try {
      const tempDiv = document.createElement("div");
      tempDiv.style.color = newValue;
      document.body.appendChild(tempDiv);
      const computedColor = window.getComputedStyle(tempDiv).color;
      document.body.removeChild(tempDiv);

      if (computedColor !== "rgba(0, 0, 0, 0)") {
        setIsValidColor(true);
        const parsedColor = parseColor(computedColor, format);
        if (parsedColor) {
          onChange!(formatColor(parsedColor, format));
        }
      } else {
        setIsValidColor(false);
      }
    } catch (error) {
      setIsValidColor(false);
    }
  };

  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    setIsValidColor(true);

    if (onChange) {
      onChange(
        format === "hex"
          ? newColor
          : formatColor(parseColor(newColor, format)!, format)
      );
    }
  };

  const handleAlphaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAlpha = parseFloat(e.target.value);
    const parsedColor = parseColor(color as string, format);
    if (parsedColor) {
      parsedColor.a = newAlpha;
      const newColor = formatColor(parsedColor, format);
      setColor(newColor);
      onChange!(newColor);
    }
  };

  useEffect(() => {
    setColor(value);
  }, [value]);

  const currentAlpha = parseColor((color as string) || "", format)?.a || 1;

  return (
    <div
      className={cn(
        "flex flex-col items-start text-white space-y-1",
        classNames?.container,
        className
      )}
    >
      {label && (
        <label
          className={cn(
            "text-sm ml-1 flex items-center gap-1",
            error && "text-red-500",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-500 text-sm", classNames?.required)}>
              *
            </span>
          )}
        </label>
      )}

      <div
        className={cn(
          "flex items-center border overflow-hidden transition-colors bg-[#2c2c2c] border border-[#4a4a4a] text-white",
          getRadiusClass(),
          error && "border-red-500",
          disabled && "opacity-60 cursor-not-allowed",
          classNames?.inputContainer
        )}
      >
        {colorPreview && (
          <div className="relative pl-2" ref={triggerRef}>
            <div className="flex items-center justify-center">
              <ColorSwatch
                color={value as string}
                onClick={() => {
                  console.log(isOpen);
                  !disabled && !readOnly && setIsOpen(!isOpen);
                }}
              />
            </div>
            {isOpen && (
              <div
                ref={popoverRef}
                className="absolute z-50 mt-2 p-4 bg-[#2c2c2c] rounded-md shadow-lg border border-[#4a4a4a]"
                style={{
                  top: "100%",
                  left: 0,
                }}
              >
                <div className="space-y-4">
                  <input
                    type="color"
                    value={value}
                    onChange={handleColorInputChange}
                    className="w-48 h-48"
                  />

                  {format === "rgba" && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-300">Opacity:</span>
                        <span className="text-xs text-white">
                          {currentAlpha.toFixed(2)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={currentAlpha}
                        onChange={handleAlphaChange}
                        className={cn(
                          "w-full h-2 bg-[#1e1e1e] rounded-full appearance-none",
                          "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3",
                          "[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full",
                          "[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer",
                          disabled && "opacity-60 cursor-not-allowed",
                          classNames?.alphaSlider
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        <input
          type="text"
          className={cn(
            "w-full border-none bg-[#2c2c2c] px-3 py-2 text-sm outline-none text-white",
            "[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            "placeholder:text-gray-500",
            disabled && "cursor-not-allowed",
            readOnly && "cursor-default",
            classNames?.input
          )}
          value={color}
          disabled={disabled}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder={
            placeholder || format === "hex"
              ? "#RRGGBB"
              : format === "rgb"
              ? "rgb(r,g,b)"
              : "rgba(r,g,b,a)"
          }
          {...props}
        />

        {/*{rightSection && (
          <div className={cn(sectionClass, "pr-3", classNames?.rightSection)}>
            {rightSection}
          </div>
        )}*/}
      </div>

      {(error || hint) && (
        <p
          className={cn(
            "text-xs ml-1",
            error ? "text-red-400" : "text-gray-300",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

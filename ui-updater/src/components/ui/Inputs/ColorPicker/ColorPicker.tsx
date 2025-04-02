import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../_utils";
import { ColorSwatch } from "../../ColorSwatch";
import { ColorPickerProps } from "./types";
import { formatColor, parseColor } from "./handlers";
import { IconEye } from "@tabler/icons-react";

export const ColorPicker = ({
  value,
  onChange,
  radius = "md",
  label = "For testing",
  hint,
  placeholder,
  required,
  error,
  disabled,
  colorPreview = true,
  readOnly,
  format = "hex",
  allowEyeDropper,
  className,
  classNames,
  ...props
}: ColorPickerProps) => {
  const [color, setColor] = useState(value);
  const [isValidColor, setIsValidColor] = useState(true);

  const supportsEyeDropper =
    typeof window !== "undefined" && "EyeDropper" in window;

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

  const handleEyeDropper = async () => {
    if (!supportsEyeDropper || disabled) return;

    try {
      // @ts-ignore - EyeDropper is not in the TypeScript DOM types yet
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const color = result.sRGBHex;

      setColor(color);
      setIsValidColor(true);
      const parsedColor = parseColor(color, format);
      if (parsedColor) {
        onChange && onChange(formatColor(parsedColor, format));
      }
    } catch (error) {
      console.log("Eye dropper was canceled");
    }
  };

  useEffect(() => {
    setColor(value);
  }, [value]);

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
          "flex items-center overflow-hidden transition-colors bg-[#2c2c2c] border border-[#4a4a4a] text-white",
          getRadiusClass(),
          error && "border-red-500",
          disabled && "opacity-60 cursor-not-allowed",
          classNames?.inputContainer
        )}
      >
        {colorPreview && (
          <div className="pl-2">
            <div className="flex items-center justify-center">
              <ColorSwatch color={value as string} />
            </div>
          </div>
        )}

        <div className="relative">
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
          <input
            type="color"
            value={value}
            onChange={handleColorInputChange}
            disabled={disabled}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            aria-label="Color picker"
          />
        </div>

        {allowEyeDropper && (
          <div className="pl-2">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleEyeDropper}
                disabled={disabled}
                className={cn(
                  "p-1.5 text-gray-300 hover:text-white focus:outline-none",
                  disabled &&
                    "opacity-60 cursor-not-allowed pointer-events-none",
                  classNames?.eyeDropper
                )}
                title="Pick color from screen"
                aria-label="Pick color from screen"
              >
                <IconEye size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {(error || hint) && (
        <p
          className={cn(
            "text-xs ml-1",
            error ? "text-red-500" : "text-gray-300",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

ColorPicker.displayName = "ColorPicker";

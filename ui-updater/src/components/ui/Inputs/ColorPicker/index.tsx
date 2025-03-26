import React, { useState, useEffect } from "react";
import { cn } from "../../_utils";
import { IconEye, IconRefresh, IconChecks } from "@tabler/icons-react";
import { ColorPickerProps } from "../types";

export const ColorPicker = ({
  value,
  onChange,
  label,
  hint,
  required,
  disabled,
  className,
  format = "hex",
  swatches,
  swatchesPerRow = 8,
  allowEyeDropper = false,
  error,
  classNames,
  id,
}: ColorPickerProps) => {
  const [textValue, setTextValue] = useState(value);
  const [isValidColor, setIsValidColor] = useState(true);

  // Generate id for input if not provided for accessibility
  const colorPickerId =
    id || label
      ? `color-picker-${label?.replace(/\s+/g, "-").toLowerCase()}`
      : undefined;

  // Check if EyeDropper API is supported
  const supportsEyeDropper =
    typeof window !== "undefined" && "EyeDropper" in window;

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  // Color parsing logic
  const parseColor = (
    color: string
  ): { r: number; g: number; b: number; a: number } | null => {
    // Handle empty input
    if (!color) return null;

    // Parse hex
    if (color.startsWith("#")) {
      const hex = color.substring(1);
      if (hex.length === 3) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        return { r, g, b, a: 1 };
      } else if (hex.length === 6) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b, a: 1 };
      }
    }

    // Parse rgb/rgba
    const rgbMatch = color.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/
    );
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1], 10);
      const g = parseInt(rgbMatch[2], 10);
      const b = parseInt(rgbMatch[3], 10);
      const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;
      return { r, g, b, a };
    }

    return null;
  };

  // Format color object to string based on selected format
  const formatColor = (color: {
    r: number;
    g: number;
    b: number;
    a: number;
  }): string => {
    if (format === "hex") {
      const toHex = (n: number) => {
        const hex = Math.round(n).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
    } else if (format === "rgb") {
      return `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(
        color.b
      )})`;
    } else if (format === "rgba") {
      return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(
        color.b
      )}, ${color.a.toFixed(2)})`;
    }
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  };

  // Handle color input change
  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setTextValue(newColor);
    setIsValidColor(true);

    // We don't need to parse and reformat for the native color input
    // as it always provides a valid hex color
    onChange(format === "hex" ? newColor : formatColor(parseColor(newColor)!));
  };

  // Handle text input change
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);

    // Skip validation for empty string to allow typing
    if (!newValue.trim()) {
      setIsValidColor(false);
      return;
    }

    try {
      // Create a temporary div to test if the color is valid
      const tempDiv = document.createElement("div");
      tempDiv.style.color = newValue;
      document.body.appendChild(tempDiv);
      const computedColor = window.getComputedStyle(tempDiv).color;
      document.body.removeChild(tempDiv);

      if (computedColor !== "rgba(0, 0, 0, 0)") {
        setIsValidColor(true);
        const parsedColor = parseColor(computedColor);
        if (parsedColor) {
          onChange(formatColor(parsedColor));
        }
      } else {
        setIsValidColor(false);
      }
    } catch (error) {
      setIsValidColor(false);
    }
  };

  // Handle text input blur - reset to valid value if current is invalid
  const handleTextInputBlur = () => {
    if (!isValidColor) {
      setTextValue(value);
      setIsValidColor(true);
    }
  };

  // Handle EyeDropper API
  const handleEyeDropper = async () => {
    if (!supportsEyeDropper || disabled) return;

    try {
      // @ts-ignore - EyeDropper is not in the TypeScript DOM types yet
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const color = result.sRGBHex;

      setTextValue(color);
      setIsValidColor(true);
      const parsedColor = parseColor(color);
      if (parsedColor) {
        onChange(formatColor(parsedColor));
      }
    } catch (error) {
      // User canceled the eye dropper
      console.log("Eye dropper was canceled");
    }
  };

  // Handle alpha slider change
  const handleAlphaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAlpha = parseFloat(e.target.value);
    const parsedColor = parseColor(value);
    if (parsedColor) {
      parsedColor.a = newAlpha;
      const newColor = formatColor(parsedColor);
      onChange(newColor);
      setTextValue(newColor);
    }
  };

  // Handle swatch selection
  const handleSwatchClick = (swatch: string) => {
    if (disabled) return;

    setTextValue(swatch);
    setIsValidColor(true);
    onChange(swatch);
  };

  // Reset to default color (white)
  const handleReset = () => {
    if (disabled) return;

    const defaultColor =
      format === "hex"
        ? "#ffffff"
        : format === "rgb"
        ? "rgb(255, 255, 255)"
        : "rgba(255, 255, 255, 1)";

    setTextValue(defaultColor);
    setIsValidColor(true);
    onChange(defaultColor);
  };

  // Get current alpha value
  const currentAlpha = parseColor(value)?.a || 1;

  // Helper for hex value
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

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
          htmlFor={colorPickerId}
          className={cn(
            "text-sm font-semibold ml-1 flex items-center gap-1",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-600", classNames?.required)}>*</span>
          )}
        </label>
      )}

      <div
        className={cn(
          "flex flex-col w-full border rounded-md overflow-hidden bg-[#252627] transition-colors",
          error ? "border-red-500" : "border-[#3e4249]",
          disabled && "opacity-60 cursor-not-allowed",
          classNames?.input
        )}
      >
        {/* Main color selection row */}
        <div className="flex items-center p-2 gap-2">
          {/* Color preview + native color input */}
          <div className="relative">
            <div
              className={cn(
                "w-9 h-9 rounded border border-[#3e4249] overflow-hidden",
                "bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')]",
                classNames?.colorPreview
              )}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: value }}
              />
            </div>
            <input
              id={colorPickerId}
              type="color"
              value={value && value.startsWith("#") ? value : "#ffffff"}
              onChange={handleColorInputChange}
              disabled={disabled}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              aria-label="Color picker"
            />
          </div>

          {/* Text input */}
          <input
            type="text"
            value={textValue}
            onChange={handleTextInputChange}
            onBlur={handleTextInputBlur}
            disabled={disabled}
            placeholder={
              format === "hex"
                ? "#RRGGBB"
                : format === "rgb"
                ? "rgb(r,g,b)"
                : "rgba(r,g,b,a)"
            }
            className={cn(
              "flex-1 px-3 py-2 text-sm outline-none text-white border-none bg-transparent",
              !isValidColor && "text-red-400",
              classNames?.textInput
            )}
            aria-invalid={!isValidColor || !!error}
            aria-describedby={
              error || hint ? `${colorPickerId}-description` : undefined
            }
          />

          {/* Eye dropper button */}
          {allowEyeDropper && supportsEyeDropper && (
            <button
              type="button"
              onClick={handleEyeDropper}
              disabled={disabled}
              className={cn(
                "p-1.5 text-gray-300 hover:text-white focus:outline-none",
                disabled && "opacity-60 cursor-not-allowed pointer-events-none",
                classNames?.eyeDropper
              )}
              title="Pick color from screen"
              aria-label="Pick color from screen"
            >
              <IconEye size={18} />
            </button>
          )}

          {/* Reset button */}
          <button
            type="button"
            onClick={handleReset}
            disabled={disabled}
            className={cn(
              "p-1.5 text-gray-300 hover:text-white focus:outline-none",
              disabled && "opacity-60 cursor-not-allowed pointer-events-none"
            )}
            title="Reset to white"
            aria-label="Reset to white"
          >
            <IconRefresh size={18} />
          </button>
        </div>

        {/* Alpha slider */}
        {format === "rgba" && (
          <div className="flex items-center px-2 pb-2 gap-2">
            <span className="text-xs text-gray-300 min-w-12">Alpha:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={currentAlpha}
              onChange={handleAlphaChange}
              disabled={disabled}
              className={cn(
                "w-full h-2 bg-[#1e1e1e] rounded-full appearance-none",
                "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3",
                "[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full",
                "[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer",
                disabled && "opacity-60 cursor-not-allowed",
                classNames?.alphaSlider
              )}
              aria-label="Color opacity"
            />
            <span className="text-xs text-white min-w-10 text-right">
              {currentAlpha.toFixed(2)}
            </span>
          </div>
        )}

        {/* Color swatches */}
        {swatches && swatches.length > 0 && (
          <div
            className={cn(
              "grid gap-1 p-2 border-t border-[#3e4249]",
              classNames?.swatchesContainer
            )}
            style={{
              gridTemplateColumns: `repeat(${swatchesPerRow}, minmax(0, 1fr))`,
            }}
          >
            {swatches.map((swatch, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "w-6 h-6 rounded border border-[#3e4249] relative",
                  "bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')]",
                  "hover:border-[#53575e] focus:outline-none focus:ring-1 focus:ring-white",
                  value === swatch && "ring-1 ring-white",
                  disabled &&
                    "opacity-60 cursor-not-allowed pointer-events-none",
                  classNames?.swatch
                )}
                onClick={() => handleSwatchClick(swatch)}
                disabled={disabled}
                aria-label={`Select color: ${swatch}`}
                title={swatch}
              >
                <div
                  className="absolute inset-0 rounded"
                  style={{ backgroundColor: swatch }}
                />
                {value === swatch && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconChecks
                      size={14}
                      className="text-white drop-shadow-lg"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {(error || hint) && (
        <p
          id={`${colorPickerId}-description`}
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

ColorPicker.displayName = "ColorPicker";

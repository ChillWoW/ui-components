import React, { useState, useRef, useEffect } from "react";
import { cn } from "../..";
import { IconEye, IconRefresh } from "@tabler/icons-react";
import { ColorPickerProps } from "../types";

export const ColorPicker = ({
  value,
  onChange,
  label,
  hint,
  description,
  required,
  disabled,
  className,
  format = "hex",
  swatches,
  swatchesPerRow = 8,
  allowEyeDropper = false,
  classNames,
}: ColorPickerProps) => {
  const [textValue, setTextValue] = useState(value);
  const [isValidColor, setIsValidColor] = useState(true);
  const eyeDropperRef = useRef<any>(null);
  const supportsEyeDropper =
    typeof window !== "undefined" && "EyeDropper" in window;

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const parseColor = (
    color: string
  ): { r: number; g: number; b: number; a: number } | null => {
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
    return `#${Math.round(color.r).toString(16)}${Math.round(color.g).toString(
      16
    )}${Math.round(color.b).toString(16)}`;
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setTextValue(newColor);

    const parsedColor = parseColor(newColor);
    if (parsedColor) {
      onChange(formatColor(parsedColor));
    }
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);

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

  const handleTextInputBlur = () => {
    if (!isValidColor) {
      setTextValue(value);
      setIsValidColor(true);
    }
  };

  const handleEyeDropper = async () => {
    if (!supportsEyeDropper || disabled) return;

    try {
      // @ts-ignore - EyeDropper is not in the TypeScript DOM types yet
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const color = result.sRGBHex;

      setTextValue(color);
      const parsedColor = parseColor(color);
      if (parsedColor) {
        onChange(formatColor(parsedColor));
      }
    } catch (error) {
      // User canceled the eye dropper
      console.log("Eye dropper was canceled");
    }
  };

  return (
    <div className={cn("flex flex-col gap-1", classNames?.container)}>
      {label && (
        <label
          className={cn(
            "text-sm text-white font-medium ml-2 flex items-center gap-1",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-600", classNames?.required)}>*</span>
          )}
        </label>
      )}

      <div className="relative">
        <div
          className={cn(
            "flex flex-col gap-2 border border-[#3e4249] rounded-lg bg-[#252627] p-3",
            disabled && "opacity-60 cursor-not-allowed",
            className,
            classNames?.input
          )}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <div
                className={cn(
                  "w-10 h-10 rounded-md border border-[#3e4249] cursor-pointer",
                  "bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')]",
                  classNames?.colorPreview
                )}
              >
                <div
                  className="absolute inset-0 rounded-md"
                  style={{ backgroundColor: value }}
                />
              </div>
              <input
                type="color"
                value={value.startsWith("#") ? value : "#ffffff"}
                onChange={handleColorChange}
                disabled={disabled}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
            </div>

            <div className="flex-1 flex items-center gap-2">
              <input
                type="text"
                value={textValue}
                onChange={handleTextInputChange}
                onBlur={handleTextInputBlur}
                disabled={disabled}
                className={cn(
                  "bg-[#1e1e1e] border border-[#3e4249] rounded px-2 py-1 text-sm text-white flex-1",
                  !isValidColor && "border-red-500",
                  classNames?.textInput
                )}
              />

              {allowEyeDropper && supportsEyeDropper && (
                <button
                  type="button"
                  onClick={handleEyeDropper}
                  disabled={disabled}
                  className={cn(
                    "p-1 bg-[#1e1e1e] border border-[#3e4249] rounded text-[#727b8e] hover:text-white hover:border-[#53575e]",
                    classNames?.eyeDropper
                  )}
                  title="Pick color from screen"
                >
                  <IconEye size={18} />
                </button>
              )}
            </div>
          </div>

          {format === "rgba" && (
            <div className="flex items-center gap-2 mt-1">
              <label className="text-xs text-[#727b8e] w-12">Alpha:</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={parseColor(value)?.a || 1}
                onChange={(e) => {
                  const parsedColor = parseColor(value);
                  if (parsedColor) {
                    parsedColor.a = parseFloat(e.target.value);
                    onChange(formatColor(parsedColor));
                  }
                }}
                disabled={disabled}
                className="w-full h-2 bg-[#1e1e1e] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <span className="text-xs text-white w-8 text-right">
                {(parseColor(value)?.a || 1).toFixed(2)}
              </span>
            </div>
          )}

          {swatches && swatches.length > 0 && (
            <div
              className={cn(
                "flex flex-wrap gap-2 mt-2",
                classNames?.swatchesContainer
              )}
            >
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `repeat(${swatchesPerRow}, minmax(0, 1fr))`,
                }}
              >
                {swatches.map((swatch, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-6 h-6 rounded border border-[#3e4249] cursor-pointer hover:border-[#53575e] relative",
                      "bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')]",
                      value === swatch && "ring-2 ring-white",
                      classNames?.swatch
                    )}
                    onClick={() => !disabled && onChange(swatch)}
                  >
                    <div
                      className="absolute inset-0 rounded"
                      style={{ backgroundColor: swatch }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (format === "hex") {
                    onChange("#ffffff");
                  } else if (format === "rgb") {
                    onChange("rgb(255, 255, 255)");
                  } else {
                    onChange("rgba(255, 255, 255, 1)");
                  }
                }}
                disabled={disabled}
                className="text-xs text-[#727b8e] hover:text-white flex items-center gap-1"
              >
                <IconRefresh size={12} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {hint && (
        <p className={cn("text-xs text-[#727b8e] ml-2", classNames?.hint)}>
          {hint}
        </p>
      )}
    </div>
  );
};

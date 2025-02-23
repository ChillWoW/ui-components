import React, { useState } from "react";
import { cn } from "../..";

export interface ColorPickerProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    format?: "hex" | "rgb" | "rgba";
    swatches?: string[];
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
    value,
    onChange,
    label,
    description,
    required,
    disabled,
    className,
    format = "hex",
    swatches
}) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        if (format === "rgb" || format === "rgba") {
            const r = parseInt(newColor.substr(1, 2), 16);
            const g = parseInt(newColor.substr(3, 2), 16);
            const b = parseInt(newColor.substr(5, 2), 16);
            onChange(
                format === "rgba"
                    ? `rgba(${r}, ${g}, ${b}, 1)`
                    : `rgb(${r}, ${g}, ${b})`
            );
        } else {
            onChange(newColor);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm text-white font-medium ml-2 flex items-center gap-1">
                    {label}
                    {required && <span className="text-red-600">*</span>}
                </label>
            )}

            <div className="relative">
                <div
                    className={cn(
                        "flex flex-col gap-2 border border-[#3e4249] rounded-lg bg-[#252627] p-3",
                        disabled && "opacity-60 cursor-not-allowed",
                        className
                    )}
                >
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div
                                className="w-10 h-10 rounded-md border border-[#3e4249] cursor-pointer"
                                style={{ backgroundColor: value }}
                            />
                            <input
                                type="color"
                                value={value}
                                onChange={handleColorChange}
                                disabled={disabled}
                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                            />
                        </div>
                        <input
                            type="text"
                            value={value}
                            readOnly
                            className="bg-[#1e1e1e] border border-[#3e4249] rounded px-2 py-1 text-sm text-white w-[170px]"
                        />
                    </div>

                    {swatches && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {swatches.map((swatch, index) => (
                                <div
                                    key={index}
                                    className="w-6 h-6 rounded border border-[#3e4249] cursor-pointer hover:border-[#53575e]"
                                    style={{ backgroundColor: swatch }}
                                    onClick={() =>
                                        !disabled && onChange(swatch)
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {description && (
                <p className="text-xs text-[#727b8e] ml-2">{description}</p>
            )}
        </div>
    );
};

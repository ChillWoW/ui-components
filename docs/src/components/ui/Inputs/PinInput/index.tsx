import { InputHTMLAttributes, useRef, useState, KeyboardEvent } from "react";
import { cn, Text } from "../..";

export interface PinInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    length?: number;
    onChange?: (value: string) => void;
    mask?: boolean;
    disabled?: boolean;
    label?: string;
    description?: string;
    placeholder?: string;
}

export const PinInput = ({
    length = 4,
    onChange,
    mask,
    disabled,
    className,
    label,
    description,
    placeholder = "○",
    ...props
}: PinInputProps) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (index: number) => {
        if (index >= 0 && index < length) {
            inputRefs.current[index]?.focus();
        }
    };

    const handleChange = (index: number, value: string) => {
        // Only allow single digit
        const digit = value.slice(-1);

        if (digit.match(/^[0-9]$/)) {
            const newValues = [...values];
            newValues[index] = digit;
            setValues(newValues);
            onChange?.(newValues.join(""));

            // Move to next input
            if (index < length - 1) {
                focusInput(index + 1);
            }
        }
    };

    const handleKeyDown = (
        index: number,
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Backspace") {
            if (values[index] === "") {
                focusInput(index - 1);
            } else {
                const newValues = [...values];
                newValues[index] = "";
                setValues(newValues);
                onChange?.(newValues.join(""));
            }
        } else if (e.key === "ArrowLeft") {
            focusInput(index - 1);
        } else if (e.key === "ArrowRight") {
            focusInput(index + 1);
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, length);
        const digits = pastedData.match(/\d/g) || [];

        const newValues = [...values];
        digits.forEach((digit, index) => {
            if (index < length) {
                newValues[index] = digit;
            }
        });

        setValues(newValues);
        onChange?.(newValues.join(""));
        focusInput(Math.min(digits.length, length - 1));
    };

    return (
        <div
            className={cn(
                "flex gap-2",
                disabled && "opacity-60 cursor-not-allowed"
            )}
        >
            <div className="flex flex-col gap-1">
                {label && <label className="text-white">{label}</label>}
                <div className="flex gap-2">
                    {Array.from({ length }).map((_, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={
                                mask
                                    ? values[index]
                                        ? "•"
                                        : ""
                                    : values[index]
                            }
                            placeholder={placeholder}
                            onChange={(e) =>
                                handleChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            disabled={disabled}
                            className={cn(
                                "w-10 h-10 text-center rounded-lg bg-[#252627] border border-[#3e4249]",
                                "text-white text-xl font-medium outline-none",
                                "transition-all duration-200",
                                "focus:border-[#3e4249]",
                                disabled && "cursor-not-allowed",
                                className
                            )}
                            {...props}
                        />
                    ))}
                </div>
                {description && (
                    <Text size="sm" className="text-gray-400">
                        {description}
                    </Text>
                )}
            </div>
        </div>
    );
};

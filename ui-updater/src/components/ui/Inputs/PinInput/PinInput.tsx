import { useRef, useState, KeyboardEvent, useCallback, useMemo } from "react";
import { cn } from "../../_utils";
import { PinInputProps } from "./types";

export const PinInput = ({
  length = 4,
  onChange,
  mask,
  disabled,
  className,
  label,
  hint,
  placeholder = "○",
  allowLetters = false,
  classNames,
  error,
  value: externalValue,
  ...props
}: PinInputProps) => {
  const [internalValues, setInternalValues] = useState<string[]>(() => {
    if (externalValue) {
      const valueArray = (externalValue as string).split("").slice(0, length);
      return [...valueArray, ...Array(length - valueArray.length).fill("")];
    }
    return Array(length).fill("");
  });

  const values = externalValue
    ? (externalValue as string)
        .split("")
        .slice(0, length)
        .concat(Array(length - (externalValue as string).length).fill(""))
    : internalValues;

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const pattern = useMemo(
    () => (allowLetters ? /^[0-9a-zA-Z]$/ : /^[0-9]$/),
    [allowLetters]
  );

  const focusInput = useCallback(
    (index: number) => {
      if (index >= 0 && index < length) {
        inputRefs.current[index]?.focus();
      }
    },
    [length]
  );

  const updateValues = useCallback(
    (newValues: string[]) => {
      setInternalValues(newValues);
      onChange?.(newValues.join(""));
    },
    [onChange]
  );

  const handleChange = useCallback(
    (index: number, value: string) => {
      const digit = value.slice(-1);

      if (digit.match(pattern)) {
        const newValues = [...values];
        newValues[index] = digit;
        updateValues(newValues);

        if (index < length - 1) {
          focusInput(index + 1);
        }
      }
    },
    [values, pattern, length, focusInput, updateValues]
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (values[index] === "") {
          focusInput(index - 1);
        } else {
          const newValues = [...values];
          newValues[index] = "";
          updateValues(newValues);
        }
      } else if (e.key === "ArrowLeft") {
        focusInput(index - 1);
      } else if (e.key === "ArrowRight") {
        focusInput(index + 1);
      }
    },
    [values, focusInput, updateValues]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").slice(0, length);

      const pastedPattern = allowLetters ? /[0-9a-zA-Z]/g : /\d/g;
      const validChars = pastedData.match(pastedPattern) || [];

      const newValues = [...values];
      validChars.forEach((char, index) => {
        if (index < length) {
          newValues[index] = char;
        }
      });

      updateValues(newValues);
      focusInput(Math.min(validChars.length, length - 1));
    },
    [values, allowLetters, length, updateValues, focusInput]
  );

  const containerClasses = useMemo(
    () =>
      cn(
        "flex gap-2",
        disabled && "opacity-60 cursor-not-allowed",
        classNames?.container
      ),
    [disabled, classNames?.container]
  );

  const inputClasses = useMemo(
    () =>
      cn(
        "w-10 h-10 text-center rounded-lg bg-[#2c2c2c] border border-[#4a4a4a]",
        "text-white text-xl font-medium outline-none",
        "transition-all duration-200",
        "focus:border-[#3e4249]",
        error && "border-red-500",
        disabled && "opacity-60 cursor-not-allowed",
        classNames?.input,
        className
      ),
    [disabled, error, classNames?.input, className]
  );

  const inputs = useMemo(
    () =>
      Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode={allowLetters ? "text" : "numeric"}
          pattern={allowLetters ? "[0-9a-zA-Z]" : "[0-9]*"}
          maxLength={1}
          value={mask ? (values[index] ? "•" : "") : values[index]}
          placeholder={placeholder}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={!!error}
          {...props}
        />
      )),
    [
      length,
      allowLetters,
      mask,
      values,
      placeholder,
      inputClasses,
      disabled,
      error,
      props,
      handleChange,
      handleKeyDown,
      handlePaste,
    ]
  );

  const inputId = useMemo(
    () =>
      label
        ? `pin-input-${label.replace(/\s+/g, "-").toLowerCase()}`
        : `pin-input-${Math.random().toString(36).substring(2, 9)}`,
    [label]
  );

  return (
    <div className={containerClasses}>
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-semibold ml-1 flex items-center gap-1 text-white",
              disabled && "opacity-60 cursor-not-allowed",
              classNames?.label
            )}
          >
            {label}
            {props.required && (
              <span
                className={cn("text-red-500 text-sm", classNames?.required)}
              >
                *
              </span>
            )}
          </label>
        )}
        <div className="flex gap-2">{inputs}</div>
        {(error || hint) && (
          <p
            className={cn(
              "text-xs ml-1",
              error ? "text-red-500" : "text-gray-300",
              disabled && "opacity-60 cursor-not-allowed",
              classNames?.hint
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    </div>
  );
};

PinInput.displayName = "PinInput";

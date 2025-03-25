import React, { useId, useState, useRef, useEffect } from "react";
import { MultiSelectOptionProps, MultiSelectProps } from "../types";
import { cn } from "../..";
import Option from "./Option";
import { IconX, IconCheck } from "@tabler/icons-react";

export const MultiSelect = ({
  value = [],
  onChange,
  label,
  hint,
  required,
  placeholder = "Select options",
  disabled,
  className,
  classNames,
  leftSection,
  clearable = false,
  searchable = false,
  nothingFoundText = "No options found",
  size = "md",
  checkedIcon,
  error,
  searchPlaceholder = "Search...",
  children,
  ...props
}: MultiSelectProps) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child) || !searchValue) return true;

    const option = child.props as MultiSelectOptionProps;
    const optionLabel = option.label?.toLowerCase() || "";
    return optionLabel.includes(searchValue.toLowerCase());
  });

  const handleSelect = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange?.(value.filter((v) => v !== optionValue));
    } else {
      onChange?.([...value, optionValue]);
    }

    if (searchable) {
      inputRef.current?.focus();
      setSearchValue("");
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.([]);
    setSearchValue("");
  };

  const removeValue = (e: React.MouseEvent, optionValue: string) => {
    e.stopPropagation();
    onChange?.(value.filter((v) => v !== optionValue));
  };

  const getSelectedLabels = () => {
    const selectedLabels: { value: string; label: string }[] = [];

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      const option = child.props as MultiSelectOptionProps;
      if (value.includes(option.value)) {
        selectedLabels.push({
          value: option.value,
          label: option.label || "",
        });
      }
    });

    return selectedLabels;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle size classes
  const getSizeClasses = () => {
    switch (size) {
      case "xs":
        return "text-xs py-1 px-2";
      case "sm":
        return "text-sm py-1.5 px-2.5";
      case "lg":
        return "text-base py-2.5 px-4";
      case "xl":
        return "text-lg py-3 px-5";
      default:
        return "text-sm py-2 px-3";
    }
  };

  const selectedLabels = getSelectedLabels();

  return (
    <div
      className={cn(
        "flex flex-col space-y-1",
        className,
        classNames?.container
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-medium text-white",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-500 ml-1", classNames?.required)}>
              *
            </span>
          )}
        </label>
      )}

      <div ref={dropdownRef} className="relative">
        <div
          onClick={() => {
            if (!disabled) {
              setIsOpen(!isOpen);
              if (searchable && !isOpen) {
                setTimeout(() => inputRef.current?.focus(), 10);
              }
            }
          }}
          className={cn(
            "flex w-full items-center rounded-md border border-gray-700 bg-[#1e1f20] text-white transition-colors",
            disabled && "opacity-50 cursor-not-allowed",
            error && "border-red-500",
            !disabled && "cursor-pointer hover:border-gray-500",
            isOpen && "border-gray-500",
            classNames?.input
          )}
        >
          <div className="flex flex-grow items-center min-h-[38px] flex-wrap">
            {leftSection && (
              <span
                className={cn(
                  "flex items-center justify-center pl-3",
                  classNames?.leftSection
                )}
              >
                {leftSection}
              </span>
            )}

            {searchable && isOpen ? (
              <div className="flex-grow pl-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  className="bg-transparent outline-none w-full"
                  placeholder={searchPlaceholder}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            ) : (
              <div className="flex flex-wrap gap-1 p-1 flex-grow">
                {selectedLabels.length > 0 ? (
                  selectedLabels.map(({ value: val, label }) => (
                    <div
                      key={val}
                      className={cn(
                        "flex items-center bg-[#2e2f30] rounded-full px-2 py-1 text-xs",
                        classNames?.selectedLabel
                      )}
                    >
                      <span className="mr-1">{label}</span>
                      <button
                        type="button"
                        onClick={(e) => removeValue(e, val)}
                        className="text-gray-400 hover:text-white"
                      >
                        <IconX size={14} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className={cn("text-gray-400 pl-3", getSizeClasses())}>
                    {placeholder}
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center ml-auto pr-3">
              {clearable && value.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className={cn(
                    "text-gray-400 hover:text-white p-1 rounded-full",
                    classNames?.clearButton
                  )}
                >
                  <IconX size={16} />
                </button>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className={cn(
                  "h-5 w-5 text-slate-400 transition-transform",
                  isOpen && "transform rotate-180"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className={cn(
              "absolute z-50 mt-1 w-full border border-[#3e4249] rounded-lg bg-[#252627] shadow-lg",
              classNames?.dropdown
            )}
          >
            <div
              className={cn(
                "max-h-60 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent",
                classNames?.scrollbar
              )}
            >
              {filteredChildren.length > 0 ? (
                React.Children.map(filteredChildren, (child) => {
                  if (!React.isValidElement(child)) return null;

                  const option = child.props as MultiSelectOptionProps;
                  const isSelected = value.includes(option.value);

                  return React.cloneElement(child as React.ReactElement<any>, {
                    selected: isSelected,
                    onSelect: () => handleSelect(option.value),
                    checkedIcon: checkedIcon || <IconCheck size={16} />,
                    className: cn(
                      getSizeClasses(),
                      classNames?.option,
                      isSelected && classNames?.selectedOption
                    ),
                  });
                })
              ) : (
                <div className="p-2 text-center text-gray-400 text-sm">
                  {nothingFoundText}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {(error || hint) && (
        <p
          className={cn(
            "text-sm ml-2",
            error ? "text-red-500" : "text-gray-400",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

MultiSelect.Option = Option;

export default MultiSelect;

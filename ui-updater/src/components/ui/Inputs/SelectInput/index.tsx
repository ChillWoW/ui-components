import React, { useId, useState, useRef, useEffect } from "react";
import { SelectInputOptionProps, SelectInputProps } from "../types";
import { cn } from "../..";
import Option from "./Option";
import { IconX, IconCheck, IconSearch } from "@tabler/icons-react";

export const SelectInput = ({
  value,
  onChange,
  label,
  hint,
  required,
  placeholder = "Select option",
  disabled,
  className,
  classNames,
  leftSection,
  clearable = false,
  allowDeselect = false,
  searchable = false,
  nothingFoundText = "No options found",
  size = "md",
  checkedIcon,
  error,
  searchPlaceholder = "Search...",
  children,
  ...props
}: SelectInputProps) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredChildren = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child) || !searchValue) return true;

    const option = child.props as SelectInputOptionProps;
    const optionLabel = option.label?.toLowerCase() || "";
    return optionLabel.includes(searchValue.toLowerCase());
  });

  const handleSelect = (optionValue: string) => {
    if (allowDeselect && value === optionValue) {
      onChange?.("");
    } else {
      onChange?.(optionValue);
    }
    if (!searchable) {
      setIsOpen(false);
    } else {
      inputRef.current?.focus();
      setSearchValue("");
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.("");
    setSearchValue("");
  };

  const getSelectedLabel = () => {
    let selectedLabel = "";
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      const option = child.props as SelectInputOptionProps;
      if (option.value === value) {
        selectedLabel = option.label || "";
      }
    });
    return selectedLabel;
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

  return (
    <div className={cn("flex flex-col relative", classNames?.container)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm text-white font-semibold ml-2 flex items-center gap-1",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-600", classNames?.required)}>*</span>
          )}
        </label>
      )}

      <div className="relative" ref={dropdownRef}>
        <div
          className={cn(
            "flex items-center border border-[#3e4249] rounded-lg bg-[#252627] overflow-hidden cursor-pointer",
            "hover:border-[#53575e]",
            error && "border-red-500",
            disabled && "opacity-60 cursor-not-allowed",
            isOpen && "border-[#53575e]",
            classNames?.input
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {leftSection && (
            <div
              className={cn(
                "flex items-center justify-center px-2 text-gray-300",
                classNames?.leftSection
              )}
            >
              {leftSection}
            </div>
          )}

          {searchable && isOpen ? (
            <div className="flex items-center flex-grow">
              <IconSearch className="text-gray-400 ml-2" size={16} />
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder={searchPlaceholder}
                className={cn(
                  "appearance-none w-full px-2 text-sm bg-transparent text-white border-0 outline-none",
                  getSizeClasses(),
                  classNames?.searchInput
                )}
                autoFocus
              />
            </div>
          ) : (
            <div
              className={cn(
                "flex-grow truncate",
                leftSection && "pl-1",
                getSizeClasses()
              )}
            >
              {value ? getSelectedLabel() : placeholder}
            </div>
          )}

          <div className="flex items-center pr-2 gap-1">
            {clearable && value && (
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

                  const option = child.props as SelectInputOptionProps;
                  const isSelected = option.value === value;

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

SelectInput.displayName = "SelectInput";

SelectInput.Option = Option;

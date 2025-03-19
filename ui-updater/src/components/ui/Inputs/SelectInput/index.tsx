import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "../..";
import { SelectInputOption, SelectInputProps } from "../types";

export const SelectInput = ({
  options,
  value,
  onChange,
  label,
  hint,
  required,
  placeholder = "Select option",
  disabled,
  leftSection,
  className,
  classNames,
  ...props
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<{
    top?: string;
    left?: string;
    width?: string;
    maxHeight?: string;
  }>({});

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: `${rect.bottom + window.scrollY + 5}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        maxHeight: "200px",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: SelectInputOption) => {
    if (!disabled) {
      if (onChange) {
        onChange(option.value);
      }
      setIsOpen(false);
    }
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={cn("flex flex-col", classNames?.container)}>
      {label && (
        <label
          className={cn(
            "text-sm text-white font-semibold ml-2 flex items-center gap-1",
            classNames?.label
          )}
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div
        ref={containerRef}
        className={cn(
          "flex items-center border border-[#3e4249] rounded-lg bg-[#252627] transition-all duration-200 overflow-hidden",
          "hover:border-[#53575e] hover:cursor-pointer",
          disabled && "opacity-60 cursor-not-allowed",
          classNames?.input,
          className
        )}
        onClick={toggleDropdown}
      >
        {leftSection && (
          <div
            className={cn(
              "px-3 flex items-center justify-center text-[#727b8e] transition-colors duration-200 hover:text-[#c9c2c2]",
              classNames?.leftSection
            )}
          >
            {leftSection}
          </div>
        )}

        <div className="flex-1 px-3 py-2 text-sm">
          <span
            className={cn(!selectedOption ? "text-[#727b8e]" : "text-white")}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <div className="px-3 flex items-center justify-center text-[#727b8e]">
          <IconChevronDown
            size={16}
            className={cn(
              "transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </div>

      {isOpen && !disabled && (
        <div
          className={cn(
            "fixed z-[1000] bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg overflow-y-auto",
            classNames?.dropdown
          )}
          style={{
            top: dropdownStyle.top || 0,
            left: dropdownStyle.left || 0,
            width: dropdownStyle.width || "100%",
            maxHeight: dropdownStyle.maxHeight || "200px",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={cn(
                "px-3 py-2 cursor-pointer text-sm transition-all duration-200",
                option.value === value
                  ? cn("bg-[#333538] text-white", classNames?.selectedOption)
                  : cn("text-[#a1adc2] hover:bg-[#333538] hover:text-white"),
                classNames?.option
              )}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSelect(option);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {hint && (
        <p className={cn("text-sm text-gray-300 ml-2", classNames?.hint)}>
          {hint}
        </p>
      )}
    </div>
  );
};

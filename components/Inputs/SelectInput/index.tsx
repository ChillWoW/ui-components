import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "../..";

interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  description?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  leftSection?: React.ReactNode;
  className?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
  label,
  description,
  required,
  error,
  placeholder = "Select option",
  disabled,
  leftSection,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (option: Option) => {
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
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-white font-medium ml-2 flex items-center gap-1">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div
        ref={containerRef}
        className={cn(
          "flex items-center border border-[#3e4249] rounded-lg bg-[#252627] transition-all duration-200 overflow-hidden",
          "hover:border-[#53575e]",
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
        onClick={toggleDropdown}
      >
        {leftSection && (
          <div className="px-3 flex items-center justify-center text-[#727b8e] transition-colors duration-200 hover:text-[#c9c2c2]">
            {leftSection}
          </div>
        )}

        <div className="flex-1 px-3 py-2 text-sm">
          <span className={!selectedOption ? "text-[#727b8e]" : "text-white"}>
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
          className="fixed z-50 bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg overflow-y-auto"
          style={dropdownStyle}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={cn(
                "px-3 py-2 cursor-pointer text-sm transition-all duration-200",
                option.value === value
                  ? "bg-[#333538] text-white"
                  : "text-[#a1adc2] hover:bg-[#333538] hover:text-white"
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
      {description && (
        <p className="text-sm text-[#727b8e] ml-2">{description}</p>
      )}
      {error && <p className="text-sm text-red-600 ml-2">{error}</p>}
    </div>
  );
};

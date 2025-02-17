"use client";

import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "../inputs.css";

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
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className="input-wrapper" ref={containerRef}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      {description && <p className="input-description">{description}</p>}

      <div
        className={`input-container ${disabled ? "input-disabled" : ""} ${
          error ? "input-error" : ""
        } ${className || ""}`}
      >
        {leftSection && <div className="input-section">{leftSection}</div>}

        <div
          className="input-field"
          style={{ cursor: "pointer" }}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span style={{ color: !selectedOption ? "#727b8e" : "#ffffff" }}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <div className="input-section">
          <IconChevronDown
            style={{
              width: "16px",
              height: "16px",
              color: "#727b8e",
              transition: "transform 200ms ease",
              transform: isOpen ? "rotate(180deg)" : "none",
            }}
          />
        </div>
      </div>

      {isOpen && !disabled && (
        <div className="select-dropdown" style={dropdownStyle}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-option ${
                option.value === value ? "select-option-selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};

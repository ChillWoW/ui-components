import React, { useState, useRef, useEffect } from "react";
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
  IconX,
  IconCalendarEvent,
} from "@tabler/icons-react";
import {
  cn,
  defaultDescriptionClass,
  defaultIconClass,
  defaultInputClass,
  defaultInputContainerClass,
  defaultInputContentClass,
  defaultLabelClass,
  Button,
} from "../../index";
import { DatePickerProps } from "../types";

export const DatePicker = ({
  value,
  onChange,
  label,
  hint,
  required,
  disabled,
  minDate,
  maxDate,
  format = "yyyy-MM-dd",
  placeholder = "Select date",
  className,
  firstDayOfWeek = 1,
  clearable = true,
  yearRange = 10,
  classNames,
  leftSection,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState({});

  // Adjust weekdays based on firstDayOfWeek
  const baseWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDays =
    firstDayOfWeek === 1
      ? [...baseWeekDays.slice(1), baseWeekDays[0]]
      : baseWeekDays;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: `${rect.bottom + window.scrollY + 5}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
      });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
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

  const formatDate = (date: Date): string => {
    if (!date) return "";

    // Basic formatting based on the format prop
    if (format === "yyyy-MM-dd") {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    return date.toLocaleDateString();
  };

  const getDaysInMonth = (year: number, month: number): Date[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    let firstDayOfWeekIndex = firstDay.getDay();

    // Adjust for first day of week setting
    if (firstDayOfWeek === 1) {
      firstDayOfWeekIndex =
        firstDayOfWeekIndex === 0 ? 6 : firstDayOfWeekIndex - 1;
    }

    // Add days from previous month
    for (let i = firstDayOfWeekIndex; i > 0; i--) {
      days.push(new Date(year, month, -i + 1));
    }

    // Add days from current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Add days from next month to complete the grid
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;

    if (onChange) {
      onChange(date);
    }
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const years = Array.from(
    { length: yearRange * 2 + 1 },
    (_, i) => currentMonth.getFullYear() - yearRange + i
  );

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onChange) {
      onChange(undefined as any);
    }
    setIsOpen(false);
  };

  const handleToday = () => {
    const today = new Date();
    if (onChange) {
      onChange(today);
    }
    setCurrentMonth(today);
    setViewMode("days");
  };

  const renderCalendarHeader = () => (
    <div
      className={cn(
        "flex items-center justify-between mb-4 px-2",
        classNames?.calendarHeader
      )}
    >
      <button
        onClick={handlePrevMonth}
        className="p-1 hover:bg-[#333538] rounded"
        disabled={viewMode !== "days"}
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        onClick={() => {
          if (viewMode === "days") setViewMode("months");
          else if (viewMode === "months") setViewMode("years");
          else if (viewMode === "years") setViewMode("days");
        }}
        className="flex items-center gap-1 px-2 py-1 hover:bg-[#333538] rounded text-white"
      >
        {viewMode === "years" ? (
          <span>{`${years[0]} - ${years[years.length - 1]}`}</span>
        ) : (
          <>
            <span>{months[currentMonth.getMonth()]}</span>
            <span>{currentMonth.getFullYear()}</span>
          </>
        )}
      </button>
      <button
        onClick={handleNextMonth}
        className="p-1 hover:bg-[#333538] rounded"
        disabled={viewMode !== "days"}
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );

  const renderMonthView = () => (
    <div className="grid grid-cols-3 gap-2 p-2">
      {months.map((month, index) => (
        <button
          key={month}
          onClick={() => {
            setCurrentMonth(new Date(currentMonth.getFullYear(), index));
            setViewMode("days");
          }}
          className={cn(
            "p-2 text-sm rounded hover:bg-[#333538] transition-colors",
            currentMonth.getMonth() === index
              ? "bg-[#333538] text-white"
              : "text-[#727b8e]",
            classNames?.monthCell
          )}
        >
          {month.slice(0, 3)}
        </button>
      ))}
    </div>
  );

  const renderYearView = () => (
    <div className="grid grid-cols-3 gap-2 p-2">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => {
            setCurrentMonth(new Date(year, currentMonth.getMonth()));
            setViewMode("months");
          }}
          className={cn(
            "p-2 text-sm rounded hover:bg-[#333538] transition-colors",
            currentMonth.getFullYear() === year
              ? "bg-[#333538] text-white"
              : "text-[#727b8e]",
            classNames?.yearCell
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        defaultInputContainerClass,
        "flex flex-col items-start text-white",
        classNames?.container
      )}
    >
      {label && (
        <label
          className={cn(
            defaultLabelClass,
            "text-sm text-white font-semibold ml-2 flex items-center gap-1",
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

      <div ref={containerRef} className="relative w-full">
        <div
          className={cn(
            defaultInputClass,
            "flex items-center border border-[#3e4249] rounded-md bg-[#252627] overflow-hidden",
            disabled && "opacity-60 cursor-not-allowed",
            className,
            classNames?.input
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {leftSection ? (
            <div className={cn(defaultIconClass, classNames?.leftSection)}>
              {leftSection}
            </div>
          ) : (
            <div className={cn(defaultIconClass, classNames?.leftSection)}>
              <IconCalendar size={18} />
            </div>
          )}
          <input
            type="text"
            className={cn(
              defaultInputContentClass,
              "flex border-none bg-transparent px-3 py-2 text-sm outline-none w-full text-white"
            )}
            value={value ? formatDate(value) : ""}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
          />
        </div>

        {isOpen && !disabled && (
          <div
            className={cn(
              "fixed z-50 bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg min-w-[280px]",
              classNames?.dropdown
            )}
            style={dropdownStyle}
          >
            <div className="p-2">{renderCalendarHeader()}</div>
            {viewMode === "days" && (
              <div className="p-2">
                <div className="grid grid-cols-7 gap-1">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="text-center text-sm text-[#727b8e] py-1"
                    >
                      {day}
                    </div>
                  ))}
                  {getDaysInMonth(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth()
                  ).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      disabled={isDateDisabled(date)}
                      className={cn(
                        "p-2 text-sm rounded hover:bg-[#333538] transition-colors",
                        date.getMonth() === currentMonth.getMonth()
                          ? "text-white"
                          : "text-[#727b8e]",
                        value?.toDateString() === date.toDateString() &&
                          "bg-[#333538] text-white",
                        isDateDisabled(date) && "opacity-40 cursor-not-allowed",
                        classNames?.dayCell,
                        value?.toDateString() === date.toDateString() &&
                          classNames?.selectedDay
                      )}
                    >
                      {date.getDate()}
                    </button>
                  ))}
                </div>
                <div
                  className={cn(
                    "flex items-center justify-end gap-2 mt-4 pt-4 border-t border-[#3e4249]",
                    classNames?.footer
                  )}
                >
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={handleToday}
                    leftSection={<IconCalendarEvent size={14} />}
                  >
                    Today
                  </Button>
                  {clearable && value && (
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={handleClear}
                      leftSection={<IconX size={14} />}
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>
            )}

            {viewMode === "months" && renderMonthView()}
            {viewMode === "years" && renderYearView()}
          </div>
        )}
      </div>

      {hint && (
        <p
          className={cn(
            defaultDescriptionClass,
            "text-xs text-gray-300 ml-2",
            classNames?.hint
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

import React, { useState, useRef, useEffect, useMemo } from "react";
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
  error,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => value || new Date());
  const [viewMode, setViewMode] = useState<"days" | "months" | "years">("days");
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState({});

  // Memoize weekdays to avoid recalculating on every render
  const weekDays = useMemo(() => {
    const baseWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return firstDayOfWeek === 1
      ? [...baseWeekDays.slice(1), baseWeekDays[0]]
      : baseWeekDays;
  }, [firstDayOfWeek]);

  // Memoize months
  const months = useMemo(
    () => [
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
    ],
    []
  );

  // Memoize years
  const years = useMemo(
    () =>
      Array.from(
        { length: yearRange * 2 + 1 },
        (_, i) => currentMonth.getFullYear() - yearRange + i
      ),
    [currentMonth, yearRange]
  );

  // Update dropdown position when opened
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

  // Update current month when value changes externally
  useEffect(() => {
    if (value) {
      setCurrentMonth(value);
    }
  }, [value]);

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

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Format date based on format prop
  const formatDate = (date: Date): string => {
    if (!date) return "";

    if (format === "yyyy-MM-dd") {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    return date.toLocaleDateString();
  };

  // Memoize days in month to avoid recalculation
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

  // Memoize current month days
  const currentMonthDays = useMemo(
    () => getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth()),
    [currentMonth]
  );

  // Check if a date is disabled
  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  // Handlers
  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;
    onChange?.(date);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(undefined as any);
    setIsOpen(false);
  };

  const handleToday = () => {
    const today = new Date();
    onChange?.(today);
    setCurrentMonth(today);
    setViewMode("days");
  };

  const toggleViewMode = () => {
    if (viewMode === "days") setViewMode("months");
    else if (viewMode === "months") setViewMode("years");
    else setViewMode("days");
  };

  // Render calendar header
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
        aria-label="Previous month"
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        onClick={toggleViewMode}
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
        aria-label="Next month"
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );

  // Render month view
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

  // Render year view
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

  // Render days view
  const renderDaysView = () => (
    <div className="p-2">
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm text-[#727b8e] py-1">
            {day}
          </div>
        ))}
        {currentMonthDays.map((date, index) => (
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
            error && "border-red-500",
            disabled && "opacity-60 cursor-not-allowed",
            className,
            classNames?.input
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <div className={cn(defaultIconClass, classNames?.leftSection)}>
            {leftSection || <IconCalendar size={18} />}
          </div>
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
            aria-label={label || "Date picker"}
          />
        </div>

        {isOpen && !disabled && (
          <div
            className={cn(
              "fixed z-50 bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg min-w-[280px]",
              classNames?.dropdown
            )}
            style={dropdownStyle}
            role="dialog"
            aria-label="Calendar"
          >
            <div className="p-2">{renderCalendarHeader()}</div>
            {viewMode === "days" && renderDaysView()}
            {viewMode === "months" && renderMonthView()}
            {viewMode === "years" && renderYearView()}
          </div>
        )}
      </div>

      {(error || hint) && (
        <p
          className={cn(
            defaultDescriptionClass,
            "text-xs ml-1",
            error ? "text-red-400" : "text-gray-300",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

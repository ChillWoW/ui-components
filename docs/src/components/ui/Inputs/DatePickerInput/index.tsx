import React, { useState, useRef, useEffect } from "react";
import {
    IconCalendar,
    IconChevronLeft,
    IconChevronRight,
    IconX,
    IconCalendarEvent
} from "@tabler/icons-react";
import {
    cn,
    defaultDescriptionClass,
    defaultIconClass,
    defaultInputClass,
    defaultInputContainerClass,
    defaultInputContentClass,
    defaultLabelClass,
    Button
} from "../../index";

export interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date) => void;
    label?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    format?: string;
    placeholder?: string;
    className?: string;
    showWeekNumbers?: boolean;
    firstDayOfWeek?: 0 | 1; // 0 for Sunday, 1 for Monday
    clearable?: boolean;
    yearRange?: number; // Number of years to show in year dropdown
}

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    label,
    description,
    required,
    disabled,
    minDate,
    maxDate,
    format = "yyyy-MM-dd",
    placeholder = "Select date",
    className,
    showWeekNumbers = false,
    firstDayOfWeek = 1,
    clearable = true,
    yearRange = 10
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(value || new Date());
    const [viewMode, setViewMode] = useState<"days" | "months" | "years">(
        "days"
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const [dropdownStyle, setDropdownStyle] = useState({});

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
        "December"
    ];

    useEffect(() => {
        if (isOpen && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setDropdownStyle({
                top: `${rect.bottom + window.scrollY + 5}px`,
                left: `${rect.left + window.scrollX}px`,
                width: `${rect.width}px`
            });
        }
    }, [isOpen]);

    const formatDate = (date: Date): string => {
        if (!date) return "";
        return date.toLocaleDateString();
    };

    const getDaysInMonth = (year: number, month: number): Date[] => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days: Date[] = [];

        const firstDayOfWeek = firstDay.getDay();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            days.push(new Date(year, month, -i));
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const handleDateSelect = (date: Date) => {
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
        <div className="flex items-center justify-between mb-4 px-2">
            <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-[#333538] rounded"
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
                        setCurrentMonth(
                            new Date(currentMonth.getFullYear(), index)
                        );
                        setViewMode("days");
                    }}
                    className={cn(
                        "p-2 text-sm rounded hover:bg-[#333538] transition-colors",
                        currentMonth.getMonth() === index
                            ? "bg-[#333538] text-white"
                            : "text-[#727b8e]"
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
                        setCurrentMonth(
                            new Date(year, currentMonth.getMonth())
                        );
                        setViewMode("months");
                    }}
                    className={cn(
                        "p-2 text-sm rounded hover:bg-[#333538] transition-colors",
                        currentMonth.getFullYear() === year
                            ? "bg-[#333538] text-white"
                            : "text-[#727b8e]"
                    )}
                >
                    {year}
                </button>
            ))}
        </div>
    );

    return (
        <div className={defaultInputContainerClass}>
            {label && (
                <label className={defaultLabelClass}>
                    {label}
                    {required && <span className="text-red-600">*</span>}
                </label>
            )}

            <div ref={containerRef} className="relative">
                <div
                    className={cn(
                        defaultInputClass,
                        disabled && "opacity-60 cursor-not-allowed",
                        className
                    )}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                >
                    <div className={defaultIconClass}>
                        <IconCalendar size={18} />
                    </div>
                    <input
                        type="text"
                        className={defaultInputContentClass}
                        value={value ? formatDate(value) : ""}
                        placeholder={placeholder}
                        readOnly
                        disabled={disabled}
                    />
                </div>

                {isOpen && !disabled && (
                    <div
                        className="fixed z-50 bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg min-w-[280px]"
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
                                            onClick={() =>
                                                handleDateSelect(date)
                                            }
                                            className={cn(
                                                "p-2 text-sm rounded hover:bg-[#333538] transition-colors",
                                                date.getMonth() ===
                                                    currentMonth.getMonth()
                                                    ? "text-white"
                                                    : "text-[#727b8e]",
                                                value?.toDateString() ===
                                                    date.toDateString() &&
                                                    "bg-[#333538] text-white"
                                            )}
                                        >
                                            {date.getDate()}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-[#3e4249]">
                                    <Button
                                        size="xs"
                                        variant="outline"
                                        onClick={handleToday}
                                        leftSection={
                                            <IconCalendarEvent size={14} />
                                        }
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

            {description && (
                <p className={defaultDescriptionClass}>{description}</p>
            )}
        </div>
    );
};

import { useState } from "react";
import { cn } from "..";

export interface RadioCardOption {
    label: string;
    description?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    checked?: boolean;
    value?: string;
    onChange?: (checked: boolean) => void;
}

export interface RadioCardProps {
    label?: string;
    indicator?: boolean;
    options: RadioCardOption[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export const RadioCard: React.FC<RadioCardProps> = ({
    label,
    indicator = true,
    options,
    value,
    onChange,
    className
}) => {
    const [internalValue, setInternalValue] = useState<string | null>(null);

    const handleOptionClick = (optionValue: string) => {
        const option = options.find((opt) => opt.value === optionValue);
        if (!option || option.disabled) return;

        const newValue = value === optionValue ? null : optionValue;

        if (value === undefined) {
            setInternalValue(newValue);
        }

        if (onChange) {
            onChange(optionValue);
        }

        option.onChange?.(newValue === optionValue);
    };

    const currentValue = value ?? internalValue;

    const radioCardClass =
        "flex flex-col items-center w-fit p-[12px] text-white";
    const radioLabelClass = "text-sm font-semibold py-2";
    const radioOptionsClass = "flex flex-row gap-[12px]";

    const radioOptionClass = cn(
        "flex flex-col gap-[12px] min-w-[200px] p-[12px] cursor-pointer",
        "border border-[#3e4249] bg-[#252627] rounded-[4px]"
    );
    const radioOptionHeaderClass =
        "flex flex-row items-center justify-between gap-[12px]";
    const radioOptionHeaderIconClass =
        "flex flex-row items-center text-[#a6abb3]";
    const radioOptionContentTitleClass = "text-sm font-semibold";
    const radioOptionContentDescriptionClass = "text-sm text-[#a6abb3]";

    const radioInputClass = cn(
        "w-[20px] h-[20px] border-1 border-[#fff] bg-transparent appearance-none cursor-pointer rounded-full",
        "checked:bg-[#fff] disabled:opacity-60 disabled:cursor-not-allowed"
    );

    return (
        <div className={cn(radioCardClass, className)}>
            {label && <div className={radioLabelClass}>{label}</div>}
            <div className={radioOptionsClass}>
                {options.map((option, index) => (
                    <div
                        key={option.value ?? index}
                        className={cn(
                            radioOptionClass,
                            option.disabled && "opacity-60 cursor-not-allowed"
                        )}
                        onClick={() => handleOptionClick(option.value ?? "")}
                    >
                        <div className={radioOptionHeaderClass}>
                            {option.icon ? (
                                <div className={radioOptionHeaderIconClass}>
                                    {option.icon}
                                </div>
                            ) : (
                                <div className={radioOptionContentTitleClass}>
                                    {option.label}
                                </div>
                            )}
                            {indicator && (
                                <input
                                    type="radio"
                                    className={radioInputClass}
                                    checked={currentValue === option.value}
                                    disabled={option.disabled}
                                    onChange={() =>
                                        handleOptionClick(option.value ?? "")
                                    }
                                />
                            )}
                        </div>
                        <div className="flex flex-col">
                            {option.icon && (
                                <div className={radioOptionContentTitleClass}>
                                    {option.label}
                                </div>
                            )}
                            {option.description && (
                                <div
                                    className={
                                        radioOptionContentDescriptionClass
                                    }
                                >
                                    {option.description}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

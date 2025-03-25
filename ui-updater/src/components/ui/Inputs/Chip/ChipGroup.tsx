import { ChipGroupContext } from "./context";
import { ChipGroupProps } from "../types";
import { cn } from "../..";

export const ChipGroup = ({
  value,
  onChange,
  multiple = false,
  children,
  className,
  classNames,
}: ChipGroupProps) => {
  const isChipSelected = (chipValue: string) => {
    if (value === undefined) return false;

    if (multiple && Array.isArray(value)) {
      return value.includes(chipValue);
    }

    return value === chipValue;
  };

  const toggleChip = (chipValue: string) => {
    if (!onChange) return;

    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];

      if (currentValues.includes(chipValue)) {
        onChange(currentValues.filter((v) => v !== chipValue));
      } else {
        onChange([...currentValues, chipValue]);
      }
    } else {
      if (value === chipValue) {
        onChange("");
      } else {
        onChange(chipValue);
      }
    }
  };

  return (
    <ChipGroupContext.Provider
      value={{
        value,
        onChange,
        multiple,
        isChipSelected,
        toggleChip,
      }}
    >
      <div className={cn("flex flex-wrap gap-2", className, classNames?.root)}>
        {children}
      </div>
    </ChipGroupContext.Provider>
  );
};

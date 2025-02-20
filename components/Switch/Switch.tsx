import { cn } from "..";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled,
  className,
  label,
  size = "md",
  ...props
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const sizeClasses = {
    sm: {
      wrapper: "w-8 h-[18px]",
      thumb: "w-[14px] h-[14px]",
      thumbTranslate: "translate-x-[14px]",
      label: "text-xs",
    },
    md: {
      wrapper: "w-11 h-6",
      thumb: "w-5 h-5",
      thumbTranslate: "translate-x-5",
      label: "text-sm",
    },
    lg: {
      wrapper: "w-14 h-[30px]",
      thumb: "w-[26px] h-[26px]",
      thumbTranslate: "translate-x-[26px]",
      label: "text-base",
    },
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          "flex items-center gap-2 select-none",
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
        onClick={handleChange}
      >
        <div
          className={cn(
            "relative inline-flex items-center rounded-full transition-colors duration-200",
            sizeClasses[size].wrapper,
            checked ? "bg-[#22c55e]" : "bg-[#252627]",
            !disabled && "cursor-pointer"
          )}
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />
          <span
            className={cn(
              "absolute inline-block rounded-full bg-white transition-transform duration-200 ease-in-out",
              sizeClasses[size].thumb,
              "top-[2px] left-[2px]",
              checked && sizeClasses[size].thumbTranslate
            )}
          />
        </div>
        {label && (
          <span
            className={cn("text-white font-medium", sizeClasses[size].label)}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

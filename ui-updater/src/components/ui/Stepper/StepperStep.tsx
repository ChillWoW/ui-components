import React from "react";
import { cn } from "../_utils";
import { StepperStepProps } from "./types";
import { useStepperContext } from "./context";

export const StepperStep = ({
  index,
  label,
  description,
  icon,
  allowStepSelect,
  onClick,
  className,
}: StepperStepProps) => {
  const {
    active,
    sizeClasses,
    variantClasses,
    orientation,
    handleStepClick,
    withNumbers,
    completedIcon,
    classNames,
    radius,
    iconPosition,
    disabled,
    loading,
    iconSize,
  } = useStepperContext();

  const clickHandler = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e, index);
    } else if (allowStepSelect) {
      handleStepClick(index);
    }
  };

  const iconContent = (
    <div
      className={cn(
        "flex items-center justify-center shadow cursor-pointer transition-colors duration-200",
        radius,
        sizeClasses.step,
        index === active && variantClasses.active,
        index < active && variantClasses.completed,
        index > active && variantClasses.pending,
        (disabled || loading) && "cursor-not-allowed",
        classNames?.step,
        className
      )}
      onClick={clickHandler}
      style={iconSize ? { width: iconSize, height: iconSize } : undefined}
    >
      {loading && index === active ? (
        <span className="animate-spin">⟳</span>
      ) : index < active && completedIcon ? (
        completedIcon
      ) : icon ? (
        icon
      ) : (
        withNumbers && index + 1
      )}
    </div>
  );

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        orientation === "vertical" && "flex-col"
      )}
    >
      {iconPosition === "left" && iconContent}
      <div className="flex flex-col">
        <span
          className={cn(
            sizeClasses.label,
            "font-medium",
            index === active && "text-gray-200",
            index < active && "text-emerald-500",
            index > active && "text-gray-400",
            classNames?.label
          )}
        >
          {label}
        </span>
        {description && (
          <span
            className={cn(
              sizeClasses.description,
              "text-gray-400",
              classNames?.description
            )}
          >
            {description}
          </span>
        )}
      </div>
      {iconPosition === "right" && iconContent}
    </div>
  );
};

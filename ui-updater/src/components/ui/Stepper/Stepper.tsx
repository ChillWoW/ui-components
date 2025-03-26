import React from "react";
import { cn } from "../_utils";
import { StepperProps } from "./types";
import { StepperStep } from "./StepperStep";
import { StepperCompleted } from "./StepperCompleted";
import { StepperContext } from "./context";

export const Stepper = ({
  steps,
  active,
  onChange,
  variant = "filled",
  size = "md",
  orientation = "horizontal",
  withNumbers = true,
  completedIcon,
  className,
  classNames,
  disabled,
  allowClick = false,
  allowClickOnCompleted = false,
  radius = "full",
  iconPosition = "left",
  loading = false,
  iconSize,
  children,
}: StepperProps) => {
  const handleStepClick = (index: number) => {
    if (disabled || loading) return;
    if (!allowClick) return;
    if (!allowClickOnCompleted && index < active) return;
    if (onChange) onChange(index);
  };

  const sizeClasses = {
    xs: {
      container: "gap-1",
      step: "h-4 w-4 text-[10px]",
      label: "text-[10px]",
      description: "text-[8px]",
      separator: "w-6",
    },
    sm: {
      container: "gap-2",
      step: "h-6 w-6 text-xs",
      label: "text-xs",
      description: "text-[10px]",
      separator: "w-8",
    },
    md: {
      container: "gap-3",
      step: "h-8 w-8 text-sm",
      label: "text-sm",
      description: "text-xs",
      separator: "w-10",
    },
    lg: {
      container: "gap-4",
      step: "h-10 w-10 text-base",
      label: "text-base",
      description: "text-sm",
      separator: "w-12",
    },
    xl: {
      container: "gap-5",
      step: "h-12 w-12 text-lg",
      label: "text-lg",
      description: "text-base",
      separator: "w-14",
    },
  };

  const variantClasses = {
    filled: {
      active: "bg-white text-gray-900 border border-white",
      completed: "bg-emerald-500 text-white",
      pending: "bg-transparent border border-gray-700 text-gray-400",
      separator: "bg-emerald-500",
      pendingSeparator: "border-t-2 border-dashed border-gray-700",
    },
    outline: {
      active: "bg-transparent border-2 border-white text-white",
      completed: "bg-transparent border-2 border-emerald-500 text-emerald-500",
      pending: "bg-transparent border-2 border-gray-400 text-gray-400",
      separator: "bg-emerald-500",
      pendingSeparator: "border-t-2 border-dashed border-gray-400",
    },
    subtle: {
      active: "bg-white/10 text-white border border-transparent",
      completed: "bg-emerald-500/20 text-emerald-500 border border-transparent",
      pending: "bg-gray-700/20 text-gray-400 border border-transparent",
      separator: "bg-emerald-500/50",
      pendingSeparator: "border-t-2 border-dashed border-gray-700/30",
    },
  };

  const radiusClasses = {
    none: "",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  // Create context value
  const contextValue = {
    active,
    steps,
    sizeClasses: sizeClasses[size],
    variantClasses: variantClasses[variant],
    orientation,
    disabled,
    loading,
    handleStepClick,
    withNumbers,
    completedIcon,
    classNames,
    radius: radiusClasses[radius],
    iconPosition,
    iconSize: iconSize || sizeClasses[size].step,
  };

  return (
    <StepperContext.Provider value={contextValue}>
      <div
        className={cn(
          "flex w-full",
          orientation === "vertical"
            ? "flex-col"
            : "flex-row items-center justify-center",
          sizeClasses[size].container,
          (disabled || loading) && "opacity-60 cursor-not-allowed",
          classNames?.container,
          className
        )}
      >
        {children ||
          steps.map((step, index) => (
            <React.Fragment key={index}>
              <StepperStep
                index={index}
                label={step.label}
                description={step.description}
                icon={step.icon}
              />
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "hidden md:block",
                    orientation === "vertical" ? "h-8 w-0.5" : "h-0.5",
                    sizeClasses[size].separator,
                    index < active
                      ? variantClasses[variant].separator
                      : variantClasses[variant].pendingSeparator,
                    classNames?.separator
                  )}
                />
              )}
            </React.Fragment>
          ))}
      </div>
    </StepperContext.Provider>
  );
};

Stepper.Step = StepperStep;
Stepper.Completed = StepperCompleted;

Stepper.displayName = "Stepper";

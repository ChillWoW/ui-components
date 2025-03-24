import React, { useMemo } from "react";
import { cn } from "..";
import { TimelineProps } from "./types";
import { TimelineItem } from "./TimelineItem";
import { TimelineContext } from "./context";

export const Timeline = ({
  children,
  className,
  align = "left",
  active,
  bulletSize = 20,
  color = "#3e4249",
  lineWidth = 2,
  lineStyle = "solid",
  reverseActive = false,
  bulletShape = "circle",
  compact = false,
  ...otherProps
}: TimelineProps) => {
  const items = React.Children.toArray(children);
  const activeItem = active ?? items.length;

  const contextValue = useMemo(
    () => ({
      align,
      bulletSize,
      lineColor: color,
      lineWidth,
      lineStyle,
      bulletShape,
      compact,
    }),
    [align, bulletSize, color, lineWidth, lineStyle, bulletShape, compact]
  );

  return (
    <TimelineContext.Provider value={contextValue}>
      <div
        className={cn(
          "relative flex flex-col",
          compact ? "gap-2" : "gap-4",
          className
        )}
        {...otherProps}
      >
        <div
          className="absolute h-full"
          style={{
            width: lineWidth,
            backgroundColor: color,
            left: align === "right" ? "auto" : `${bulletSize / 2}px`,
            right: align === "right" ? `${bulletSize / 2}px` : "auto",
            transform: "translateX(-50%)",
            borderStyle: lineStyle,
          }}
        />

        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const isActive = reverseActive
              ? index >= items.length - activeItem
              : index < activeItem;

            return React.cloneElement(child, {
              ...(child.props as any),
              active: isActive,
              index,
              totalItems: items.length,
            });
          }
          return child;
        })}
      </div>
    </TimelineContext.Provider>
  );
};

Timeline.Item = TimelineItem;

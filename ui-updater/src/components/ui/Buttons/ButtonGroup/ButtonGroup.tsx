import React from "react";
import { cn } from "../../_utils";
import { ButtonGroupProps } from "./types";

export const ButtonGroup = ({
    children,
    variant = "filled",
    intent,
    size = "sm",
    orientation = "horizontal",
    disabled = false,
    radius = "md",
    fullWidth = false,
    spacing = 0,
    isLoading = false,
    className
}: ButtonGroupProps) => {
    const buttonGroupClass = cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        fullWidth && "w-full",
        className
    );

    const modifiedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;

        const spacingStyle =
            spacing !== 0
                ? {
                      [orientation === "horizontal"
                          ? "marginLeft"
                          : "marginTop"]: !isFirst ? `${spacing}px` : undefined
                  }
                : {};

        return React.cloneElement(child, {
            // @ts-ignore
            variant,
            //@ts-ignore
            intent,
            // @ts-ignore
            size,
            // @ts-ignore
            radius,
            // @ts-ignore
            disabled: disabled || child.props.disabled,
            // @ts-ignore
            fullWidth: fullWidth || child.props.fullWidth,
            // @ts-ignore
            isLoading: isLoading || child.props.isLoading,
            // @ts-ignore
            className: cn(
                // @ts-ignore
                child.props.className,
                spacing === 0
                    ? orientation === "horizontal"
                        ? [
                              isFirst && "rounded-r-none",
                              isLast && "rounded-l-none",
                              !isFirst && !isLast && "rounded-none",
                              !isFirst && "-ml-[1px]"
                          ]
                        : [
                              isFirst && "rounded-b-none",
                              isLast && "rounded-t-none",
                              !isFirst && !isLast && "rounded-none",
                              !isFirst && "-mt-[1px]"
                          ]
                    : ""
            ),
            style: spacing !== 0 ? spacingStyle : undefined
        });
    });

    return (
        <div className={buttonGroupClass} role="group">
            {modifiedChildren}
        </div>
    );
};

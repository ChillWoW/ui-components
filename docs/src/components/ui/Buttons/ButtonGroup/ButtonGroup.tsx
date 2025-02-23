import React from "react";
import { cn } from "../..";
import { ButtonGroupProps } from "./types";

export const ButtonGroup = ({
    children,
    variant = "filled",
    size = "sm",
    orientation = "horizontal",
    disabled = false,
    className
}: ButtonGroupProps) => {
    const buttonGroupClass = cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className
    );

    // Clone children and modify their props
    const modifiedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;

        return React.cloneElement(child, {
            // @ts-ignore
            variant,
            // @ts-ignore
            size,
            // @ts-ignore
            disabled: disabled || child.props.disabled,
            // @ts-ignore
            className: cn(
                // @ts-ignore
                child.props.className,
                orientation === "horizontal"
                    ? [
                          "first:rounded-r-none last:rounded-l-none",
                          !isFirst && !isLast && "rounded-none",
                          !isFirst && "-ml-[1px]"
                      ]
                    : [
                          "first:rounded-b-none last:rounded-t-none",
                          !isFirst && !isLast && "rounded-none",
                          !isFirst && "-mt-[1px]"
                      ]
            )
        });
    });

    return <div className={buttonGroupClass}>{modifiedChildren}</div>;
};

import React, { useState, useEffect } from "react";
import { cn } from "../..";
import { RadioCardContext } from "./context";
import { RadioCardHeader } from "./RadioCardHeader";
import { RadioCardItem } from "./RadioCardItem";
import { RadioCardProps } from "./types";

export const RadioCard = ({
    defaultValue,
    value,
    onChange,
    children,
    className,
    classNames
}: RadioCardProps) => {
    const [selectedValue, setSelectedValue] = useState(value ?? defaultValue);

    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    const handleChange = (newValue: string) => {
        if (value === undefined) {
            setSelectedValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <RadioCardContext.Provider
            value={{
                selectedValue,
                onChange: handleChange,
                classNames
            }}
        >
            <div
                className={cn(
                    "flex flex-col gap-2 p-4 rounded-lg",
                    "border border-[#3e4249] bg-[#252627]",
                    "transition-colors duration-200 hover:border-[#53575e]",
                    className
                )}
            >
                {React.Children.map(children, (child) => {
                    if (
                        React.isValidElement(child) &&
                        child.type === RadioCardHeader
                    ) {
                        return child;
                    }
                    return null;
                })}
                <div className={cn("flex gap-2 flex-col")}>
                    {React.Children.map(children, (child) => {
                        if (
                            React.isValidElement(child) &&
                            child.type !== RadioCardHeader
                        ) {
                            return React.cloneElement(child, {
                                //@ts-ignore
                                checked: child.props.value === selectedValue,
                                //@ts-ignore
                                onChange: () => handleChange(child.props.value)
                            });
                        }
                        return null;
                    })}
                </div>
            </div>
        </RadioCardContext.Provider>
    );
};

RadioCard.Header = RadioCardHeader;
RadioCard.Item = RadioCardItem;

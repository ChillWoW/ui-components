import React from "react";
import { cn } from "..";
import { KbdProps } from "./types";

export const Kbd = ({ children, classNames, className }: KbdProps) => {
    return (
        <kbd
            className={cn(
                "px-2 py-1.5 text-sm h-fit w-fit rounded-md",
                "bg-[#252627] border border-[#3e4249] text-white hover:bg-[#333538]",
                classNames?.container,
                className
            )}
        >
            {children}
        </kbd>
    );
};

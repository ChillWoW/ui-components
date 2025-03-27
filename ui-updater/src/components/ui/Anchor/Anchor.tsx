import React from "react";
import { cn } from "../_utils";
import { AnchorProps } from "./types";

export const Anchor = ({
    id,
    children,
    className,
    title,
    leftOffset,
    showIcon = true,
    icon = "#"
}: AnchorProps) => {
    return (
        <div id={id} className={cn("scroll-mt-20", className)}>
            <a
                href={`#${id}`}
                className="group relative"
                title={title || `Link to ${id}`}
            >
                {showIcon && (
                    <span
                        style={{
                            left: leftOffset ? `-${leftOffset}px` : "-15px"
                        }}
                        className="absolute opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        {icon || "#"}
                    </span>
                )}
                {children}
            </a>
        </div>
    );
};

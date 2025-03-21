import React from "react";
import { cn } from "..";
import { Avatar } from "./Avatar";
import { AvatarGroupProps } from "./types";

export const AvatarGroup = ({
    avatars,
    limit,
    spacing = -8,
    size = "md",
    shape = "circle",
    className,
    overlapFrom = "left"
}: AvatarGroupProps) => {
    const displayAvatars = limit ? avatars.slice(0, limit) : avatars;
    const remaining = limit ? Math.max(0, avatars.length - limit) : 0;

    const flexDirection =
        overlapFrom === "right" ? "flex-row-reverse" : "flex-row";
    const marginProperty =
        overlapFrom === "right" ? "marginRight" : "marginLeft";
    const marginOffset = Math.abs(spacing);

    return (
        <div
            className={cn("flex items-center", flexDirection, className)}
            style={{ [marginProperty]: marginOffset }}
        >
            {displayAvatars.map((avatar, index) => (
                <div
                    key={index}
                    style={{ [marginProperty]: spacing }}
                    className="relative hover:z-10 transition-transform duration-200 hover:scale-110"
                >
                    <Avatar
                        {...avatar}
                        size={size}
                        shape={shape || avatar.shape}
                    />
                </div>
            ))}
            {remaining > 0 && (
                <div
                    style={{ [marginProperty]: spacing }}
                    className="relative hover:z-10 transition-transform duration-200 hover:scale-110"
                >
                    <Avatar
                        placeholder={`+${remaining}`}
                        size={size}
                        shape={shape}
                        color="#6B7280"
                    />
                </div>
            )}
        </div>
    );
};

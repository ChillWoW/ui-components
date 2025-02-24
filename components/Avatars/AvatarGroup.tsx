import React from "react";
import { cn } from "..";
import { Avatar } from "./Avatar";
import { AvatarGroupProps } from "./types";

export const AvatarGroup = ({
    avatars,
    limit,
    spacing = -8,
    size = "md",
    className
}: AvatarGroupProps) => {
    const displayAvatars = limit ? avatars.slice(0, limit) : avatars;
    const remaining = limit ? Math.max(0, avatars.length - limit) : 0;

    return (
        <div
            className={cn("flex items-center", className)}
            style={{ marginLeft: Math.abs(spacing) }}
        >
            {displayAvatars.map((avatar, index) => (
                <div
                    key={index}
                    style={{ marginLeft: spacing }}
                    className="relative hover:z-10"
                >
                    <Avatar {...avatar} size={size} />
                </div>
            ))}
            {remaining > 0 && (
                <div
                    style={{ marginLeft: spacing }}
                    className="relative hover:z-10"
                >
                    <Avatar
                        content={`+${remaining}`}
                        size={size}
                        className="bg-gray-500"
                    />
                </div>
            )}
        </div>
    );
};

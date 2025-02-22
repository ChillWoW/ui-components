import { cn } from "..";

export interface AvatarProps {
    src?: string;
    content?: any;
    size?: "xs" | "sm" | "md" | "lg";
    className?: string;
    badge?: {
        position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
        color?: string;
    };
}

export const Avatar = ({
    src,
    content,
    size = "md",
    className,
    badge,
    ...props
}: AvatarProps) => {
    const avatarClass =
        "inline-flex items-center justify-center rounded-full bg-gray-500 text-white relative";

    const sizeClass = {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12"
    };

    const badgePositionClass = {
        "top-right": "top-0 right-0",
        "top-left": "top-0 left-0",
        "bottom-right": "bottom-0 right-0",
        "bottom-left": "bottom-0 left-0"
    };

    return (
        <div className={cn(avatarClass, sizeClass[size], className)} {...props}>
            {src ? (
                <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt="avatar"
                />
            ) : (
                <span className="text-sm">{content}</span>
            )}
            {badge && (
                <div
                    className={cn(
                        "absolute flex items-center justify-center h-3 w-3 rounded-full text-[10px] px-1 ring-2 ring-white",
                        badgePositionClass[badge.position || "top-right"]
                    )}
                    style={{ backgroundColor: badge.color || "#228be6" }}
                />
            )}
        </div>
    );
};

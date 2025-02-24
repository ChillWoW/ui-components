export type AvatarSize = "xs" | "sm" | "md" | "lg";
export type AvatarBadgePosition =
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";

export interface AvatarClassNames {
    container?: string;
    image?: string;
    content?: string;
    badge?: string;
}

export interface AvatarProps {
    src?: string;
    content?: any;
    size?: AvatarSize;
    className?: string;
    classNames?: AvatarClassNames;
    badge?: {
        position?: AvatarBadgePosition;
        color?: string;
    };
}

export interface AvatarGroupProps {
    avatars: AvatarProps[];
    limit?: number;
    spacing?: number;
    size?: AvatarSize;
    className?: string;
}

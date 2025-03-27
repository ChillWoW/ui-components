export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarShape = "circle" | "square";
export type AvatarRadius = "none" | "sm" | "md" | "lg" | "full";
export type AvatarBadgePosition =
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";

export type AvatarGroupOverlap = "left" | "right";

export interface AvatarClassNames {
    container?: string;
    image?: string;
    placeholder?: string;
    badge?: string;
}

export interface AvatarBadge {
    content?: React.ReactNode | string | number;
    position?: AvatarBadgePosition;
    color?: string;
}

export interface AvatarProps {
    src?: string;
    alt?: string;
    placeholder?: React.ReactNode;
    content?: any; // @deprecated
    size?: AvatarSize;
    shape?: AvatarShape;
    radius?: AvatarRadius;
    color?: string;
    className?: string;
    classNames?: AvatarClassNames;
    badge?: AvatarBadge;
}

export interface AvatarGroupClassNames {
    container?: string;
    avatar?: string;
    remaining?: string;
}

export interface AvatarGroupProps {
    avatars: AvatarProps[];
    limit?: number;
    spacing?: number;
    size?: AvatarSize;
    shape?: AvatarShape;
    radius?: AvatarRadius;
    className?: string;
    overlapFrom?: AvatarGroupOverlap;
    classNames?: AvatarGroupClassNames;
}

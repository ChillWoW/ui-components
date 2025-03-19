export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded";
export type AvatarBadgePosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export interface AvatarClassNames {
  container?: string;
  image?: string;
  placeholder?: string;
  badge?: string;
}

export interface AvatarProps {
  src?: string;
  placeholder?: React.ReactNode;
  content?: any; // @deprecated
  size?: AvatarSize;
  shape?: AvatarShape;
  color?: string;
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
  shape?: AvatarShape;
  className?: string;
  overlapFrom?: "left" | "right";
}

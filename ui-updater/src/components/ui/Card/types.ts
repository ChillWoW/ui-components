export type CardRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type CardPadding = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type CardVariant = "filled" | "outline" | "unstyled";
export type CardShadow = "none" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface CardClassNames {
    container?: string;
    content?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    radius?: CardRadius;
    children: React.ReactNode;
    className?: string;
    classNames?: CardClassNames;
    shadow?: CardShadow;
    onClick?: () => void;
    padding?: CardPadding;
    hover?: boolean;
}

export type CardRadius = "none" | "sm" | "md" | "lg" | "full";
export type CardPadding = "sm" | "md" | "lg";

export interface CardClassNames {
    container?: string;
    content?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    withBorder?: boolean;
    radius?: CardRadius;
    children: React.ReactNode;
    className?: string;
    classNames?: CardClassNames;
    shadow?: boolean;
    onClick?: () => void;
    padding?: CardPadding;
    hover?: boolean;
}

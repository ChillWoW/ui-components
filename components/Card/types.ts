export type CardRadius = "sm" | "md" | "lg" | "xl" | "2xl";

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
}

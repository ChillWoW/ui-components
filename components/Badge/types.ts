export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";
export type BadgeVariant = "filled" | "outline";

export interface BadgeClassNames {
    container?: string;
    content?: string;
    leftSection?: string;
    rightSection?: string;
    dot?: string;
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    size?: BadgeSize;
    variant?: BadgeVariant;
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    withDot?: boolean;
    className?: string;
    classNames?: BadgeClassNames;
    color?: string;
}

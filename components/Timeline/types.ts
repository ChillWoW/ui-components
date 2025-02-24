export interface TimelineProps {
    children: React.ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    active?: number;
    bulletSize?: number;
    color?: string;
    lineWidth?: number;
    reverseActive?: boolean;
}

export interface TimelineItemProps {
    children: React.ReactNode;
    title?: React.ReactNode;
    date?: string;
    icon?: React.ReactNode;
    bulletSize?: number;
    bulletColor?: string;
    className?: string;
    active?: boolean;
}

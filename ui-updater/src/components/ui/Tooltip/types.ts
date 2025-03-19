export interface TooltipProps {
    children: React.ReactNode;
    label: string | React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
    withArrow?: boolean;
    className?: string;
}

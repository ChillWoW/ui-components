export type AlertVariant = "success" | "error" | "warning" | "info";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: AlertVariant;
    icon?: React.ReactNode;
}

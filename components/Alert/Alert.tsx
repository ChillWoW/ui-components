import { cn } from "..";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: AlertVariant;
    icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
    children,
    className,
    variant = "info",
    icon,
    ...props
}) => {
    const variantStyles = {
        success: "border-emerald-600/20 bg-emerald-600/10 text-emerald-600",
        error: "border-red-600/20 bg-red-600/10 text-red-600",
        warning: "border-yellow-600/20 bg-yellow-600/10 text-yellow-600",
        info: "border-blue-600/20 bg-blue-600/10 text-blue-600"
    };

    return (
        <div
            className={cn(
                "flex w-full px-4 py-3 border rounded-lg",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {icon && (
                <div className="flex-shrink-0 self-center mr-3">{icon}</div>
            )}
            <div className="flex-1">{children}</div>
        </div>
    );
};

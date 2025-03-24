import { cn } from "..";
import { BreadcrumbItemProps } from "./types";

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    children,
    active = false,
    href,
    icon,
    onClick,
    target,
    className
}) => {
    const baseClasses = "flex items-center";
    const activeClasses = active
        ? "text-gray-50 font-medium"
        : "text-gray-400 hover:text-gray-300 transition-colors";
    const combinedClasses = cn(baseClasses, activeClasses, className);

    const content = (
        <>
            {icon && <span className="mr-1.5">{icon}</span>}
            <span>{children}</span>
        </>
    );

    if (href && !active) {
        return (
            <a
                href={href}
                className={combinedClasses}
                onClick={onClick}
                target={target}
            >
                {content}
            </a>
        );
    }

    return (
        <span
            className={combinedClasses}
            onClick={active ? undefined : onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick && !active ? 0 : undefined}
        >
            {content}
        </span>
    );
};

import { cn } from "../..";
import { DrawerContentProps } from "../types";

export const DrawerContent = ({ children, className }: DrawerContentProps) => {
    return (
        <div className={cn("p-4 overflow-y-auto", className)}>{children}</div>
    );
};

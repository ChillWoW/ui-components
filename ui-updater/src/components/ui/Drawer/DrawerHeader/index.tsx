import { cn } from "../..";
import { DrawerHeaderProps } from "../types";
import { CloseButton } from "../../_utils";

export const DrawerHeader = ({
    children,
    className,
    onClose
}: DrawerHeaderProps) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between p-4 border-b border-[#3e4249]",
                className
            )}
        >
            <div className="text-lg font-semibold text-white">{children}</div>
            {onClose && <CloseButton onClick={onClose} />}
        </div>
    );
};

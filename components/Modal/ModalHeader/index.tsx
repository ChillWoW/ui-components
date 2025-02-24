import React from "react";
import { Text } from "../../Text";
import { CloseButton } from "../../_utils/CloseButton";
import { cn } from "../..";

interface ModalHeaderProps {
    children?: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
    children,
    onClose,
    className
}) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between p-4 border-b border-[#3e4249]",
                className
            )}
        >
            <div className="flex-1">
                {typeof children === "string" ? (
                    <Text size="lg" weight="semibold">
                        {children}
                    </Text>
                ) : (
                    children
                )}
            </div>
            {onClose && (
                <div className="ml-4">
                    <CloseButton onClick={onClose} />
                </div>
            )}
        </div>
    );
};

import React, { useEffect, useState } from "react";
import { cn, Text } from "../index";
import { CloseButton } from "./CloseButton";

export interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    centered?: boolean;
    children: React.ReactNode;
    className?: string;
    blurBackground?: boolean;
    canClose?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
    opened,
    onClose,
    title,
    size = "lg",
    centered = true,
    children,
    className,
    blurBackground = true,
    canClose = true
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (canClose) {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose();
            };
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [canClose, onClose]);

    if (!mounted || !opened) return null;

    const sizeClasses = {
        xs: "w-[400px]",
        sm: "w-[500px]",
        md: "w-[600px]",
        lg: "w-[700px]",
        xl: "w-[800px]"
    };

    const backgroundClass =
        "fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[200]";

    const modalClass =
        "fixed inset-0 text-white z-[1000] p-4 flex overflow-y-auto";
    const modalContentClass =
        "relative bg-[#252627] rounded-lg shadow-lg border border-[#3e4249]";

    const modalTitleClass = "flex items-center justify-between p-2";

    return (
        <>
            {blurBackground && <div className={backgroundClass} />}
            <div
                className={cn(
                    modalClass,
                    centered && "items-center justify-center"
                )}
            >
                <div
                    className={cn(
                        modalContentClass,
                        sizeClasses[size],
                        className
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {title ? (
                        <div className={modalTitleClass}>
                            <Text size="lg" weight="semibold">
                                {title}
                            </Text>
                            <CloseButton onClick={onClose} />
                        </div>
                    ) : (
                        <div className={modalTitleClass}>
                            <div />
                            <CloseButton onClick={onClose} />
                        </div>
                    )}
                    <div className="p-3">{children}</div>
                </div>
            </div>
        </>
    );
};

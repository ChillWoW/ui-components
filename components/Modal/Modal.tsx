import React, { useEffect, useState } from "react";
import { cn } from "../index";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalProps } from "./types";

export const Modal = ({
    opened,
    onClose,
    size = "md",
    centered = true,
    children,
    className,
    blurBackground = true,
    canClose = true
}: ModalProps) => {
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
        xs: "w-[320px]",
        sm: "w-[440px]",
        md: "w-[560px]",
        lg: "w-[680px]",
        xl: "w-[800px]",
        full: "w-[95vw] h-[95vh]"
    };

    const backgroundClass =
        "fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[200]";
    const modalClass =
        "fixed inset-0 text-white z-[1000] p-4 flex overflow-y-auto";
    const modalContentClass =
        "relative bg-[#252627] rounded-lg shadow-lg border border-[#3e4249] flex flex-col max-h-[95vh]";

    return (
        <>
            {blurBackground && (
                <div
                    className={backgroundClass}
                    onClick={canClose ? onClose : undefined}
                />
            )}
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
                    {children}
                </div>
            </div>
        </>
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

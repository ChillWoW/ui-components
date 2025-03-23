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
    overlayOpacity = 0.6,
    canClose = true,
    closeOnClickOutside = true,
    closeOnEscape = true,
    zIndex,
    classNames,
    animationDuration = 0.3
}: ModalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (canClose && closeOnEscape) {
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

    const backgroundClass = `fixed inset-0 bg-black z-[${zIndex || 200}]`;
    const modalClass = `fixed inset-0 text-white z-[${
        zIndex ? zIndex + 1 : 1000
    }] p-4 flex overflow-y-auto`;
    const modalContentClass =
        "relative bg-[#252627] rounded-lg shadow-lg border border-[#3e4249] flex flex-col max-h-[95vh]";

    const handleOverlayClick = () => {
        if (canClose && closeOnClickOutside) {
            onClose();
        }
    };

    return (
        <>
            <div
                className={cn(backgroundClass, classNames?.overlay)}
                style={{
                    opacity: overlayOpacity,
                    transition: `opacity ${animationDuration}s ease`
                }}
                onClick={handleOverlayClick}
            />
            <div
                className={cn(
                    modalClass,
                    centered && "items-center justify-center",
                    classNames?.wrapper
                )}
            >
                <div
                    className={cn(
                        modalContentClass,
                        sizeClasses[size],
                        className,
                        classNames?.content
                    )}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        transition: `transform ${animationDuration}s ease`
                    }}
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

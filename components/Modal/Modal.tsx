"use client";

import React, { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "../index";

export interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    centered?: boolean;
    closeOnEscape?: boolean;
    children: React.ReactNode;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({
    opened,
    onClose,
    title,
    size = "md",
    centered = true,
    closeOnEscape = true,
    children,
    className
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (closeOnEscape) {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose();
            };
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [closeOnEscape, onClose]);

    if (!mounted || !opened) return null;

    const sizeClasses = {
        xs: "w-80",
        sm: "w-[30rem]",
        md: "w-[40rem]",
        lg: "w-[50rem]",
        xl: "w-[60rem]"
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[200]" />
            <div
                className={cn(
                    "fixed inset-0 text-white z-[201] p-4 flex overflow-y-auto",
                    centered && "items-center justify-center",
                    className
                )}
            >
                <div
                    className={cn(
                        "relative bg-[#252627] rounded-lg shadow-lg border border-[#3e4249]",
                        sizeClasses[size]
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {title ? (
                        <div className="flex items-center justify-between p-5 border-b border-[#3e4249]">
                            <h2 className="m-0 text-base font-medium text-white leading-none">
                                {title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 bg-transparent border-none text-gray-500 cursor-pointer transition-all duration-150 rounded hover:bg-white/5 hover:text-white flex items-center justify-center"
                                aria-label="Close modal"
                            >
                                <IconX size={18} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between p-5 border-b border-[#3e4249]">
                            <div />
                            <button
                                onClick={onClose}
                                className="p-2 bg-transparent border-none text-gray-500 cursor-pointer transition-all duration-150 rounded hover:bg-white/5 hover:text-white flex items-center justify-center"
                                aria-label="Close modal"
                            >
                                <IconX size={18} />
                            </button>
                        </div>
                    )}
                    <div className="p-6">{children}</div>
                </div>
            </div>
        </>
    );
};

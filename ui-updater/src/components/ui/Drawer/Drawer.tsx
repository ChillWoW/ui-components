import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "..";
import { DrawerProps } from "./types";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerContent } from "./DrawerContent";

export const Drawer = ({
    open,
    onClose,
    children,
    position = "left",
    canClose = true,
    className,
    classNames,
    width = "320px",
    disableScroll = true,
    closeOnOverlayClick = true,
    animationDuration = 0.3,
    overlayAnimationDuration = 0.1
}: DrawerProps) => {
    useEffect(() => {
        if (!open || !canClose) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [open, canClose, onClose]);

    useEffect(() => {
        if (!disableScroll) return;

        if (open) {
            const originalStyle = window.getComputedStyle(
                document.body
            ).overflow;
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [open, disableScroll]);

    const slideVariants = {
        left: {
            hidden: { x: "-100%" },
            visible: { x: 0 }
        },
        right: {
            hidden: { x: "100%" },
            visible: { x: 0 }
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: overlayAnimationDuration,
                            ease: "linear"
                        }}
                        className={cn(
                            "fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[200]",
                            classNames?.overlay
                        )}
                        onClick={
                            canClose && closeOnOverlayClick
                                ? onClose
                                : undefined
                        }
                        style={{
                            willChange: "opacity"
                        }}
                    />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={slideVariants[position]}
                        transition={{
                            type: "tween",
                            duration: animationDuration,
                            ease: "easeOut"
                        }}
                        className={cn(
                            "fixed top-0 bottom-0 z-[1000] bg-[#252627] border-[#3e4249]",
                            position === "left"
                                ? "left-0 border-r"
                                : "right-0 border-l",
                            classNames?.container,
                            className
                        )}
                        style={{
                            width,
                            willChange: "transform"
                        }}
                    >
                        <DrawerContent>{children}</DrawerContent>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

Drawer.Header = DrawerHeader;
Drawer.Content = DrawerContent;

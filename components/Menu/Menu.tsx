import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronRight } from "@tabler/icons-react";
import { MenuItem, MenuProps } from "./types";
import { cn } from "..";

interface SubMenuProps {
    item: MenuItem;
    parentCoords: { top: number; left: number };
    onClose: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ item, parentCoords, onClose }) => {
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (menuRef.current) {
            setCoords({
                top: parentCoords.top,
                //@ts-ignore
                left: parentCoords.right + 4
            });
        }
    }, [parentCoords]);

    return (
        <motion.div
            ref={menuRef}
            className="fixed z-[1001] min-w-[180px] bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg overflow-visible"
            style={{
                top: coords.top,
                left: coords.left
            }}
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -10 }}
            transition={{ duration: 0.15 }}
        >
            {item.items?.map((subItem, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm text-[#c1c2c5] cursor-pointer transition-colors duration-150",
                        "hover:bg-[#333538]",
                        subItem.disabled &&
                            "opacity-50 cursor-not-allowed pointer-events-none"
                    )}
                    onClick={() => {
                        if (!subItem.disabled) {
                            subItem.onClick?.();
                            onClose();
                        }
                    }}
                >
                    {subItem.icon && (
                        <span className="flex items-center justify-center w-4 h-4 text-[#c1c2c5]">
                            {subItem.icon}
                        </span>
                    )}
                    <span className="flex-1">{subItem.label}</span>
                </div>
            ))}
        </motion.div>
    );
};

export const Menu: React.FC<MenuProps> = ({
    trigger,
    items,
    position = "bottom",
    offset = 4,
    width,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<{
        item: MenuItem;
        rect: DOMRect;
    } | null>(null);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const updatePosition = () => {
        if (!triggerRef.current || !menuRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        switch (position) {
            case "top":
                top = triggerRect.top - menuRect.height - offset;
                left =
                    triggerRect.left + (triggerRect.width - menuRect.width) / 2;
                break;
            case "bottom":
                top = triggerRect.bottom + offset;
                left =
                    triggerRect.left + (triggerRect.width - menuRect.width) / 2;
                break;
            case "left":
                top =
                    triggerRect.top +
                    (triggerRect.height - menuRect.height) / 2;
                left = triggerRect.left - menuRect.width - offset;
                break;
            case "right":
                top =
                    triggerRect.top +
                    (triggerRect.height - menuRect.height) / 2;
                left = triggerRect.right + offset;
                break;
        }

        setCoords({
            top: top + window.scrollY,
            left: left + window.scrollX
        });
    };

    useEffect(() => {
        if (isOpen) {
            updatePosition();
            window.requestAnimationFrame(updatePosition);
            const handleResize = () => updatePosition();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setActiveSubmenu(null);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () =>
                document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    const handleItemMouseEnter = (item: MenuItem, index: number) => {
        if (item.items && itemRefs.current[index]) {
            const rect = itemRefs.current[index]!.getBoundingClientRect();
            setActiveSubmenu({ item, rect });
        } else {
            setActiveSubmenu(null);
        }
    };

    return (
        <>
            <div
                ref={triggerRef}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-block cursor-pointer"
            >
                {trigger}
            </div>

            {typeof window !== "undefined" &&
                createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                ref={menuRef}
                                className={cn(
                                    "fixed z-[1000] min-w-[180px] bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg overflow-hidden",
                                    className
                                )}
                                style={{
                                    top: coords.top,
                                    left: coords.left,
                                    width: width
                                }}
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.15 }}
                            >
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        //@ts-ignore
                                        ref={(el) =>
                                            (itemRefs.current[index] = el)
                                        }
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 text-sm text-[#c1c2c5] cursor-pointer transition-colors duration-150",
                                            "hover:bg-[#333538]",
                                            item.disabled &&
                                                "opacity-50 cursor-not-allowed pointer-events-none"
                                        )}
                                        onClick={() => {
                                            if (!item.disabled && !item.items) {
                                                item.onClick?.();
                                                setIsOpen(false);
                                            }
                                        }}
                                        onMouseEnter={() =>
                                            handleItemMouseEnter(item, index)
                                        }
                                    >
                                        {item.icon && (
                                            <span className="flex items-center justify-center w-4 h-4 text-[#c1c2c5]">
                                                {item.icon}
                                            </span>
                                        )}
                                        <span className="flex-1">
                                            {item.label}
                                        </span>
                                        {item.items && (
                                            <span className="text-[#c1c2c5] ml-1">
                                                <IconChevronRight size={14} />
                                            </span>
                                        )}
                                    </div>
                                ))}

                                <AnimatePresence>
                                    {activeSubmenu && (
                                        <SubMenu
                                            item={activeSubmenu.item}
                                            parentCoords={activeSubmenu.rect}
                                            onClose={() => {
                                                setIsOpen(false);
                                                setActiveSubmenu(null);
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
};

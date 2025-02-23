import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MenuDropdownProps } from "../types";
import { useMenuContext } from "../context";

export const MenuDropdown: React.FC<MenuDropdownProps> = ({ children }) => {
    const { opened, targetRef, position, offset } = useMenuContext();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (opened && targetRef.current && dropdownRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();

            let top = 0;
            let left = 0;

            switch (position) {
                case "bottom":
                    top = targetRect.bottom + offset;
                    left =
                        targetRect.left +
                        (targetRect.width - dropdownRect.width) / 2;
                    break;
                case "top":
                    top = targetRect.top - dropdownRect.height - offset;
                    left =
                        targetRect.left +
                        (targetRect.width - dropdownRect.width) / 2;
                    break;
                case "left":
                    top =
                        targetRect.top +
                        (targetRect.height - dropdownRect.height) / 2;
                    left = targetRect.left - dropdownRect.width - offset;
                    break;
                case "right":
                    top =
                        targetRect.top +
                        (targetRect.height - dropdownRect.height) / 2;
                    left = targetRect.right + offset;
                    break;
            }

            setCoords({
                top: top + window.scrollY,
                left: left + window.scrollX
            });
        }
    }, [opened, position, offset]);

    return createPortal(
        <AnimatePresence>
            {opened && (
                <motion.div
                    ref={dropdownRef}
                    className="fixed z-[1000] min-w-[180px] bg-[#252627] border border-[#3e4249] rounded-lg shadow-lg overflow-hidden"
                    style={{
                        top: coords.top,
                        left: coords.left
                    }}
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.15 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

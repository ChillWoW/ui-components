import React, { useState, useRef, useEffect } from "react";
import { MenuProps } from "./types";
import { MenuContext } from "./context";
import { MenuTarget } from "./MenuTarget";
import { MenuDropdown } from "./MenuDropdown";
import { MenuItem } from "./MenuItem";
import { MenuLabel } from "./MenuLabel";
import { MenuDivider } from "./MenuDivider";
import { cn } from "..";

export const Menu = ({
    children,
    position = "bottom",
    offset = 4,
    opened: controlledOpened,
    onChange,
    trigger = "click",
    classNames
}: MenuProps) => {
    const [uncontrolledOpened, setUncontrolledOpened] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);
    //@ts-ignore
    const timeoutRef = useRef<NodeJS.Timeout>();

    const opened = controlledOpened ?? uncontrolledOpened;
    const setOpened = onChange ?? setUncontrolledOpened;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                targetRef.current &&
                !targetRef.current.contains(event.target as Node)
            ) {
                setOpened(false);
            }
        };

        if (opened && trigger === "click") {
            document.addEventListener("mousedown", handleClickOutside);
            return () =>
                document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [opened, setOpened, trigger]);

    const handleMouseEnter = () => {
        if (trigger === "hover") {
            clearTimeout(timeoutRef.current);
            setOpened(true);
        }
    };

    const handleMouseLeave = () => {
        if (trigger === "hover") {
            timeoutRef.current = setTimeout(() => {
                setOpened(false);
            }, 150);
        }
    };

    return (
        <MenuContext.Provider
            value={{
                opened,
                setOpened,
                //@ts-ignore
                targetRef,
                position,
                offset,
                trigger,
                classNames
            }}
        >
            <div
                className={cn("relative inline-block", classNames?.root)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </MenuContext.Provider>
    );
};

Menu.Target = MenuTarget;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Divider = MenuDivider;

export { MenuTarget, MenuDropdown, MenuItem, MenuLabel, MenuDivider };

import React from "react";
import { MenuTargetProps } from "../types";
import { useMenuContext } from "../context";
import { cn } from "../..";

export const MenuTarget: React.FC<MenuTargetProps> = ({
    children,
    className
}) => {
    const { setOpened, targetRef, trigger, classNames } = useMenuContext();

    const handleClick = () => {
        if (trigger === "click") {
            setOpened(true);
        }
    };

    return (
        <div
            ref={targetRef}
            onClick={handleClick}
            className={cn(
                "inline-block cursor-pointer",
                classNames?.target,
                className
            )}
        >
            {children}
        </div>
    );
};

import React from "react";
import { cn } from "../..";
import { MenuItemProps } from "../types";
import { useMenuContext } from "../context";

export const MenuItem: React.FC<MenuItemProps> = ({
    children,
    disabled,
    icon,
    onClick,
    href,
    target,
    className
}) => {
    const { setOpened, classNames } = useMenuContext();

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
            setOpened(false);
        }
    };

    const content = (
        <>
            {icon && (
                <span className="flex items-center justify-center w-4 h-4 text-[#c1c2c5]">
                    {icon}
                </span>
            )}
            <span className="flex-1">{children}</span>
        </>
    );

    const itemClassName = cn(
        "flex items-center gap-2 px-4 py-2 text-sm text-[#c1c2c5] cursor-pointer transition-colors duration-150",
        "hover:bg-[#333538]",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        classNames?.item,
        className
    );

    if (href && !disabled) {
        return (
            <a
                href={href}
                target={target}
                className={itemClassName}
                onClick={handleClick}
            >
                {content}
            </a>
        );
    }

    return (
        <div className={itemClassName} onClick={handleClick}>
            {content}
        </div>
    );
};

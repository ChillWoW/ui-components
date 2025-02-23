import React from "react";
import { cn } from "../..";
import { MenuDividerProps } from "../types";

export const MenuDivider: React.FC<MenuDividerProps> = ({ className }) => {
    return <div className={cn("h-px bg-[#3e4249] my-2", className)} />;
};

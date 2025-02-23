import React from "react";
import { MenuLabelProps } from "../types";

export const MenuLabel: React.FC<MenuLabelProps> = ({ children }) => {
    return (
        <div className="px-4 py-2 text-xs text-[#909296] font-semibold">
            {children}
        </div>
    );
};

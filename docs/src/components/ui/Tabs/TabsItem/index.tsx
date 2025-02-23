import React from "react";
import { cn } from "../..";
import { TabItemProps } from "../types";

export const TabItem: React.FC<TabItemProps> = ({ children }) => {
    return <>{children}</>;
};

TabItem.displayName = "TabsItem";

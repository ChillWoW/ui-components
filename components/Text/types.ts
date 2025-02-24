import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    color?: string;
    weight?: "bold" | "semibold" | "normal" | "light" | number;
    align?: "left" | "center" | "right";
    italic?: boolean;
    underline?: boolean;
    dimmed?: boolean;
    component?: any;
    className?: string;
    children?: React.ReactNode;
}

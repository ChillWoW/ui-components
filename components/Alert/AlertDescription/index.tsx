import React from "react";

export interface AlertDescriptionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
    children,
    className,
    ...props
}) => {
    return <p>{children}</p>;
};

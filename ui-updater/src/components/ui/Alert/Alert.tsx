import React, { useState } from "react";
import { cn, CloseButton } from "../_utils";
import { AlertProps } from "./types";
import { AlertTitle } from "./AlertTitle";
import { AlertDescription } from "./AlertDescription";
import { AlertContext } from "./context";

export const Alert = ({
    children,
    intent = "info",
    variant = "filled",
    icon,
    onClose,
    closeable = false,
    closeIcon,
    compact = false,
    withBorder = true,
    radius = "md",
    shadow = "sm",
    iconPosition = "center",
    className,
    classNames,
    ...props
}: AlertProps) => {
    const [isVisible, setIsVisible] = useState(true);

    const getVariantStyles = () => {
        const variants = {
            filled: "",
            outline: "bg-transparent border",
            unstyled: "bg-transparent border-none text-white"
        };

        return variants[variant as keyof typeof variants] || variants.filled;
    };

    const getIntentStyles = () => {
        if (variant === "unstyled") return "";

        const colors = {
            success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
            error: "border-red-500/20 bg-red-500/10 text-red-300",
            warning: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
            info: "border-blue-500/20 bg-blue-500/10 text-blue-300"
        };

        return colors[intent as keyof typeof colors] || colors.info;
    };

    const closeButtonStyles = () => {
        if (variant === "unstyled") return "text-gray-50 hover:text-white";

        const styles = {
            success: "text-emerald-300 hover:text-emerald-200",
            error: "text-red-300 hover:text-red-200",
            warning: "text-yellow-300 hover:text-yellow-200",
            info: "text-blue-300 hover:text-blue-200"
        };

        return styles[intent as keyof typeof styles] || styles.info;
    };

    const shadowStyles = () => {
        if (variant === "unstyled") return "";

        const styles = {
            none: "",
            xs: "shadow-xs",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
            "2xl": "shadow-2xl"
        };

        return styles[shadow as keyof typeof styles] || styles.sm;
    };

    const radiusStyles = () => {
        if (variant === "unstyled") return "";

        const styles = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full"
        };

        return styles[radius as keyof typeof styles] || styles.md;
    };

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    if (!isVisible) return null;

    return (
        <AlertContext.Provider value={{ classNames }}>
            <div
                className={cn(
                    "flex w-full px-4 py-3",
                    withBorder ? "border" : "",
                    shadowStyles(),
                    radiusStyles(),
                    getIntentStyles(),
                    getVariantStyles(),
                    compact ? "py-1" : "py-3",
                    classNames?.container,
                    className
                )}
                role="alert"
                {...props}
            >
                {icon && (
                    <div
                        className={cn(
                            "flex-shrink-0 mr-3",
                            iconPosition === "top" && "self-start",
                            iconPosition === "center" && "self-center",
                            iconPosition === "bottom" && "self-end",
                            classNames?.icon
                        )}
                    >
                        {icon}
                    </div>
                )}
                <div className="flex-1">{children}</div>
                {closeable && (
                    <CloseButton
                        onClick={handleClose}
                        closeIcon={closeIcon}
                        className={cn(
                            "ml-auto self-start",
                            closeButtonStyles(),
                            classNames?.closeButton
                        )}
                    />
                )}
            </div>
        </AlertContext.Provider>
    );
};

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

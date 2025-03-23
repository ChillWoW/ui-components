export type DrawerPosition = "left" | "right";

export interface DrawerClassNames {
    container?: string;
    overlay?: string;
    content?: string;
    header?: string;
}

export interface DrawerHeaderProps {
    children: React.ReactNode;
    className?: string;
    onClose?: () => void;
}

export interface DrawerContentProps {
    children: React.ReactNode;
    className?: string;
}

export interface DrawerProps {
    open: boolean;
    onClose: () => void;
    position?: DrawerPosition;
    canClose?: boolean;
    children: React.ReactNode;
    className?: string;
    classNames?: DrawerClassNames;
    width?: string | number;
    disableScroll?: boolean;
    closeOnOverlayClick?: boolean;
    animationDuration?: number;
    overlayAnimationDuration?: number;
}

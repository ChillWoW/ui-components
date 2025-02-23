export interface ModalProps {
    opened: boolean;
    onClose: () => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    centered?: boolean;
    children: React.ReactNode;
    className?: string;
    blurBackground?: boolean;
    canClose?: boolean;
}

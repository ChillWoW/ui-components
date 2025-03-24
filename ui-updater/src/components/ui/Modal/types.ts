export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface ModalClassNames {
  overlay?: string;
  wrapper?: string;
  content?: string;
}

export interface ModalProps {
  opened: boolean;
  onClose: () => void;
  size?: ModalSize;
  centered?: boolean;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  canClose?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  zIndex?: number;
  classNames?: ModalClassNames;
  animationDuration?: number;
  disableScroll?: boolean;
}

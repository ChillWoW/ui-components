export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type ModalPadding = "xs" | "sm" | "md" | "lg" | "xl" | "none";
export type ModalShadow = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ModalPortalTarget = HTMLElement | string | null;

export interface ModalClassNames {
  overlay?: string;
  wrapper?: string;
  content?: string;
  header?: string;
  body?: string;
  footer?: string;
  closeButton?: string;
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
  shadow?: ModalShadow;
  withinPortal?: boolean;
  portalTarget?: ModalPortalTarget;
}

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
  padding?: ModalPadding;
}

export interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
  separator?: boolean;
  padding?: ModalPadding;
}

export interface ModalHeaderProps {
  children?: React.ReactNode;
  className?: string;
  separator?: boolean;
  padding?: ModalPadding;
}

export interface PortalProps {
  children: React.ReactNode;
  target?: HTMLElement | string | null;
  reuseTargetNode?: boolean;
  className?: string;
}

export interface OptionalPortalProps extends PortalProps {
  withinPortal?: boolean;
}

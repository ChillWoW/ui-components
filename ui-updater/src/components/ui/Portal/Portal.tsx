import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { OptionalPortalProps, PortalProps } from "./types";

const portalNodes = new Map<string, HTMLElement>();
const DEFAULT_KEY = "default-portal-node";

export function Portal({
  children,
  target,
  reuseTargetNode = false,
  className,
}: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const refNode = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    if (reuseTargetNode) {
      const key = DEFAULT_KEY;

      if (!portalNodes.has(key)) {
        const node = document.createElement("div");

        if (className) {
          node.className = className;
        }

        document.body.appendChild(node);
        portalNodes.set(key, node);
      }

      refNode.current = portalNodes.get(key) || null;
    } else if (target) {
      refNode.current =
        typeof target === "string" ? document.querySelector(target) : target;
    } else {
      const node = document.createElement("div");

      if (className) {
        node.className = className;
      }

      document.body.appendChild(node);
      refNode.current = node;

      return () => {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      };
    }
  }, [target, className, reuseTargetNode]);

  if (!mounted) {
    return null;
  }

  if (!refNode.current) {
    return null;
  }

  return createPortal(children, refNode.current);
}

export function OptionalPortal({
  withinPortal = true,
  children,
  ...others
}: OptionalPortalProps) {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <>{children}</>;
}

Portal.displayName = "Portal";
OptionalPortal.displayName = "OptionalPortal";

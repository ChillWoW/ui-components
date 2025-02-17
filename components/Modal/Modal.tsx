"use client";

import React, { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import "./Modal.css";

export interface ModalProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  centered?: boolean;
  closeOnEscape?: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  opened,
  onClose,
  title,
  size = "md",
  centered = true,
  closeOnEscape = true,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (closeOnEscape) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [closeOnEscape, onClose]);

  if (!mounted || !opened) return null;

  return (
    <>
      <div className="modal-overlay" />
      <div
        className={`modal-wrapper ${centered ? "modal-wrapper--centered" : ""}`}
      >
        <div
          className={`modal-content modal-size-${size}`}
          onClick={(e) => e.stopPropagation()}
        >
          {title ? (
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <button
                onClick={onClose}
                className="modal-close"
                aria-label="Close modal"
              >
                <IconX size={18} />
              </button>
            </div>
          ) : (
            <div className="modal-header">
              <div />
              <button
                onClick={onClose}
                className="modal-close"
                aria-label="Close modal"
              >
                <IconX size={18} />
              </button>
            </div>
          )}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>
  );
};

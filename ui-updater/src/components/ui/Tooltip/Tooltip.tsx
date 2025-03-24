import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../index";
import { TooltipProps } from "./types";

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  position = "bottom",
  delay = 200,
  withArrow = false,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = triggerRect.top - tooltipRect.height - 10;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + 10;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - 10;
        break;
      case "right":
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + 10;
        break;
    }

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    left = Math.max(10, Math.min(viewportWidth - tooltipRect.width - 10, left));

    setCoords({
      top: top + scrollY,
      left: left + scrollX,
    });
  }, [position]);

  useEffect(() => {
    if (!isVisible) return;

    const handleResize = () => {
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible, updatePosition]);

  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(updatePosition);
    }
  }, [isVisible, updatePosition]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay]);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  }, []);

  const arrowClass = withArrow
    ? {
        top: "bottom-[-4px] left-1/2 -translate-x-1/2 border-t-[#252627] border-l-transparent border-r-transparent border-b-transparent",
        bottom:
          "top-[-4px] left-1/2 -translate-x-1/2 border-b-[#252627] border-l-transparent border-r-transparent border-t-transparent",
        left: "right-[-4px] top-1/2 -translate-y-1/2 border-l-[#252627] border-t-transparent border-b-transparent border-r-transparent",
        right:
          "left-[-4px] top-1/2 -translate-y-1/2 border-r-[#252627] border-t-transparent border-b-transparent border-l-transparent",
      }[position]
    : "";

  const portal =
    typeof window === "undefined"
      ? null
      : createPortal(
          <AnimatePresence>
            {isVisible && (
              <motion.div
                ref={tooltipRef}
                className={cn(
                  "fixed z-[1000] px-2.5 py-1.5 text-xs text-white bg-[#252627] rounded shadow-md border border-[#3e4249]",
                  className
                )}
                style={{ top: coords.top, left: coords.left }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                {label}
                {withArrow && (
                  <div
                    className={cn("absolute w-0 h-0 border-[4px]", arrowClass)}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        );

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {portal}
    </>
  );
};

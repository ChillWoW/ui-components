import React from "react";
import { cn } from "..";

export interface CloseButtonProps {
  onClick: () => void | Promise<void>;
  closeIcon?: React.ReactNode;
  className?: string;
}

export const CloseButton = ({
  onClick,
  closeIcon,
  className,
}: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 bg-transparent border-none text-gray-500 cursor-pointer transition-all duration-150 rounded hover:bg-white/5 hover:text-white flex items-center justify-center",
        className
      )}
    >
      {closeIcon || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </button>
  );
};

CloseButton.displayName = "CloseButton";

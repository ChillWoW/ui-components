import React, { useState, useRef } from "react";
import { cn } from "..";
import { Button } from "../Buttons/Button/Button";
import { Tooltip } from "../Tooltip/Tooltip";
import { SnippetProps } from "./types";

export const Snippet = ({
  children,
  color = "#1e1e1e",
  size = "md",
  radius = "md",
  className,
  symbol = "$",
  allowCopy = true,
  hideCopyButton = false,
  hideSymbol = false,
  disableTooltip = false,
  tooltipProps,
  timeout = 2000,
  copyIcon,
  checkIcon,
}: SnippetProps) => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLPreElement>(null);

  const sizeClasses = () => {
    const styles = {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-2",
      md: "text-base px-4 py-3",
      lg: "text-lg px-5 py-4",
      xl: "text-xl px-6 py-5",
    };
    return styles[size as keyof typeof styles] || styles.md;
  };

  const radiusClasses = () => {
    const styles = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };
    return styles[radius as keyof typeof styles] || styles.md;
  };

  const handleCopy = () => {
    if (!textRef.current) return;

    const content = textRef.current.textContent || "";
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    });
  };

  const CopyIcon = copyIcon || (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  const CheckIcon = checkIcon || (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const copyButton = !hideCopyButton && allowCopy && (
    <Button
      variant="subtle"
      size="xs"
      className="opacity-70 hover:opacity-100 transition-opacity"
      onClick={handleCopy}
    >
      {copied ? CheckIcon : CopyIcon}
    </Button>
  );

  return (
    <div
      className={cn(
        "flex items-center font-mono relative overflow-hidden",
        radiusClasses(),
        className
      )}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex flex-1 items-center overflow-auto">
        {!hideSymbol && <span className="opacity-50 mr-2">{symbol}</span>}
        <pre
          ref={textRef}
          className={cn("flex-1 overflow-auto", sizeClasses())}
        >
          {children}
        </pre>
      </div>

      {disableTooltip ? (
        copyButton
      ) : (
        <Tooltip
          label={copied ? "Copied!" : "Copy to clipboard"}
          position="top"
          {...tooltipProps}
        >
          {copyButton}
        </Tooltip>
      )}
    </div>
  );
};

Snippet.displayName = "Snippet";

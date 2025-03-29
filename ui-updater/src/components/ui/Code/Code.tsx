import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    a11yLight,
    atomOneDark
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { cn } from "../_utils";
import { CodeProps } from "./types";

export const Code = ({
    children,
    className,
    classNames,
    language = "text",
    showLineNumbers = false,
    theme = "dark",
    highlightLines = [],
    copyable = true,
    copyText = "Copy",
    copiedText = "Copied!"
}: CodeProps) => {
    const [copied, setCopied] = useState(false);

    // Select theme based on the theme prop
    const codeStyle = theme === "light" ? a11yLight : atomOneDark;

    const handleCopy = () => {
        if (typeof children === "string") {
            navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className={cn("relative group", classNames?.container, className)}>
            {copyable && (
                <button
                    onClick={handleCopy}
                    className={cn(
                        "absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md px-2 py-1",
                        theme === "light"
                            ? "text-gray-800 bg-gray-200 hover:text-gray-900 hover:bg-gray-300"
                            : "text-gray-200 bg-gray-700 hover:text-gray-100 hover:bg-gray-600",
                        classNames?.copyButton
                    )}
                    aria-label="Copy code"
                >
                    {copied ? copiedText : copyText}
                </button>
            )}

            <SyntaxHighlighter
                language={language}
                style={codeStyle}
                showLineNumbers={showLineNumbers}
                wrapLines={highlightLines.length > 0}
                lineProps={(lineNumber) => ({
                    style: highlightLines.includes(lineNumber)
                        ? {
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              display: "block"
                          }
                        : { display: "block" }
                })}
                className={cn(
                    "rounded-md overflow-auto",
                    classNames?.scrollbar
                )}
                customStyle={{ margin: 0 }}
                codeTagProps={{ className: classNames?.code }}
            >
                {children as string}
            </SyntaxHighlighter>
        </div>
    );
};

Code.displayName = "Code";

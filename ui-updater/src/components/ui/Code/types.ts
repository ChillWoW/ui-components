export interface CodeClassNames {
    container?: string;
    code?: string;
    copyButton?: string;
    scrollbar?: string;
}

export type CodeTheme = "dark" | "light";

export interface CodeProps {
    children: string;
    className?: string;
    classNames?: CodeClassNames;
    language?: string;
    showLineNumbers?: boolean;
    theme?: CodeTheme;
    highlightLines?: number[];
    copyable?: boolean;
    copyText?: string;
    copiedText?: string;
}

export type ProgressSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ProgressClassNames {
    container?: string;
    leftSideText?: string;
    rightSideText?: string;
    hint?: string;
}

export interface ProgressProps {
    value: number;
    color?: string;
    size?: ProgressSize;
    leftSideText?: string;
    rightSideText?: string;
    hint?: string;
    classNames?: ProgressClassNames;
}

export type PaginationSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface PaginationClassNames {
    container?: string;
    button?: string;
    activeButton?: string;
    disabledButton?: string;
    dots?: string;
    prevNextButton?: string;
}

export interface PaginationPrevNextLabels {
    prev?: any;
    next?: any;
    first?: any;
    last?: any;
}

export interface PaginationProps {
    total: number;
    page: number;
    onChange: (page: number) => void;
    siblings?: number;
    className?: string;
    classNames?: PaginationClassNames;
    disabled?: boolean;
    showPrevNext?: boolean;
    showFirstLast?: boolean;
    size?: PaginationSize;
    ariaLabel?: string;
    prevNextLabels?: PaginationPrevNextLabels;
}

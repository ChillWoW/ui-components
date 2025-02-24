export interface PaginationClassNames {
    container?: string;
    button?: string;
    activeButton?: string;
    disabledButton?: string;
    dots?: string;
}

export interface PaginationProps {
    total: number;
    page: number;
    onChange: (page: number) => void;
    siblings?: number;
    className?: string;
    classNames?: PaginationClassNames;
}

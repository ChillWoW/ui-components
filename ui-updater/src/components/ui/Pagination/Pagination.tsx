import React from "react";
import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight
} from "@tabler/icons-react";
import { cn } from "..";
import { PaginationProps } from "./types";

export const Pagination = ({
    total,
    page,
    onChange,
    siblings = 1,
    className,
    classNames,
    disabled = false,
    showPrevNext = true,
    showFirstLast = false,
    size = "md",
    ariaLabel = "Pagination",
    prevNextLabels = {
        prev: <IconChevronLeft size={18} />,
        next: <IconChevronRight size={18} />,
        first: <IconChevronsLeft size={18} />,
        last: <IconChevronsRight size={18} />
    }
}: PaginationProps) => {
    const getRange = (start: number, end: number) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const getPageNumbers = () => {
        const totalNumbers = siblings * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (total <= totalBlocks) {
            return getRange(1, total);
        }

        const leftSiblingIndex = Math.max(page - siblings, 1);
        const rightSiblingIndex = Math.min(page + siblings, total);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < total - 1;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblings;
            return [...getRange(1, leftItemCount), "...", total];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblings;
            return [1, "...", ...getRange(total - rightItemCount + 1, total)];
        }

        return [
            1,
            "...",
            ...getRange(leftSiblingIndex, rightSiblingIndex),
            "...",
            total
        ];
    };

    const sizeStyles = {
        xs: {
            minWidth: "min-w-[24px]",
            height: "h-[24px]",
            fontSize: "text-xs"
        },
        sm: {
            minWidth: "min-w-[28px]",
            height: "h-[28px]",
            fontSize: "text-xs"
        },
        md: {
            minWidth: "min-w-[32px]",
            height: "h-[32px]",
            fontSize: "text-sm"
        },
        lg: {
            minWidth: "min-w-[40px]",
            height: "h-[40px]",
            fontSize: "text-base"
        },
        xl: {
            minWidth: "min-w-[48px]",
            height: "h-[48px]",
            fontSize: "text-lg"
        }
    };

    const paginationClass = "flex items-center gap-2";
    const paginationButtonClass = cn(
        "flex items-center justify-center cursor-pointer user-select-none px-[8px] rounded-md",
        "border border-[#3e4249] bg-[#252627] text-[#bbb]",
        "hover:not(:disabled):not(.pagination-dots):hover:bg-[#333538] hover:text-white",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        sizeStyles[size].minWidth,
        sizeStyles[size].height,
        sizeStyles[size].fontSize,
        classNames?.button
    );
    const paginationButtonActiveClass = cn(
        "border-[#727477] text-white",
        classNames?.activeButton
    );
    const paginationButtonDisabledClass = cn(
        "opacity-60 cursor-not-allowed",
        classNames?.disabledButton
    );
    const paginationDotsClass = cn(
        "cursor-default text-[#bbb]",
        classNames?.dots
    );
    const prevNextButtonClass = cn(
        paginationButtonClass,
        classNames?.prevNextButton
    );

    const handlePageChange = (newPage: number) => {
        if (!disabled && newPage >= 1 && newPage <= total && newPage !== page) {
            onChange(newPage);
        }
    };

    return (
        <div
            className={cn(paginationClass, className, classNames?.container)}
            role="navigation"
            aria-label={ariaLabel}
        >
            {showFirstLast && (
                <button
                    className={prevNextButtonClass}
                    onClick={() => handlePageChange(1)}
                    disabled={disabled || page === 1}
                    aria-label="Go to first page"
                >
                    {prevNextLabels.first}
                </button>
            )}

            {showPrevNext && (
                <button
                    className={prevNextButtonClass}
                    onClick={() => handlePageChange(page - 1)}
                    disabled={disabled || page === 1}
                    aria-label="Go to previous page"
                >
                    {prevNextLabels.prev}
                </button>
            )}

            {getPageNumbers().map((pageNumber, i) => (
                <button
                    key={i}
                    className={cn(
                        paginationButtonClass,
                        pageNumber === page && paginationButtonActiveClass,
                        pageNumber === "..." && paginationDotsClass,
                        disabled && paginationButtonDisabledClass
                    )}
                    onClick={() =>
                        pageNumber !== "..." &&
                        handlePageChange(Number(pageNumber))
                    }
                    disabled={disabled || pageNumber === "..."}
                    aria-current={pageNumber === page ? "page" : undefined}
                    aria-label={
                        pageNumber === "..."
                            ? "More pages"
                            : `Page ${pageNumber}`
                    }
                >
                    {pageNumber}
                </button>
            ))}

            {showPrevNext && (
                <button
                    className={prevNextButtonClass}
                    onClick={() => handlePageChange(page + 1)}
                    disabled={disabled || page === total}
                    aria-label="Go to next page"
                >
                    {prevNextLabels.next}
                </button>
            )}

            {showFirstLast && (
                <button
                    className={prevNextButtonClass}
                    onClick={() => handlePageChange(total)}
                    disabled={disabled || page === total}
                    aria-label="Go to last page"
                >
                    {prevNextLabels.last}
                </button>
            )}
        </div>
    );
};

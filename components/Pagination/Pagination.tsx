import React from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cn } from "..";
import { PaginationProps } from "./types";

export const Pagination = ({
    total,
    page,
    onChange,
    siblings = 1,
    className,
    classNames
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

    const paginationClass = "flex items-center gap-2";
    const paginationButtonClass = cn(
        "flex min-w-[32px] h-[32px] items-center justify-center cursor-pointer user-select-none px-[8px] rounded-md",
        "border border-[#3e4249] bg-[#252627] text-[#bbb] text-sm",
        "hover:not(:disabled):not(.pagination-dots):hover:bg-[#333538] hover:text-white",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        classNames?.button
    );
    const paginationButtonActiveClass = cn(
        "border-[#727477] text-white",
        classNames?.activeButton
    );

    const paginationDotsClass = cn(
        "cursor-default text-[#bbb]",
        classNames?.dots
    );

    return (
        <div className={cn(paginationClass, className, classNames?.container)}>
            <button
                className={paginationButtonClass}
                onClick={() => page > 1 && onChange(page - 1)}
                disabled={page === 1}
            >
                <IconChevronLeft size={18} />
            </button>

            {getPageNumbers().map((pageNumber, i) => (
                <button
                    key={i}
                    className={cn(
                        paginationButtonClass,
                        pageNumber === page && paginationButtonActiveClass,
                        pageNumber === "..." && paginationDotsClass
                    )}
                    onClick={() =>
                        pageNumber !== "..." && onChange(Number(pageNumber))
                    }
                >
                    {pageNumber}
                </button>
            ))}

            <button
                className={paginationButtonClass}
                onClick={() => page < total && onChange(page + 1)}
                disabled={page === total}
            >
                <IconChevronRight size={18} />
            </button>
        </div>
    );
};

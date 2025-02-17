import React from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "./Pagination.css";

export interface PaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
  siblings?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  onChange,
  siblings = 1,
  className = "",
}) => {
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
      total,
    ];
  };

  return (
    <div className={`pagination ${className}`}>
      <button
        className="pagination-button"
        onClick={() => page > 1 && onChange(page - 1)}
        disabled={page === 1}
      >
        <IconChevronLeft size={18} />
      </button>

      {getPageNumbers().map((pageNumber, i) => (
        <button
          key={i}
          className={`
            pagination-button
            ${pageNumber === page ? "active" : ""}
            ${pageNumber === "..." ? "pagination-dots" : ""}
          `}
          onClick={() => pageNumber !== "..." && onChange(Number(pageNumber))}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => page < total && onChange(page + 1)}
        disabled={page === total}
      >
        <IconChevronRight size={18} />
      </button>
    </div>
  );
};

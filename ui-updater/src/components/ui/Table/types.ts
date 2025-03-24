import {
  ReactNode,
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

export type TableAlign = "left" | "center" | "right";
export type TableSortDirection = "asc" | "desc" | null;

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
  striped?: boolean;
  hover?: boolean;
  compact?: boolean;
  bordered?: boolean;
  sticky?: boolean;
  sortable?: boolean;
  loading?: boolean;
  emptyText?: string;
  variant?: "default" | "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
  className?: string;
  loading?: boolean;
  emptyText?: string;
  data?: any[];
  renderRow?: (item: any, index: number) => ReactNode;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
  selected?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
  className?: string;
  colSpan?: number;
  align?: TableAlign;
}

export interface TableHeaderCellProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: ReactNode;
  className?: string;
  colSpan?: number;
  align?: TableAlign;
  sortable?: boolean;
  sortDirection?: TableSortDirection;
  onSort?: () => void;
}

export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
    className?: string;
}

export interface TableBodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}

export interface TableCellProps
    extends React.TdHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    className?: string;
    header?: boolean;
}

export interface TableHeadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}

export interface TableRowProps
    extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
    className?: string;
}

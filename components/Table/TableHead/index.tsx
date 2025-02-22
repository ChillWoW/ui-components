export interface TableHeadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <thead className={className} {...props}>
            {children}
        </thead>
    );
};

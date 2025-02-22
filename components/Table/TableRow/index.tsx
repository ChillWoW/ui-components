import { cn } from "../..";

export interface TableRowProps
    extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
    className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <tr
            className={cn(
                "transition-colors duration-200",
                "hover:bg-[#333538]",
                className
            )}
            {...props}
        >
            {children}
        </tr>
    );
};

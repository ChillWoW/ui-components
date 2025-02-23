import {
    Card,
    Text,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    cn
} from "@/components/ui";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

interface TableColumn {
    key: string;
    label: string;
    className?: string;
}

interface ComponentLayoutProps {
    title: string;
    description: string;
    usage: ReactNode;
    children: ReactNode;
    table?: {
        title?: string;
        columns: TableColumn[];
        data: Record<string, any>[];
    };
}

export const ComponentLayout = ({
    title,
    description,
    usage,
    children,
    table
}: ComponentLayoutProps) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800">
            <Navbar />
            <Sidebar />
            <main className="lg:ml-64 pt-16">
                <div className="p-6">
                    <div className="flex flex-col gap-6">
                        <div className="relative">
                            <Text size="xl" weight="bold">
                                {title}
                            </Text>
                            <Text size="md" className="text-gray-400 mt-1">
                                {description}
                            </Text>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="min-h-[300px] bg-gradient-to-br from-[#1a1b1e] to-[#2c2e33] border-[#3e4249]/50 backdrop-blur-sm">
                                <Text weight="semibold">Usage</Text>
                                {usage}
                            </Card>

                            <div className="flex flex-col gap-6">
                                <Card className="min-h-[300px] bg-gradient-to-br from-[#1a1b1e] to-[#2c2e33] border-[#3e4249]/50 backdrop-blur-sm">
                                    <Text weight="semibold">Preview</Text>
                                    <div className="flex justify-center items-center w-full h-full">
                                        {children}
                                    </div>
                                </Card>

                                {table && (
                                    <Card className="bg-gradient-to-br from-[#1a1b1e] to-[#2c2e33] border-[#3e4249]/50 backdrop-blur-sm">
                                        <Text
                                            weight="semibold"
                                            className="mb-4"
                                        >
                                            {table.title || "Props"}
                                        </Text>
                                        <div className="overflow-x-auto">
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        {table.columns.map(
                                                            (column) => (
                                                                <TableCell
                                                                    key={
                                                                        column.key
                                                                    }
                                                                    header
                                                                    className={cn(
                                                                        "font-medium",
                                                                        column.className
                                                                    )}
                                                                >
                                                                    {
                                                                        column.label
                                                                    }
                                                                </TableCell>
                                                            )
                                                        )}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {table.data.map(
                                                        (row, index) => (
                                                            <TableRow
                                                                key={index}
                                                            >
                                                                {table.columns.map(
                                                                    (
                                                                        column
                                                                    ) => (
                                                                        <TableCell
                                                                            key={
                                                                                column.key
                                                                            }
                                                                            className={
                                                                                column.className
                                                                            }
                                                                        >
                                                                            {
                                                                                row[
                                                                                    column
                                                                                        .key
                                                                                ]
                                                                            }
                                                                        </TableCell>
                                                                    )
                                                                )}
                                                            </TableRow>
                                                        )
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

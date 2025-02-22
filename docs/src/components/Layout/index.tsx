import { Card, Text } from "@/components/ui";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

interface ComponentLayoutProps {
    title: string;
    description: string;
    usage: ReactNode;
    children: ReactNode;
}

export const ComponentLayout = ({
    title,
    description,
    usage,
    children
}: ComponentLayoutProps) => {
    return (
        <div className="min-h-screen bg-dark-900">
            <Navbar />
            <Sidebar />
            <main className="lg:ml-64 pt-16">
                <div className="p-6">
                    <div className="flex flex-col gap-6">
                        <div>
                            <Text
                                size="xl"
                                weight="bold"
                                className="text-white"
                            >
                                {title}
                            </Text>
                            <Text size="md" className="text-[#909296] mt-1">
                                {description}
                            </Text>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card className="min-h-[300px]">
                                <Text
                                    weight="semibold"
                                    className="text-white mb-4"
                                >
                                    Usage
                                </Text>
                                {usage}
                            </Card>

                            <Card className="min-h-[300px]">
                                <Text
                                    weight="semibold"
                                    className="text-white mb-4"
                                >
                                    Preview
                                </Text>
                                <div className="flex items-center justify-center p-4">
                                    {children}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

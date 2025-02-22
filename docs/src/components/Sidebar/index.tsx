import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/components/ui";

const categories = [
    {
        name: "Core",
        components: [
            { name: "Button", path: "/components/button" },
            { name: "Input", path: "/components/input" },
            { name: "Select", path: "/components/select" }
        ]
    },
    {
        name: "Data Display",
        components: [
            { name: "Avatar", path: "/components/avatar" },
            { name: "Badge", path: "/components/badge" },
            { name: "Card", path: "/components/card" },
            { name: "Timeline", path: "/components/timeline" }
        ]
    },
    {
        name: "Navigation",
        components: [
            { name: "Menu", path: "/components/menu" },
            { name: "Pagination", path: "/components/pagination" },
            { name: "Tabs", path: "/components/tabs" }
        ]
    },
    {
        name: "Feedback",
        components: [
            { name: "Alert", path: "/components/alert" },
            { name: "Loader", path: "/components/loader" },
            { name: "Modal", path: "/components/modal" },
            { name: "Tooltip", path: "/components/tooltip" }
        ]
    },
    {
        name: "Miscellaneous",
        components: [
            { name: "Kbd", path: "/components/kbd" },
            { name: "Step", path: "/components/step" }
        ]
    }
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="lg:hidden fixed top-[20px] left-4 z-40 p-2 rounded-md bg-dark-800 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            <div
                className={cn(
                    "fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-dark-800 transform transition-transform duration-200 ease-in-out z-30",
                    "lg:translate-x-0",
                    "border-r border-[#3e4249]",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full overflow-y-auto p-4">
                    {categories.map((category) => (
                        <div key={category.name} className="mb-6">
                            <h3 className="text-[#909296] text-xs font-semibold uppercase tracking-wider mb-3 px-3">
                                {category.name}
                            </h3>
                            <nav className="space-y-1">
                                {category.components.map((component) => (
                                    <Link
                                        key={component.path}
                                        href={component.path}
                                        className="block px-3 py-2 text-sm text-gray-300 hover:bg-dark-700 rounded-md transition-colors duration-150"
                                    >
                                        {component.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

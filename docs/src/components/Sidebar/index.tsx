import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn, Text } from "@/components/ui";
import "./style.css";

const categories = [
    {
        name: "Buttons",
        components: [
            { name: "Button", path: "/components/button" },
            { name: "IconButton", path: "/components/icon-button" }
        ]
    },
    {
        name: "Inputs",
        components: [
            { name: "TextInput", path: "/components/text-input" },
            { name: "NumberInput", path: "/components/number-input" },
            { name: "PasswordInput", path: "/components/password-input" },
            { name: "Textarea", path: "/components/textarea" },
            { name: "SelectInput", path: "/components/select-input" },
            { name: "ColorPicker", path: "/components/color-picker" },
            { name: "Checkbox", path: "/components/checkbox" }
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
            { name: "Progress", path: "/components/progress" },
            { name: "RingProgress", path: "/components/ring-progress" }
        ]
    },
    {
        name: "Overlay",
        components: [
            { name: "Menu", path: "/components/menu" },
            { name: "Modal", path: "/components/modal" },
            { name: "Tooltip", path: "/components/tooltip" },
            { name: "Tabs", path: "/components/tabs" }
        ]
    },
    {
        name: "Data Display",
        components: [
            { name: "Avatar", path: "/components/avatar" },
            { name: "Badge", path: "/components/badge" },
            { name: "Card", path: "/components/card" },
            { name: "Timeline", path: "/components/timeline" },
            { name: "Step", path: "/components/step" }
        ]
    },
    {
        name: "Misc",
        components: [{ name: "Kbd", path: "/components/kbd" }]
    }
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="lg:hidden fixed top-[90px] right-3 z-[60] p-2 rounded-md bg-dark-800 text-white border border-dark-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>

            <div
                className={cn(
                    "fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-gradient-to-br from-dark-900 to-dark-800 transform transition-transform duration-200 ease-in-out z-30",
                    "lg:translate-x-0",
                    "border-r border-dark-500",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full overflow-y-auto p-4 sidebar-scrollbar">
                    {categories.map((category) => (
                        <div key={category.name} className="mb-6">
                            <div className="w-full bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg border border-dark-500 shadow-lg overflow-hidden">
                                <div className="px-4 py-3 bg-gradient-to-r from-dark-700 to-dark-600 border-b border-dark-500">
                                    <Text
                                        size="sm"
                                        weight="semibold"
                                        className="text-gray-200"
                                        align="center"
                                    >
                                        {category.name}
                                    </Text>
                                </div>
                                <nav className="p-2 space-y-1">
                                    {category.components.map((component) => (
                                        <Link
                                            key={component.path}
                                            href={component.path}
                                            className="block px-3 py-2 text-sm text-gray-400 hover:bg-dark-700 rounded-md transition-colors duration-150 hover:text-white"
                                        >
                                            {component.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
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

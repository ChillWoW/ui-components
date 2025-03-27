import React from "react";
import { Text } from "@/components/ui";

export const StylesAPI = ({
    title,
    description,
    apiData
}: {
    title: string;
    description?: string;
    apiData: {
        property: string;
        description: string;
        type: React.ReactNode;
        default?: string | React.ReactNode;
        version?: string;
    }[];
}) => {
    return (
        <div className="w-full">
            {title && (
                <div className="flex flex-col border-b border-dark-600 pb-2 mb-4">
                    <Text size="lg" weight="bold">
                        {title}
                    </Text>
                    {description && (
                        <Text size="sm" className="text-gray-400">
                            {description}
                        </Text>
                    )}
                </div>
            )}

            <div className="w-full overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-dark-750 border-b border-dark-600">
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
                                Property
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
                                Description
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
                                Type
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
                                Default
                            </th>
                            {apiData.some((item) => item.version) && (
                                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
                                    Version
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-dark-800"
                                        : "bg-dark-850"
                                }
                            >
                                <td className="py-3 px-4 text-sm font-mono text-blue-400">
                                    {item.property}
                                </td>
                                <td className="py-3 px-4 text-sm text-gray-300">
                                    {item.description}
                                </td>
                                <td className="py-3 px-4 text-sm font-mono">
                                    {typeof item.type === "string" ? (
                                        <span
                                            className={`text-${getTypeColor(
                                                item.type
                                            )}`}
                                        >
                                            {item.type}
                                        </span>
                                    ) : (
                                        item.type
                                    )}
                                </td>
                                <td className="py-3 px-4 text-sm">
                                    {item.default === undefined
                                        ? "-"
                                        : item.default}
                                </td>
                                {apiData.some((item) => item.version) && (
                                    <td className="py-3 px-4 text-sm text-gray-400">
                                        {item.version || "-"}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const getTypeColor = (type: string): string => {
    switch (type.toLowerCase()) {
        case "string":
            return "pink-400";
        case "boolean":
            return "yellow-400";
        case "number":
            return "green-400";
        case "reactnode":
            return "blue-400";
        case "object":
            return "purple-400";
        default:
            return "gray-300";
    }
};

export const createTypeOptions = (options: string[]): React.ReactNode => {
    return (
        <div className="flex flex-wrap gap-1">
            {options.map((option, index) => (
                <React.Fragment key={option}>
                    <span className="text-pink-400">{`"${option}"`}</span>
                    {index < options.length - 1 && (
                        <span className="text-gray-500">|</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

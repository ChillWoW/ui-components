import { Text } from "@/components/ui";

interface ConfigLabelProps {
    label: string;
    description?: string;
}

const ConfigLabel = ({ label, description }: ConfigLabelProps) => {
    return (
        <div className="flex flex-col items-center gap-1 border-b border-dark-600 pb-2 mb-4">
            <Text size="sm" weight="bold">
                {label}
            </Text>
            {description && (
                <Text size="sm" className="text-gray-400">
                    {description}
                </Text>
            )}
        </div>
    );
};

export default ConfigLabel;

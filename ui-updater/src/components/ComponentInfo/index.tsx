import { Text } from "@/components/ui";

interface ComponentInfoProps {
    title: string;
    description?: string;
}

const ComponentInfo = ({ title, description }: ComponentInfoProps) => {
    return (
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
    );
};

export default ComponentInfo;

import { Anchor, Card, cn, Text } from "@/components/ui";

interface ConfigCardProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
    anchorId?: string;
}

const ConfigCard = ({
    children,
    title,
    description,
    className,
    anchorId = ""
}: ConfigCardProps) => {
    return (
        <Card className="bg-dark-700 border-0">
            {title && (
                <Anchor id={anchorId} showIcon={false}>
                    <Text size="lg" weight="bold">
                        {title}
                    </Text>
                </Anchor>
            )}
            {description && (
                <Text size="sm" className="text-gray-400">
                    {description}
                </Text>
            )}
            {title || description ? (
                <div className={cn("mt-4", className)}>{children}</div>
            ) : (
                <div className={className}>{children}</div>
            )}
        </Card>
    );
};

export default ConfigCard;

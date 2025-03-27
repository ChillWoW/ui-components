import { Text } from "@/components/ui";

export const PlaygroundPreviewSection = ({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="flex flex-col gap-2">
        <Text size="sm" weight="bold">
            {title}
        </Text>
        {children}
    </div>
);

PlaygroundPreviewSection.displayName = "PlaygroundPreviewSection";

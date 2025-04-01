import React from "react";
import { Badge, Text } from "@/components/ui";

interface ComponentInfoProps {
  title: string;
  description?: string;
  error?: string | React.ReactNode;
}

const ComponentInfo = ({ title, description, error }: ComponentInfoProps) => {
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
      {error && <Badge className="bg-red-500/30 text-red-300">{error}</Badge>}
    </div>
  );
};

export default ComponentInfo;

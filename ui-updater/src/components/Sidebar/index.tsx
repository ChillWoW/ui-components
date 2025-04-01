import { IconComponents, IconVersions } from "@tabler/icons-react";
import { Text } from "../ui";
import ComponentSelector from "../ComponentSelector";

export default function Sidebar({
  onComponentChange,
}: {
  onComponentChange: (component: string) => void;
}) {
  return (
    <aside className="w-72 h-screen bg-dark-800 border-r border-dark-600 fixed">
      <div className="flex items-center justify-between p-4 border-b border-dark-600">
        <div className="flex items-center gap-2">
          <IconComponents size={18} className="text-primary-500" />
          <Text size="lg" weight="bold">
            Components
          </Text>
        </div>
        <div className="bg-dark-700 px-2 py-1 rounded flex items-center gap-1 text-primary-400">
          <IconVersions size={16} />
          <Text size="sm" className="font-mono">
            v0.9.2
          </Text>
        </div>
      </div>
      <div className="p-4 h-[calc(100vh-64px)] overflow-y-auto">
        <ComponentSelector onComponentChange={onComponentChange} />
      </div>
    </aside>
  );
}

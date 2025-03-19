import React, { useState } from "react";
import { SelectInput } from "@/components/ui/Inputs";

const COMPONENT_OPTIONS = [
  { value: "alert", label: "Alert" },
  { value: "avatar", label: "Avatar" },
  { value: "button", label: "Button" },
];

export interface ComponentSelectorProps {
  onComponentChange: (component: string) => void;
}

const ComponentSelector: React.FC<ComponentSelectorProps> = ({
  onComponentChange,
}) => {
  const [selectedComponent, setSelectedComponent] = useState<string>(
    COMPONENT_OPTIONS[0].value
  );

  const handleComponentChange = (value: string) => {
    setSelectedComponent(value);
    onComponentChange(value);
  };

  return (
    <div className="w-full max-w-md">
      <SelectInput
        label="Select a component to preview"
        hint={`Components: ${COMPONENT_OPTIONS.length}`}
        options={COMPONENT_OPTIONS}
        value={selectedComponent}
        onChange={handleComponentChange}
        className="w-full"
        classNames={{
          input: "bg-dark-800",
          dropdown: "bg-dark-800",
          option: "bg-dark-800 hover:bg-dark-700 text-white",
          selectedOption: "bg-dark-700",
        }}
      />
    </div>
  );
};

export default ComponentSelector;

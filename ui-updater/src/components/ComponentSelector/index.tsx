import React, { useState } from "react";
import { SelectInput } from "@/components/ui/Inputs";

const COMPONENT_OPTIONS = [
  { value: "alert", label: "Alert" },
  { value: "avatar", label: "Avatar" },
  { value: "avatarGroup", label: "Avatar Group" },
  { value: "badge", label: "Badge" },
  { value: "button", label: "Button" },
  { value: "buttonGroup", label: "Button Group" },
  { value: "card", label: "Card" },
  { value: "checkbox", label: "Checkbox" },
  { value: "drawer", label: "Drawer" },
  { value: "numberInput", label: "Number Input" },
  { value: "colorPicker", label: "Color Picker" },
  { value: "datePicker", label: "Date Picker" },
  { value: "passwordInput", label: "Password Input" },
  { value: "pinInput", label: "Pin Input" },
  { value: "selectInput", label: "Select Input" },
  { value: "textArea", label: "Text Area" },
  { value: "textInput", label: "Text Input" },
  { value: "kbd", label: "Kbd" },
  { value: "loader", label: "Loader" },
];

export interface ComponentSelectorProps {
  onComponentChange: (component: string) => void;
}

const ComponentSelector: React.FC<ComponentSelectorProps> = ({
  onComponentChange,
}) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>();

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
        value={selectedComponent ?? undefined}
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

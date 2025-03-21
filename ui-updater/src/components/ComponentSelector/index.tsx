import React, { use, useEffect, useState } from "react";
import { SelectInput } from "@/components/ui/Inputs";
import { useSearchParams } from "next/navigation";

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
  { value: "menu", label: "Menu" },
  { value: "modal", label: "Modal" },
  { value: "pagination", label: "Pagination" },
  { value: "progress", label: "Progress" },
  { value: "radio", label: "Radio" },
  { value: "radioCard", label: "Radio Card" },
  { value: "radioGroup", label: "Radio Group" },
  { value: "rating", label: "Rating" },
  { value: "ringProgress", label: "Ring Progress" },
  { value: "slider", label: "Slider" },
  { value: "step", label: "Step" },
  { value: "switch", label: "Switch" },
  { value: "table", label: "Table" },
  { value: "tabs", label: "Tabs" },
  { value: "text", label: "Text" },
  { value: "timeline", label: "Timeline" },
  { value: "tooltip", label: "Tooltip" },
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

    const url = new URL(window.location.href);
    url.searchParams.set("component", value);
    window.history.pushState({}, "", url);
  };

  const url = useSearchParams();
  const component = url.get("component");

  useEffect(() => {
    if (component) {
      handleComponentChange(component);
    }
  }, [component]);

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

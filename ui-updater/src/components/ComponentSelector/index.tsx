import React, { useEffect, useState } from "react";
import { TextInput } from "@/components/ui/Inputs";
import { useSearchParams } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";

const COMPONENT_CATEGORIES = {
  Layout: ["card", "center", "flex", "grid", "group", "stack", "portal"],
  Inputs: [
    "textInput",
    "numberInput",
    "passwordInput",
    "pinInput",
    "selectInput",
    "textArea",
    "checkbox",
    "radio",
    "radioCard",
    "radioGroup",
    "switch",
    "slider",
    "colorPicker",
    "datePicker",
    "fileInput",
    "multiSelect",
  ],
  Navigation: ["anchor", "breadcrumb", "pagination", "tabs", "menu"],
  Feedback: [
    "alert",
    "progress",
    "loader",
    "ringProgress",
    "skeleton",
    "tooltip",
  ],
  "Data Display": [
    "avatar",
    "avatarGroup",
    "badge",
    "code",
    "colorSwatch",
    "kbd",
    "stat",
    "table",
    "text",
    "timeline",
    "snippet",
  ],
  Overlay: ["drawer", "modal"],
  Disclosure: ["accordion", "stepper"],
  Engagement: ["button", "buttonGroup", "rating"],
};

const COMPONENT_OPTIONS = [
  { value: "accordion", label: "Accordion" },
  { value: "alert", label: "Alert" },
  { value: "anchor", label: "Anchor" },
  { value: "avatar", label: "Avatar" },
  { value: "badge", label: "Badge" },
  { value: "breadcrumb", label: "Breadcrumb" },
  { value: "button", label: "Button" },
  { value: "buttonGroup", label: "Button Group" },
  { value: "card", label: "Card" },
  { value: "center", label: "Center" },
  { value: "checkbox", label: "Checkbox" },
  { value: "code", label: "Code" },
  { value: "colorSwatch", label: "Color Swatch" },
  { value: "drawer", label: "Drawer" },
  { value: "flex", label: "Flex" },
  { value: "grid", label: "Grid" },
  { value: "group", label: "Group" },
  { value: "numberInput", label: "Number Input" },
  { value: "chip", label: "Chip" },
  { value: "colorPicker", label: "Color Picker" },
  { value: "datePicker", label: "Date Picker" },
  { value: "fileInput", label: "File Input" },
  { value: "passwordInput", label: "Password Input" },
  { value: "pinInput", label: "Pin Input" },
  { value: "selectInput", label: "Select Input" },
  { value: "textArea", label: "Text Area" },
  { value: "textInput", label: "Text Input" },
  { value: "multiSelect", label: "Multi Select" },
  { value: "kbd", label: "Kbd" },
  { value: "loader", label: "Loader" },
  { value: "menu", label: "Menu" },
  { value: "modal", label: "Modal" },
  { value: "pagination", label: "Pagination" },
  { value: "portal", label: "Portal" },
  { value: "progress", label: "Progress" },
  { value: "radio", label: "Radio" },
  { value: "radioCard", label: "Radio Card" },
  { value: "radioGroup", label: "Radio Group" },
  { value: "rating", label: "Rating" },
  { value: "ringProgress", label: "Ring Progress" },
  { value: "slider", label: "Slider" },
  { value: "skeleton", label: "Skeleton" },
  { value: "stepper", label: "Stepper" },
  { value: "snippet", label: "Snippet" },
  { value: "stack", label: "Stack" },
  { value: "stat", label: "Stat" },
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
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >(
    Object.keys(COMPONENT_CATEGORIES).reduce((acc, category) => {
      acc[category] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

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

  const filteredComponents = COMPONENT_OPTIONS.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categorizedComponents = () => {
    if (searchQuery) {
      return (
        <ul className="space-y-1">
          {filteredComponents.map((option) => (
            <li
              key={option.value}
              className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                selectedComponent === option.value
                  ? "bg-dark-700 text-white"
                  : "text-gray-400 hover:bg-dark-700 hover:text-white"
              }`}
              onClick={() => handleComponentChange(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="space-y-2">
        {Object.entries(COMPONENT_CATEGORIES).map(
          ([category, componentValues]) => (
            <div
              key={category}
              className="border-b border-dark-600 pb-2 mb-2 last:border-b-0"
            >
              <div
                className="flex items-center justify-between px-2 py-1 text-white font-medium cursor-pointer hover:bg-dark-600 rounded"
                onClick={() => toggleCategory(category)}
              >
                <span>{category}</span>
                <span>{expandedCategories[category] ? "-" : "+"}</span>
              </div>

              {expandedCategories[category] && (
                <ul className="space-y-1 mt-1 ml-2">
                  {componentValues.map((value) => {
                    const option = COMPONENT_OPTIONS.find(
                      (opt) => opt.value === value
                    );
                    if (!option) return null;

                    return (
                      <li
                        key={option.value}
                        className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                          selectedComponent === option.value
                            ? "bg-dark-700 text-white"
                            : "text-gray-400 hover:bg-dark-700 hover:text-white"
                        }`}
                        onClick={() => handleComponentChange(option.value)}
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <TextInput
          placeholder="Search components..."
          value={searchQuery}
          onChange={(value: any) => setSearchQuery(value)}
          leftSection={<IconSearch size={18} />}
          hint={`Currently we have ${COMPONENT_OPTIONS.length} components`}
          classNames={{
            input: "bg-dark-800 border-dark-600",
            inputContainer: "bg-dark-800 w-full",
            leftSection: "bg-dark-800",
          }}
        />
      </div>

      <div className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-dark-500 scrollbar-track-dark-800">
        {categorizedComponents()}
      </div>
    </div>
  );
};

export default ComponentSelector;

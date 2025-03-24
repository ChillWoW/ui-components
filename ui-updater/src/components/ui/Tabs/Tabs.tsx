import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "..";
import { TabsList } from "./TabsList";
import { TabsTab } from "./TabsTab";
import { TabsPanel } from "./TabsPanel";
import { TabsContextType, TabsProps } from "./types";

// Create a context to manage tab state across subcomponents
const TabsContext = createContext<TabsContextType | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component");
  }
  return context;
};

export const Tabs = ({
  defaultValue,
  value,
  onChange,
  orientation = "horizontal",
  variant = "default",
  size = "md",
  position = "top",
  withBorder = true,
  fullWidth = false,
  grow = false,
  className,
  classNames,
  children,
}: TabsProps) => {
  // Handle controlled and uncontrolled component patterns
  const [activeTab, setActiveTab] = useState(defaultValue || "");
  const currentValue = value !== undefined ? value : activeTab;

  // Update state if controlled value changes
  useEffect(() => {
    if (value !== undefined) {
      setActiveTab(value);
    }
  }, [value]);

  const handleTabChange = (newValue: string) => {
    if (value === undefined) {
      setActiveTab(newValue);
    }
    onChange?.(newValue);
  };

  const contextValue = {
    value: currentValue,
    onChange: handleTabChange,
    orientation,
    variant,
    size,
    position,
    withBorder,
    fullWidth,
    grow,
    classNames,
  };

  const isVertical = orientation === "vertical";

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={cn(
          "tabs-root",
          isVertical ? "flex flex-row" : "flex flex-col",
          className,
          classNames?.root
        )}
        data-orientation={orientation}
        data-position={position}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Attach subcomponents to Tabs
Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

import React, { useState, useRef, useEffect } from "react";
import "./Tabs.css";

export interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultValue,
  onChange,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    updateIndicator();
  }, [activeTab]);

  const updateIndicator = () => {
    const currentTab =
      tabsRef.current[tabs.findIndex((tab) => tab.value === activeTab)];
    if (currentTab) {
      setIndicatorStyle({
        left: `${currentTab.offsetLeft}px`,
        width: `${currentTab.offsetWidth}px`,
      });
    }
  };

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className={`tabs-container ${className || ""}`}>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={tab.value}
            ref={(el) => {
              if (el) {
                tabsRef.current[index] = el;
              }
            }}
            className={`tab-item ${tab.value === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </div>
        ))}
        <div className="tab-indicator" style={indicatorStyle} />
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

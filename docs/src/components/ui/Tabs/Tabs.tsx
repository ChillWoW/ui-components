import React, { useState, useRef, useEffect } from "react";
import { cn } from "..";
import { TabItem } from "./TabsItem";
import { TabItemProps, TabsProps } from "./types";

export const Tabs = ({
  defaultValue,
  onChange,
  className,
  classNames,
  children,
}: TabsProps) => {
  const tabs = React.Children.toArray(children)
    .filter(
      (child): child is React.ReactElement<TabItemProps> =>
        React.isValidElement(child) && child.type === TabItem
    )
    .map((child) => ({
      value: child.props.value,
      label: child.props.label,
      icon: child.props.icon,
      description: child.props.description,
      disabled: child.props.disabled,
      content: child.props.children,
    }));

  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    updateIndicator();
  }, [activeTab]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, []);

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

  const handleTabClick = (value: string, disabled?: boolean) => {
    if (disabled) return;
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div
      className={cn("flex flex-col w-full", className, classNames?.container)}
    >
      <div
        className={cn(
          "flex border-b border-[#3e4249] relative",
          classNames?.tabList
        )}
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.value}
            ref={(el) => {
              if (el) {
                tabsRef.current[index] = el;
              }
            }}
            className={cn(
              "flex items-center gap-2 px-4 py-3 cursor-pointer transition-all duration-200",
              "hover:bg-[#333538]",
              tab.value === activeTab && "bg-[#333538]",
              tab.value === activeTab && classNames?.activeTab,
              tab.disabled &&
                "opacity-50 cursor-not-allowed pointer-events-none",
              classNames?.tab
            )}
            onClick={() => handleTabClick(tab.value, tab.disabled)}
          >
            {tab.icon && (
              <span
                className={cn(
                  "text-[#727b8e]",
                  tab.value === activeTab && "text-white",
                  classNames?.tabIcon
                )}
              >
                {tab.icon}
              </span>
            )}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-sm font-medium",
                    tab.value === activeTab ? "text-white" : "text-[#727b8e]",
                    classNames?.tabLabel
                  )}
                >
                  {tab.label}
                </span>
              </div>
              {tab.description && (
                <span
                  className={cn(
                    "text-xs text-[#727b8e]",
                    classNames?.tabDescription
                  )}
                >
                  {tab.description}
                </span>
              )}
            </div>
          </div>
        ))}
        <div
          className={cn(
            "absolute bottom-0 h-[2px] bg-white transition-all duration-200",
            classNames?.indicator
          )}
          style={indicatorStyle}
        />
      </div>
      <div className={cn("p-4", classNames?.content)}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

Tabs.Item = TabItem;

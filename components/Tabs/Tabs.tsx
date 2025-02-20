import React, { useState, useRef, useEffect } from "react";
import { cn } from "..";

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
    className
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
                width: `${currentTab.offsetWidth}px`
            });
        }
    };

    const handleTabClick = (value: string) => {
        setActiveTab(value);
        onChange?.(value);
    };

    const tabsContainerClass = "flex flex-col w-full";
    const tabsHeaderClass =
        "flex justify-around border-b border-[#3e4249] relative";
    const tabItemClass = cn(
        "flex-1 px-4 py-2 cursor-pointer text-center font-medium transition-colors duration-200 text-[#727b8e]",
        "hover:text-white"
    );
    const tabItemActiveClass = "text-white";
    const tabIndicatorClass =
        "absolute bottom-0 h-[1px] bg-white transition-all duration-200";
    const tabContentClass = "p-1";

    return (
        <div className={cn(tabsContainerClass, className)}>
            <div className={tabsHeaderClass}>
                {tabs.map((tab, index) => (
                    <div
                        key={tab.value}
                        ref={(el) => {
                            if (el) {
                                tabsRef.current[index] = el;
                            }
                        }}
                        className={cn(
                            tabItemClass,
                            tab.value === activeTab && tabItemActiveClass
                        )}
                        onClick={() => handleTabClick(tab.value)}
                    >
                        {tab.label}
                    </div>
                ))}
                <div className={cn(tabIndicatorClass)} style={indicatorStyle} />
            </div>
            <div className={cn(tabContentClass)}>
                {tabs.find((tab) => tab.value === activeTab)?.content}
            </div>
        </div>
    );
};

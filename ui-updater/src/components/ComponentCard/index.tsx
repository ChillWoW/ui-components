import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { componentConfigs } from "../ComponentConfigs";
import { IconMenu2 } from "@tabler/icons-react";

const ComponentCard = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [props, setProps] = useState<any>({});

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Initialize props when the component changes
  useEffect(() => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs]
    ) {
      const config =
        componentConfigs[selectedComponent as keyof typeof componentConfigs];
      setProps(config.defaultProps || {});
    }
  }, [selectedComponent]);

  const renderSelectedComponent = () => {
    if (
      !selectedComponent ||
      !componentConfigs[selectedComponent as keyof typeof componentConfigs]
    ) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">Select a component from the sidebar</p>
        </div>
      );
    }

    return componentConfigs[
      selectedComponent as keyof typeof componentConfigs
    ].renderComponent(props, setProps);
  };

  return (
    <div className="bg-dark-900 min-h-screen w-full overflow-x-hidden custom-scrollbar">
      <div className="flex h-screen">
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-dark-700 text-primary-500 hover:bg-dark-600 transition-colors"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <IconMenu2 size={24} />
        </button>

        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 w-72 fixed z-40 md:relative`}
        >
          <Sidebar
            onComponentChange={(component) => {
              setSelectedComponent(component);
              if (isMobile) {
                setSidebarOpen(false);
              }
            }}
          />
        </div>

        <div className="transition-all duration-300 flex-1 w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar md:ml-0 ml-0">
          <div className="w-full h-full">
            <div className="bg-dark-800 p-4 md:p-8 overflow-x-hidden flex flex-col space-y-4 break-words">
              {renderSelectedComponent()}
              {selectedComponent &&
                (() => {
                  const config =
                    componentConfigs[
                      selectedComponent as keyof typeof componentConfigs
                    ];
                  if (config?.renderPlayground) {
                    const Playground = config.renderPlayground();
                    return <Playground props={props} setProps={setProps} />;
                  }
                  return null;
                })()}
              {selectedComponent &&
                (() => {
                  const config =
                    componentConfigs[
                      selectedComponent as keyof typeof componentConfigs
                    ];
                  if (config?.renderStylesAPI) {
                    return config.renderStylesAPI();
                  }
                  return null;
                })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;

import React, { useState, useMemo } from "react";
import ComponentSelector from "../ComponentSelector";
import { Card, Text } from "@/components/ui";
import { componentConfigs } from "../ComponentConfigs";

const ComponentCard = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("button");

  const [componentProps, setComponentProps] = useState<Record<string, any>>({});

  useMemo(() => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs]
    ) {
      if (!componentProps[selectedComponent]) {
        setComponentProps((prev) => ({
          ...prev,
          [selectedComponent]:
            componentConfigs[selectedComponent as keyof typeof componentConfigs]
              .defaultProps,
        }));
      }
    }
  }, [selectedComponent]);

  const currentProps = componentProps[selectedComponent] || {};

  const updateCurrentProps = (newProps: any) => {
    setComponentProps((prev) => ({
      ...prev,
      [selectedComponent]: newProps,
    }));
  };

  const renderComponent = () => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs]
    ) {
      return componentConfigs[
        selectedComponent as keyof typeof componentConfigs
      ].renderComponent(currentProps);
    }
    return <div>Select a component to preview</div>;
  };

  const renderPropsPanel = () => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs]
    ) {
      const PropsPanelComponent =
        componentConfigs[
          selectedComponent as keyof typeof componentConfigs
        ].renderPropsPanel();
      return (
        <PropsPanelComponent
          props={currentProps}
          setProps={updateCurrentProps}
        />
      );
    }
    return (
      <div className="h-full flex items-center justify-center">
        <Text>Select a component to preview</Text>
      </div>
    );
  };

  return (
    <div className="bg-dark-900 min-h-screen w-full flex flex-col items-center p-8 gap-8">
      <ComponentSelector onComponentChange={setSelectedComponent} />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 bg-dark-800 border-dark-600">
          <div className="p-4">{renderPropsPanel()}</div>
        </Card>

        <Card className="md:col-span-2 bg-dark-800 border-dark-600 min-h-[300px] flex items-center justify-center">
          <div className="p-8">{renderComponent()}</div>
        </Card>
      </div>
    </div>
  );
};

export default ComponentCard;

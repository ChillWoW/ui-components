import React, { useState, useMemo, useEffect } from "react";
import ComponentSelector from "../ComponentSelector";
import { Button, Card, cn, Text } from "@/components/ui";
import { componentConfigs } from "../ComponentConfigs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ComponentCard = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>();
  const [componentProps, setComponentProps] = useState<Record<string, any>>({});
  const [error, setError] = useState<React.ReactNode | null>(null);
  const [activeTab, setActiveTab] = useState("preview");

  useEffect(() => {
    setError(null);
  }, [selectedComponent]);

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

  const currentProps =
    selectedComponent && componentProps[selectedComponent]
      ? componentProps[selectedComponent]
      : {};

  const updateCurrentProps = (newProps: any) => {
    setComponentProps((prev) => ({
      ...prev,
      [selectedComponent as keyof typeof componentProps]: newProps,
    }));
  };

  const renderComponentError = () => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs] &&
      typeof componentConfigs[
        selectedComponent as keyof typeof componentConfigs
      ].renderError === "function"
    ) {
      return componentConfigs[
        selectedComponent as keyof typeof componentConfigs
      ].renderError?.();
    }
    return null;
  };

  const renderInfoPanel = () => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs] &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs]
        .infoPanel
    ) {
      const InfoPanel =
        componentConfigs[selectedComponent as keyof typeof componentConfigs]
          .infoPanel!();
      return InfoPanel;
    }
    return (
      <div className="h-full flex items-center justify-center">
        <Text>No reference information available for this component</Text>
      </div>
    );
  };

  const renderComponent = () => {
    if (
      selectedComponent &&
      componentConfigs[selectedComponent as keyof typeof componentConfigs]
    ) {
      return componentConfigs[
        selectedComponent as keyof typeof componentConfigs
      ].renderComponent(currentProps, updateCurrentProps);
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

  const generateComponentCode = () => {
    if (!selectedComponent) return "// Select a component to see code";

    const config =
      componentConfigs[selectedComponent as keyof typeof componentConfigs];
    if (!config) return "// Component configuration not found";

    let code = "";

    code += `import { ${
      selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)
    } } from "@/components/ui";\n\n`;

    code += `const MyComponent = () => (\n`;

    const componentJSX = config.generateCode
      ? config.generateCode(currentProps)
      : React.isValidElement(
            config.renderComponent(currentProps, updateCurrentProps)
          )
        ? React.Children.toArray(
            config.renderComponent(currentProps, updateCurrentProps)
          ).map((child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child);
            }
            return child;
          })[0]
        : config.renderComponent(currentProps, updateCurrentProps);

    const componentStr = getComponentString(componentJSX);
    code += componentStr;

    code += `\n);\n\nexport default MyComponent;`;

    return code;
  };

  const getComponentString = (component: React.ReactNode) => {
    if (!React.isValidElement(component)) return String(component);

    const componentType = (component.type as any).name || "div";

    const componentProps = component.props as any;

    let result = `  <${componentType}`;

    if (componentProps) {
      Object.entries(componentProps).forEach(([key, value]) => {
        if (key === "children" || key === "className") return;

        if (React.isValidElement(value)) {
          result += `\n    ${key}={<${(value.type as any).name || "div"} />}`;
        } else if (typeof value === "string") {
          result += `\n    ${key}="${value}"`;
        } else if (typeof value === "boolean" && value) {
          result += `\n    ${key}`;
        } else if (
          value !== null &&
          value !== undefined &&
          typeof value !== "boolean"
        ) {
          if (typeof value === "object") {
            const formattedValue = JSON.stringify(value, null, 2)
              .replace(/\n/g, "\n    ")
              .replace(/"/g, "'");
            result += `\n    ${key}={${formattedValue}}`;
          } else {
            result += `\n    ${key}={${JSON.stringify(value)}}`;
          }
        }
      });
    }

    if (componentProps.children) {
      result += ">\n";

      if (Array.isArray(componentProps.children)) {
        componentProps.children.forEach((child: any) => {
          if (React.isValidElement(child)) {
            result += `    ${getComponentString(child).replace(/^/gm, "  ")}\n`;
          } else if (child) {
            result += `    ${String(child)}\n`;
          }
        });
      } else if (React.isValidElement(componentProps.children)) {
        result += `    ${getComponentString(componentProps.children).replace(
          /^/gm,
          "  "
        )}\n`;
      } else if (componentProps.children) {
        result += `    ${String(componentProps.children)}\n`;
      }

      result += `  </${componentType}>`;
    } else {
      result += " />";
    }

    return result;
  };

  return (
    <div className="bg-dark-900 min-h-screen w-full flex flex-col items-center p-8 gap-8">
      <ComponentSelector onComponentChange={setSelectedComponent} />

      <div className="w-full max-w-6xl">{renderComponentError()}</div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 bg-dark-800 border-dark-600 h-fit">
          <div className="p-4">{renderPropsPanel()}</div>
        </Card>

        <Card className="md:col-span-2 bg-dark-800 border-dark-600 min-h-[300px] flex flex-col">
          <div className="flex items-center justify-center gap-2">
            <Button
              onClick={() => setActiveTab("preview")}
              className={cn(
                "w-full bg-dark-800 hover:bg-dark-700",
                activeTab === "preview" && "bg-dark-700"
              )}
            >
              Preview
            </Button>
            <Button
              onClick={() => setActiveTab("info")}
              className={cn(
                "w-full bg-dark-800 hover:bg-dark-700",
                activeTab === "info" && "bg-dark-700"
              )}
            >
              Info
            </Button>
          </div>
          {activeTab === "preview" && (
            <>
              <div className="p-8 flex-1 flex items-center justify-center">
                {renderComponent()}
              </div>

              <div className="p-4 bg-dark-950 rounded-b-lg border-t border-dark-700">
                <Text size="sm" weight="bold" className="mb-2">
                  Component Code:
                </Text>
                <div className="relative">
                  <SyntaxHighlighter
                    key={selectedComponent}
                    language="tsx"
                    style={oneDark}
                    wrapLines
                    wrapLongLines
                    showLineNumbers
                    customStyle={{
                      fontSize: "12px",
                      borderRadius: "4px",
                      maxHeight: "250px",
                      fontFamily: "monospace",
                      backgroundColor: "#1a1b1e",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#3e4249 #1a1b1e",
                      overflowY: "auto",
                    }}
                    className="custom-scrollbar"
                  >
                    {String(generateComponentCode())}
                  </SyntaxHighlighter>
                  <button
                    className="absolute top-2 right-5 text-xs bg-dark-700 hover:bg-dark-600 px-2 py-1 rounded text-white"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        String(generateComponentCode())
                      );
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </>
          )}
          {activeTab === "info" && (
            <div className="p-4">{renderInfoPanel()}</div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ComponentCard;

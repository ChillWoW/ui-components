import React, { useState, useMemo, useEffect } from "react";
import ComponentSelector from "../ComponentSelector";
import { Alert, Button, ButtonGroup, Card, cn, Text } from "@/components/ui";
import { componentConfigs } from "../ComponentConfigs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconAlertCircle } from "@tabler/icons-react";

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

  const [mobileAlert, setMobileAlert] = useState(true);
  return (
    <div className="bg-dark-900 min-h-screen w-full flex flex-col items-center p-8 gap-8">
      {mobileAlert && (
        <div className="w-full max-w-6xl">
          <Alert
            variant="info"
            onClose={() => setMobileAlert(false)}
            icon={<IconAlertCircle />}
          >
            <Alert.Title>Website Mobile Support Coming Soon!</Alert.Title>
            <Alert.Description>
              This website doesn't support mobile devices at the moment. We're
              working on it, and it'll be fixed in the next update
            </Alert.Description>
          </Alert>
        </div>
      )}
      <ComponentSelector onComponentChange={setSelectedComponent} />

      <div className="w-full max-w-6xl">{renderComponentError()}</div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-0">
        <Card className="bg-dark-800 border-dark-600 md:rounded-r-none border-r-0 rounded-b-none">
          <div className="p-4">
            <Text
              size="lg"
              weight="bold"
              className="mb-4 text-center border-b border-dark-600 pb-2"
            >
              Properties
            </Text>
            {renderPropsPanel()}
          </div>
        </Card>

        <Card className="bg-dark-800 border-dark-600 md:col-span-2 md:rounded-l-none rounded-br-none">
          <Text
            size="lg"
            weight="bold"
            className="pt-4 px-4 text-center border-b border-dark-600 pb-2"
          >
            Preview
          </Text>
          <div className="h-[400px] flex items-center justify-center p-8">
            <div className="flex-1 flex items-center justify-center">
              {renderComponent()}
            </div>
          </div>
        </Card>
        {selectedComponent && (
          <Card className="w-full max-w-6xl col-span-3 p-4 border-dark-600 border-t-0 bg-dark-800 rounded-t-none">
            <Text
              size="lg"
              weight="bold"
              className="pt-4 px-4 text-center border-b border-dark-600 pb-2"
            >
              Code
            </Text>
            <div className="relative mt-3">
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
                className="absolute top-2 right-2 text-xs bg-dark-700 hover:bg-dark-600 px-2 py-1 rounded text-white"
                onClick={() => {
                  navigator.clipboard.writeText(
                    String(generateComponentCode())
                  );
                }}
              >
                Copy
              </button>
            </div>
          </Card>
        )}
      </div>

      {selectedComponent && (
        <Card className="w-full max-w-6xl bg-dark-800 border-dark-600 h-fit">
          <div className="p-4">
            <Text
              size="lg"
              weight="bold"
              className="mb-4 text-center border-b border-dark-600 pb-2"
            >
              Component Reference
            </Text>
            {renderInfoPanel()}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ComponentCard;

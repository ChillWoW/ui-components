import React, { useEffect } from "react";
import {
  Portal,
  OptionalPortal,
  Button,
  Switch,
  TextInput,
  Text,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { switchClasses } from ".";

import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const portalConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <ComponentInfo
        title="Portal"
        description="Portal for rendering content outside the parent hierarchy."
      />
    </div>
  ),

  defaultProps: {
    withinPortal: true,
    reuseTargetNode: false,
    target: null,
    children: "Portal content",
  },

  renderPlayground: () => {
    return ({
      props,
      setProps,
    }: {
      props: any;
      setProps: (newProps: any) => void;
    }) => {
      const [targetElement, setTargetElement] =
        React.useState<HTMLElement | null>(null);

      React.useEffect(() => {
        if (props.target === "#portal-target") {
          const element = document.querySelector("#playground-portal-target");
          setTargetElement(element as HTMLElement);
        } else {
          setTargetElement(null);
        }
      }, [props.target]);

      return (
        <PlaygroundPreview
          exampleCode={`<Portal>
    <div>
    This content is rendered outside the parent hierarchy via Portal
    </div>
</Portal>
          `}
          preview={
            <div className="flex flex-col gap-4 w-full">
              <div
                id="playground-portal-target"
                className="p-4 border border-dashed border-dark-500 rounded min-h-[100px]"
              >
                <Text size="sm" className="text-gray-400">
                  Target container (content will appear here if
                  target="#portal-target")
                </Text>
              </div>

              {props.withinPortal ? (
                props.reuseTargetNode ? (
                  <Portal reuseTargetNode>
                    <div className="p-4 bg-dark-600 border border-dark-500 rounded">
                      {props.children}
                    </div>
                  </Portal>
                ) : (
                  <Portal
                    target={
                      props.target === "#portal-target"
                        ? targetElement
                        : props.target
                    }
                  >
                    <div className="p-4 bg-dark-600 border border-dark-500 rounded">
                      {props.children}
                    </div>
                  </Portal>
                )
              ) : (
                <OptionalPortal withinPortal={props.withinPortal}>
                  <div className="p-4 bg-dark-600 border border-dark-500 rounded">
                    {props.children}
                  </div>
                </OptionalPortal>
              )}
            </div>
          }
          controls={
            <div className="space-y-6">
              <div>
                <Text size="sm" className="mb-1 text-gray-300">
                  Content
                </Text>
                <TextInput
                  value={props.children}
                  onChange={(e) => setProps({ ...props, children: e })}
                  placeholder="Portal content"
                />
              </div>

              <div>
                <Switch
                  label="Within Portal"
                  checked={props.withinPortal}
                  onChange={(checked) =>
                    setProps({ ...props, withinPortal: checked })
                  }
                  classNames={switchClasses}
                />
              </div>

              <div>
                <Switch
                  label="Reuse Target Node"
                  checked={props.reuseTargetNode}
                  onChange={(checked) =>
                    setProps({ ...props, reuseTargetNode: checked })
                  }
                  classNames={switchClasses}
                  disabled={!props.withinPortal}
                />
              </div>

              <div>
                <Text size="sm" className="mb-1 text-gray-300">
                  Target
                </Text>
                <TextInput
                  value={props.target}
                  onChange={(e) => setProps({ ...props, target: e })}
                  placeholder="Target element (ID or null)"
                  disabled={!props.withinPortal || props.reuseTargetNode}
                />
                <Text size="xs" className="mt-1 text-gray-400">
                  Enter "#portal-target" to use the example container
                </Text>
              </div>
            </div>
          }
        />
      );
    };
  },
};

import React from "react";
import { Text, Kbd } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

const switchClasses = {
  track: "bg-dark-700",
  activeTrack: "bg-dark-100",
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-800",
  option: "bg-dark-800 hover:bg-dark-700 text-white",
  selectedOption: "bg-dark-700",
};

export const kbdConfig: ComponentConfigType = {
  defaultProps: {},

  renderComponent: (props) => (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd> + <Kbd>E</Kbd>
    </div>
  ),
  renderPropsPanel: () => {
    return ({
      props,
      setProps,
    }: {
      props: any;
      setProps: (newProps: any) => void;
    }) => (
      <div className="space-y-4 w-full">
        <Text
          size="md"
          weight="bold"
          align="center"
          className="border-b border-dark-500 pb-1"
        >
          Kbd Properties
        </Text>

        <div className="flex h-full items-center justify-center">
          <Text>No properties for this component</Text>
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        children: {
          type: "ReactNode",
          required: true,
          description: "Content of the kbd",
        },
        className: {
          type: "string",
          description: "Determines the class name of the kbd",
        },
        classNames: {
          type: "object",
          description: "Determines the class name of the kbd",
          properties: {
            container: {
              type: "string",
              description: "Determines the class name of the kbd container",
            },
          },
        },
      }}
    />
  ),
};

import React from "react";
import { Text, Kbd, Loader, Slider } from "@/components/ui";
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

export const loaderConfig: ComponentConfigType = {
  defaultProps: {
    size: 48,
    speed: 0.8,
  },

  renderComponent: (props) => (
    <div className="flex items-center gap-2">
      <Loader color="white" size={props.size} speed={props.speed} />
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
          Loader Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <Slider
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
          />
          <Text size="sm" weight="bold">
            Speed
          </Text>
          <Slider
            value={props.speed * 100}
            onChange={(value) => setProps({ ...props, speed: value / 100 })}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        size: {
          type: "number",
          description: "Determines the size of the loader",
        },
        speed: {
          type: "number",
          description:
            "Determines the speed of the loader. The lower the number, the faster the loader.",
        },
        className: {
          type: "string",
          description: "Determines the class name of the loader",
        },
        classNames: {
          type: "object",
          description: "Determines the class name of the loader",
          properties: {
            container: {
              type: "string",
              description: "Determines the class name of the loader container",
            },
          },
        },
      }}
    />
  ),
};

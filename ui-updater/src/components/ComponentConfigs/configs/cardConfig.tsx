import React from "react";
import { Text, Switch, Card, SelectInput } from "@/components/ui";
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

export const cardConfig: ComponentConfigType = {
  defaultProps: {
    withBorder: false,
    radius: "md",
    shadow: false,
    padding: "md",
    hover: false,
  },

  renderComponent: (props) => (
    <Card
      className="bg-dark-900"
      withBorder={props.withBorder}
      radius={props.radius}
      shadow={props.shadow}
      padding={props.padding}
      hover={props.hover}
    >
      <img
        className="rounded-t-lg w-full h-[252px] object-cover"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        alt="Image"
      />
      <p className="text-base text-center">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </Card>
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
          Card Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Radius
          </Text>
          <SelectInput
            options={[
              { value: "none", label: "none" },
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
              { value: "full", label: "full" },
            ]}
            value={props.radius}
            onChange={(value) => setProps({ ...props, radius: value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="With Border"
            checked={props.withBorder}
            onChange={(checked) => setProps({ ...props, withBorder: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="With Shadow"
            checked={props.shadow}
            onChange={(checked) => setProps({ ...props, shadow: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="With Hover"
            checked={props.hover}
            onChange={(checked) => setProps({ ...props, hover: checked })}
            classNames={switchClasses}
          />
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
          description: "Content of the card",
        },
        withBorder: {
          type: "boolean",
          description: "Determines if the card has a border",
        },
        radius: {
          type: "string",
          description: "Determines the radius of the card",
          possibleValues: ["none", "sm", "md", "lg", "full"],
          default: "md",
        },
        shadow: {
          type: "boolean",
          default: false,
          description: "Determines if the card has a shadow",
        },
        hover: {
          type: "boolean",
          default: false,
          description: "Determines if the card has a hover effect",
        },
        padding: {
          type: "string",
          description: "Determines the padding of the card",
          default: "md",
          possibleValues: ["xs", "sm", "md", "lg", "xl", "none"],
        },
        onClick: {
          type: "function",
          description: "Function that is called when the card is clicked",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the card",
        },
        classNames: {
          type: "object",
          description: "Additional CSS classes to apply to the card",
          properties: {
            container: {
              type: "string",
              description: "Container of the card",
            },
            content: {
              type: "string",
              description: "Content of the card",
            },
          },
        },
      }}
    />
  ),
};

import React from "react";
import { Alert, AlertVariant } from "@/components/ui/Alert";
import { Text, RadioGroup, Switch, SelectInput } from "@/components/ui";
import { IconAlertCircle } from "@tabler/icons-react";
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

export const textConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    color: "white",
    weight: "normal",
    align: "left",
    italic: false,
    underline: false,
  },

  renderComponent: (props) => <Text {...props}>Hello World</Text>,

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
          Text Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            options={[
              { label: "xs", value: "xs" },
              { label: "sm", value: "sm" },
              { label: "md", value: "md" },
              { label: "lg", value: "lg" },
              { label: "xl", value: "xl" },
            ]}
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Color
          </Text>
          <SelectInput
            options={[
              { value: "white", label: "White" },
              { value: "black", label: "Black" },
              { value: "gray", label: "Gray" },
              { value: "blue", label: "Blue" },
              { value: "red", label: "Red" },
              { value: "green", label: "Green" },
              { value: "yellow", label: "Yellow" },
              { value: "purple", label: "Purple" },
              { value: "pink", label: "Pink" },
              { value: "orange", label: "Orange" },
            ]}
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Weight
          </Text>
          <SelectInput
            options={[
              { value: "bold", label: "Bold" },
              { value: "semibold", label: "Semibold" },
              { value: "normal", label: "Normal" },
              { value: "light", label: "Light" },
            ]}
            value={props.weight}
            onChange={(value) => setProps({ ...props, weight: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Align
          </Text>
          <SelectInput
            options={[
              { value: "left", label: "Left" },
              { value: "center", label: "Center" },
              { value: "right", label: "Right" },
            ]}
            value={props.align}
            onChange={(value) => setProps({ ...props, align: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Italic"
            checked={props.italic}
            onChange={(value) => setProps({ ...props, italic: value })}
          />
          <Switch
            label="Underline"
            checked={props.underline}
            onChange={(value) => setProps({ ...props, underline: value })}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        size: {
          type: "string",
          default: "md",
          description: "Determines the size of the text",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        color: {
          type: "string",
          default: "white",
          description: "Determines the color of the text",
        },
        weight: {
          type: "string",
          default: "normal",
          description: "Determines the weight of the text",
          possibleValues: ["bold", "semibold", "normal", "light"],
        },
        align: {
          type: "string",
          default: "left",
          description: "Determines the alignment of the text",
          possibleValues: ["left", "center", "right"],
        },
        italic: {
          type: "boolean",
          default: false,
          description: "Determines if the text is italic",
        },
        underline: {
          type: "boolean",
          default: false,
          description: "Determines if the text is underlined",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the text",
        },
        children: {
          type: "ReactNode",
          required: true,
          description:
            "Content of the alert. Can include Alert.Title and Alert.Description components.",
        },
      }}
    />
  ),
};

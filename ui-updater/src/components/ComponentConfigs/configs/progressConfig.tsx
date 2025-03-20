import React from "react";
import {
  Text,
  Switch,
  Checkbox,
  Progress,
  SelectInput,
  Slider,
} from "@/components/ui";
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

export const progressConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    value: 0,
    color: "blue",
    leftSideText: "0%",
    rightSideText: "100%",
    hint: "This is a hint",
    showHint: false,
  },

  renderComponent: (props) => (
    <Progress
      size={props.size}
      value={props.value}
      color={props.color}
      leftSideText={props.leftSideText}
      rightSideText={props.rightSideText}
      hint={props.showHint ? props.hint : undefined}
    />
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
          Checkbox Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            options={[
              { value: "xs", label: "xs" },
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
              { value: "xl", label: "xl" },
            ]}
            value={props.size}
            onChange={(value: any) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Color
          </Text>
          <SelectInput
            options={[
              { value: "yellow", label: "Yellow" },
              { value: "orange", label: "Orange" },
              { value: "red", label: "Red" },
              { value: "pink", label: "Pink" },
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "purple", label: "Purple" },
            ]}
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Value
          </Text>
          <Slider
            value={props.value}
            onChange={(value: any) => setProps({ ...props, value: value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Show Hint"
            checked={props.showHint}
            onChange={(checked) => setProps({ ...props, showHint: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        checked: {
          type: "boolean",
          description: "Determines if the checkbox is checked",
        },
        onChange: {
          type: "function",
          description: "Determines the function when the checkbox is changed",
        },
        disabled: {
          type: "boolean",
          description: "Determines if the checkbox is disabled",
        },
        label: {
          type: "string",
          description: "Determines the label of the checkbox",
        },
        required: {
          type: "boolean",
          description: "Determines if the checkbox is required",
        },
        className: {
          type: "string",
          description: "Determines the class name of the checkbox",
        },
        classNames: {
          type: "object",
          description: "Determines the class name of the checkbox",
          properties: {
            container: {
              type: "string",
              description:
                "Determines the class name of the checkbox container",
            },
            label: {
              type: "string",
              description: "Determines the class name of the checkbox label",
            },
            checkbox: {
              type: "string",
              description: "Determines the class name of the checkbox",
            },
            required: {
              type: "string",
              description: "Determines the class name of the required label",
            },
          },
        },
      }}
    />
  ),
};

import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  Slider,
  RingProgress,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses } from "./index";

export const ringProgressConfig: ComponentConfigType = {
  defaultProps: {
    size: 100,
    value: 0,
    color: "blue",
    thickness: 8,
    showLabel: true,
    label: "Progress",
    roundCaps: false,
  },

  renderComponent: (props) => (
    <RingProgress
      size={props.size}
      value={props.value}
      color={props.color}
      thickness={props.thickness}
      label={props.showLabel ? props.label : undefined}
      roundCaps={props.roundCaps}
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
            Color
          </Text>
          <SelectInput
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="yellow" label="Yellow" />
            <SelectInput.Option value="orange" label="Orange" />
            <SelectInput.Option value="red" label="Red" />
            <SelectInput.Option value="pink" label="Pink" />
            <SelectInput.Option value="blue" label="Blue" />
            <SelectInput.Option value="green" label="Green" />
            <SelectInput.Option value="purple" label="Purple" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <Slider
            value={props.size}
            onChange={(value: any) => setProps({ ...props, size: value })}
            max={300}
            min={10}
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
            label="Show Label"
            checked={props.showLabel}
            onChange={(checked) => setProps({ ...props, showLabel: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Round Caps"
            checked={props.roundCaps}
            onChange={(checked) => setProps({ ...props, roundCaps: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        value: {
          type: "number",
          description: "Determines the value of the ring",
        },
        size: {
          type: "number",
          description: "Determines the size of the ring",
        },
        thickness: {
          type: "number",
          description: "Determines the thickness of the ring",
        },
        color: {
          type: "string",
          default: "white",
          description: "Determines the color of the ring",
        },
        label: {
          type: "string",
          description: "Determines the label of the checkbox",
        },
        roundCaps: {
          type: "boolean",
          default: true,
          description: "Determines if the ring is rounded",
        },
      }}
    />
  ),
};

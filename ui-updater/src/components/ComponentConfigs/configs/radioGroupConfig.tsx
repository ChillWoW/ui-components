import React from "react";
import { Text, RadioGroup, Switch, SelectInput } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

const switchClasses = {
  track: "bg-dark-700",
  thumb: "bg-white",
  checked: {
    track: "bg-blue-600",
    thumb: "bg-white",
  },
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-700",
  option: "hover:bg-dark-600",
  selectedOption: "bg-dark-600",
};

export const radioGroupConfig: ComponentConfigType = {
  defaultProps: {
    value: "option1",
    size: "md",
  },

  renderComponent: (props, setProps) => (
    <RadioGroup
      value={props.value}
      onChange={(value) => setProps({ ...props, value })}
    >
      <RadioGroup.Item value="option1" label="Option 1" />
      <RadioGroup.Item value="option2" label="Option 2" />
      <RadioGroup.Item value="option3" label="Option 3" />
    </RadioGroup>
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
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="xs" label="xs" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Selected Value
          </Text>
          <RadioGroup
            value={props.value}
            onChange={(value) => setProps({ ...props, value })}
          >
            <RadioGroup.Item value="option1" label="Option 1" />
            <RadioGroup.Item value="option2" label="Option 2" />
            <RadioGroup.Item value="option3" label="Option 3" />
          </RadioGroup>
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        value: {
          type: "string",
          description: "Currently selected radio value",
        },
        onChange: {
          type: "function",
          description: "Function called when selection changes",
          required: true,
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the radio buttons",
          possibleValues: ["xs", "sm", "md", "lg"],
        },
        children: {
          type: "ReactNode",
          required: true,
          description: "RadioGroup.Item components to render as options",
        },
        className: {
          type: "string",
          description:
            "Additional CSS classes to apply to the radio group container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for radio group elements",
          properties: {
            root: {
              type: "string",
              description: "CSS class for the radio group container",
            },
            label: {
              type: "string",
              description: "CSS class for the radio group label",
            },
            radioWrapper: {
              type: "string",
              description: "CSS class for each radio item wrapper",
            },
            radio: {
              type: "string",
              description: "CSS class for the radio input element",
            },
            radioLabel: {
              type: "string",
              description: "CSS class for the radio item label",
            },
          },
        },
      }}
    />
  ),
};

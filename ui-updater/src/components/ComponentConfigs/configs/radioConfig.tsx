import React from "react";
import { Text, Radio, Switch, SelectInput } from "@/components/ui";
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

export const radioConfig: ComponentConfigType = {
  defaultProps: {
    checked: false,
    disabled: false,
    size: "md",
  },

  renderComponent: (props, setProps) => (
    <Radio
      checked={props.checked}
      onChange={(checked) => setProps({ ...props, checked })}
      disabled={props.disabled}
      size={props.size}
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
          Radio Properties
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
            ]}
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            State
          </Text>
          <Switch
            label="Checked"
            checked={props.checked}
            onChange={(checked) => setProps({ ...props, checked })}
            classNames={switchClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other Options
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
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
          default: false,
          description: "Whether the radio is checked",
        },
        onChange: {
          type: "function",
          required: true,
          description: "Function called when the radio state changes",
        },
        label: {
          type: "string",
          description: "Label displayed next to the radio",
        },
        disabled: {
          type: "boolean",
          default: false,
          description: "Whether the radio is disabled",
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the radio button",
          possibleValues: ["xs", "sm", "md", "lg"],
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the radio container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for radio elements",
          properties: {
            container: {
              type: "string",
              description: "CSS class for the radio container",
            },
            radio: {
              type: "string",
              description: "CSS class for the radio input element",
            },
            label: {
              type: "string",
              description: "CSS class for the radio label",
            },
          },
        },
        value: {
          type: "any",
          description:
            "Value associated with this radio (used when within RadioGroup)",
        },
        name: {
          type: "string",
          description: "Name attribute for the radio input element",
        },
      }}
    />
  ),
};

import React from "react";
import { Text, Switch, Checkbox } from "@/components/ui";
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

export const checkboxConfig: ComponentConfigType = {
  defaultProps: {
    checked: false,
    disabled: false,
    showLabel: true,
    label: "Checkbox",
    required: false,
  },

  renderComponent: (props) => (
    <Checkbox
      checked={props.checked}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
      required={props.required}
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
            Label / Required
          </Text>
          <Switch
            label="Show Label"
            checked={props.showLabel}
            onChange={(checked) => setProps({ ...props, showLabel: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Required"
            checked={props.required}
            onChange={(checked) => setProps({ ...props, required: checked })}
            classNames={switchClasses}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Required"
            checked={props.required}
            onChange={(checked) => setProps({ ...props, required: checked })}
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

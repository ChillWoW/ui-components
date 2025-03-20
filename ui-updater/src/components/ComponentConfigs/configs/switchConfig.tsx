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

export const switchConfig: ComponentConfigType = {
  defaultProps: {
    checked: false,
    disabled: false,
    showLabel: true,
    label: "Switch",
    size: "md",
  },

  renderComponent: (props, setProps) => (
    <Switch
      checked={props.checked}
      onChange={(checked) => setProps({ ...props, checked })}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
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
          Switch Properties
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
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Checked
          </Text>
          <Switch
            label={props.checked ? "On" : "Off"}
            checked={props.checked}
            onChange={(checked) => setProps({ ...props, checked })}
            classNames={switchClasses}
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
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        checked: {
          type: "boolean",
          description: "Determines if the switch is checked",
        },
        onChange: {
          type: "function",
          description: "Callback function triggered when the switch is toggled",
        },
        disabled: {
          type: "boolean",
          description: "Determines if the switch is disabled",
        },
        label: {
          type: "string",
          description: "Label text for the switch",
        },
        size: {
          type: "string",
          description: "Size of the switch",
          default: "md",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        className: {
          type: "string",
          description: "Additional CSS classes for the switch",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for the switch",
          properties: {
            wrapper: {
              type: "string",
              description: "CSS class for the wrapper element",
            },
            track: {
              type: "string",
              description: "CSS class for the track element",
            },
            thumb: {
              type: "string",
              description: "CSS class for the thumb element",
            },
            label: {
              type: "string",
              description: "CSS class for the label element",
            },
            activeTrack: {
              type: "string",
              description: "CSS class for the active track element",
            },
            activeThumb: {
              type: "string",
              description: "CSS class for the active thumb element",
            },
          },
        },
      }}
    />
  ),
};

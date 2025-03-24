import React from "react";
import { Text, Switch, TextInput } from "@/components/ui";
import { IconAlertCircle } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";

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

export const textInputConfig: ComponentConfigType = {
  defaultProps: {
    value: "",
    disabled: false,
    showLabel: true,
    showHint: false,
    label: "Text Input",
    hint: "Enter your text",
    required: false,
    leftSection: false,
    rightSection: false,
    error: false,
  },

  renderComponent: (props, setProps) => (
    <TextInput
      value={props.value}
      onChange={(value) => setProps({ ...props, value })}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
      required={props.required}
      hint={props.showHint ? props.hint : undefined}
      leftSection={props.leftSection && <IconAlertCircle />}
      rightSection={props.rightSection && <IconAlertCircle />}
      error={props.error && "Error"}
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
          Text Input Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Left Section"
            checked={props.leftSection}
            onChange={(checked) => setProps({ ...props, leftSection: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Right Section"
            checked={props.rightSection}
            onChange={(checked) =>
              setProps({ ...props, rightSection: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Show Label"
            checked={props.showLabel}
            onChange={(checked) => setProps({ ...props, showLabel: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Hint"
            checked={props.showHint}
            onChange={(checked) => setProps({ ...props, showHint: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Required"
            checked={props.required}
            onChange={(checked) => setProps({ ...props, required: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Error"
            checked={props.error}
            onChange={(checked) => setProps({ ...props, error: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

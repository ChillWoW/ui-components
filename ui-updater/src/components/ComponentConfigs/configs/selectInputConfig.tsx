import React from "react";
import {
  Text,
  Switch,
  PinInput,
  Alert,
  SelectInput,
  Button,
} from "@/components/ui";
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

export const selectInputConfig: ComponentConfigType = {
  defaultProps: {
    value: "",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    showLabel: true,
    showHint: false,
    placeholder: "Select an option",
    disabled: false,
    required: false,
    label: "Select Input",
    hint: "Select an option",
    leftSection: false,
  },

  renderComponent: (props, setProps) => (
    <SelectInput
      value={props.value}
      onChange={(value) => setProps({ ...props, value })}
      options={props.options}
      placeholder={props.placeholder}
      disabled={props.disabled}
      required={props.required}
      label={props.showLabel ? props.label : undefined}
      hint={props.showHint ? props.hint : undefined}
      className="w-full"
      leftSection={props.leftSection && <IconAlertCircle />}
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
          Pin Input Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Label / Hint / Required
          </Text>
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
            label="Left Section"
            checked={props.leftSection}
            onChange={(checked) => setProps({ ...props, leftSection: checked })}
            classNames={switchClasses}
          />
          <Button onClick={() => setProps({ ...props, value: "" })}>
            Clear
          </Button>
        </div>
      </div>
    );
  },
};

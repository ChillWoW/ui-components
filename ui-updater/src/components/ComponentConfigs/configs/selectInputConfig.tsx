import React from "react";
import { Text, Switch, SelectInput, Button, Alert } from "@/components/ui";
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
    showLabel: true,
    showHint: false,
    placeholder: "Select an option",
    disabled: false,
    required: false,
    label: "Select Input",
    hint: "Select an option",
    leftSection: false,
    clearable: false,
    allowDeselect: false,
    searchable: false,
    size: "md",
  },

  renderComponent: (props, setProps) => (
    <div className="space-y-2 w-64">
      <SelectInput
        value={props.value}
        onChange={(value) => setProps({ ...props, value })}
        placeholder={props.placeholder}
        disabled={props.disabled}
        required={props.required}
        label={props.showLabel ? props.label : undefined}
        hint={props.showHint ? props.hint : undefined}
        clearable={props.clearable}
        allowDeselect={props.allowDeselect}
        searchable={props.searchable}
        size={props.size}
        leftSection={props.leftSection && <IconAlertCircle />}
      >
        <SelectInput.Option value="option1" label="Option 1" />
        <SelectInput.Option value="option2" label="Option 2" />
        <SelectInput.Option value="option3" label="Option 3" />
      </SelectInput>
    </div>
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
            Selection Features
          </Text>
          <Switch
            label="Clearable"
            checked={props.clearable}
            onChange={(checked) => setProps({ ...props, clearable: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Allow Deselect"
            checked={props.allowDeselect}
            onChange={(checked) =>
              setProps({ ...props, allowDeselect: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Searchable"
            checked={props.searchable}
            onChange={(checked) => setProps({ ...props, searchable: checked })}
            classNames={switchClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="xs" label="Extra Small" />
            <SelectInput.Option value="sm" label="Small" />
            <SelectInput.Option value="md" label="Medium" />
            <SelectInput.Option value="lg" label="Large" />
            <SelectInput.Option value="xl" label="Extra Large" />
          </SelectInput>
        </div>

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
            label="Left Section"
            checked={props.leftSection}
            onChange={(checked) => setProps({ ...props, leftSection: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

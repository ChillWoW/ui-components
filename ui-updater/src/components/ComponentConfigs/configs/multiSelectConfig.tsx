import React from "react";
import { Text, Switch, MultiSelect, SelectInput } from "@/components/ui";
import { IconAlertCircle } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { selectInputClasses } from "./index";

const switchClasses = {
  track: "bg-dark-700",
  activeTrack: "bg-dark-100",
};

export const multiSelectConfig: ComponentConfigType = {
  defaultProps: {
    value: [],
    showLabel: true,
    showHint: false,
    placeholder: "Select options",
    disabled: false,
    required: false,
    label: "Multi Select",
    hint: "Select multiple options",
    leftSection: false,
    clearable: false,
    searchable: false,
    error: false,
    size: "md",
  },

  renderComponent: (props, setProps) => (
    <div className="space-y-2 w-64">
      <MultiSelect
        value={props.value}
        onChange={(value) => setProps({ ...props, value })}
        placeholder={props.placeholder}
        disabled={props.disabled}
        required={props.required}
        label={props.showLabel ? props.label : undefined}
        hint={props.showHint ? props.hint : undefined}
        clearable={props.clearable}
        searchable={props.searchable}
        size={props.size}
        leftSection={props.leftSection && <IconAlertCircle />}
        error={props.error && "Error"}
      >
        <MultiSelect.Option value="option1" label="Option 1" />
        <MultiSelect.Option value="option2" label="Option 2" />
        <MultiSelect.Option value="option3" label="Option 3" />
        <MultiSelect.Option value="option4" label="Option 4" />
        <MultiSelect.Option value="option5" label="Option 5" />
      </MultiSelect>
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
            <SelectInput.Option value="xl" label="xl" />
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
            label="Error"
            checked={props.error}
            onChange={(checked) => setProps({ ...props, error: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Left Section"
            checked={props.leftSection}
            onChange={(checked) => setProps({ ...props, leftSection: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Clearable"
            checked={props.clearable}
            onChange={(checked) => setProps({ ...props, clearable: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Searchable"
            checked={props.searchable}
            onChange={(checked) => setProps({ ...props, searchable: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

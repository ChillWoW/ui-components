import React from "react";
import { Text, Switch, FileInput } from "@/components/ui";
import { IconFile } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { switchClasses } from "./index";

export const fileInputConfig: ComponentConfigType = {
  defaultProps: {
    value: null,
    disabled: false,
    showLabel: true,
    showHint: false,
    label: "File Input",
    hint: "Upload a file",
    required: false,
    leftSection: false,
    rightSection: false,
    error: false,
    dragAndDrop: false,
    multiple: false,
    clearable: true,
    showFilePreview: true,
    placeholder: "Select file",
  },

  renderComponent: (props, setProps) => (
    <FileInput
      value={props.value}
      onChange={(value) => setProps({ ...props, value })}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
      required={props.required}
      hint={props.showHint ? props.hint : undefined}
      leftSection={props.leftSection && <IconFile />}
      rightSection={props.rightSection && <IconFile />}
      error={props.error && "Error"}
      multiple={props.multiple}
      dragAndDrop={props.dragAndDrop}
      clearable={props.clearable}
      showFilePreview={props.showFilePreview}
      placeholder={props.placeholder}
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
          <Switch
            label="Multiple Files"
            checked={props.multiple}
            onChange={(checked) => setProps({ ...props, multiple: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Drag and Drop"
            checked={props.dragAndDrop}
            onChange={(checked) => setProps({ ...props, dragAndDrop: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Clearable"
            checked={props.clearable}
            onChange={(checked) => setProps({ ...props, clearable: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show File Preview"
            checked={props.showFilePreview}
            onChange={(checked) =>
              setProps({ ...props, showFilePreview: checked })
            }
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

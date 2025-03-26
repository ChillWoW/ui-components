import React from "react";
import {
  Text,
  Radio,
  Switch,
  SelectInput,
  RadioGroup,
  ButtonGroup,
  Button,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  activeButtonClass,
  buttonClass,
} from "./index";

export const radioConfig: ComponentConfigType = {
  defaultProps: {
    checked: false,
    disabled: false,
    size: "md",
    variant: "filled",
    labelPosition: "right",
    label: "Radio",
    showLabel: true,
  },

  renderComponent: (props, setProps) => (
    <Radio
      checked={props.checked}
      onChange={(checked) => setProps({ ...props, checked })}
      disabled={props.disabled}
      size={props.size}
      variant={props.variant}
      labelPosition={props.labelPosition}
      label={props.showLabel ? props.label : undefined}
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
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="filled" label="Filled" />
            <RadioGroup.Item value="outline" label="Outline" />
            <RadioGroup.Item value="subtle" label="Subtle" />
            <RadioGroup.Item value="unstyled" label="Unstyled" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Label Position
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, labelPosition: "left" })}
              className={`${buttonClass} ${
                props.labelPosition === "left" && activeButtonClass
              }`}
            >
              Left
            </Button>
            <Button
              onClick={() => setProps({ ...props, labelPosition: "right" })}
              className={`${buttonClass} ${
                props.labelPosition === "right" && activeButtonClass
              }`}
            >
              Right
            </Button>
          </ButtonGroup>
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

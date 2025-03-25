import React from "react";
import {
  Text,
  Switch,
  Slider,
  SelectInput,
  NumberInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses, numberInputClass } from "./index";

export const sliderConfig: ComponentConfigType = {
  defaultProps: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showLabels: true,
    showTooltip: true,
    color: "blue",
    withMarks: false,
    marks: [
      { value: 0, label: "0%" },
      { value: 25, label: "25%" },
      { value: 50, label: "50%" },
      { value: 75, label: "75%" },
      { value: 100, label: "100%" },
    ],
    showLabel: true,
    label: "Slider",
    showHint: false,
    hint: "Drag the slider to adjust value",
  },

  renderComponent: (props, setProps) => (
    <div className="w-full px-2">
      <Slider
        value={props.value}
        onChange={(value) => setProps({ ...props, value })}
        min={props.min}
        max={props.max}
        step={props.step}
        disabled={props.disabled}
        marks={props.withMarks ? props.marks : undefined}
        label={props.showLabel ? props.label : undefined}
        showTooltip={props.showTooltip}
        color={props.color}
      />
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
            Color
          </Text>
          <SelectInput
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="blue" label="Blue" />
            <SelectInput.Option value="red" label="Red" />
            <SelectInput.Option value="green" label="Green" />
            <SelectInput.Option value="yellow" label="Yellow" />
            <SelectInput.Option value="purple" label="Purple" />
            <SelectInput.Option value="pink" label="Pink" />
            <SelectInput.Option value="orange" label="Orange" />
          </SelectInput>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <Text size="sm" weight="bold">
              Min Value
            </Text>
            <NumberInput
              value={props.min}
              onChange={(value) =>
                setProps({
                  ...props,
                  min: Math.min(value, props.max - 1),
                  value: Math.max(value, props.value),
                })
              }
              max={props.max - 1}
              classNames={numberInputClass}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Text size="sm" weight="bold">
              Max Value
            </Text>
            <NumberInput
              value={props.max}
              onChange={(value) =>
                setProps({
                  ...props,
                  max: Math.max(value, props.min + 1),
                  value: Math.min(value, props.value),
                })
              }
              min={props.min + 1}
              classNames={numberInputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Current Value: {props.value}
          </Text>
          <Slider
            value={props.value}
            onChange={(value) => setProps({ ...props, value })}
            min={props.min}
            max={props.max}
            step={props.step}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Step
          </Text>
          <Slider
            value={props.step}
            onChange={(value) => setProps({ ...props, step: value })}
            min={1}
            max={100}
            step={1}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Display
          </Text>
          <Switch
            label="Show Labels"
            checked={props.showLabels}
            onChange={(checked) => setProps({ ...props, showLabels: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Tooltip"
            checked={props.showTooltip}
            onChange={(checked) => setProps({ ...props, showTooltip: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="With Marks"
            checked={props.withMarks}
            onChange={(checked) => setProps({ ...props, withMarks: checked })}
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
        value: {
          type: "number",
          default: 0,
          description: "Current value of the slider",
        },
        onChange: {
          type: "function",
          required: true,
          description: "Function called when the slider value changes",
        },
        min: {
          type: "number",
          default: 0,
          description: "Minimum value of the slider",
        },
        max: {
          type: "number",
          default: 100,
          description: "Maximum value of the slider",
        },
        step: {
          type: "number",
          default: 1,
          description: "Step value for incrementing/decrementing",
        },
        disabled: {
          type: "boolean",
          default: false,
          description: "Whether the slider is disabled",
        },
        showLabels: {
          type: "boolean",
          default: true,
          description: "Whether to show min and max value labels on the ends",
        },
        showTooltip: {
          type: "boolean",
          default: true,
          description:
            "Whether to show a tooltip with the current value while dragging",
        },
        color: {
          type: "string",
          default: "blue",
          description: "Color of the slider track and thumb",
        },
        marks: {
          type: "array",
          description: "Array of marks to show on the slider track",
        },
        label: {
          type: "string",
          description: "Label displayed above the slider",
        },
        hint: {
          type: "string",
          description: "Hint text displayed below the slider",
        },
        className: {
          type: "string",
          description:
            "Additional CSS classes to apply to the slider container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for slider elements",
          properties: {
            container: {
              type: "string",
              description: "CSS class for the slider container",
            },
            track: {
              type: "string",
              description: "CSS class for the slider track",
            },
            thumb: {
              type: "string",
              description: "CSS class for the slider thumb",
            },
            filledTrack: {
              type: "string",
              description: "CSS class for the filled part of the track",
            },
            mark: {
              type: "string",
              description: "CSS class for mark elements",
            },
            markLabel: {
              type: "string",
              description: "CSS class for mark labels",
            },
            tooltip: {
              type: "string",
              description: "CSS class for the tooltip",
            },
          },
        },
      }}
    />
  ),
};

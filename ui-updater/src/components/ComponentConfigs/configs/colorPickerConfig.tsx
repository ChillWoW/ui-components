import React, { useState } from "react";
import {
  Text,
  Switch,
  ColorPicker,
  ButtonGroup,
  Button,
  NumberInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import {
  activeButtonClass,
  buttonClass,
  numberInputClass,
  switchClasses,
} from "./index";

export const colorPickerConfig: ComponentConfigType = {
  defaultProps: {
    value: "#000000",
    showLabel: true,
    showHint: false,
    label: "Color Picker",
    hint: "Pick a color",
    required: false,
    disabled: false,
    format: "hex",
    showSwatches: false,
    swatches: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
    swatchesPerRow: 4,
    allowEyeDropper: false,
    error: false,
  },

  renderComponent: (props, setProps) => (
    <ColorPicker
      value={props.value}
      onChange={(value) => setProps({ ...props, value })}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
      required={props.required}
      hint={props.showHint ? props.hint : undefined}
      format={props.format}
      swatches={props.showSwatches ? props.swatches : undefined}
      swatchesPerRow={props.swatchesPerRow}
      allowEyeDropper={props.allowEyeDropper}
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
          Color Picker Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Swatches
          </Text>
          <Switch
            label="Show Swatches"
            checked={props.showSwatches}
            onChange={(checked) =>
              setProps({ ...props, showSwatches: checked })
            }
            classNames={switchClasses}
          />
          <NumberInput
            label="Swatches Per Row"
            value={props.swatchesPerRow}
            onChange={(value) => setProps({ ...props, swatchesPerRow: value })}
            min={1}
            max={10}
            classNames={numberInputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Format
          </Text>

          <ButtonGroup fullWidth>
            <Button
              onClick={() => setProps({ ...props, format: "hex" })}
              className={`${buttonClass} ${
                props.format === "hex" && activeButtonClass
              }`}
            >
              Hex
            </Button>
            <Button
              className={`${buttonClass} ${
                props.format === "rgb" && activeButtonClass
              }`}
              onClick={() => setProps({ ...props, format: "rgb" })}
            >
              RGB
            </Button>
            <Button
              className={`${buttonClass} ${
                props.format === "rgba" && activeButtonClass
              }`}
              onClick={() => setProps({ ...props, format: "rgba" })}
            >
              RGBA
            </Button>
          </ButtonGroup>
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
            label="Allow Eye Dropper"
            checked={props.allowEyeDropper}
            onChange={(checked) =>
              setProps({ ...props, allowEyeDropper: checked })
            }
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

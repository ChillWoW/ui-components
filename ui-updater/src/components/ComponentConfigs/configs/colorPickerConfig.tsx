import React, { useState } from "react";
import { Alert, AlertVariant } from "@/components/ui/Alert";
import {
  Text,
  RadioGroup,
  Switch,
  Card,
  SelectInput,
  Checkbox,
  ColorPicker,
  TextInput,
  ButtonGroup,
  Button,
  NumberInput,
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
            label="Allow Eye Dropper"
            checked={props.allowEyeDropper}
            onChange={(checked) =>
              setProps({ ...props, allowEyeDropper: checked })
            }
            classNames={switchClasses}
          />
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, format: "hex" })}
              className={props.format === "hex" ? "bg-dark-700" : ""}
            >
              Hex
            </Button>
            <Button
              className={props.format === "rgb" ? "bg-dark-700" : ""}
              onClick={() => setProps({ ...props, format: "rgb" })}
            >
              RGB
            </Button>
            <Button
              className={props.format === "rgba" ? "bg-dark-700" : ""}
              onClick={() => setProps({ ...props, format: "rgba" })}
            >
              RGBA
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
};

import React from "react";
import { Text, Switch, PinInput, Alert, TextInput } from "@/components/ui";
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

export const pinInputConfig: ComponentConfigType = {
  defaultProps: {
    length: 4,
    mask: false,
    disabled: false,
    showLabel: true,
    showHint: false,
    label: "Pin Input",
    hint: "Enter your pin",
    placeholder: "○",
    allowLetters: false,
    error: false,
  },

  renderComponent: (props, setProps) => (
    <PinInput
      length={props.length}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
      required={props.required}
      hint={props.showHint ? props.hint : undefined}
      placeholder={props.placeholder}
      allowLetters={props.allowLetters}
      mask={props.mask}
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
          Pin Input Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Placeholder
          </Text>
          <TextInput
            value={props.placeholder}
            onChange={(value) => setProps({ ...props, placeholder: value })}
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
            label="Mask"
            checked={props.mask}
            onChange={(checked) => setProps({ ...props, mask: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Allow Letters"
            checked={props.allowLetters}
            onChange={(checked) =>
              setProps({ ...props, allowLetters: checked })
            }
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

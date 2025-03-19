import React from "react";
import { Text, Switch, PinInput, Alert } from "@/components/ui";
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
    />
  ),

  renderError: () => (
    <Alert variant="warning" icon={<IconAlertCircle />}>
      <Alert.Title className="text-md">Possible errors</Alert.Title>
      <Alert.Description className="text-xs">
        Currently, the input can malfunction in browser. There is no problems
        while running it in production.
      </Alert.Description>
    </Alert>
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
        </div>
      </div>
    );
  },
};

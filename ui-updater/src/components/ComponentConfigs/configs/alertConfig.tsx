import React from "react";
import { Alert, AlertVariant } from "@/components/ui/Alert";
import { Text, RadioGroup, Switch } from "@/components/ui";
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

export const alertConfig: ComponentConfigType = {
  defaultProps: {
    icon: false,
    variant: "info",
  },

  renderComponent: (props) => (
    <Alert
      variant={props.variant as AlertVariant}
      icon={props.icon && <IconAlertCircle />}
    >
      <Alert.Title>Alert Title</Alert.Title>
      <Alert.Description>
        This is an alert description. It can be used to provide more information
        about the alert.
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
          Alert Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Default variants
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="success" label="Success" />
            <RadioGroup.Item value="error" label="Error" />
            <RadioGroup.Item value="warning" label="Warning" />
            <RadioGroup.Item value="info" label="Info" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Icon"
            checked={props.icon}
            onChange={(checked) => setProps({ ...props, icon: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

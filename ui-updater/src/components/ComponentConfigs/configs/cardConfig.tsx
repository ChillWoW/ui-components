import React from "react";
import { Alert, AlertVariant } from "@/components/ui/Alert";
import { Text, RadioGroup, Switch, Card, SelectInput } from "@/components/ui";
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

export const cardConfig: ComponentConfigType = {
  defaultProps: {
    withBorder: false,
    radius: "md",
  },

  renderComponent: (props) => (
    <Card
      className="bg-dark-800"
      withBorder={props.withBorder}
      radius={props.radius}
    >
      <div className="p-4">
        <Text>Card Content</Text>
      </div>
    </Card>
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
          Card Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Radius
          </Text>
          <SelectInput
            options={[
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
            ]}
            value={props.radius}
            onChange={(value) => setProps({ ...props, radius: value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="With Border"
            checked={props.withBorder}
            onChange={(checked) => setProps({ ...props, withBorder: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};

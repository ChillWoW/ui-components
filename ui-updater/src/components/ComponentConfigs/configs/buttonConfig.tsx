import React from "react";
import {
  Button,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/Buttons/Button";
import { Text, SelectInput, RadioGroup, Switch } from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

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

export const buttonConfig: ComponentConfigType = {
  defaultProps: {
    size: "sm",
    variant: "filled",
    disabled: false,
    text: "Sample Button",
    leftSection: false,
    rightSection: false,
  },

  renderComponent: (props) => (
    <Button
      size={props.size as ButtonSize}
      variant={props.variant as ButtonVariant}
      disabled={props.disabled}
      leftSection={props.leftSection && <IconUser />}
      rightSection={props.rightSection && <IconUserCheck />}
    >
      {props.text}
    </Button>
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
          Button Properties
        </Text>

        <div>
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            options={[
              { value: "xs", label: "xs" },
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
              { value: "xl", label: "xl" },
            ]}
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
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
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2">
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
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        children: {
          type: "ReactNode",
          required: true,
          description: "Content of the button",
        },
        size: {
          type: "string",
          default: "md",
          description: "Determines the size of the button",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        variant: {
          type: "string",
          default: "filled",
          description: "Determines the variant of the button",
          possibleValues: ["filled", "outline"],
        },
        disabled: {
          type: "boolean",
          description: "Determines if the button is disabled",
        },
        leftSection: {
          type: "ReactNode",
          description: "Determines the left section of the button",
        },
        rightSection: {
          type: "ReactNode",
          description: "Determines the right section of the button",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the button",
        },
        classNames: {
          type: "object",
          description: "Additional CSS classes to apply to the button",
          properties: {
            container: {
              type: "string",
              description: "Container of the button",
            },
            leftSection: {
              type: "string",
              description: "Left section of the button",
            },
            rightSection: {
              type: "string",
              description: "Right section of the button",
            },
          },
        },
      }}
    />
  ),
};

import React from "react";
import {
  Button,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/Buttons/Button";
import { Text, SelectInput, RadioGroup, Switch } from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { selectInputClasses, switchClasses } from "./index";

export const buttonConfig: ComponentConfigType = {
  defaultProps: {
    size: "sm",
    variant: "filled",
    disabled: false,
    text: "Sample Button",
    leftSection: false,
    rightSection: false,
    fullWidth: false,
    isLoading: false,
    active: false,
    radius: "md",
  },

  renderComponent: (props) => (
    <Button
      size={props.size as ButtonSize}
      variant={props.variant as ButtonVariant}
      disabled={props.disabled}
      leftSection={props.leftSection && <IconUser />}
      rightSection={props.rightSection && <IconUserCheck />}
      fullWidth={props.fullWidth}
      isLoading={props.isLoading}
      active={props.active}
      radius={props.radius as ButtonRadius}
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
            <SelectInput.Option value="xl" label="xl" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Radius
          </Text>
          <SelectInput
            value={props.radius}
            onChange={(value) => setProps({ ...props, radius: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="sm" label="Sm" />
            <SelectInput.Option value="md" label="Md" />
            <SelectInput.Option value="lg" label="Lg" />
            <SelectInput.Option value="full" label="Full" />
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
            <RadioGroup.Item value="link" label="Link" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2">
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
            label="Full Width"
            checked={props.fullWidth}
            onChange={(checked) => setProps({ ...props, fullWidth: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Active"
            checked={props.active}
            onChange={(checked) => setProps({ ...props, active: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Loading"
            checked={props.isLoading}
            onChange={(checked) => setProps({ ...props, isLoading: checked })}
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
          possibleValues: ["filled", "outline", "subtle", "link"],
        },
        radius: {
          type: "string",
          default: "md",
          description: "Determines the radius of the button",
          possibleValues: ["none", "sm", "md", "lg", "full"],
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
        isLoading: {
          type: "boolean",
          description: "Determines if the button is loading",
        },
        active: {
          type: "boolean",
          description: "Determines if the button is active",
        },
        fullWidth: {
          type: "boolean",
          description: "Determines if the button is full width",
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
            active: {
              type: "string",
              description: "Active state of the button",
            },
          },
        },
      }}
    />
  ),
};

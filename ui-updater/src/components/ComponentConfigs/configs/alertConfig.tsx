import React from "react";
import { Alert } from "@/components/ui/Alert";
import { Text, RadioGroup, Switch, SelectInput } from "@/components/ui";
import { IconAlertCircle } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses } from "./index";

export const alertConfig: ComponentConfigType = {
  defaultProps: {
    icon: false,
    variant: "filled",
    color: "info",
    closeable: false,
    compact: false,
    withBorder: true,
    radius: "md",
    shadow: "sm",
    iconPosition: "center",
  },

  renderComponent: (props) => (
    <Alert
      variant={props.variant}
      color={props.color}
      icon={props.icon && <IconAlertCircle />}
      closeable={props.closeable}
      compact={props.compact}
      withBorder={props.withBorder}
      radius={props.radius}
      shadow={props.shadow}
      iconPosition={props.icon ? props.iconPosition : undefined}
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
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Color
          </Text>
          <SelectInput
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="success" label="Success" />
            <SelectInput.Option value="error" label="Error" />
            <SelectInput.Option value="warning" label="Warning" />
            <SelectInput.Option value="info" label="Info" />
            <SelectInput.Option value="dark" label="Dark" />
            <SelectInput.Option value="light" label="Light" />
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
            <RadioGroup.Item value="unstyled" label="Unstyled" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Shadow
          </Text>
          <SelectInput
            value={props.shadow}
            onChange={(value) => setProps({ ...props, shadow: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="xs" label="xs" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="xl" label="xl" />
            <SelectInput.Option value="2xl" label="2xl" />
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
            Icon
          </Text>
          <Switch
            label="Icon"
            checked={props.icon}
            onChange={(checked) => setProps({ ...props, icon: checked })}
            classNames={switchClasses}
          />

          {props.icon && (
            <>
              <Text size="sm" weight="bold">
                Icon Position
              </Text>
              <RadioGroup
                value={props.iconPosition}
                onChange={(value) =>
                  setProps({ ...props, iconPosition: value })
                }
              >
                <RadioGroup.Item value="top" label="Top" />
                <RadioGroup.Item value="center" label="Center" />
                <RadioGroup.Item value="bottom" label="Bottom" />
              </RadioGroup>
            </>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Closeable"
            checked={props.closeable}
            onChange={(checked) => setProps({ ...props, closeable: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Compact"
            checked={props.compact}
            onChange={(checked) => setProps({ ...props, compact: checked })}
            classNames={switchClasses}
          />
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

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        children: {
          type: "ReactNode",
          required: true,
          description: "Content of the alert",
        },
        onClose: {
          type: "function",
          description: "Function to handle the close event",
        },
        variant: {
          type: "string",
          default: "filled",
          description: "Determines the color and style of the alert",
          possibleValues: ["filled", "outline", "unstyled"],
        },
        color: {
          type: "string",
          default: "info",
          description: "Determines the color and style of the alert",
          possibleValues: ["success", "error", "warning", "info"],
        },
        icon: {
          type: "ReactNode",
          description: "Icon displayed at the start of the alert",
        },
        iconPosition: {
          type: "string",
          default: "center",
          description: "Position of the icon",
          possibleValues: ["top", "center", "bottom"],
        },
        closeable: {
          type: "boolean",
          default: false,
          description: "Whether the alert is closeable",
        },
        closeIcon: {
          type: "ReactNode",
          description: "Custom close icon",
        },
        compact: {
          type: "boolean",
          default: false,
          description: "Whether the alert is compact",
        },
        withBorder: {
          type: "boolean",
          default: true,
          description: "Whether the alert has a border",
        },
        radius: {
          type: "string",
          default: "md",
          description: "Radius of the alert",
          possibleValues: ["none", "sm", "md", "lg", "full"],
        },
        shadow: {
          type: "string",
          default: "sm",
          description: "Shadow of the alert",
          possibleValues: ["none", "xs", "sm", "md", "lg", "xl", "2xl"],
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the alert",
        },
        classNames: {
          type: "object",
          description: "Additional CSS classes to apply to the alert",
          properties: {
            root: {
              type: "string",
              description: "Additional CSS classes to apply to the alert root",
            },
            icon: {
              type: "string",
              description: "Additional CSS classes to apply to the alert icon",
            },
            closeButton: {
              type: "string",
              description:
                "Additional CSS classes to apply to the alert close button",
            },
            title: {
              type: "string",
              description: "Additional CSS classes to apply to the alert title",
            },
            description: {
              type: "string",
              description:
                "Additional CSS classes to apply to the alert description",
            },
          },
        },
      }}
    />
  ),
};

import React, { useState } from "react";
import {
  Button,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
  ButtonIntent,
} from "@/components/ui/Buttons/Button";
import { Anchor, SelectInput, Switch } from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const stackConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Stack"
          description="Stack is used for easy layout customization."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
                title="Test"
                >
                    <Stack
                </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    children: "Click me",
    variant: "filled",
    intent: "",
    size: "sm",
    radius: "md",
    disabled: false,
    isLoading: false,
    fullWidth: false,
    active: false,
    leftSection: false,
    rightSection: false,
  },

  renderPlayground: () => {
    return ({
      props,
      setProps,
    }: {
      props: any;
      setProps: (newProps: any) => void;
    }) => (
      <PlaygroundPreview
        preview={
          <Button
            variant={props.variant as ButtonVariant}
            intent={props.intent as ButtonIntent}
            size={props.size as ButtonSize}
            radius={props.radius as ButtonRadius}
            disabled={props.disabled}
            isLoading={props.isLoading}
            fullWidth={props.fullWidth}
            active={props.active}
            leftSection={props.leftSection ? <IconUser /> : undefined}
            rightSection={props.rightSection ? <IconUserCheck /> : undefined}
          >
            {props.children}
          </Button>
        }
        exampleCode={`
<Button>
    Click me
</Button>
`}
        controls={
          <>
            <PlaygroundPreview.Section title="Content">
              <Switch
                label="Left Icon"
                checked={props.leftSection}
                onChange={(checked) =>
                  setProps({ ...props, leftSection: checked })
                }
                classNames={switchClasses}
              />

              <Switch
                label="Right Icon"
                checked={props.rightSection}
                onChange={(checked) =>
                  setProps({
                    ...props,
                    rightSection: checked,
                  })
                }
                classNames={switchClasses}
              />
            </PlaygroundPreview.Section>

            <PlaygroundPreview.Section title="Appearance">
              <SelectInput
                label="Variant"
                value={props.variant}
                onChange={(value) => setProps({ ...props, variant: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="filled" label="Filled" />
                <SelectInput.Option value="outline" label="Outline" />
                <SelectInput.Option value="subtle" label="Subtle" />
                <SelectInput.Option value="unstyled" label="Unstyled" />
              </SelectInput>

              <SelectInput
                label="Intent"
                value={props.intent}
                onChange={(value) => setProps({ ...props, intent: value })}
                classNames={selectInputClasses}
                clearable
              >
                <SelectInput.Option value="primary" label="Primary" />
                <SelectInput.Option value="secondary" label="Secondary" />
                <SelectInput.Option value="success" label="Success" />
                <SelectInput.Option value="danger" label="Danger" />
                <SelectInput.Option value="warning" label="Warning" />
              </SelectInput>

              <SelectInput
                label="Size"
                value={props.size}
                onChange={(value) => setProps({ ...props, size: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="xs" label="xs" />
                <SelectInput.Option value="sm" label="sm" />
                <SelectInput.Option value="md" label="md" />
                <SelectInput.Option value="lg" label="lg" />
                <SelectInput.Option value="xl" label="xl" />
                <SelectInput.Option value="2xl" label="2xl" />
              </SelectInput>

              <SelectInput
                label="Radius"
                value={props.radius}
                onChange={(value) => setProps({ ...props, radius: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="none" label="none" />
                <SelectInput.Option value="sm" label="sm" />
                <SelectInput.Option value="md" label="md" />
                <SelectInput.Option value="lg" label="lg" />
                <SelectInput.Option value="xl" label="xl" />
                <SelectInput.Option value="full" label="full" />
              </SelectInput>
            </PlaygroundPreview.Section>

            <PlaygroundPreview.Section title="States">
              <Switch
                label="Disabled"
                checked={props.disabled}
                onChange={(checked) =>
                  setProps({ ...props, disabled: checked })
                }
                classNames={switchClasses}
              />

              <Switch
                label="Loading"
                checked={props.isLoading}
                onChange={(checked) =>
                  setProps({ ...props, isLoading: checked })
                }
                classNames={switchClasses}
              />

              <Switch
                label="Active"
                checked={props.active}
                onChange={(checked) => setProps({ ...props, active: checked })}
                classNames={switchClasses}
              />

              <Switch
                label="Full Width"
                checked={props.fullWidth}
                onChange={(checked) =>
                  setProps({ ...props, fullWidth: checked })
                }
                classNames={switchClasses}
              />
            </PlaygroundPreview.Section>
          </>
        }
      />
    );
  },

  renderStylesAPI: () => (
    <>
      <StylesAPI
        title="API"
        apiData={[
          {
            property: "children",
            description: "The content of the button",
            type: "ReactNode",
          },
          {
            property: "leftSection",
            description: "The left section of the button",
            type: "ReactNode",
          },
          {
            property: "rightSection",
            description: "The right section of the button",
            type: "ReactNode",
          },
          {
            property: "variant",
            description: "The variant of the button",
            type: createTypeOptions([
              "filled",
              "outline",
              "subtle",
              "unstyled",
            ]),
            default: "filled",
          },
          {
            property: "intent",
            description: "The intent of the button",
            type: createTypeOptions([
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
            ]),
          },
          {
            property: "size",
            description: "The size of the button",
            type: createTypeOptions(["xs", "sm", "md", "lg", "xl", "2xl"]),
            default: "sm",
          },
          {
            property: "radius",
            description: "The radius of the button",
            type: createTypeOptions(["none", "sm", "md", "lg", "xl", "full"]),
            default: "md",
          },
          {
            property: "disabled",
            description: "Whether the button is disabled",
            type: "boolean",
            default: "false",
          },
          {
            property: "isLoading",
            description: "Whether the button is loading (disables the button)",
            type: "boolean",
            default: "false",
          },
          {
            property: "fullWidth",
            description: "Whether the button is full width of the container",
            type: "boolean",
            default: "false",
          },
          {
            property: "active",
            description: "Whether the button is active",
            type: "boolean",
            default: "false",
          },
        ]}
      />
      <StylesAPI
        title="Styles API"
        apiData={[
          {
            property: "classNames",
            description: "Object of class names to override component styles",
            type: "object",
            default: "{}",
          },
          {
            property: "classNames.container",
            description: "Root button element",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.label",
            description: "Button label text wrapper",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.leftSection",
            description: "Left icon/element wrapper",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.rightSection",
            description: "Right icon/element wrapper",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.active",
            description: "Applied when button is active",
            type: "string",
            default: "-",
          },
        ]}
      />
    </>
  ),
};

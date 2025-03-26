import React from "react";
import { Text, Switch, RadioGroup, Tabs, Alert } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  IconHome,
  IconUser,
  IconSettings,
  IconBell,
  IconAlertCircle,
} from "@tabler/icons-react";
import { switchClasses } from "./index";

export const tabsConfig: ComponentConfigType = {
  defaultProps: {
    defaultValue: "tab1",
    variant: "default",
    size: "md",
    orientation: "horizontal",
    position: "top",
    withBorder: true,
    fullWidth: false,
    grow: false,
    showIcon: true,
    disabled: false,
  },

  renderComponent: (props, setProps) => {
    const handleTabChange = (value: string) => {
      setProps({ ...props, defaultValue: value });
    };

    return (
      <div className="w-full">
        <Tabs
          defaultValue={props.defaultValue}
          onChange={handleTabChange}
          orientation={props.orientation}
          variant={props.variant}
          size={props.size}
          position={props.position}
          withBorder={props.withBorder}
          fullWidth={props.fullWidth}
          grow={props.grow}
        >
          <Tabs.List>
            <Tabs.Tab
              value="tab1"
              label="Home"
              disabled={props.disabled}
              leftSection={props.showIcon ? <IconHome size={16} /> : undefined}
            />
            <Tabs.Tab
              value="tab2"
              label="Profile"
              disabled={props.disabled}
              leftSection={props.showIcon ? <IconUser size={16} /> : undefined}
            />
            <Tabs.Tab
              value="tab3"
              label="Settings"
              disabled={props.disabled}
              leftSection={
                props.showIcon ? <IconSettings size={16} /> : undefined
              }
            />
            <Tabs.Tab
              value="tab4"
              label="Notifications"
              disabled={props.disabled}
              leftSection={props.showIcon ? <IconBell size={16} /> : undefined}
            />
          </Tabs.List>

          <Tabs.Panel value="tab1">
            <Text>Home Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Home tab. You can put any content
              here.
            </Text>
          </Tabs.Panel>

          <Tabs.Panel value="tab2">
            <Text>Profile Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Profile tab. You can put any content
              here.
            </Text>
          </Tabs.Panel>

          <Tabs.Panel value="tab3">
            <Text>Settings Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Settings tab. You can put any content
              here.
            </Text>
          </Tabs.Panel>

          <Tabs.Panel value="tab4">
            <Text>Notifications Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Notifications tab. You can put any
              content here.
            </Text>
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  },

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
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="default" label="Default" />
            <RadioGroup.Item value="outline" label="Outline" />
            <RadioGroup.Item value="pills" label="Pills" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <RadioGroup
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
          >
            <RadioGroup.Item value="xs" label="Extra Small" />
            <RadioGroup.Item value="sm" label="Small" />
            <RadioGroup.Item value="md" label="Medium" />
            <RadioGroup.Item value="lg" label="Large" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Orientation
          </Text>
          <RadioGroup
            value={props.orientation}
            onChange={(value) => setProps({ ...props, orientation: value })}
          >
            <RadioGroup.Item value="horizontal" label="Horizontal" />
            <RadioGroup.Item value="vertical" label="Vertical" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Position
          </Text>
          <RadioGroup
            value={props.position}
            onChange={(value) => setProps({ ...props, position: value })}
          >
            <RadioGroup.Item value="top" label="Top" />
            <RadioGroup.Item value="bottom" label="Bottom" />
            <RadioGroup.Item value="left" label="Left" />
            <RadioGroup.Item value="right" label="Right" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Show Icon"
            checked={props.showIcon}
            onChange={(checked) => setProps({ ...props, showIcon: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="With Border"
            checked={props.withBorder}
            onChange={(checked) => setProps({ ...props, withBorder: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Full Width"
            checked={props.fullWidth}
            onChange={(checked) => setProps({ ...props, fullWidth: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Grow"
            checked={props.grow}
            onChange={(checked) => setProps({ ...props, grow: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  renderError: () => (
    <Alert color="error" icon={<IconAlertCircle />} closeable={false}>
      <Alert.Title>No backward compatibility is provided</Alert.Title>
      <Alert.Description>
        This component has been updated with a new structure using Tabs.List,
        Tabs.Tab, and Tabs.Panel. Please check your existing implementations to
        ensure compatibility on newer versions.
      </Alert.Description>
    </Alert>
  ),

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        defaultValue: {
          type: "string",
          required: true,
          description: "Default active tab value (for uncontrolled component)",
        },
        value: {
          type: "string",
          description: "Active tab value (for controlled component)",
        },
        onChange: {
          type: "function",
          description: "Function called when active tab changes",
        },
        variant: {
          type: "string",
          default: "default",
          description: "Visual style variant of the tabs",
          possibleValues: ["default", "outline", "pills"],
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the tabs",
          possibleValues: ["xs", "sm", "md", "lg"],
        },
        orientation: {
          type: "string",
          default: "horizontal",
          description: "Layout orientation of the tabs",
          possibleValues: ["horizontal", "vertical"],
        },
        position: {
          type: "string",
          default: "top",
          description: "Position of tabs relative to content",
          possibleValues: ["top", "bottom", "left", "right"],
        },
        withBorder: {
          type: "boolean",
          default: true,
          description: "Whether to show borders around tabs and content",
        },
        fullWidth: {
          type: "boolean",
          default: false,
          description: "Whether tabs should take full width of container",
        },
        grow: {
          type: "boolean",
          default: false,
          description: "Whether tab items should grow to fill available space",
        },
        children: {
          type: "ReactNode",
          required: true,
          description: "Should include Tabs.List and Tabs.Panel components",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the tabs container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for tabs elements",
          properties: {
            root: {
              type: "string",
              description: "CSS class for the tabs container",
            },
            list: {
              type: "string",
              description: "CSS class for the tabs list element",
            },
            panel: {
              type: "string",
              description: "CSS class for the tab panels",
            },
            tab: {
              type: "string",
              description: "CSS class for individual tab items",
            },
            tabActive: {
              type: "string",
              description: "CSS class for the active tab",
            },
            tabIcon: {
              type: "string",
              description: "CSS class for tab icons",
            },
          },
        },
      }}
    />
  ),
};

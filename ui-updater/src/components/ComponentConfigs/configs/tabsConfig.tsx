import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  Tabs,
  Alert,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  IconHome,
  IconUser,
  IconSettings,
  IconBell,
  IconAlertCircle,
} from "@tabler/icons-react";

const switchClasses = {
  track: "bg-dark-700",
  thumb: "bg-white",
  checked: {
    track: "bg-blue-600",
    thumb: "bg-white",
  },
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-700",
  option: "hover:bg-dark-600",
  selectedOption: "bg-dark-600",
};

export const tabsConfig: ComponentConfigType = {
  defaultProps: {
    defaultValue: "tab1",
    variant: "default",
    size: "md",
    orientation: "horizontal",
    showIcon: true,
    withBorder: true,
    fullWidth: false,
    grow: false,
    position: "top",
    disabled: false,
  },

  renderComponent: (props, setProps) => {
    const handleTabChange = (value: string) => {
      setProps({ ...props, defaultValue: value });
    };

    return (
      <div className="w-full">
        <Tabs defaultValue={props.defaultValue} onChange={handleTabChange}>
          <Tabs.Item
            value="tab1"
            disabled={props.disabled}
            icon={props.showIcon ? <IconHome size={16} /> : undefined}
            label="Home"
          >
            <Text>Home Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Home tab. You can put any content
              here.
            </Text>
          </Tabs.Item>
          <Tabs.Item
            value="tab2"
            disabled={props.disabled}
            icon={props.showIcon ? <IconUser size={16} /> : undefined}
            label="Profile"
          >
            <Text>Profile Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Profile tab. You can put any content
              here.
            </Text>
          </Tabs.Item>
          <Tabs.Item
            value="tab3"
            disabled={props.disabled}
            icon={props.showIcon ? <IconSettings size={16} /> : undefined}
            label="Settings"
          >
            <Text>Settings Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Settings tab. You can put any content
              here.
            </Text>
          </Tabs.Item>
          <Tabs.Item
            value="tab4"
            disabled={props.disabled}
            icon={props.showIcon ? <IconBell size={16} /> : undefined}
            label="Notifications"
          >
            <Text>Notifications Tab Content</Text>
            <Text className="text-gray-500 mt-2 text-sm">
              This is the content for the Notifications tab. You can put any
              content here.
            </Text>
          </Tabs.Item>
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
        <Text
          size="md"
          weight="bold"
          align="center"
          className="border-b border-dark-500 pb-1"
        >
          Tabs Properties
        </Text>

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
    <Alert variant="warning" icon={<IconAlertCircle />}>
      <Alert.Title>Warning</Alert.Title>
      <Alert.Description>
        This component is a little buggy when previewing. Indicator under a tab
        can malfunction if icon is taken out after it has rendered.
        <br />
        <b>Fix is being worked on and will be available in the next update.</b>
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

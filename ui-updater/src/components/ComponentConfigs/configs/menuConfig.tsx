import React from "react";
import {
  Text,
  Menu,
  Button,
  NumberInput,
  Switch,
  RadioGroup,
  SelectInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

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

export const menuConfig: ComponentConfigType = {
  defaultProps: {
    trigger: "hover",
    position: "bottom",
    offset: 5,
    withArrow: true,
    shadow: true,
    itemGap: 8,
    showItems: true,
    closeOnItemClick: true,
    disabled: false,
  },

  renderComponent: (props: any, setProps: (props: any) => void) => {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <Menu
          trigger={props.trigger}
          position={props.position}
          offset={props.offset}
        >
          <Menu.Target>
            <Button>Open Menu</Button>
          </Menu.Target>

          {props.showItems && (
            <Menu.Dropdown>
              <div className="px-2 py-1.5 text-sm text-gray-400 border-b border-dark-600">
                Menu Items
              </div>

              <div className="py-1">
                <Menu.Item
                  icon={<span className="text-blue-500">•</span>}
                  className="mt-1"
                >
                  Profile
                </Menu.Item>

                <Menu.Item
                  icon={<span className="text-green-500">•</span>}
                  className="mt-1"
                >
                  Settings
                </Menu.Item>

                <Menu.Item
                  icon={<span className="text-yellow-500">•</span>}
                  className="mt-1"
                >
                  Messages
                </Menu.Item>

                <Menu.Divider className="my-1" />

                <Menu.Item
                  icon={<span className="text-red-500">•</span>}
                  className="text-red-400"
                >
                  Logout
                </Menu.Item>
              </div>
            </Menu.Dropdown>
          )}
        </Menu>
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
          Menu Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Trigger
          </Text>
          <RadioGroup
            value={props.trigger}
            onChange={(value) => setProps({ ...props, trigger: value })}
          >
            <RadioGroup.Item value="hover" label="Hover" />
            <RadioGroup.Item value="click" label="Click" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Position
          </Text>
          <SelectInput
            options={[
              { value: "top", label: "Top" },
              { value: "bottom", label: "Bottom" },
              { value: "left", label: "Left" },
              { value: "right", label: "Right" },
            ]}
            value={props.position}
            onChange={(value) => setProps({ ...props, position: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Offset
          </Text>
          <NumberInput
            value={props.offset}
            onChange={(value) => setProps({ ...props, offset: value })}
            min={0}
            max={20}
            className="w-full"
            classNames={{
              input: "bg-dark-800",
              incrementButton: "bg-dark-800",
              decrementButton: "bg-dark-800",
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Show Items"
            checked={props.showItems}
            onChange={(checked) => setProps({ ...props, showItems: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Close On Item Click"
            checked={props.closeOnItemClick}
            onChange={(checked) =>
              setProps({ ...props, closeOnItemClick: checked })
            }
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

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        children: {
          type: "ReactNode",
          required: true,
          description:
            "Content of the menu, should include Menu.Trigger and Menu.Content",
        },
        trigger: {
          type: "string",
          default: "click",
          description: "Determines when the menu opens",
          possibleValues: ["click", "hover"],
        },
        position: {
          type: "string",
          default: "bottom",
          description: "Position of the menu relative to the trigger element",
          possibleValues: ["top", "bottom", "left", "right"],
        },
        offset: {
          type: "number",
          default: 5,
          description: "Distance in pixels between trigger and dropdown",
        },
        withArrow: {
          type: "boolean",
          default: false,
          description:
            "Determines if the menu has an arrow pointing to the trigger",
        },
        shadow: {
          type: "boolean",
          default: true,
          description: "Determines if the menu has a shadow",
        },
        closeOnItemClick: {
          type: "boolean",
          default: true,
          description: "Determines if the menu closes when an item is clicked",
        },
        disabled: {
          type: "boolean",
          default: false,
          description: "Disables the menu trigger",
        },
        open: {
          type: "boolean",
          description:
            "Controls the open state of the menu (for controlled component usage)",
        },
        onOpenChange: {
          type: "function",
          description: "Called when the menu open state changes",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the menu container",
        },
        classNames: {
          type: "object",
          description: "Additional CSS classes to apply to menu subcomponents",
          properties: {
            container: {
              type: "string",
              description: "CSS class for the menu container",
            },
            trigger: {
              type: "string",
              description: "CSS class for the menu trigger wrapper",
            },
            content: {
              type: "string",
              description: "CSS class for the dropdown content",
            },
            arrow: {
              type: "string",
              description: "CSS class for the arrow element",
            },
            item: {
              type: "string",
              description: "CSS class for menu items",
            },
          },
        },
      }}
    />
  ),
};

import React from "react";
import {
  Text,
  Menu,
  Button,
  NumberInput,
  Switch,
  SelectInput,
  ButtonGroup,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
  numberInputClass,
} from "./index";
import { IconSettings, IconUser, IconLogout } from "@tabler/icons-react";

const positions = [
  "bottom",
  "top",
  "left",
  "right",
  "bottom-start",
  "bottom-end",
  "top-start",
  "top-end",
  "left-start",
  "left-end",
  "right-start",
  "right-end",
];

export const menuConfig: ComponentConfigType = {
  defaultProps: {
    trigger: "hover",
    position: "bottom",
    offset: 5,
    withArrow: true,
    shadow: true,
    showItems: true,
    closeOnItemClick: true,
    closeOnEscape: true,
    closeDelay: 150,
    openDelay: 0,
    disabled: false,
    keepMounted: false,
  },

  renderComponent: (props: any, setProps: (props: any) => void) => {
    const positions = [
      "bottom",
      "top",
      "left",
      "right",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "left-start",
      "left-end",
      "right-start",
      "right-end",
    ];

    const triggers = ["click", "hover", "click-hover"];

    return (
      <div className="flex items-center justify-center h-full p-8">
        <Menu
          trigger={props.trigger}
          position={props.position}
          offset={props.offset}
          withArrow={props.withArrow}
          shadow={props.shadow}
          closeOnItemClick={props.closeOnItemClick}
          closeOnEscape={props.closeOnEscape}
          closeDelay={props.closeDelay}
          openDelay={props.openDelay}
          disabled={props.disabled}
          keepMounted={props.keepMounted}
          transitionProps={
            props.transition
              ? {
                  transition: props.transition,
                  duration: props.transitionDuration || 150,
                }
              : undefined
          }
        >
          <Menu.Target>
            <Button disabled={props.disabled}>Open Menu</Button>
          </Menu.Target>

          {props.showItems && (
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconUser size={14} />} className="mt-1">
                Profile
              </Menu.Item>
              <Menu.Item icon={<IconSettings size={14} />} className="mt-1">
                Settings
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                icon={<IconLogout size={14} />}
                color="red"
                className="mt-1"
              >
                Logout
              </Menu.Item>
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
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Position
          </Text>
          <SelectInput
            value={props.position}
            onChange={(value) => setProps({ ...props, position: value })}
            classNames={selectInputClasses}
          >
            {positions.map((position) => (
              <SelectInput.Option
                key={position}
                value={position}
                label={position}
              />
            ))}
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Trigger
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, trigger: "click" })}
              className={`${buttonClass} ${
                props.trigger === "click" && activeButtonClass
              }`}
            >
              Click
            </Button>
            <Button
              onClick={() => setProps({ ...props, trigger: "hover" })}
              className={`${buttonClass} ${
                props.trigger === "hover" && activeButtonClass
              }`}
            >
              Hover
            </Button>
            <Button
              onClick={() => setProps({ ...props, trigger: "click-hover" })}
              className={`${buttonClass} ${
                props.trigger === "click-hover" && activeButtonClass
              }`}
            >
              Click & Hover
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Transition
          </Text>
          <SelectInput
            value={props.transition}
            onChange={(value) => setProps({ ...props, transition: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="" label="None" />
            <SelectInput.Option value="fade" label="Fade" />
            <SelectInput.Option value="scale" label="Scale" />
            <SelectInput.Option value="slide-down" label="Slide Down" />
            <SelectInput.Option value="slide-up" label="Slide Up" />
            <SelectInput.Option value="rotate-left" label="Rotate Left" />
            <SelectInput.Option value="rotate-right" label="Rotate Right" />
          </SelectInput>
        </div>

        {props.transition && (
          <div className="flex flex-col gap-1">
            <Text size="sm" weight="bold">
              Transition Duration (ms)
            </Text>
            <NumberInput
              value={props.transitionDuration || 150}
              onChange={(value) =>
                setProps({ ...props, transitionDuration: value })
              }
              min={50}
              max={500}
              step={10}
              classNames={numberInputClass}
            />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Offset
          </Text>
          <NumberInput
            value={props.offset}
            onChange={(value) => setProps({ ...props, offset: value })}
            min={0}
            max={20}
            classNames={numberInputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Delay (ms)
          </Text>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Text size="xs" className="mb-1">
                Open Delay
              </Text>
              <NumberInput
                value={props.openDelay}
                onChange={(value) => setProps({ ...props, openDelay: value })}
                min={0}
                max={1000}
                step={50}
                classNames={numberInputClass}
              />
            </div>
            <div>
              <Text size="xs" className="mb-1">
                Close Delay
              </Text>
              <NumberInput
                value={props.closeDelay}
                onChange={(value) => setProps({ ...props, closeDelay: value })}
                min={0}
                max={1000}
                step={50}
                classNames={numberInputClass}
              />
            </div>
          </div>
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
            label="With Arrow"
            checked={props.withArrow}
            onChange={(checked) => setProps({ ...props, withArrow: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Shadow"
            checked={props.shadow}
            onChange={(checked) => setProps({ ...props, shadow: checked })}
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
            label="Close On Escape"
            checked={props.closeOnEscape}
            onChange={(checked) =>
              setProps({ ...props, closeOnEscape: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Keep Mounted"
            checked={props.keepMounted}
            onChange={(checked) => setProps({ ...props, keepMounted: checked })}
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
};

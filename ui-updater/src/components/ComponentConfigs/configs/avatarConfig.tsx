import React from "react";
import {
  Text,
  RadioGroup,
  Switch,
  Avatar,
  SelectInput,
  ButtonGroup,
  Button,
} from "@/components/ui";
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

export const avatarConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    shape: "circle",
    showBadge: false,
    badge: {
      position: "top-right",
      color: "red",
    },
  },

  renderComponent: (props) => (
    <Avatar
      src="https://github.com/shadcn.png"
      size={props.size}
      shape={props.shape}
      color={props.color}
      badge={
        props.showBadge && {
          position: props.badge.position,
          color: props.badge.color,
        }
      }
    />
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
          Avatar Properties
        </Text>

        <div className="flex flex-col gap-1">
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
            Shape
          </Text>
          <ButtonGroup
            children={[
              <Button
                key="circle"
                variant="filled"
                size="sm"
                onClick={() => setProps({ ...props, shape: "circle" })}
                className={`${props.shape === "circle" && "bg-dark-500"}`}
              >
                Circle
              </Button>,
              <Button
                key="rounded"
                variant="filled"
                size="sm"
                onClick={() => setProps({ ...props, shape: "rounded" })}
                className={`${props.shape === "rounded" && "bg-dark-500"}`}
              >
                Rounded
              </Button>,
            ]}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Badge
          </Text>
          <div className="flex flex-col gap-2">
            <Switch
              label="Show Badge"
              checked={props.showBadge}
              onChange={(checked) => setProps({ ...props, showBadge: checked })}
              classNames={switchClasses}
            />
            <SelectInput
              options={[
                { value: "top-right", label: "Top Right" },
                { value: "top-left", label: "Top Left" },
                { value: "bottom-right", label: "Bottom Right" },
                { value: "bottom-left", label: "Bottom Left" },
              ]}
              value={props.badge.position}
              onChange={(value) =>
                setProps({
                  ...props,
                  badge: { ...props.badge, position: value },
                })
              }
              classNames={selectInputClasses}
            />
          </div>
        </div>
      </div>
    );
  },
};

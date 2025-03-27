import React from "react";
import { Text, ColorSwatch, Switch, SelectInput } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses } from "./index";
import { IconCheck } from "@tabler/icons-react";

export const colorSwatchConfig: ComponentConfigType = {
  defaultProps: {
    color: "#3b82f6",
    size: "md",
    radius: "md",
    shadow: "none",
    showIcon: false,
  },

  renderComponent: (props) => (
    <ColorSwatch
      color={props.color}
      size={props.size}
      radius={props.radius}
      shadow={props.shadow}
    >
      {props.showIcon && (
        <IconCheck size={16} className="text-white drop-shadow-lg" />
      )}
    </ColorSwatch>
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
          <div className="flex items-center justify-center gap-2">
            {[
              "#3b82f6",
              "#ef4444",
              "#22c55e",
              "#f59e0b",
              "#8b5cf6",
              "rgba(234, 22, 174, 0.5)",
            ].map((color, index) => (
              <ColorSwatch
                color={color}
                size="md"
                key={index}
                onClick={() => setProps({ ...props, color })}
                aria-label={`Set color to ${color}`}
              >
                {color === props.color && <IconCheck size={16} />}
              </ColorSwatch>
            ))}
          </div>
        </div>

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
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="full" label="full" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="With Shadow"
            checked={props.withShadow}
            onChange={(checked) => setProps({ ...props, withShadow: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Icon"
            checked={props.showIcon}
            onChange={(checked) => setProps({ ...props, showIcon: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        color: {
          type: "string",
          required: true,
          description: "Color value in hex, rgb, or rgba format",
        },
        size: {
          type: "string",
          description: "Controls swatch size",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
          default: "md",
        },
        withShadow: {
          type: "boolean",
          description:
            "Determines whether inner shadow should be added to the swatch",
          default: true,
        },
        radius: {
          type: "string",
          description: "Border radius of the swatch",
          possibleValues: ["none", "sm", "md", "lg", "full"],
          default: "md",
        },
        onClick: {
          type: "function",
          description: "Function called when the swatch is clicked",
        },
        children: {
          type: "ReactNode",
          description: "Content to render inside the swatch (like icons)",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the swatch",
        },
        classNames: {
          type: "object",
          description:
            "Custom class names for different parts of the component",
          properties: {
            container: {
              type: "string",
              description: "Class for the container element",
            },
            color: {
              type: "string",
              description: "Class for the color element",
            },
            content: {
              type: "string",
              description: "Class for the content wrapper",
            },
          },
        },
      }}
    />
  ),
};

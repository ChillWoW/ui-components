import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  Tooltip,
  Button,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { IconInfoCircle } from "@tabler/icons-react";
import { switchClasses } from "./index";

export const tooltipConfig: ComponentConfigType = {
  defaultProps: {
    position: "top",
    text: "This is a tooltip",
    color: "dark",
    radius: "md",
    withArrow: true,
    arrowSize: 4,
    offset: 8,
    multiline: false,
    width: 200,
    trigger: "hover",
    delay: 300,
    disabled: false,
  },

  renderComponent: (props) => (
    <div className="w-full flex justify-center items-center min-h-[150px]">
      <Tooltip
        position={props.position}
        withArrow={props.withArrow}
        delay={props.delay}
        label={props.text}
      >
        <Button variant="filled" leftSection={<IconInfoCircle size={16} />}>
          Hover me
        </Button>
      </Tooltip>
    </div>
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
          Tooltip Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Position
          </Text>
          <RadioGroup
            value={props.position}
            onChange={(value) => setProps({ ...props, position: value })}
          >
            <RadioGroup.Item value="top" label="Top" />
            <RadioGroup.Item value="right" label="Right" />
            <RadioGroup.Item value="bottom" label="Bottom" />
            <RadioGroup.Item value="left" label="Left" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="With Arrow"
            checked={props.withArrow}
            onChange={(checked) => setProps({ ...props, withArrow: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        text: {
          type: "string",
          required: true,
          description: "Content to display inside the tooltip",
        },
        position: {
          type: "string",
          default: "top",
          description: "Position of the tooltip relative to target element",
          possibleValues: ["top", "right", "bottom", "left"],
        },
        color: {
          type: "string",
          default: "dark",
          description: "Color theme for the tooltip",
        },
        radius: {
          type: "string",
          default: "md",
          description: "Border radius of the tooltip",
          possibleValues: ["none", "xs", "sm", "md", "lg", "xl", "full"],
        },
        withArrow: {
          type: "boolean",
          default: "true",
          description:
            "Whether to show an arrow pointing to the target element",
        },
        arrowSize: {
          type: "number",
          default: "4",
          description: "Size of the tooltip arrow in pixels",
        },
        offset: {
          type: "number",
          default: "8",
          description: "Distance between tooltip and target element in pixels",
        },
        multiline: {
          type: "boolean",
          default: "false",
          description: "Whether tooltip content can wrap to multiple lines",
        },
        width: {
          type: "number",
          description: "Width of the tooltip in pixels (used with multiline)",
        },
        trigger: {
          type: "string",
          default: "hover",
          description: "Event that will show the tooltip",
          possibleValues: ["hover", "click", "focus"],
        },
        delay: {
          type: "number",
          default: "300",
          description: "Delay before showing the tooltip in milliseconds",
        },
        disabled: {
          type: "boolean",
          default: "false",
          description: "Whether the tooltip is disabled",
        },
        children: {
          type: "ReactNode",
          required: true,
          description: "Target element that will trigger the tooltip",
        },
        className: {
          type: "string",
          description: "Additional CSS classes for the tooltip wrapper",
        },
        tooltipClassName: {
          type: "string",
          description: "Additional CSS classes for the tooltip content",
        },
        wrapperProps: {
          type: "object",
          description: "Props to pass to the tooltip wrapper element",
        },
      }}
    />
  ),
};

import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  Timeline,
} from "@/components/ui";
import { IconCircle, IconCheck, IconX } from "@tabler/icons-react";
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

export const timelineConfig: ComponentConfigType = {
  defaultProps: {
    orientation: "vertical",
    align: "left",
    bulletSize: "md",
    active: 1,
    lineWidth: 2,
    reverseActive: false,
    color: "blue",
    bulletVariant: "icon",
    showConnectingLine: true,
  },

  renderComponent: (props) => {
    // Generate timeline items with different bullet types for demonstration
    const getTimelineItems = () => {
      const items = [
        {
          title: "Order placed",
          description: "Your order has been received and is being processed.",
          date: "Jan 3, 2023",
          icon:
            props.bulletVariant === "icon" ? (
              <IconCheck size={16} />
            ) : undefined,
        },
        {
          title: "Processing",
          description: "Your order is currently being prepared for shipping.",
          date: "Jan 5, 2023",
          icon:
            props.bulletVariant === "icon" ? (
              <IconCircle size={16} />
            ) : undefined,
        },
        {
          title: "Shipped",
          description:
            "Your order has been shipped and is en route to delivery.",
          date: "Jan 7, 2023",
          icon:
            props.bulletVariant === "icon" ? (
              <IconCheck size={16} />
            ) : undefined,
        },
        {
          title: "Delivered",
          description:
            "Your order has been delivered to the specified address.",
          date: "Jan 10, 2023",
          icon:
            props.bulletVariant === "icon" ? (
              <IconCircle size={16} />
            ) : undefined,
        },
      ];

      return items;
    };

    return (
      <div className="w-full p-4">
        <Timeline
          align={props.align}
          bulletSize={props.bulletSize}
          active={props.active}
          lineWidth={props.lineWidth}
          reverseActive={props.reverseActive}
          color={props.color}
        >
          {getTimelineItems().map((item, index) => (
            <Timeline.Item key={index} title={item.title} icon={item.icon}>
              <div className="space-y-1">
                <Text size="sm" className="text-gray-400">
                  {item.date}
                </Text>
                <Text size="sm">{item.description}</Text>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
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
          Timeline Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Alignment
          </Text>
          <RadioGroup
            value={props.align}
            onChange={(value) => setProps({ ...props, align: value })}
          >
            <RadioGroup.Item value="left" label="Left" />
            <RadioGroup.Item value="right" label="Right" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Bullet Size
          </Text>
          <SelectInput
            options={[
              { value: "xs", label: "Extra Small" },
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
              { value: "xl", label: "Extra Large" },
            ]}
            value={props.bulletSize}
            onChange={(value) => setProps({ ...props, bulletSize: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Color
          </Text>
          <SelectInput
            options={[
              { value: "blue", label: "Blue" },
              { value: "red", label: "Red" },
              { value: "green", label: "Green" },
              { value: "yellow", label: "Yellow" },
              { value: "gray", label: "Gray" },
            ]}
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Active Step
          </Text>
          <SelectInput
            options={[
              { value: "0", label: "Step 1" },
              { value: "1", label: "Step 2" },
              { value: "2", label: "Step 3" },
              { value: "3", label: "Step 4" },
              { value: "4", label: "All Steps" },
            ]}
            value={props.active}
            onChange={(value) => setProps({ ...props, active: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Reverse Active"
            checked={props.reverseActive}
            onChange={(checked) =>
              setProps({ ...props, reverseActive: checked })
            }
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        orientation: {
          type: "string",
          default: "vertical",
          description: "Direction of the timeline",
          possibleValues: ["vertical", "horizontal"],
        },
        align: {
          type: "string",
          default: "left",
          description: "Alignment of the timeline items",
          possibleValues: ["left", "right"],
        },
        bulletSize: {
          type: "string",
          default: "md",
          description: "Size of the timeline bullets",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        active: {
          type: "number",
          default: "1",
          description: "Index of the active timeline item (starting from 0)",
        },
        lineWidth: {
          type: "number",
          default: "2",
          description: "Width of the timeline connecting line in pixels",
        },
        reverseActive: {
          type: "boolean",
          default: "false",
          description:
            "If true, items after active are highlighted instead of before",
        },
        color: {
          type: "string",
          default: "blue",
          description: "Color theme for the timeline bullets and lines",
        },
        bulletVariant: {
          type: "string",
          default: "filled",
          description: "Style variant for timeline bullets",
          possibleValues: ["filled", "outline", "icon"],
        },
        showConnectingLine: {
          type: "boolean",
          default: "true",
          description:
            "Whether to display the connecting line between timeline items",
        },
        children: {
          type: "ReactNode",
          required: true,
          description: "Timeline.Item components to render within the timeline",
        },
        className: {
          type: "string",
          description: "Additional CSS classes for the timeline container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for timeline elements",
        },
      }}
    />
  ),
};

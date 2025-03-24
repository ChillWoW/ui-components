import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  Timeline,
  Slider,
  NumberInput,
  ButtonGroup,
  Button,
} from "@/components/ui";
import {
  IconCircle,
  IconCheck,
  IconX,
  IconPlus,
  IconArrowRight,
  IconAlertTriangle,
  IconBrandGithub,
} from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  activeButtonClass,
  buttonClass,
} from "./index";

export const timelineConfig: ComponentConfigType = {
  defaultProps: {
    align: "left",
    active: 1,
    bulletSize: 20,
    lineWidth: 2,
    lineStyle: "solid",
    reverseActive: false,
    color: "blue",
    bulletShape: "circle",
    compact: false,
    bulletVariant: "icon",
  },

  renderComponent: (props) => {
    // Generate timeline items with different bullet types for demonstration
    const getTimelineItems = () => {
      const icons = {
        check: <IconCheck size={16} />,
        circle: <IconCircle size={16} />,
        x: <IconX size={16} />,
        plus: <IconPlus size={16} />,
        arrow: <IconArrowRight size={16} />,
        alert: <IconAlertTriangle size={16} />,
        github: <IconBrandGithub size={16} />,
      };

      const items = [
        {
          title: "Order placed",
          description: "Your order has been received and is being processed.",
          date: "Jan 3, 2023",
          icon: props.bulletVariant === "icon" ? icons.check : undefined,
        },
        {
          title: "Processing",
          description: "Your order is currently being prepared for shipping.",
          date: "Jan 5, 2023",
          icon: props.bulletVariant === "icon" ? icons.circle : undefined,
        },
        {
          title: "Shipped",
          description:
            "Your order has been shipped and is en route to delivery.",
          date: "Jan 7, 2023",
          icon: props.bulletVariant === "icon" ? icons.arrow : undefined,
        },
        {
          title: "Delivered",
          description:
            "Your order has been delivered to the specified address.",
          date: "Jan 10, 2023",
          icon: props.bulletVariant === "icon" ? icons.check : undefined,
        },
      ];

      return items;
    };

    // Convert string color to hex/CSS color value
    const getColorValue = (colorName: string) => {
      const colorMap: Record<string, string> = {
        blue: "#3b82f6",
        red: "#ef4444",
        green: "#22c55e",
        yellow: "#eab308",
        gray: "#6b7280",
        purple: "#8b5cf6",
        indigo: "#6366f1",
        pink: "#ec4899",
      };

      return colorMap[colorName] || colorName;
    };

    return (
      <div className="w-full p-4">
        <Timeline
          align={props.align}
          bulletSize={Number(props.bulletSize)}
          active={Number(props.active)}
          lineWidth={Number(props.lineWidth)}
          lineStyle={props.lineStyle}
          reverseActive={props.reverseActive}
          color={getColorValue(props.color)}
          bulletShape={props.bulletShape}
          compact={props.compact}
        >
          {getTimelineItems().map((item, index) => (
            <Timeline.Item
              key={index}
              title={item.title}
              icon={item.icon}
              date={item.date}
              description={item.description}
            />
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
          <NumberInput
            min={10}
            max={40}
            value={props.bulletSize}
            onChange={(value) => setProps({ ...props, bulletSize: value })}
            className="bg-dark-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Bullet Shape
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, bulletShape: "circle" })}
              className={`${buttonClass} ${
                props.bulletShape === "circle" && activeButtonClass
              }`}
            >
              Circle
            </Button>
            <Button
              onClick={() => setProps({ ...props, bulletShape: "square" })}
              className={`${buttonClass} ${
                props.bulletShape === "square" && activeButtonClass
              }`}
            >
              Square
            </Button>
            <Button
              onClick={() => setProps({ ...props, bulletShape: "diamond" })}
              className={`${buttonClass} ${
                props.bulletShape === "diamond" && activeButtonClass
              }`}
            >
              Diamond
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Line Style
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, lineStyle: "solid" })}
              className={`${buttonClass} ${
                props.lineStyle === "solid" && activeButtonClass
              }`}
            >
              Solid
            </Button>
            <Button
              onClick={() => setProps({ ...props, lineStyle: "dashed" })}
              className={`${buttonClass} ${
                props.lineStyle === "dashed" && activeButtonClass
              }`}
            >
              Dashed
            </Button>
            <Button
              onClick={() => setProps({ ...props, lineStyle: "dotted" })}
              className={`${buttonClass} ${
                props.lineStyle === "dotted" && activeButtonClass
              }`}
            >
              Dotted
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Color
          </Text>
          <SelectInput
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="blue" label="Blue" />
            <SelectInput.Option value="red" label="Red" />
            <SelectInput.Option value="green" label="Green" />
            <SelectInput.Option value="yellow" label="Yellow" />
            <SelectInput.Option value="gray" label="Gray" />
            <SelectInput.Option value="purple" label="Purple" />
            <SelectInput.Option value="indigo" label="Indigo" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Active Step
          </Text>
          <SelectInput
            value={props.active}
            onChange={(value) => setProps({ ...props, active: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="0" label="Step 1" />
            <SelectInput.Option value="1" label="Step 2" />
            <SelectInput.Option value="2" label="Step 3" />
            <SelectInput.Option value="3" label="Step 4" />
            <SelectInput.Option value="4" label="All Steps" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Line Width
          </Text>
          <Slider
            min={1}
            max={5}
            step={1}
            value={props.lineWidth}
            onChange={(value) => setProps({ ...props, lineWidth: value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <div className="space-y-2">
            <Switch
              label="Reverse Active"
              checked={props.reverseActive}
              onChange={(checked) =>
                setProps({ ...props, reverseActive: checked })
              }
              classNames={switchClasses}
            />
            <Switch
              label="Compact Mode"
              checked={props.compact}
              onChange={(checked) => setProps({ ...props, compact: checked })}
              classNames={switchClasses}
            />
          </div>
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        align: {
          type: "string",
          default: "left",
          description: "Alignment of the timeline items",
          possibleValues: ["left", "right", "center"],
        },
        bulletSize: {
          type: "number",
          default: "20",
          description: "Size of the timeline bullets in pixels",
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
        lineStyle: {
          type: "string",
          default: "solid",
          description: "Style of the connecting line",
          possibleValues: ["solid", "dashed", "dotted"],
        },
        bulletShape: {
          type: "string",
          default: "circle",
          description: "Shape of the timeline bullets",
          possibleValues: ["circle", "square", "diamond"],
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
        compact: {
          type: "boolean",
          default: "false",
          description: "Enable compact mode with reduced spacing",
        },
        bulletVariant: {
          type: "string",
          default: "icon",
          description: "Style variant for timeline bullets",
          possibleValues: ["filled", "outline", "icon"],
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
        onClick: {
          type: "function",
          description: "Callback fired when a timeline item is clicked",
        },
        date: {
          type: "ReactNode",
          description: "Date display for a timeline item",
        },
        description: {
          type: "ReactNode",
          description: "Description text for a timeline item",
        },
        icon: {
          type: "ReactNode",
          description: "Icon to display in the timeline bullet",
        },
      }}
    />
  ),
};

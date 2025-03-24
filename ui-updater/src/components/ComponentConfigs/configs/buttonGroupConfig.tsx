import React from "react";
import {
  Button,
  ButtonRadius,
  ButtonSize,
} from "@/components/ui/Buttons/Button";
import {
  Text,
  SelectInput,
  RadioGroup,
  Switch,
  ButtonGroup,
  NumberInput,
  Slider,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  selectInputClasses,
  switchClasses,
  buttonClass,
  activeButtonClass,
  sliderClass,
} from "./index";

export const buttonGroupConfig: ComponentConfigType = {
  defaultProps: {
    size: "sm",
    orientation: "horizontal",
    disabled: false,
    radius: "md",
    fullWidth: false,
    spacing: 0,
  },

  renderComponent: (props, setProps) => (
    <ButtonGroup
      size={props.size as ButtonSize}
      disabled={props.disabled}
      orientation={props.orientation as "horizontal" | "vertical"}
      radius={props.radius as ButtonRadius}
      fullWidth={props.fullWidth}
      spacing={props.spacing}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
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
          Button Group Properties
        </Text>

        <div>
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

        <div>
          <Text size="sm" weight="bold">
            Radius
          </Text>
          <SelectInput
            value={props.radius}
            onChange={(value) => setProps({ ...props, radius: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="sm" label="Sm" />
            <SelectInput.Option value="md" label="Md" />
            <SelectInput.Option value="lg" label="Lg" />
            <SelectInput.Option value="full" label="Full" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Orientation
          </Text>
          <ButtonGroup>
            <Button
              onClick={() =>
                setProps({
                  ...props,
                  orientation: "horizontal",
                })
              }
              className={`${buttonClass} ${
                props.orientation === "horizontal" && activeButtonClass
              }`}
            >
              Horizontal
            </Button>
            <Button
              onClick={() => setProps({ ...props, orientation: "vertical" })}
              className={`${buttonClass} ${
                props.orientation === "vertical" && activeButtonClass
              }`}
            >
              Vertical
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Spacing
          </Text>
          <Slider
            value={props.spacing}
            onChange={(value) => setProps({ ...props, spacing: value })}
            classNames={sliderClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Full Width"
            checked={props.fullWidth}
            onChange={(checked) => setProps({ ...props, fullWidth: checked })}
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
          description: "Content of the button group",
        },
        variant: {
          type: "string",
          default: "filled",
          description: "Determines the variant of the button group",
          possibleValues: ["filled", "outline"],
        },
        size: {
          type: "string",
          default: "sm",
          description: "Determines the size of the button group",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        orientation: {
          type: "string",
          default: "horizontal",
          description: "Determines the orientation of the button group",
          possibleValues: ["horizontal", "vertical"],
        },
        disabled: {
          type: "boolean",
          description: "Determines if the button group is disabled",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the button group",
        },
      }}
    />
  ),
};

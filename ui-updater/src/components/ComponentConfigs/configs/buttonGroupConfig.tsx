import React from "react";
import { Button, ButtonSize } from "@/components/ui/Buttons/Button";
import {
  Text,
  SelectInput,
  RadioGroup,
  Switch,
  ButtonGroup,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

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

export const buttonGroupConfig: ComponentConfigType = {
  defaultProps: {
    size: "sm",
    orientation: "horizontal",
    disabled: false,
  },

  renderComponent: (props) => (
    <ButtonGroup
      size={props.size as ButtonSize}
      disabled={props.disabled}
      orientation={props.orientation as "horizontal" | "vertical"}
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
          Button Properties
        </Text>

        <div>
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
            Orientation
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, orientation: "horizontal" })}
              className={`${props.orientation === "horizontal" && "bg-dark-500"}`}
            >
              Horizontal
            </Button>
            <Button
              onClick={() => setProps({ ...props, orientation: "vertical" })}
              className={`${props.orientation === "vertical" && "bg-dark-500"}`}
            >
              Vertical
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Other
          </Text>
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

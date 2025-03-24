import React from "react";
import { Alert, AlertVariant } from "@/components/ui/Alert";
import {
  Text,
  RadioGroup,
  Switch,
  SelectInput,
  NumberInput,
  ButtonGroup,
  Button,
} from "@/components/ui";
import { IconAlertCircle } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
  numberInputClass,
} from "./index";

export const textConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    color: "white",
    weight: "normal",
    align: "left",
    italic: false,
    underline: false,
    dimmed: false,
    truncate: false,
    lineClamp: undefined,
    transform: "normal",
    spacing: undefined,
  },

  renderComponent: (props) => {
    return <Text {...props}>Hello World</Text>;
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
          Text Properties
        </Text>

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
            <SelectInput.Option value="2xl" label="2xl" />
            <SelectInput.Option value="3xl" label="3xl" />
          </SelectInput>
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
            <SelectInput.Option value="white" label="White" />
            <SelectInput.Option value="black" label="Black" />
            <SelectInput.Option value="gray" label="Gray" />
            <SelectInput.Option value="blue" label="Blue" />
            <SelectInput.Option value="red" label="Red" />
            <SelectInput.Option value="green" label="Green" />
            <SelectInput.Option value="yellow" label="Yellow" />
            <SelectInput.Option value="purple" label="Purple" />
            <SelectInput.Option value="pink" label="Pink" />
            <SelectInput.Option value="orange" label="Orange" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Weight
          </Text>
          <SelectInput
            value={props.weight}
            onChange={(value) => setProps({ ...props, weight: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="bold" label="Bold" />
            <SelectInput.Option value="semibold" label="Semibold" />
            <SelectInput.Option value="normal" label="Normal" />
            <SelectInput.Option value="light" label="Light" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Align
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, align: "left" })}
              className={`${buttonClass} ${
                props.align === "left" && activeButtonClass
              }`}
            >
              Left
            </Button>
            <Button
              onClick={() => setProps({ ...props, align: "center" })}
              className={`${buttonClass} ${
                props.align === "center" && activeButtonClass
              }`}
            >
              Center
            </Button>
            <Button
              onClick={() => setProps({ ...props, align: "right" })}
              className={`${buttonClass} ${
                props.align === "right" && activeButtonClass
              }`}
            >
              Right
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Transform
          </Text>
          <SelectInput
            value={props.transform}
            onChange={(value) => setProps({ ...props, transform: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="normal" label="Normal" />
            <SelectInput.Option value="uppercase" label="Uppercase" />
            <SelectInput.Option value="lowercase" label="Lowercase" />
            <SelectInput.Option value="capitalize" label="Capitalize" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Letter Spacing
          </Text>
          <NumberInput
            value={props.spacing as number}
            onChange={(value) => setProps({ ...props, spacing: value })}
            className="w-full"
            allowDecimals={true}
            min={-2}
            max={10}
            step={0.1}
            classNames={numberInputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Line Clamp
          </Text>
          <NumberInput
            value={props.lineClamp as number}
            onChange={(value) => setProps({ ...props, lineClamp: value })}
            className="w-full"
            min={0}
            max={10}
            allowEmpty={true}
            classNames={numberInputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Italic"
            checked={props.italic}
            onChange={(value) => setProps({ ...props, italic: value })}
            classNames={switchClasses}
          />
          <Switch
            label="Underline"
            checked={props.underline}
            onChange={(value) => setProps({ ...props, underline: value })}
            classNames={switchClasses}
          />
          <Switch
            label="Dimmed"
            checked={props.dimmed}
            onChange={(value) => setProps({ ...props, dimmed: value })}
            classNames={switchClasses}
          />
          <Switch
            label="Truncate"
            checked={props.truncate}
            onChange={(value) => setProps({ ...props, truncate: value })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        size: {
          type: "string | number",
          default: "md",
          description: "Determines the size of the text",
          possibleValues: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
            "2xl",
            "3xl",
            "number",
          ],
        },
        color: {
          type: "string",
          default: "white",
          description: "Determines the color of the text",
        },
        weight: {
          type: "string | number",
          default: "normal",
          description: "Determines the weight of the text",
          possibleValues: ["bold", "semibold", "normal", "light", "number"],
        },
        align: {
          type: "string",
          default: "left",
          description: "Determines the alignment of the text",
          possibleValues: ["left", "center", "right"],
        },
        italic: {
          type: "boolean",
          default: false,
          description: "Determines if the text is italic",
        },
        underline: {
          type: "boolean",
          default: false,
          description: "Determines if the text is underlined",
        },
        dimmed: {
          type: "boolean",
          default: false,
          description: "Applies a dimmed appearance to the text",
        },
        truncate: {
          type: "boolean",
          default: false,
          description: "Truncates text with an ellipsis if it exceeds one line",
        },
        lineClamp: {
          type: "number",
          description:
            "Limits text to a specific number of lines with ellipsis",
        },
        transform: {
          type: "string",
          default: "normal",
          description: "Controls text transformation",
          possibleValues: ["uppercase", "lowercase", "capitalize", "normal"],
        },
        spacing: {
          type: "string | number",
          description: "Controls letter spacing",
        },
        component: {
          type: "React.ElementType",
          default: "p",
          description: "HTML element to render the text as",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the text",
        },
        children: {
          type: "ReactNode",
          required: true,
          description: "Content of the text component",
        },
      }}
    />
  ),
};

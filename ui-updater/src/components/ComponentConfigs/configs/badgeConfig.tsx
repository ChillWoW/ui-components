import React from "react";
import { Button } from "@/components/ui/Buttons/Button";
import {
  Text,
  SelectInput,
  RadioGroup,
  Switch,
  Badge,
  ButtonGroup,
} from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  selectInputClasses,
  switchClasses,
  buttonClass,
  activeButtonClass,
} from "./index";

export const badgeConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    variant: "filled",
    shape: "rounded",
    leftSection: false,
    rightSection: false,
    asLink: false,
    color: "gray",
  },

  renderComponent: (props) => (
    <Badge
      size={props.size}
      variant={props.variant}
      shape={props.shape}
      leftSection={props.leftSection && <IconUser size={16} />}
      rightSection={props.rightSection && <IconUserCheck size={16} />}
      asLink={props.asLink}
      href={props.asLink && "https://chillwow.org"}
      target={props.asLink && "_blank"}
      color={props.color}
    >
      Sample Badge
    </Badge>
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
          Badge Properties
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

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Background color
          </Text>
          <SelectInput
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="gray" label="Gray" />
            <SelectInput.Option value="yellow" label="Yellow" />
            <SelectInput.Option value="orange" label="Orange" />
            <SelectInput.Option value="red" label="Red" />
            <SelectInput.Option value="pink" label="Pink" />
            <SelectInput.Option value="blue" label="Blue" />
            <SelectInput.Option value="green" label="Green" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="filled" label="Filled" />
            <RadioGroup.Item value="outline" label="Outline" />
            <RadioGroup.Item value="dot" label="Dot" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Shape
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, shape: "square" })}
              className={`${buttonClass} ${
                props.shape === "square" && activeButtonClass
              }`}
            >
              Square
            </Button>
            <Button
              onClick={() => setProps({ ...props, shape: "rounded" })}
              className={`${buttonClass} ${
                props.shape === "rounded" && activeButtonClass
              }`}
            >
              Rounded
            </Button>
            <Button
              onClick={() => setProps({ ...props, shape: "pill" })}
              className={`${buttonClass} ${
                props.shape === "pill" && activeButtonClass
              }`}
            >
              Pill
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Link"
            checked={props.asLink}
            onChange={(checked) => setProps({ ...props, asLink: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Left Section"
            checked={props.leftSection}
            onChange={(checked) => setProps({ ...props, leftSection: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Right Section"
            checked={props.rightSection}
            onChange={(checked) =>
              setProps({ ...props, rightSection: checked })
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
        children: {
          type: "ReactNode",
          required: true,
          description: "Content of the badge",
        },
        size: {
          type: "string",
          default: "md",
          description: "Determines the size of the badge",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        variant: {
          type: "string",
          default: "filled",
          description: "Determines the color and style of the badge",
          possibleValues: ["filled", "outline", "dot"],
        },
        shape: {
          type: "string",
          default: "rounded",
          description: "Determines the shape of the badge",
          possibleValues: ["rounded", "pill"],
        },
        leftSection: {
          type: "ReactNode",
          description: "Determines the left section of the badge",
        },
        rightSection: {
          type: "ReactNode",
          description: "Determines the right section of the badge",
        },
        color: {
          type: "string",
          description: "Determines the color of the badge (only for filled)",
        },
        asLink: {
          type: "boolean",
          description: "Determines if the badge is a link",
        },
        href: {
          type: "string",
          description: "Determines the href of the badge (link only)",
        },
        target: {
          type: "string",
          description: "Determines the target of the badge (link only)",
        },
        onClick: {
          type: "function",
          description: "Determines the function when clicking the badge",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the badge",
        },
        classNames: {
          type: "object",
          description: "Additional CSS classes to apply to the badge",
          properties: {
            container: {
              type: "string",
              description: "Container of the badge",
            },
            leftSection: {
              type: "string",
              description: "Left section of the badge",
            },
            rightSection: {
              type: "string",
              description: "Right section of the badge",
            },
            dot: {
              type: "string",
              description: "Dot of the badge",
            },
          },
        },
      }}
    />
  ),
};

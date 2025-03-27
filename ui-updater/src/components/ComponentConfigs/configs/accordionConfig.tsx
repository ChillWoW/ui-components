import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import {
  Text,
  RadioGroup,
  Switch,
  SelectInput,
  ButtonGroup,
  Button,
} from "@/components/ui";
import { IconApple, IconCarrot, IconLeaf } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
} from "./index";

const groceries = [
  {
    emoji: <IconApple size={16} />,
    value: "apples",
    label: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits.",
  },
  {
    emoji: <IconLeaf size={16} />,
    value: "broccoli",
    label: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins and minerals.",
  },
  {
    emoji: <IconCarrot size={16} />,
    value: "carrot",
    label: "Carrot",
    description:
      "Nutrient-packed orange vegetable. Carrot is packed with vitamins and minerals.",
  },
];

export const accordionConfig: ComponentConfigType = {
  defaultProps: {
    variant: "default",
    radius: "md",
    chevronPosition: "right",
    disableChevronRotation: false,
    multiple: false,
    defaultValue: "apples",
  },

  renderComponent: (props) => (
    <Accordion
      variant={props.variant}
      radius={props.radius}
      chevronPosition={props.chevronPosition}
      disableChevronRotation={props.disableChevronRotation}
      multiple={props.multiple}
      defaultValue={props.defaultValue}
    >
      {groceries.map((item) => (
        <Accordion.Item
          key={item.value}
          value={item.value}
          disabled={props.disabled}
        >
          <Accordion.Control icon={item.emoji}>{item.label}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
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
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="filled" label="Filled" />
            <RadioGroup.Item value="outline" label="Outline" />
            <RadioGroup.Item value="separated" label="Separated" />
            <RadioGroup.Item value="unstyled" label="Unstyled" />
          </RadioGroup>
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
            <SelectInput.Option value="none" label="none" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="full" label="full" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Chevron Position
          </Text>
          <ButtonGroup>
            <Button
              className={`${buttonClass} ${
                props.chevronPosition === "left" ? activeButtonClass : ""
              }`}
              onClick={() => setProps({ ...props, chevronPosition: "left" })}
            >
              Left
            </Button>
            <Button
              className={`${buttonClass} ${
                props.chevronPosition === "right" ? activeButtonClass : ""
              }`}
              onClick={() => setProps({ ...props, chevronPosition: "right" })}
            >
              Right
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(value) => setProps({ ...props, disabled: value })}
            classNames={switchClasses}
          />
          <Switch
            label="Open Multiple"
            checked={props.multiple}
            onChange={(value) => setProps({ ...props, multiple: value })}
            classNames={switchClasses}
          />
          <Switch
            label="Disable Chevron Rotation"
            checked={props.disableChevronRotation}
            onChange={(value) =>
              setProps({ ...props, disableChevronRotation: value })
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
        variant: {
          type: "string",
          default: "filled",
          description: "Visual style variant of the accordion",
          possibleValues: ["filled", "outline", "separated", "unstyled"],
        },
        radius: {
          type: "string",
          default: "md",
          description: "Border radius of the accordion",
          possibleValues: ["none", "sm", "md", "lg", "full"],
        },
        chevronPosition: {
          type: "string",
          default: "right",
          description: "Position of the chevron icon",
          possibleValues: ["left", "right"],
        },
        disableChevronRotation: {
          type: "boolean",
          default: false,
          description: "Disable chevron icon rotation animation",
        },
        multiple: {
          type: "boolean",
          default: false,
          description: "Allow multiple items to be opened at the same time",
        },
        defaultValue: {
          type: "string",
          default: null,
          description: "Default opened item value(s)",
        },
        className: {
          type: "string",
          description: "Additional CSS class names for the accordion",
        },
        classNames: {
          type: "object",
          description: "Additional CSS class names for the accordion",
          properties: {
            container: {
              type: "string",
              description: "CSS class names for the accordion container",
            },
            item: {
              type: "string",
              description: "CSS class names for the accordion item",
            },
            itemIcon: {
              type: "string",
              description: "CSS class names for the accordion item icon",
            },
            itemLabel: {
              type: "string",
              description: "CSS class names for the accordion item label",
            },
            itemActive: {
              type: "string",
              description: "CSS class names for the active accordion item",
            },
            itemActiveIcon: {
              type: "string",
              description: "CSS class names for the active accordion item icon",
            },
            itemActiveLabel: {
              type: "string",
              description:
                "CSS class names for the active accordion item label",
            },
            itemActiveDescription: {
              type: "string",
              description:
                "CSS class names for the active accordion item description",
            },
            chevron: {
              type: "string",
              description: "CSS class names for the accordion chevron",
            },
            chevronRotated: {
              type: "string",
              description: "CSS class names for the rotated accordion chevron",
            },
          },
        },
      }}
    />
  ),
};

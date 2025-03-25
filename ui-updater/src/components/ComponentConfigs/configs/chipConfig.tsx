import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  ButtonGroup,
  Button,
  Chip,
  TextInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
  textInputClass,
} from "./index";

export const chipConfig: ComponentConfigType = {
  defaultProps: {
    checked: false,
    label: "Awesome chip",
    color: "blue",
    variant: "outline",
    size: "md",
    radius: "full",
    disabled: false,
    showIcon: true,
    groupDemo: false,
    multipleSelection: false,
  },

  // Use same pattern as other components - no hooks in renderComponent
  renderComponent: (props, setProps) => {
    const handleChange = (checked: boolean) => {
      setProps({ ...props, checked });
    };

    // For group demo
    const handleGroupChange = (value: string | string[]) => {
      // This is just for visual demonstration, we don't need to update props here
      // The group value is internal to the demo
    };

    // Based on groupDemo prop, render either single chip or group
    if (!props.groupDemo) {
      return (
        <Chip
          checked={props.checked}
          onChange={handleChange}
          label={props.label}
          color={props.color}
          variant={props.variant}
          size={props.size}
          radius={props.radius}
          disabled={props.disabled}
          icon={props.showIcon ? undefined : null}
        />
      );
    }

    // Chip group demo with predefined value
    const groupValue = props.multipleSelection ? ["1"] : "1";

    return (
      <Chip.Group
        value={groupValue}
        onChange={handleGroupChange}
        multiple={props.multipleSelection}
      >
        <div className="flex flex-wrap gap-2">
          <Chip
            value="1"
            label="First chip"
            color={props.color}
            variant={props.variant}
            size={props.size}
            radius={props.radius}
            disabled={props.disabled}
            icon={props.showIcon ? undefined : null}
          />
          <Chip
            value="2"
            label="Second chip"
            color={props.color}
            variant={props.variant}
            size={props.size}
            radius={props.radius}
            disabled={props.disabled}
            icon={props.showIcon ? undefined : null}
          />
          <Chip
            value="3"
            label="Third chip"
            color={props.color}
            variant={props.variant}
            size={props.size}
            radius={props.radius}
            disabled={props.disabled}
            icon={props.showIcon ? undefined : null}
          />
        </div>
      </Chip.Group>
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
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Label
          </Text>
          <TextInput
            value={props.label}
            onChange={(val) => setProps({ ...props, label: val })}
            classNames={textInputClass}
          />
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
            <SelectInput.Option value="gray" label="Gray" />
            <SelectInput.Option value="green" label="Green" />
            <SelectInput.Option value="red" label="Red" />
            <SelectInput.Option value="yellow" label="Yellow" />
            <SelectInput.Option value="purple" label="Purple" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Variant
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, variant: "filled" })}
              className={`${buttonClass} ${
                props.variant === "filled" && activeButtonClass
              }`}
            >
              Filled
            </Button>
            <Button
              onClick={() => setProps({ ...props, variant: "outline" })}
              className={`${buttonClass} ${
                props.variant === "outline" && activeButtonClass
              }`}
            >
              Outline
            </Button>
          </ButtonGroup>
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
            <SelectInput.Option value="xs" label="xs" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="xl" label="xl" />
            <SelectInput.Option value="full" label="full" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Demo Type
          </Text>
          <ButtonGroup>
            <Button
              onClick={() =>
                setProps({
                  ...props,
                  groupDemo: false,
                })
              }
              className={`${buttonClass} ${
                !props.groupDemo && activeButtonClass
              }`}
            >
              Single Chip
            </Button>
            <Button
              onClick={() =>
                setProps({
                  ...props,
                  groupDemo: true,
                })
              }
              className={`${buttonClass} ${
                props.groupDemo && activeButtonClass
              }`}
            >
              Chip Group
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Selection Mode
          </Text>
          <ButtonGroup>
            <Button
              onClick={() =>
                setProps({
                  ...props,
                  multipleSelection: false,
                })
              }
              className={`${buttonClass} ${
                !props.multipleSelection && activeButtonClass
              }`}
              disabled={!props.groupDemo}
            >
              Single
            </Button>
            <Button
              onClick={() =>
                setProps({
                  ...props,
                  multipleSelection: true,
                })
              }
              className={`${buttonClass} ${
                props.multipleSelection && activeButtonClass
              }`}
              disabled={!props.groupDemo}
            >
              Multiple
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <div className="space-y-2">
            <Switch
              label="Checked"
              checked={props.checked}
              onChange={(checked) => setProps({ ...props, checked })}
              classNames={switchClasses}
              disabled={props.groupDemo}
            />
            <Switch
              label="Show Check Icon"
              checked={props.showIcon}
              onChange={(checked) => setProps({ ...props, showIcon: checked })}
              classNames={switchClasses}
            />
            <Switch
              label="Disabled"
              checked={props.disabled}
              onChange={(checked) => setProps({ ...props, disabled: checked })}
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
        checked: {
          type: "boolean",
          description: "Controls the checked state of the chip",
        },
        defaultChecked: {
          type: "boolean",
          default: "false",
          description: "Initial checked state when uncontrolled",
        },
        onChange: {
          type: "function",
          description: "Called when the checked state changes",
        },
        label: {
          type: "ReactNode",
          description: "Content of the chip",
        },
        color: {
          type: "string",
          default: "blue",
          description: "Color of the chip when checked",
        },
        variant: {
          type: "string",
          default: "outline",
          description: "Visual style variant of the chip",
          possibleValues: ["filled", "outline", "light"],
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the chip",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        radius: {
          type: "string",
          default: "full",
          description: "Border radius of the chip",
          possibleValues: ["xs", "sm", "md", "lg", "xl", "full"],
        },
        disabled: {
          type: "boolean",
          default: "false",
          description: "Disables the chip",
        },
        icon: {
          type: "ReactNode",
          description: "Custom icon to display when checked",
        },
        wrapperProps: {
          type: "object",
          description: "Props to pass to the root element",
        },
        value: {
          type: "string",
          description: "Value used for chip selection in Chip.Group",
        },
      }}
    />
  ),
};

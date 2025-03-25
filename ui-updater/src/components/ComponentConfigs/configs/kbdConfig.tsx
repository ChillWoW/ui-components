import React from "react";
import { Text, Kbd, SelectInput, RadioGroup, Switch } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses } from "./index";

export const kbdConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    variant: "filled",
    rounded: "md",
    shadow: false,
    disabled: false,
    nowrap: true,
  },

  renderComponent: (props) => (
    <div className="flex items-center gap-2">
      <Kbd
        size={props.size}
        variant={props.variant}
        rounded={props.rounded}
        shadow={props.shadow}
        disabled={props.disabled}
        nowrap={props.nowrap}
      >
        ⌘
      </Kbd>{" "}
      +{" "}
      <Kbd
        size={props.size}
        variant={props.variant}
        rounded={props.rounded}
        shadow={props.shadow}
        disabled={props.disabled}
        nowrap={props.nowrap}
      >
        E
      </Kbd>
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
            Rounded
          </Text>
          <SelectInput
            value={props.rounded}
            onChange={(value) => setProps({ ...props, rounded: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="full" label="Full" />
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
            <RadioGroup.Item value="subtle" label="Subtle" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
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
            label="Shadow"
            checked={props.shadow}
            onChange={(checked) => setProps({ ...props, shadow: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Nowrap"
            checked={props.nowrap}
            onChange={(checked) => setProps({ ...props, nowrap: checked })}
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
          description: "Content of the kbd",
        },
        className: {
          type: "string",
          description: "Determines the class name of the kbd",
        },
        classNames: {
          type: "object",
          description: "Determines the class name of the kbd",
          properties: {
            container: {
              type: "string",
              description: "Determines the class name of the kbd container",
            },
          },
        },
      }}
    />
  ),
};

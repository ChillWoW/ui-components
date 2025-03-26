import React from "react";
import { Code, NumberInput, SelectInput, Text } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { numberInputClass, selectInputClasses } from ".";

export const codeConfig: ComponentConfigType = {
  defaultProps: {
    color: "gray",
    px: 2,
    py: 1,
    radius: "sm",
    className: "bg-red-500",
  },

  renderComponent: (props) => <Code {...props}>Test Code</Code>,

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
            Color
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
            <SelectInput.Option value="purple" label="Purple" />
          </SelectInput>
          <Text size="xs" className="text-gray-400" align="center">
            Custom colors can be applied using the className prop with tailwind
          </Text>
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
            <SelectInput.Option value="sm" label="Sm" />
            <SelectInput.Option value="md" label="Md" />
            <SelectInput.Option value="lg" label="Lg" />
            <SelectInput.Option value="full" label="Full" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Padding
          </Text>
          <NumberInput
            label="X"
            value={props.px}
            onChange={(value) => setProps({ ...props, px: value })}
            classNames={numberInputClass}
            min={0}
            max={5}
          />
          <NumberInput
            label="Y"
            value={props.py}
            min={0}
            max={5}
            onChange={(value) => setProps({ ...props, py: value })}
            classNames={numberInputClass}
          />
        </div>
      </div>
    );
  },
};

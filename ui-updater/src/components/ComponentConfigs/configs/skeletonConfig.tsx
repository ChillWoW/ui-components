import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  NumberInput,
  Skeleton,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses, numberInputClass } from "./index";

export const skeletonConfig: ComponentConfigType = {
  defaultProps: {
    height: 50,
    width: "100%",
    radius: "md",
    circle: false,
    animate: true,
    visible: true,
  },

  renderComponent: (props) => (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <Skeleton {...props} />
      {/* Demo with content */}
      <Skeleton {...props} visible={props.visible}>
        <div className="p-4 border rounded">
          <Text>This content is wrapped in skeleton</Text>
        </div>
      </Skeleton>
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
        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Appearance
          </Text>

          <NumberInput
            label="Height"
            value={props.height}
            onChange={(value) => setProps({ ...props, height: value })}
            min={0}
            classNames={numberInputClass}
          />

          <SelectInput
            label="Radius"
            value={props.radius}
            onChange={(value) => setProps({ ...props, radius: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="sm" label="Small" />
            <SelectInput.Option value="md" label="Medium" />
            <SelectInput.Option value="lg" label="Large" />
            <SelectInput.Option value="xl" label="Extra Large" />
            <SelectInput.Option value="full" label="Full" />
          </SelectInput>

          <Switch
            label="Circle"
            checked={props.circle}
            onChange={(checked) => setProps({ ...props, circle: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Animate"
            checked={props.animate}
            onChange={(checked) => setProps({ ...props, animate: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Visible"
            checked={props.visible}
            onChange={(checked) => setProps({ ...props, visible: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        height: {
          type: "number | string",
          description: "Height of skeleton - any valid CSS value",
        },
        width: {
          type: "number | string",
          description: "Width of skeleton - any valid CSS value",
        },
        radius: {
          type: "string",
          default: "md",
          description: "Border radius value",
          possibleValues: ["none", "sm", "md", "lg", "xl", "full"],
        },
        circle: {
          type: "boolean",
          default: "false",
          description: "Makes the skeleton a perfect circle using height value",
        },
        animate: {
          type: "boolean",
          default: "true",
          description: "Controls the shimmer animation",
        },
        visible: {
          type: "boolean",
          default: "true",
          description: "Controls skeleton visibility when wrapping content",
        },
        className: {
          type: "string",
          description: "Additional CSS classes",
        },
      }}
    />
  ),
};

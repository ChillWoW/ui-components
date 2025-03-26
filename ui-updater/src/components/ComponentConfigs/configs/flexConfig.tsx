import React from "react";
import {
  Flex,
  Text,
  Button,
  ButtonGroup,
  Switch,
  SelectInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
} from "./index";
import { InfoPanel } from "../InfoPanel";

export const flexConfig: ComponentConfigType = {
  defaultProps: {
    orientation: "horizontal",
    justify: "start",
    align: "start",
    gap: "md",
    wrap: "nowrap",
    fullWidth: false,
    fullHeight: false,
  },

  renderComponent: (props) => {
    return (
      <div className="w-full min-h-full bg-dark-700 p-4 rounded-md">
        <Flex {...props}>
          <div className="bg-blue-500 p-2 rounded">Item 1</div>
          <div className="bg-green-500 p-2 rounded">Item 2</div>
          <div className="bg-yellow-500 p-2 rounded">Item 3</div>
          <div className="bg-red-500 p-2 rounded">Item 4</div>
        </Flex>
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
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Justify Content
          </Text>
          <SelectInput
            value={props.justify}
            onChange={(value) => setProps({ ...props, justify: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="start" label="Start" />
            <SelectInput.Option value="center" label="Center" />
            <SelectInput.Option value="end" label="End" />
            <SelectInput.Option value="between" label="Space Between" />
            <SelectInput.Option value="around" label="Space Around" />
            <SelectInput.Option value="evenly" label="Space Evenly" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Align Items
          </Text>
          <SelectInput
            value={props.align}
            onChange={(value) => setProps({ ...props, align: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="start" label="Start" />
            <SelectInput.Option value="center" label="Center" />
            <SelectInput.Option value="end" label="End" />
            <SelectInput.Option value="stretch" label="Stretch" />
            <SelectInput.Option value="baseline" label="Baseline" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Gap
          </Text>
          <SelectInput
            value={props.gap}
            onChange={(value) => setProps({ ...props, gap: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="none" />
            <SelectInput.Option value="xs" label="xs" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="xl" label="xl" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Wrap
          </Text>
          <SelectInput
            value={props.wrap}
            onChange={(value) => setProps({ ...props, wrap: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="nowrap" label="No Wrap" />
            <SelectInput.Option value="wrap" label="Wrap" />
            <SelectInput.Option value="wrap-reverse" label="Wrap Reverse" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Orientation
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, orientation: "horizontal" })}
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
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        orientation: {
          type: "string",
          default: "horizontal",
          description: "Determines the direction of the flex container",
          possibleValues: ["horizontal", "vertical"],
        },
        justify: {
          type: "string",
          default: "start",
          description: "Controls alignment along the main axis",
          possibleValues: [
            "start",
            "center",
            "end",
            "between",
            "around",
            "evenly",
          ],
        },
        align: {
          type: "string",
          default: "start",
          description: "Controls alignment along the cross axis",
          possibleValues: ["start", "center", "end", "stretch", "baseline"],
        },
        gap: {
          type: "string | number",
          default: "md",
          description: "Spacing between child elements",
          possibleValues: ["xs", "sm", "md", "lg", "xl", "custom number"],
        },
        wrap: {
          type: "string",
          default: "nowrap",
          description: "Controls whether items wrap to next line",
          possibleValues: ["nowrap", "wrap", "wrap-reverse"],
        },
        fullWidth: {
          type: "boolean",
          default: "false",
          description: "Makes the flex container take full width",
        },
        fullHeight: {
          type: "boolean",
          default: "false",
          description: "Makes the flex container take full height",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply",
        },
      }}
    />
  ),
};

import React from "react";
import { ComponentConfigType } from "../index";
import { Text, Switch, SelectInput, NumberInput, Grid } from "@/components/ui";
import { InfoPanel } from "../InfoPanel";
import {
  selectInputClasses,
  numberInputClass,
  buttonClass,
  activeButtonClass,
  switchClasses,
} from "./index";

export const gridConfig: ComponentConfigType = {
  defaultProps: {
    cols: 2,
    spacing: "md",
    justify: "start",
    align: "start",
    flow: "row",
    fullWidth: false,
    fullHeight: false,
    children: "Grid Content",
  },

  renderComponent: (props) => {
    return (
      <div className="w-full min-h-full bg-dark-700 p-4 rounded-md">
        <Grid {...props}>
          <div className="bg-blue-500 p-2 rounded">Item 1</div>
          <div className="bg-green-500 p-2 rounded">Item 2</div>
          <div className="bg-yellow-500 p-2 rounded">Item 3</div>
          <div className="bg-red-500 p-2 rounded">Item 4</div>
        </Grid>
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
            Grid Flow
          </Text>
          <SelectInput
            value={props.flow}
            onChange={(value) => setProps({ ...props, flow: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="row" label="Row" />
            <SelectInput.Option value="col" label="Column" />
            <SelectInput.Option value="dense" label="Dense" />
            <SelectInput.Option value="row-dense" label="Row Dense" />
            <SelectInput.Option value="col-dense" label="Column Dense" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Spacing
          </Text>
          <SelectInput
            value={props.spacing}
            onChange={(value) => setProps({ ...props, spacing: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="xs" label="XS" />
            <SelectInput.Option value="sm" label="SM" />
            <SelectInput.Option value="md" label="MD" />
            <SelectInput.Option value="lg" label="LG" />
            <SelectInput.Option value="xl" label="XL" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Columns
          </Text>
          <NumberInput
            value={props.cols}
            onChange={(value) => setProps({ ...props, cols: value })}
            className="w-full"
            min={1}
            max={12}
            classNames={numberInputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Full Width"
            checked={props.fullWidth}
            onChange={(checked) => setProps({ ...props, fullWidth: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Full Height"
            checked={props.fullHeight}
            onChange={(checked) => setProps({ ...props, fullHeight: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        cols: {
          type: "number | ResponsiveCols",
          default: "1",
          description: "Number of columns in the grid",
          possibleValues: ["1-12 or responsive object"],
        },
        rows: {
          type: "number",
          description: "Number of rows in the grid",
          possibleValues: ["Any number"],
        },
        spacing: {
          type: "string | number",
          default: "md",
          description: "Horizontal spacing between grid items",
          possibleValues: [
            "none",
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
            "custom number",
          ],
        },
        verticalSpacing: {
          type: "string | number",
          description:
            "Vertical spacing between grid items (defaults to spacing if not specified)",
          possibleValues: [
            "none",
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
            "custom number",
          ],
        },
        justify: {
          type: "string",
          default: "start",
          description: "Aligns grid items along the inline (row) axis",
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
          description: "Aligns grid items along the block (column) axis",
          possibleValues: ["start", "center", "end", "stretch", "baseline"],
        },
        flow: {
          type: "string",
          default: "row",
          description: "Controls how items are placed in the grid",
          possibleValues: ["row", "col", "dense", "row-dense", "col-dense"],
        },
        fullWidth: {
          type: "boolean",
          default: "false",
          description: "Makes the grid container take full width",
        },
        fullHeight: {
          type: "boolean",
          default: "false",
          description: "Makes the grid container take full height",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply",
        },
      }}
    />
  ),
};

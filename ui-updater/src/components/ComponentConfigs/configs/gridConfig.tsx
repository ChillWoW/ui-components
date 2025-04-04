import React from "react";
import {
  Grid,
  GridAlign,
  GridFlow,
  GridJustify,
  GridResponsiveCols,
  GridSpacing,
} from "@/components/ui/Grid";
import { Badge, SelectInput, Switch } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const gridConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Grid"
          description="Grid is a component that allows you to create grid layouts."
          error={
            <div>
              Grid is a malfunctioning component, and is not yet ready for use
              in production. Fix is getting released in version 1.0.0. For now,
              use Flex or CSS Grid.
            </div>
          }
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Standard Grid"
            description="The standard grid is the most common grid type in the whole library."
            anchorId="standard"
          >
            <Grid>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Grid>
          </ConfigCard>

          <ConfigCard
            title="Justify"
            description="The grid can be justified in different ways."
            anchorId="justify"
            className="flex gap-1 items-center"
          >
            {["start", "center", "end", "between", "around", "evenly"].map(
              (justify) => (
                <Badge key={justify} intent="primary">
                  {justify}
                </Badge>
              )
            )}
          </ConfigCard>

          <ConfigCard
            title="Align"
            description="The grid can be aligned in different ways."
            anchorId="align"
            className="flex gap-1 items-center"
          >
            {["start", "center", "end", "stretch", "baseline"].map((align) => (
              <Badge key={align} intent="primary">
                {align}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Flow"
            description="The grid can be flowed in different ways."
            anchorId="flow"
            className="flex gap-1 items-center"
          >
            {["row", "col", "dense", "row-dense", "col-dense"].map((flow) => (
              <Badge key={flow} intent="primary">
                {flow}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Spacing"
            description="The grid can have a different spacing."
            anchorId="spacing"
            className="flex gap-1 items-center"
          >
            {["none", "xs", "sm", "md", "lg", "xl", "number"].map((spacing) => (
              <Badge key={spacing} intent="primary">
                {spacing}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Full Width"
            description="The grid can be full width of the container."
            anchorId="full-width"
            className="flex gap-1 items-center"
          >
            <Grid fullWidth>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Grid>
          </ConfigCard>

          <ConfigCard
            title="Full Height"
            description="The grid can be full height of the container."
            anchorId="full-height"
            className="flex gap-1 items-center"
          >
            <Grid fullHeight>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Grid>
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    spacing: "md",
    justify: "start",
    align: "start",
    flow: "row",
    fullWidth: false,
    fullHeight: false,
  },

  renderPlayground: () => {
    return ({
      props,
      setProps,
    }: {
      props: any;
      setProps: (newProps: any) => void;
    }) => (
      <PlaygroundPreview
        preview={
          <div className="w-72 h-72">
            <Grid
              cols={props.cols as GridResponsiveCols}
              rows={props.rows}
              spacing={props.spacing as GridSpacing}
              verticalSpacing={props.verticalSpacing as GridSpacing}
              justify={props.justify as GridJustify}
              align={props.align as GridAlign}
              flow={props.flow as GridFlow}
              fullWidth={props.fullWidth}
              fullHeight={props.fullHeight}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Grid>
          </div>
        }
        exampleCode={`<Grid>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="w-10 h-10 bg-dark-600">
        {index}
      </div>
    ))}
</Grid>
`}
        controls={
          <>
            <PlaygroundPreview.Section title="Appearance">
              <SelectInput
                label="Justify"
                value={props.justify}
                onChange={(value) => setProps({ ...props, justify: value })}
                classNames={selectInputClasses}
                clearable
              >
                <SelectInput.Option value="start" label="Start" />
                <SelectInput.Option value="center" label="Center" />
                <SelectInput.Option value="end" label="End" />
                <SelectInput.Option value="between" label="Between" />
                <SelectInput.Option value="around" label="Around" />
                <SelectInput.Option value="evenly" label="Evenly" />
              </SelectInput>

              <SelectInput
                label="Align"
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

              <SelectInput
                label="Flow"
                value={props.flow}
                onChange={(value) => setProps({ ...props, flow: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="row" label="Row" />
                <SelectInput.Option value="col" label="Col" />
                <SelectInput.Option value="dense" label="Dense" />
                <SelectInput.Option value="row-dense" label="Row Dense" />
                <SelectInput.Option value="col-dense" label="Col Dense" />
              </SelectInput>

              <SelectInput
                label="Spacing"
                value={props.spacing}
                onChange={(value) => setProps({ ...props, spacing: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="none" label="None" />
                <SelectInput.Option value="xs" label="xs" />
                <SelectInput.Option value="sm" label="sm" />
                <SelectInput.Option value="md" label="md" />
                <SelectInput.Option value="lg" label="lg" />
                <SelectInput.Option value="xl" label="xl" />
              </SelectInput>
            </PlaygroundPreview.Section>

            <PlaygroundPreview.Section title="States">
              <Switch
                label="Full Width"
                checked={props.fullWidth}
                onChange={(checked) =>
                  setProps({ ...props, fullWidth: checked })
                }
                classNames={switchClasses}
              />

              <Switch
                label="Full Height"
                checked={props.fullHeight}
                onChange={(checked) =>
                  setProps({ ...props, fullHeight: checked })
                }
                classNames={switchClasses}
              />
            </PlaygroundPreview.Section>
          </>
        }
      />
    );
  },

  renderStylesAPI: () => (
    <>
      <StylesAPI
        title="API"
        apiData={[
          {
            property: "children",
            description: "The content of the flex",
            type: "ReactNode",
          },
          {
            property: "orientation",
            description: "The orientation of the flex",
            type: createTypeOptions(["horizontal", "vertical"]),
            default: "horizontal",
          },
          {
            property: "justify",
            description: "The justify of the flex",
            type: createTypeOptions([
              "start",
              "center",
              "end",
              "between",
              "around",
              "evenly",
            ]),
            default: "start",
          },
          {
            property: "align",
            description: "The align of the flex",
            type: createTypeOptions([
              "start",
              "center",
              "end",
              "stretch",
              "baseline",
            ]),
            default: "start",
          },
          {
            property: "wrap",
            description: "The wrap of the flex",
            type: createTypeOptions(["nowrap", "wrap", "wrap-reverse"]),
            default: "nowrap",
          },
          {
            property: "gap",
            description: "The gap of the flex",
            type: createTypeOptions([
              "none",
              "xs",
              "sm",
              "md",
              "lg",
              "xl",
              "number",
            ]),
            default: "md",
          },
          {
            property: "fullWidth",
            description: "Whether the flex is full width of the container",
            type: "boolean",
            default: "false",
          },
          {
            property: "fullHeight",
            description: "Whether the flex is full height of the container",
            type: "boolean",
            default: "false",
          },
          {
            property: "className",
            description: "The class name of the flex",
            type: "string",
            default: "-",
          },
        ]}
      />
    </>
  ),
};

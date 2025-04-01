import React, { useState } from "react";
import {
  Flex,
  FlexAlign,
  FlexGap,
  FlexJustify,
  FlexOrientation,
  FlexWrap,
} from "@/components/ui/Flex";
import {
  Badge,
  Button,
  ButtonGroup,
  SelectInput,
  Switch,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import {
  activeButtonClass,
  buttonClass,
  selectInputClasses,
  switchClasses,
} from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const flexConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Flex"
          description="Flex is a component that allows you to create flexbox layouts."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Standard Flex"
            description="The standard flex is the most common flex type in the whole library."
            anchorId="standard"
          >
            <Flex>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Flex>
          </ConfigCard>

          <ConfigCard
            title="Orientation"
            description="The flex can be oriented in different directions."
            anchorId="orientation"
            className="flex gap-2 items-center"
          >
            {["horizontal", "vertical"].map((orientation) => (
              <Flex
                orientation={orientation as FlexOrientation}
                key={orientation}
              >
                <Badge key={orientation} intent="primary">
                  {orientation}
                </Badge>
              </Flex>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Justify"
            description="The flex can be justified in different ways."
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
            description="The flex can be aligned in different ways."
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
            title="Wrap"
            description="The flex can be wrapped in different ways."
            anchorId="wrap"
            className="flex gap-1 items-center"
          >
            {["nowrap", "wrap", "wrap-reverse"].map((wrap) => (
              <Badge key={wrap} intent="primary">
                {wrap}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Gap"
            description="The flex can have a different gap."
            anchorId="gap"
            className="flex gap-1 items-center"
          >
            {["none", "xs", "sm", "md", "lg", "xl", "number"].map((gap) => (
              <Badge key={gap} intent="primary">
                {gap}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Full Width"
            description="The flex can be full width of the container."
            anchorId="full-width"
            className="flex gap-1 items-center"
          >
            <Flex fullWidth>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Flex>
          </ConfigCard>

          <ConfigCard
            title="Full Height"
            description="The flex can be full height of the container."
            anchorId="full-height"
            className="flex gap-1 items-center"
          >
            <Flex fullHeight>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Flex>
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    orientation: "horizontal",
    justify: "start",
    align: "start",
    wrap: "nowrap",
    gap: "md",
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
            <Flex
              orientation={props.orientation as FlexOrientation}
              justify={props.justify as FlexJustify}
              align={props.align as FlexAlign}
              wrap={props.wrap as FlexWrap}
              gap={props.gap as FlexGap}
              fullWidth={props.fullWidth}
              fullHeight={props.fullHeight}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Flex>
          </div>
        }
        exampleCode={`<Flex>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="w-10 h-10 bg-dark-600">
        {index}
      </div>
    ))}
</Flex>
`}
        controls={
          <>
            <PlaygroundPreview.Section title="Appearance">
              <ButtonGroup>
                <Button
                  onClick={() =>
                    setProps({ ...props, orientation: "horizontal" })
                  }
                  className={`${buttonClass} ${
                    props.orientation === "horizontal" && activeButtonClass
                  }`}
                >
                  Horizontal
                </Button>
                <Button
                  onClick={() =>
                    setProps({ ...props, orientation: "vertical" })
                  }
                  className={`${buttonClass} ${
                    props.orientation === "vertical" && activeButtonClass
                  }`}
                >
                  Vertical
                </Button>
              </ButtonGroup>

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
                label="Wrap"
                value={props.wrap}
                onChange={(value) => setProps({ ...props, wrap: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="nowrap" label="Nowrap" />
                <SelectInput.Option value="wrap" label="Wrap" />
                <SelectInput.Option value="wrap-reverse" label="Wrap Reverse" />
              </SelectInput>

              <SelectInput
                label="Gap"
                value={props.gap}
                onChange={(value) => setProps({ ...props, gap: value })}
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

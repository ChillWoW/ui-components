import React from "react";
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
  Group,
  GroupAlign,
  GroupGap,
  GroupJustify,
  GroupWrap,
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

export const groupConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Group"
          description="Group is a component that allows you to create grouped layouts."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Standard Group"
            description="The standard group is the most common group type in the whole library."
            anchorId="standard"
          >
            <Group>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Group>
          </ConfigCard>

          <ConfigCard
            title="Justify"
            description="The group can be justified in different ways."
            anchorId="justify"
            className="flex gap-2 items-center"
          >
            {[
              "flex-start",
              "center",
              "flex-end",
              "space-between",
              "space-around",
              "space-evenly",
            ].map((justify) => (
              <Badge key={justify} intent="primary">
                {justify}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Align"
            description="The group can be aligned in different ways."
            anchorId="align"
            className="flex gap-2 items-center"
          >
            {["flex-start", "center", "flex-end", "stretch", "baseline"].map(
              (align) => (
                <Badge key={align} intent="primary">
                  {align}
                </Badge>
              )
            )}
          </ConfigCard>

          <ConfigCard
            title="Wrap"
            description="The group can be wrapped in different ways."
            anchorId="wrap"
            className="flex gap-2 items-center"
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
            className="flex gap-2 items-center"
          >
            {["none", "xs", "sm", "md", "lg", "xl", "number"].map((gap) => (
              <Badge key={gap} intent="primary">
                {gap}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Grow"
            description="The group can grow to fill the container."
            anchorId="grow"
            className="flex gap-1 items-center"
          >
            <Group grow>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Group>
          </ConfigCard>

          <ConfigCard
            title="Prevent Grow Overflow"
            description="The group can prevent grow overflow."
            anchorId="prevent-grow-overflow"
            className="flex gap-1 items-center"
          >
            <Group preventGrowOverflow>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Group>
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    justify: "flex-start",
    align: "flex-start",
    wrap: "nowrap",
    gap: "md",
    grow: false,
    preventGrowOverflow: false,
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
            <Group
              justify={props.justify as GroupJustify}
              align={props.align as GroupAlign}
              wrap={props.wrap as GroupWrap}
              gap={props.gap as GroupGap}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-10 h-10 bg-dark-600">
                  {index}
                </div>
              ))}
            </Group>
          </div>
        }
        exampleCode={`<Group>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="w-10 h-10 bg-dark-600">
        {index}
      </div>
    ))}
</Group>
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
                <SelectInput.Option value="flex-start" label="Start" />
                <SelectInput.Option value="center" label="Center" />
                <SelectInput.Option value="flex-end" label="End" />
                <SelectInput.Option value="space-between" label="Between" />
                <SelectInput.Option value="space-around" label="Around" />
                <SelectInput.Option value="space-evenly" label="Evenly" />
              </SelectInput>

              <SelectInput
                label="Align"
                value={props.align}
                onChange={(value) => setProps({ ...props, align: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="flex-start" label="Start" />
                <SelectInput.Option value="center" label="Center" />
                <SelectInput.Option value="flex-end" label="End" />
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
                label="Grow"
                checked={props.grow}
                onChange={(checked) => setProps({ ...props, grow: checked })}
                classNames={switchClasses}
              />

              <Switch
                label="Prevent Grow Overflow"
                checked={props.preventGrowOverflow}
                onChange={(checked) =>
                  setProps({ ...props, preventGrowOverflow: checked })
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
            description: "The content of the group",
            type: "ReactNode",
          },
          {
            property: "justify",
            description: "The justify of the group",
            type: createTypeOptions([
              "flex-start",
              "center",
              "flex-end",
              "space-between",
              "space-around",
              "space-evenly",
            ]),
            default: "flex-start",
          },
          {
            property: "align",
            description: "The align of the group",
            type: createTypeOptions([
              "flex-start",
              "center",
              "flex-end",
              "stretch",
              "baseline",
            ]),
            default: "flex-start",
          },
          {
            property: "wrap",
            description: "The wrap of the group",
            type: createTypeOptions(["nowrap", "wrap", "wrap-reverse"]),
            default: "nowrap",
          },
          {
            property: "gap",
            description: "The gap of the group",
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
            property: "grow",
            description: "Whether the group can grow to fill the container",
            type: "boolean",
            default: "false",
          },
          {
            property: "preventGrowOverflow",
            description:
              "Whether the group can prevent grow overflow to the container",
            type: "boolean",
            default: "false",
          },
          {
            property: "className",
            description: "The class name of the group",
            type: "string",
            default: "-",
          },
        ]}
      />
    </>
  ),
};

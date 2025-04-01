import React from "react";
import { Badge, SelectInput, Stack, Button } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const stackConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Stack"
          description="Stack is used for easy layout customization."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Standard Stack"
            description="This is the default Stack component."
            anchorId="standard"
          >
            <Stack>
              {Array.from({ length: 5 }).map((_, index) => (
                <Button key={index}>{index}</Button>
              ))}
            </Stack>
          </ConfigCard>

          <ConfigCard
            title="Align"
            description="The stack can be aligned in different ways."
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
            title="Justify"
            description="The stack can be justified in different ways."
            anchorId="justify"
            className="flex gap-2 items-center"
          >
            {[
              "center",
              "flex-start",
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
            title="Gap"
            description="The stack can have a different gap."
            anchorId="gap"
            className="flex gap-2 items-center"
          >
            {["none", "xs", "sm", "md", "lg", "xl", "number"].map((gap) => (
              <Badge key={gap} intent="primary">
                {gap}
              </Badge>
            ))}
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    align: "stretch",
    justify: "center",
    gap: "md",
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
          <div className="w-full h-100%">
            <Stack align={props.align} justify={props.justify} gap={props.gap}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Button key={index}>{index}</Button>
              ))}
            </Stack>
          </div>
        }
        exampleCode={`
<Stack>
    {Array.from({ length: 5 }).map((_, index) => (
        <Button key={index}>{index}</Button>
    ))}
</Stack>
`}
        controls={
          <>
            <PlaygroundPreview.Section title="Appearance">
              <SelectInput
                label="Align"
                value={props.align}
                onChange={(value) => setProps({ ...props, align: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="flex-start" label="flex-start" />
                <SelectInput.Option value="center" label="center" />
                <SelectInput.Option value="flex-end" label="flex-end" />
                <SelectInput.Option value="stretch" label="stretch" />
                <SelectInput.Option value="baseline" label="baseline" />
              </SelectInput>

              <SelectInput
                label="Justify"
                hint="Doesn't work in playground for height issues"
                value={props.justify}
                onChange={(value) => setProps({ ...props, justify: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="center" label="center" />
                <SelectInput.Option value="flex-start" label="flex-start" />
                <SelectInput.Option value="flex-end" label="flex-end" />
                <SelectInput.Option
                  value="space-between"
                  label="space-between"
                />
                <SelectInput.Option value="space-around" label="space-around" />
                <SelectInput.Option value="space-evenly" label="space-evenly" />
              </SelectInput>

              <SelectInput
                label="Gap"
                value={props.gap}
                onChange={(value) => setProps({ ...props, gap: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="xs" label="xs" />
                <SelectInput.Option value="sm" label="sm" />
                <SelectInput.Option value="md" label="md" />
                <SelectInput.Option value="lg" label="lg" />
                <SelectInput.Option value="xl" label="xl" />
              </SelectInput>
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
            description: "The content of the button",
            type: "ReactNode",
          },
          {
            property: "leftSection",
            description: "The left section of the button",
            type: "ReactNode",
          },
          {
            property: "rightSection",
            description: "The right section of the button",
            type: "ReactNode",
          },
          {
            property: "variant",
            description: "The variant of the button",
            type: createTypeOptions([
              "filled",
              "outline",
              "subtle",
              "unstyled",
            ]),
            default: "filled",
          },
          {
            property: "intent",
            description: "The intent of the button",
            type: createTypeOptions([
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
            ]),
          },
          {
            property: "size",
            description: "The size of the button",
            type: createTypeOptions(["xs", "sm", "md", "lg", "xl", "2xl"]),
            default: "sm",
          },
          {
            property: "radius",
            description: "The radius of the button",
            type: createTypeOptions(["none", "sm", "md", "lg", "xl", "full"]),
            default: "md",
          },
          {
            property: "disabled",
            description: "Whether the button is disabled",
            type: "boolean",
            default: "false",
          },
          {
            property: "isLoading",
            description: "Whether the button is loading (disables the button)",
            type: "boolean",
            default: "false",
          },
          {
            property: "fullWidth",
            description: "Whether the button is full width of the container",
            type: "boolean",
            default: "false",
          },
          {
            property: "active",
            description: "Whether the button is active",
            type: "boolean",
            default: "false",
          },
        ]}
      />
      <StylesAPI
        title="Styles API"
        apiData={[
          {
            property: "classNames",
            description: "Object of class names to override component styles",
            type: "object",
            default: "{}",
          },
          {
            property: "classNames.container",
            description: "Root button element",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.label",
            description: "Button label text wrapper",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.leftSection",
            description: "Left icon/element wrapper",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.rightSection",
            description: "Right icon/element wrapper",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.active",
            description: "Applied when button is active",
            type: "string",
            default: "-",
          },
        ]}
      />
    </>
  ),
};

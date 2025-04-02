import React from "react";
import {
  Button,
  ButtonGroup,
  SelectInput,
  Switch,
  Text,
  Snippet,
  TextInput,
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

const renderSnippet = (props: any = {}) => {
  return (
    <Snippet
      size={props.size}
      radius={props.radius}
      color={props.color || "#1e1e1e"}
      symbol={props.symbol !== undefined ? props.symbol : "$"}
      allowCopy={props.allowCopy !== undefined ? props.allowCopy : true}
      hideCopyButton={props.hideCopyButton || false}
      hideSymbol={props.hideSymbol || false}
      disableTooltip={props.disableTooltip || false}
      timeout={props.timeout || 2000}
    >
      {props.content || "npx create-next-app@latest my-project --typescript"}
    </Snippet>
  );
};

export const snippetConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Snippet"
          description="Snippet is a component that can be used to display inline or multiline code snippets."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Standard Snippet"
            description="Default snippet component for displaying commands or code."
            anchorId="standard"
          >
            {renderSnippet()}
          </ConfigCard>

          <ConfigCard
            title="Sizes"
            description="The snippet component can be rendered in different sizes."
            anchorId="sizes"
            className="flex flex-col gap-2"
          >
            <div className="space-y-3">
              {["xs", "sm", "md", "lg", "xl"].map((size) => (
                <div key={size}>
                  <Text size="sm" weight="bold" className="mb-1">
                    {size.toUpperCase()}:
                  </Text>
                  {renderSnippet({ size })}
                </div>
              ))}
            </div>
          </ConfigCard>

          <ConfigCard
            title="Radius"
            description="The snippet component can have different border radius."
            anchorId="radius"
            className="flex flex-col gap-2"
          >
            <div className="space-y-3">
              {["none", "sm", "md", "lg", "xl", "full"].map((radius) => (
                <div key={radius}>
                  <Text size="sm" weight="bold" className="mb-1">
                    {radius}:
                  </Text>
                  {renderSnippet({ radius })}
                </div>
              ))}
            </div>
          </ConfigCard>

          <ConfigCard
            title="Custom Symbol"
            description="The snippet can use a custom symbol at the beginning."
            anchorId="custom-symbol"
          >
            <div className="space-y-3">
              {["$", ">", "#", "λ"].map((symbol) => (
                <div key={symbol} className="mb-2">
                  {renderSnippet({ symbol })}
                </div>
              ))}
            </div>
          </ConfigCard>

          <ConfigCard
            title="Without Copy Button"
            description="The copy button can be hidden."
            anchorId="without-copy"
          >
            {renderSnippet({ hideCopyButton: true })}
          </ConfigCard>

          <ConfigCard
            title="Without Symbol"
            description="The symbol can be hidden."
            anchorId="without-symbol"
          >
            {renderSnippet({ hideSymbol: true })}
          </ConfigCard>

          <ConfigCard
            title="Multiline"
            description="Snippet can display multiline content."
            anchorId="multiline"
          >
            {renderSnippet({
              content: `npm install @heroui/react
yarn add @heroui/react
pnpm add @heroui/react`,
            })}
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    content: "npx create-next-app@latest my-project --typescript",
    size: "md",
    radius: "md",
    color: "#1e1e1e",
    symbol: "$",
    allowCopy: true,
    hideCopyButton: false,
    hideSymbol: false,
    disableTooltip: false,
    timeout: 2000,
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
          <Snippet
            size={props.size}
            radius={props.radius}
            color={props.color}
            symbol={props.symbol}
            allowCopy={props.allowCopy}
            hideCopyButton={props.hideCopyButton}
            hideSymbol={props.hideSymbol}
            disableTooltip={props.disableTooltip}
            timeout={props.timeout}
          >
            {props.content}
          </Snippet>
        }
        exampleCode={`<Snippet>
  npx create-next-app@latest my-project --typescript
</Snippet>`}
        controls={
          <>
            <PlaygroundPreview.Section title="Appearance">
              <SelectInput
                label="Size"
                value={props.size}
                onChange={(value) => setProps({ ...props, size: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="xs">xs</SelectInput.Option>
                <SelectInput.Option value="sm">sm</SelectInput.Option>
                <SelectInput.Option value="md">md</SelectInput.Option>
                <SelectInput.Option value="lg">lg</SelectInput.Option>
                <SelectInput.Option value="xl">xl</SelectInput.Option>
              </SelectInput>
              <SelectInput
                label="Radius"
                value={props.radius}
                onChange={(value) => setProps({ ...props, radius: value })}
                classNames={selectInputClasses}
              >
                <SelectInput.Option value="none">none</SelectInput.Option>
                <SelectInput.Option value="sm">sm</SelectInput.Option>
                <SelectInput.Option value="md">md</SelectInput.Option>
                <SelectInput.Option value="lg">lg</SelectInput.Option>
                <SelectInput.Option value="xl">xl</SelectInput.Option>
                <SelectInput.Option value="full">full</SelectInput.Option>
              </SelectInput>
            </PlaygroundPreview.Section>

            <PlaygroundPreview.Section title="Options">
              <Switch
                label="Allow Copy"
                checked={props.allowCopy}
                onChange={(checked) =>
                  setProps({ ...props, allowCopy: checked })
                }
                classNames={switchClasses}
              />
              <Switch
                label="Hide Copy Button"
                checked={props.hideCopyButton}
                onChange={(checked) =>
                  setProps({ ...props, hideCopyButton: checked })
                }
                classNames={switchClasses}
              />
              <Switch
                label="Hide Symbol"
                checked={props.hideSymbol}
                onChange={(checked) =>
                  setProps({ ...props, hideSymbol: checked })
                }
                classNames={switchClasses}
              />
              <Switch
                label="Disable Tooltip"
                checked={props.disableTooltip}
                onChange={(checked) =>
                  setProps({ ...props, disableTooltip: checked })
                }
                classNames={switchClasses}
              />
            </PlaygroundPreview.Section>
          </>
        }
      />
    );
  },
};

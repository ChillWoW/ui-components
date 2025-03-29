import React from "react";
import { Button, ButtonGroup, Code, Switch, Text } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import {
    activeButtonClass,
    buttonClass,
    selectInputClasses,
    switchClasses
} from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

const renderCode = (props: any = {}) => {
    return (
        <Code
            language={props.language}
            showLineNumbers={props.showLineNumbers}
            theme={props.theme}
            highlightLines={props.highlightLines || []}
            copyable={props.copyable !== undefined ? props.copyable : true}
            copyText={props.copyText}
            copiedText={props.copiedText}
            classNames={{
                scrollbar:
                    "scrollbar-thin scrollbar-thumb-dark-500 scrollbar-track-transparent"
            }}
        >
            {props.code ||
                `
const a = 1;
const b = 2;
const c = a + b;`}
        </Code>
    );
};

export const codeConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Code"
                    description="Code for showcasing code."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Code"
                        description="Default syntax highlighting for code snippets."
                        anchorId="standard"
                    >
                        {renderCode()}
                    </ConfigCard>

                    <ConfigCard
                        title="Supports Languages"
                        description="The code component supports many languages. For example this is a tsx code snippet."
                        anchorId="languages"
                        className="flex flex-col gap-2"
                    >
                        <div>
                            <Text size="sm" weight="bold">
                                TypeScript:
                            </Text>
                            {renderCode({
                                language: "typescript",
                                code: `interface User {
  id: number;
  name: string;
  email?: string;
}

function createUser(name: string): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name
  };
}`
                            })}
                        </div>
                        <div>
                            <Text size="sm" weight="bold">
                                CSS:
                            </Text>
                            {renderCode({
                                language: "css",
                                code: `.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}`
                            })}
                        </div>
                    </ConfigCard>

                    <ConfigCard
                        title="With Line Numbers"
                        description="Display line numbers alongside the code."
                        anchorId="lineNumbers"
                    >
                        {renderCode({
                            language: "tsx",
                            showLineNumbers: true
                        })}
                    </ConfigCard>

                    <ConfigCard
                        title="Highlighted Lines"
                        description="Highlight specific lines of code to draw attention to them."
                        anchorId="highlighted-lines"
                    >
                        {renderCode({
                            highlightLines: [2, 3],
                            showLineNumbers: true
                        })}
                    </ConfigCard>

                    <ConfigCard
                        title="Light Theme"
                        description="Code component with a light color scheme."
                        anchorId="light-theme"
                    >
                        {renderCode({
                            language: "tsx",
                            theme: "light"
                        })}
                    </ConfigCard>

                    <ConfigCard
                        title="Copyable"
                        description="The code component can be made copyable. (For default it is copyable)"
                        anchorId="copyable"
                    >
                        {renderCode({ copyable: true })}
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        language: "typescript",
        showLineNumbers: false,
        theme: "dark",
        highlightLines: [],
        copyable: true
    },

    renderPlayground: () => {
        return ({
            props,
            setProps
        }: {
            props: any;
            setProps: (newProps: any) => void;
        }) => (
            <PlaygroundPreview
                preview={
                    <Code {...props} className="w-full">
                        {`interface User {
  id: number;
  name: string;
  email?: string;
}

function createUser(name: string): User {
  return {
    id: Math.floor(Math.random() * 1000),
    name
  };
}`}
                    </Code>
                }
                exampleCode={`
<Button>
    Click me
</Button>
`}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Appearance">
                            <ButtonGroup>
                                <Button
                                    className={`${buttonClass} ${
                                        props.theme === "dark" &&
                                        activeButtonClass
                                    }`}
                                    onClick={() =>
                                        setProps({
                                            ...props,
                                            theme: "dark"
                                        })
                                    }
                                >
                                    Dark
                                </Button>
                                <Button
                                    className={`${buttonClass} ${
                                        props.theme === "light" &&
                                        activeButtonClass
                                    }`}
                                    onClick={() =>
                                        setProps({
                                            ...props,
                                            theme: "light"
                                        })
                                    }
                                >
                                    Light
                                </Button>
                            </ButtonGroup>
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="States">
                            <Switch
                                label="Disabled"
                                checked={props.disabled}
                                onChange={(checked) =>
                                    setProps({ ...props, disabled: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Switch
                                label="Loading"
                                checked={props.isLoading}
                                onChange={(checked) =>
                                    setProps({ ...props, isLoading: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Switch
                                label="Active"
                                checked={props.active}
                                onChange={(checked) =>
                                    setProps({ ...props, active: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Switch
                                label="Full Width"
                                checked={props.fullWidth}
                                onChange={(checked) =>
                                    setProps({ ...props, fullWidth: checked })
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
                        description: "The content of the button",
                        type: "ReactNode"
                    },
                    {
                        property: "leftSection",
                        description: "The left section of the button",
                        type: "ReactNode"
                    },
                    {
                        property: "rightSection",
                        description: "The right section of the button",
                        type: "ReactNode"
                    },
                    {
                        property: "variant",
                        description: "The variant of the button",
                        type: createTypeOptions([
                            "filled",
                            "outline",
                            "subtle",
                            "unstyled"
                        ]),
                        default: "filled"
                    },
                    {
                        property: "intent",
                        description: "The intent of the button",
                        type: createTypeOptions([
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning"
                        ])
                    },
                    {
                        property: "size",
                        description: "The size of the button",
                        type: createTypeOptions([
                            "xs",
                            "sm",
                            "md",
                            "lg",
                            "xl",
                            "2xl"
                        ]),
                        default: "sm"
                    },
                    {
                        property: "radius",
                        description: "The radius of the button",
                        type: createTypeOptions([
                            "none",
                            "sm",
                            "md",
                            "lg",
                            "xl",
                            "full"
                        ]),
                        default: "md"
                    },
                    {
                        property: "disabled",
                        description: "Whether the button is disabled",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "isLoading",
                        description:
                            "Whether the button is loading (disables the button)",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "fullWidth",
                        description:
                            "Whether the button is full width of the container",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "active",
                        description: "Whether the button is active",
                        type: "boolean",
                        default: "false"
                    }
                ]}
            />
            <StylesAPI
                title="Styles API"
                apiData={[
                    {
                        property: "classNames",
                        description:
                            "Object of class names to override component styles",
                        type: "object",
                        default: "{}"
                    },
                    {
                        property: "classNames.container",
                        description: "Root button element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.label",
                        description: "Button label text wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.leftSection",
                        description: "Left icon/element wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.rightSection",
                        description: "Right icon/element wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.active",
                        description: "Applied when button is active",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

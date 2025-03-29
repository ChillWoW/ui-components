import React from "react";
import { Button, ButtonGroup, Code, Switch, Text } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { activeButtonClass, buttonClass, switchClasses } from ".";

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
                    description="Used for showcasing code. Built on top of React Syntax Highlighter."
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
                exampleCode={`interface User {
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
                                label="Copyable"
                                checked={props.copyable}
                                onChange={(checked) =>
                                    setProps({ ...props, copyable: checked })
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
                        description: "The content of the code",
                        type: "ReactNode"
                    },
                    {
                        property: "theme",
                        description: "The theme of the code",
                        type: createTypeOptions(["dark", "light"])
                    },
                    {
                        property: "language",
                        description: "The language of the code",
                        type: "string",
                        default: "typescript"
                    },
                    {
                        property: "showLineNumbers",
                        description: "Whether to show line numbers",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "highlightLines",
                        description: "The lines to highlight",
                        type: "number[]",
                        default: "[]"
                    },
                    {
                        property: "copyable",
                        description: "Whether to make the code copyable",
                        type: "boolean",
                        default: "true"
                    },
                    {
                        property: "copyText",
                        description: "The text to show when the code is copied",
                        type: "string",
                        default: "Copied"
                    },
                    {
                        property: "copiedText",
                        description: "The text to show when the code is copied",
                        type: "string",
                        default: "Copied"
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
                        description: "Root code element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.code",
                        description: "Code element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.copyButton",
                        description: "Copy button element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.scrollbar",
                        description: "Scrollbar element",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

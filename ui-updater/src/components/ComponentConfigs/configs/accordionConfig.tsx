import React, { useState } from "react";
import {
    Accordion,
    Anchor,
    Badge,
    Button,
    ButtonGroup,
    SelectInput,
    Switch,
    Text
} from "@/components/ui";
import { IconApple, IconCarrot, IconLeaf } from "@tabler/icons-react";
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

const groceries = [
    {
        emoji: <IconApple size={16} />,
        value: "apples",
        label: "Apples",
        description:
            "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits."
    },
    {
        emoji: <IconCarrot size={16} />,
        value: "carrot",
        label: "Carrot",
        description:
            "Nutrient-packed orange vegetable. Carrot is packed with vitamins and minerals."
    },
    {
        emoji: <IconLeaf size={16} />,
        value: "broccoli",
        label: "Broccoli",
        description:
            "Nutrient-packed green vegetable. Broccoli is packed with vitamins and minerals."
    }
];

const renderAccordion = (props?: any) => (
    <Accordion {...props}>
        {groceries.map((item) => (
            <Accordion.Item key={item.value} value={item.value} {...props}>
                <Accordion.Control icon={item.emoji} {...props}>
                    {item.label}
                </Accordion.Control>
                <Accordion.Panel {...props}>{item.description}</Accordion.Panel>
            </Accordion.Item>
        ))}
    </Accordion>
);

export const accordionConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Accordion"
                    description="Accordion used for storing and displaying content in a collapsible manner."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <Anchor id="standard">
                        <ConfigCard
                            title="Standard Accordion"
                            description="The standard accordion is the most common accordion type in the whole library."
                        >
                            {renderAccordion()}
                        </ConfigCard>
                    </Anchor>

                    <Anchor id="variants">
                        <ConfigCard
                            title="Variants"
                            description="The accordion can have a different variant."
                            className="flex gap-2"
                        >
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>Filled</Text>
                                {renderAccordion({ variant: "filled" })}
                            </div>
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>Outline</Text>
                                {renderAccordion({ variant: "outline" })}
                            </div>
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>Separated</Text>
                                {renderAccordion({ variant: "separated" })}
                            </div>
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>Unstyled</Text>
                                {renderAccordion({ variant: "unstyled" })}
                            </div>
                        </ConfigCard>
                    </Anchor>

                    <Anchor id="multiple">
                        <ConfigCard
                            title="Multiple Selection"
                            description="The accordion can be used to select multiple items."
                        >
                            {renderAccordion({ multiple: true })}
                        </ConfigCard>
                    </Anchor>

                    <Anchor id="chevron-position">
                        <ConfigCard
                            title="Chevron Position"
                            description="The accordion can have the chevron on the left or right."
                            className="flex gap-2"
                        >
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>Left</Text>
                                {renderAccordion({ chevronPosition: "left" })}
                            </div>
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>Right</Text>
                                {renderAccordion({ chevronPosition: "right" })}
                            </div>
                        </ConfigCard>
                    </Anchor>

                    <Anchor id="disabled">
                        <ConfigCard
                            title="Disabled Accordion"
                            description="The accordion can be disabled"
                            className="flex gap-2"
                        >
                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>All Disabled</Text>
                                {renderAccordion({ disabled: true })}
                            </div>

                            <div className="flex flex-col gap-2 w-full items-center">
                                <Text>One Disabled</Text>
                                <Accordion>
                                    {groceries.map((item) => (
                                        <Accordion.Item
                                            key={item.value}
                                            value={item.value}
                                            disabled={item.value === "carrot"}
                                        >
                                            <Accordion.Control
                                                icon={item.emoji}
                                            >
                                                {item.label}
                                            </Accordion.Control>
                                            <Accordion.Panel>
                                                {item.description}
                                            </Accordion.Panel>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </ConfigCard>
                    </Anchor>

                    <Anchor id="radius">
                        <ConfigCard
                            title="Radius"
                            description="The accordion can have a different radius."
                        >
                            <div className="flex gap-2">
                                {["none", "sm", "md", "lg", "xl", "full"].map(
                                    (radius) => (
                                        <Badge
                                            variant="filled"
                                            size="md"
                                            className="bg-blue-500/60"
                                            key={radius}
                                        >
                                            {radius}
                                        </Badge>
                                    )
                                )}
                            </div>
                        </ConfigCard>
                    </Anchor>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        chevronPosition: "right",
        variant: "filled",
        radius: "md"
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
                preview={renderAccordion(props)}
                exampleCode={`
const groceries = [
    {
        emoji: <IconApple size={16} />,
        value: "apples",
        label: "Apples",
        description:
            "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits."
    },
    {
        emoji: <IconCarrot size={16} />,
        value: "carrot",
        label: "Carrot",
        description:
            "Nutrient-packed orange vegetable. Carrot is packed with vitamins and minerals."
    },
    {
        emoji: <IconLeaf size={16} />,
        value: "broccoli",
        label: "Broccoli",
        description:
            "Nutrient-packed green vegetable. Broccoli is packed with vitamins and minerals."
    }
];

<Accordion>
    {groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control icon={item.emoji}>
                {item.label}
            </Accordion.Control>
            <Accordion.Panel>
                {item.description}
            </Accordion.Panel>
        </Accordion.Item>
    ))}
</Accordion>
                `}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Chevron Position">
                            <ButtonGroup>
                                <Button
                                    className={`${buttonClass} ${
                                        props.chevronPosition === "left" &&
                                        activeButtonClass
                                    }`}
                                    onClick={() =>
                                        setProps({
                                            ...props,
                                            chevronPosition: "left"
                                        })
                                    }
                                >
                                    Left
                                </Button>
                                <Button
                                    className={`${buttonClass} ${
                                        props.chevronPosition === "right" &&
                                        activeButtonClass
                                    }`}
                                    onClick={() =>
                                        setProps({
                                            ...props,
                                            chevronPosition: "right"
                                        })
                                    }
                                >
                                    Right
                                </Button>
                            </ButtonGroup>
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="Appearance">
                            <SelectInput
                                label="Variant"
                                value={props.variant}
                                onChange={(value) =>
                                    setProps({ ...props, variant: value })
                                }
                                classNames={selectInputClasses}
                            >
                                <SelectInput.Option
                                    value="filled"
                                    label="Filled"
                                />
                                <SelectInput.Option
                                    value="outline"
                                    label="Outline"
                                />
                                <SelectInput.Option
                                    value="separated"
                                    label="Separated"
                                />
                                <SelectInput.Option
                                    value="unstyled"
                                    label="Unstyled"
                                />
                            </SelectInput>

                            <SelectInput
                                label="Radius"
                                value={props.radius}
                                onChange={(value) =>
                                    setProps({ ...props, radius: value })
                                }
                                classNames={selectInputClasses}
                            >
                                <SelectInput.Option value="none" label="none" />
                                <SelectInput.Option value="sm" label="sm" />
                                <SelectInput.Option value="md" label="md" />
                                <SelectInput.Option value="lg" label="lg" />
                                <SelectInput.Option value="xl" label="xl" />
                                <SelectInput.Option value="full" label="full" />
                            </SelectInput>
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
                                label="Multiple"
                                checked={props.multiple}
                                onChange={(checked) =>
                                    setProps({ ...props, multiple: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Switch
                                label="Disable Chevron Rotation"
                                checked={props.disableChevronRotation}
                                onChange={(checked) =>
                                    setProps({
                                        ...props,
                                        disableChevronRotation: checked
                                    })
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
                        property: "variant",
                        description: "The variant of the button",
                        type: createTypeOptions([
                            "filled",
                            "outline",
                            "separated",
                            "unstyled"
                        ]),
                        default: "filled"
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
                        description: "Whether the accordion is disabled",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "multiple",
                        description:
                            "Whether the accordion can have multiple items open at once",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "disableChevronRotation",
                        description:
                            "Whether the accordion chevron should not rotate",
                        type: "boolean",
                        default: "false"
                    }
                ]}
            />
            <StylesAPI
                title="Accordion Item API"
                apiData={[
                    {
                        property: "children",
                        description:
                            "The content of the accordion item (Accordion.Control, Accordion.Panel)",
                        type: "ReactNode"
                    },
                    {
                        property: "value",
                        description: "The value of the accordion item",
                        type: "string"
                    },
                    {
                        property: "disabled",
                        description: "Whether the accordion item is disabled",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "className",
                        description: "The class name of the accordion item",
                        type: "string"
                    }
                ]}
            />
            <StylesAPI
                title="Accordion Control API"
                apiData={[
                    {
                        property: "children",
                        description: "The content of the accordion control",
                        type: "ReactNode"
                    },
                    {
                        property: "icon",
                        description: "The icon of the accordion control",
                        type: "ReactNode"
                    },
                    {
                        property: "className",
                        description: "The class name of the accordion control",
                        type: "string"
                    }
                ]}
            />
            <StylesAPI
                title="Accordion Panel API"
                apiData={[
                    {
                        property: "children",
                        description: "The content of the accordion panel",
                        type: "ReactNode"
                    },
                    {
                        property: "className",
                        description: "The class name of the accordion panel",
                        type: "string"
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
                        description: "Root accordion element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.item",
                        description: "Accordion item element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.itemIcon",
                        description: "Accordion item icon wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.itemLabel",
                        description: "Accordion item label wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.itemActive",
                        description: "Applied when accordion item is active",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.itemActiveIcon",
                        description: "Applied when accordion item is active",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.itemActiveLabel",
                        description: "Applied when accordion item is active",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.itemActiveDescription",
                        description: "Applied when accordion item is active",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.chevron",
                        description: "Accordion chevron element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.chevronRotated",
                        description:
                            "Applied when accordion chevron is rotated",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

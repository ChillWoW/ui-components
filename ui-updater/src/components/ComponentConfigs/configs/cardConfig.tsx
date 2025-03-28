import React, { useState } from "react";
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonVariant,
    ButtonIntent
} from "@/components/ui/Buttons/Button";
import {
    Anchor,
    Card,
    CardPadding,
    CardRadius,
    CardShadow,
    CardVariant,
    SelectInput,
    Switch,
    Text
} from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

const renderCard = (props?: any) => {
    return (
        <Card {...props}>
            <img
                className="rounded-t-lg w-full h-[252px] object-cover"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/256.jpg"
                alt="Image"
            />
            <p className="text-base text-center p-4">
                Quick example for how to use the card component, this is a
                description of the card or anything else you want to add. This
                is still just a rendered background with size support.
            </p>
        </Card>
    );
};

export const cardConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Card"
                    description="Card for displaying content."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Card"
                        description="The standard card is the most common card type in the whole library."
                        anchorId="standard"
                    >
                        {renderCard()}
                    </ConfigCard>

                    <ConfigCard
                        title="Variants"
                        description="The card can be styled with different variants."
                        anchorId="variants"
                        className="flex gap-2 items-center"
                    >
                        {["filled", "outline", "unstyled"].map((variant) => (
                            <Card
                                variant={variant as CardVariant}
                                key={variant}
                            >
                                {variant.charAt(0).toUpperCase() +
                                    variant.slice(1)}
                            </Card>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The card can be styled with different radius."
                        className="flex gap-2 items-center"
                    >
                        {["none", "sm", "md", "lg", "xl", "full"].map(
                            (radius) => (
                                <Card
                                    radius={radius as CardRadius}
                                    key={radius}
                                >
                                    {radius.charAt(0).toUpperCase() +
                                        radius.slice(1)}
                                </Card>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Padding"
                        description="The card can be styled with different padding."
                        className="flex gap-2 items-center"
                    >
                        {["none", "xs", "sm", "md", "lg", "xl"].map(
                            (padding) => (
                                <Card
                                    padding={padding as CardPadding}
                                    key={padding}
                                >
                                    {padding.charAt(0).toUpperCase() +
                                        padding.slice(1)}
                                </Card>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Hover"
                        description="The card can be styled with different hover."
                        className="flex gap-2 items-center"
                    >
                        {renderCard({ hover: true })}
                    </ConfigCard>

                    <ConfigCard
                        title="Shadow"
                        description="The card can be styled with different shadow."
                        className="flex flex-col gap-2"
                    >
                        <div className="flex gap-2 items-center">
                            {["none", "sm", "md", "lg", "xl", "2xl"].map(
                                (shadow) => (
                                    <Card
                                        shadow={shadow as CardShadow}
                                        key={shadow}
                                    >
                                        {shadow.charAt(0).toUpperCase() +
                                            shadow.slice(1)}
                                    </Card>
                                )
                            )}
                        </div>

                        <Text size="sm" className="text-gray-400">
                            The shadow may not show in the preview, but it
                            should work in the playground.
                        </Text>
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        variant: "filled",
        radius: "md",
        padding: "md",
        shadow: "sm",
        hover: false
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
                preview={renderCard({ ...props })}
                exampleCode={`
<Card>
    Card Content
</Card>
`}
                controls={
                    <>
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
                                    value="unstyled"
                                    label="Unstyled"
                                />
                            </SelectInput>

                            <SelectInput
                                label="Padding"
                                value={props.padding}
                                onChange={(value) =>
                                    setProps({ ...props, padding: value })
                                }
                                classNames={selectInputClasses}
                            >
                                <SelectInput.Option value="none" label="none" />
                                <SelectInput.Option value="xs" label="xs" />
                                <SelectInput.Option value="sm" label="sm" />
                                <SelectInput.Option value="md" label="md" />
                                <SelectInput.Option value="lg" label="lg" />
                                <SelectInput.Option value="xl" label="xl" />
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

                            <SelectInput
                                label="Shadow"
                                value={props.shadow}
                                onChange={(value) =>
                                    setProps({ ...props, shadow: value })
                                }
                                classNames={selectInputClasses}
                            >
                                <SelectInput.Option value="none" label="none" />
                                <SelectInput.Option value="sm" label="sm" />
                                <SelectInput.Option value="md" label="md" />
                                <SelectInput.Option value="lg" label="lg" />
                                <SelectInput.Option value="xl" label="xl" />
                                <SelectInput.Option value="2xl" label="2xl" />
                            </SelectInput>
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="States">
                            <Switch
                                label="Hover"
                                checked={props.hover}
                                onChange={(checked) =>
                                    setProps({ ...props, hover: checked })
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
                        description: "The content of the card",
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
                        property: "padding",
                        description: "The padding of the card",
                        type: createTypeOptions([
                            "none",
                            "xs",
                            "sm",
                            "md",
                            "lg",
                            "xl"
                        ]),
                        default: "md"
                    },
                    {
                        property: "shadow",
                        description: "The shadow of the card",
                        type: createTypeOptions([
                            "none",
                            "sm",
                            "md",
                            "lg",
                            "xl",
                            "2xl"
                        ]),
                        default: "sm"
                    },
                    {
                        property: "hover",
                        description: "Whether the card has a hover effect",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "onClick",
                        description:
                            "The onClick event of the card (Adds a pointer cursor when hovering)",
                        type: "function"
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
                        description: "Root card element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.content",
                        description: "Card content wrapper",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

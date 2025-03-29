import React, { useState } from "react";
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonVariant,
    ButtonIntent
} from "@/components/ui/Buttons/Button";
import { Anchor, SelectInput, Switch, Text, Tooltip } from "@/components/ui";
import { IconCheck, IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";
import { ColorSwatch } from "@/components/ui/ColorSwatch/ColorSwatch";
import {
    ColorSwatchRadius,
    ColorSwatchShadow,
    ColorSwatchSize
} from "@/components/ui/ColorSwatch/types";

export const colorSwatchConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Color Swatch"
                    description="Color Swatch for showcasing colors and possibly interacting with them."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Color Swatch"
                        description="The standard color swatch is the most common color swatch type in the whole library."
                        anchorId="standard"
                    >
                        <ColorSwatch color="#2a2a2a" />
                    </ConfigCard>

                    <ConfigCard
                        title="Color"
                        description="The color swatch can be styled with different colors. (All CSS colors are supported)"
                        anchorId="color"
                        className="flex gap-2 items-center"
                    >
                        <ColorSwatch color="#2a2a2a" />
                        <ColorSwatch color="#000000" />
                        <ColorSwatch color="#ffffff" />
                        <ColorSwatch color="#ff0000" />
                        <ColorSwatch color="#00ff00" />
                    </ConfigCard>

                    <ConfigCard
                        title="Sizes"
                        description="The button can be styled with different sizes."
                        className="flex gap-2 items-end"
                    >
                        {["xs", "sm", "md", "lg", "xl", "2xl"].map((size) => (
                            <Tooltip key={size} label={size}>
                                <ColorSwatch
                                    color="#2a2a2a"
                                    size={size as ColorSwatchSize}
                                />
                            </Tooltip>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Shadows"
                        description="The color swatch can have a shadow. "
                        anchorId="shadows"
                        className="flex flex-col gap-2"
                    >
                        <div className="flex gap-2 items-center">
                            {["none", "xs", "sm", "md", "lg"].map((shadow) => (
                                <Tooltip key={shadow} label={shadow}>
                                    <ColorSwatch
                                        color="#2a2a2a"
                                        shadow={shadow as ColorSwatchShadow}
                                    />
                                </Tooltip>
                            ))}
                        </div>

                        <Text size="sm" className="text-gray-400">
                            The shadow may not show in the preview, but it
                            should work in the playground.
                        </Text>
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The color swatch can have a different radius."
                        anchorId="radius"
                        className="flex gap-2 items-center"
                    >
                        {["none", "sm", "md", "lg", "xl", "full"].map(
                            (radius) => (
                                <Tooltip key={radius} label={radius}>
                                    <ColorSwatch
                                        color="#2a2a2a"
                                        radius={radius as ColorSwatchRadius}
                                    />
                                </Tooltip>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Disabled"
                        description="The color swatch can be in a disabled state."
                        anchorId="disabled"
                        className="flex gap-1 items-center"
                    >
                        <ColorSwatch color="#2a2a2a" disabled />
                        <ColorSwatch color="#fff" disabled />
                    </ConfigCard>

                    <ConfigCard
                        title="Clickable"
                        description="The color swatch can be clickable. Just add an onClick handler to the component."
                        anchorId="clickable"
                        className="flex gap-1 items-center"
                    >
                        <ColorSwatch color="#2a2a2a" onClick={() => {}} />
                        <ColorSwatch color="#fff" onClick={() => {}} />
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        color: "#228be6",
        size: "md",
        radius: "md",
        shadow: "sm",
        disabled: false
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
                preview={<ColorSwatch {...props} />}
                exampleCode={`
<ColorSwatch color="#fff" />
`}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Background Color">
                            <div className="flex gap-2">
                                {[
                                    "#228be6", // blue
                                    "#ef4444", // red
                                    "#22c55e", // green
                                    "#f59e0b", // amber
                                    "#8b5cf6", // violet
                                    "#14b8a6", // teal
                                    "#e11d48", // rose
                                    "#9333ea", // purple
                                    "#f97316", // orange
                                    "rgba(234, 22, 174, 0.5)" // semi-transparent pink
                                ].map((color, index) => (
                                    <ColorSwatch
                                        color={color}
                                        size="md"
                                        key={index}
                                        onClick={() =>
                                            setProps({
                                                ...props,
                                                color
                                            })
                                        }
                                        aria-label={`Set color to ${color}`}
                                    >
                                        {color === props.color && (
                                            <IconCheck size={16} />
                                        )}
                                    </ColorSwatch>
                                ))}
                            </div>

                            <SelectInput
                                label="Size"
                                value={props.size}
                                onChange={(value) =>
                                    setProps({ ...props, size: value })
                                }
                                classNames={selectInputClasses}
                            >
                                <SelectInput.Option value="xs" label="xs" />
                                <SelectInput.Option value="sm" label="sm" />
                                <SelectInput.Option value="md" label="md" />
                                <SelectInput.Option value="lg" label="lg" />
                                <SelectInput.Option value="xl" label="xl" />
                                <SelectInput.Option value="2xl" label="2xl" />
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
                                <SelectInput.Option value="xs" label="xs" />
                                <SelectInput.Option value="sm" label="sm" />
                                <SelectInput.Option value="md" label="md" />
                                <SelectInput.Option value="lg" label="lg" />
                                <SelectInput.Option value="xl" label="xl" />
                                <SelectInput.Option value="2xl" label="2xl" />
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
                        property: "color",
                        description: "The color of the color swatch",
                        type: "string"
                    },
                    {
                        property: "size",
                        description: "The size of the color swatch",
                        type: "string"
                    },
                    {
                        property: "radius",
                        description: "The radius of the color swatch",
                        type: "string"
                    },
                    {
                        property: "shadow",
                        description: "The shadow of the color swatch",
                        type: createTypeOptions([
                            "none",
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
                        property: "disabled",
                        description: "Whether the color swatch is disabled",
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
                        description: "The root element of the color swatch",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.color",
                        description: "The color of the color swatch",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.content",
                        description: "The content of the color swatch",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

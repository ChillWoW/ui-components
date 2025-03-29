import React from "react";
import {
    Badge,
    BadgeIntent,
    BadgeRadius,
    BadgeShape,
    BadgeSize,
    BadgeVariant
} from "@/components/ui/Badge";
import {
    ColorSwatch,
    SelectInput,
    Switch,
    Text,
    Tooltip
} from "@/components/ui";
import { IconCheck, IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const badgeConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Badge"
                    description="Badge for displaying notifications or status."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Badge"
                        description="The standard badge is the most common badge type in the whole library."
                        anchorId="standard"
                    >
                        <Badge className="bg-gray-700">Standard Badge</Badge>
                    </ConfigCard>

                    <ConfigCard
                        title="Variants"
                        description="The badge can be styled with different variants."
                        anchorId="variants"
                        className="flex gap-2 items-center"
                    >
                        {["filled", "outline", "dot", "unstyled"].map(
                            (variant) => (
                                <Badge
                                    variant={variant as BadgeVariant}
                                    className={
                                        variant === "filled"
                                            ? "bg-gray-700"
                                            : undefined
                                    }
                                    key={variant}
                                >
                                    {variant.charAt(0).toUpperCase() +
                                        variant.slice(1)}
                                </Badge>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Intents"
                        description="The badge can be styled with different intents."
                        anchorId="intents"
                        className="flex gap-2 items-center"
                    >
                        {[
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning"
                        ].map((intent) => (
                            <Badge intent={intent as BadgeIntent} key={intent}>
                                {intent.charAt(0).toUpperCase() +
                                    intent.slice(1)}
                            </Badge>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Sizes"
                        description="The badge can be styled with different sizes."
                        className="flex gap-2 items-end"
                    >
                        {["xs", "sm", "md", "lg", "xl", "2xl"].map((size) => (
                            <Badge
                                size={size as BadgeSize}
                                key={size}
                                className="bg-gray-700"
                            >
                                {size.charAt(0).toUpperCase() + size.slice(1)}
                            </Badge>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Sections"
                        description="The badge can have a left or right section."
                        anchorId="sections"
                        className="flex gap-2 items-center"
                    >
                        <Badge
                            size="md"
                            leftSection={<IconUser size={16} />}
                            className="bg-gray-700"
                        >
                            Click Here
                        </Badge>
                        <Badge
                            size="md"
                            rightSection={<IconUser size={16} />}
                            className="bg-gray-700"
                        >
                            Click Here
                        </Badge>
                    </ConfigCard>

                    <ConfigCard
                        title="Shapes"
                        description="The badge can have a different shape."
                        anchorId="shapes"
                        className="flex gap-2 items-center"
                    >
                        {["rounded", "square", "pill"].map((shape) => (
                            <Tooltip label={shape} key={shape}>
                                <Badge
                                    size="xl"
                                    shape={shape as BadgeShape}
                                    className="bg-gray-700"
                                />
                            </Tooltip>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The badge can have a different radius."
                        anchorId="radius"
                        className="flex gap-2 items-center"
                    >
                        {["none", "sm", "md", "lg", "xl", "full"].map(
                            (radius) => (
                                <Tooltip label={radius} key={radius}>
                                    <Badge
                                        size="xl"
                                        radius={radius as BadgeRadius}
                                        className="bg-gray-700"
                                    />
                                </Tooltip>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Link"
                        description="The badge can be a link. Requires props: asLink, href and optionally target."
                        anchorId="link"
                        className="flex gap-1 items-center"
                    >
                        <Badge
                            asLink
                            href="https://www.chillwow.org"
                            target="_blank"
                            className="bg-gray-700"
                        >
                            Link
                        </Badge>
                    </ConfigCard>

                    <ConfigCard
                        title="Color"
                        description="The avatar can have a different color (any CSS color)."
                        anchorId="color"
                        className="flex gap-2 items-center"
                    >
                        {[
                            "red",
                            "blue",
                            "green",
                            "purple",
                            "pink",
                            "gray",
                            "black"
                        ].map((color) => (
                            <Badge color={color} key={color}>
                                {color}
                            </Badge>
                        ))}
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        children: "Content",
        variant: "filled",
        intent: "",
        size: "md",
        shape: "rounded",
        color: "#228be6",
        asLink: false,
        href: "https://www.chillwow.org",
        target: "_blank"
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
                    <Badge
                        variant={props.variant}
                        intent={props.intent}
                        size={props.size}
                        radius={props.radius}
                        shape={props.shape}
                        color={props.color}
                        leftSection={props.leftSection && <IconUser />}
                        rightSection={props.rightSection && <IconUserCheck />}
                        asLink={props.asLink}
                        href={props.href}
                        target={props.target}
                    >
                        {props.children}
                    </Badge>
                }
                exampleCode={`
<Badge>
  ${props.children}
</Badge>
`}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Content">
                            <Switch
                                label="Left Icon"
                                checked={props.leftSection}
                                onChange={(checked) =>
                                    setProps({ ...props, leftSection: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Switch
                                label="Right Icon"
                                checked={props.rightSection}
                                onChange={(checked) =>
                                    setProps({
                                        ...props,
                                        rightSection: checked
                                    })
                                }
                                classNames={switchClasses}
                            />
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
                                <SelectInput.Option value="dot" label="Dot" />
                                <SelectInput.Option
                                    value="unstyled"
                                    label="Unstyled"
                                />
                            </SelectInput>

                            <SelectInput
                                label="Intent"
                                value={props.intent}
                                onChange={(value) =>
                                    setProps({ ...props, intent: value })
                                }
                                classNames={selectInputClasses}
                                clearable
                            >
                                <SelectInput.Option
                                    value="primary"
                                    label="Primary"
                                />
                                <SelectInput.Option
                                    value="secondary"
                                    label="Secondary"
                                />
                                <SelectInput.Option
                                    value="success"
                                    label="Success"
                                />
                                <SelectInput.Option
                                    value="danger"
                                    label="Danger"
                                />
                                <SelectInput.Option
                                    value="warning"
                                    label="Warning"
                                />
                            </SelectInput>

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
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="Background Color">
                            <div className="flex gap-2">
                                {[
                                    "",
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
                                ].map((color) => (
                                    <ColorSwatch
                                        color={color}
                                        size="md"
                                        key={color}
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
                            <Text size="xs" className="text-gray-400">
                                If this is set, the Intent prop will be ignored.
                                Use the first option to turn it off.
                            </Text>
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="States">
                            <Switch
                                label="Link"
                                checked={props.asLink}
                                onChange={(checked) =>
                                    setProps({ ...props, asLink: checked })
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
                        description: "The content of the badge",
                        type: "ReactNode"
                    },
                    {
                        property: "leftSection",
                        description: "The left section of the badge",
                        type: "ReactNode"
                    },
                    {
                        property: "rightSection",
                        description: "The right section of the badge",
                        type: "ReactNode"
                    },
                    {
                        property: "variant",
                        description: "The variant of the badge",
                        type: createTypeOptions([
                            "filled",
                            "outline",
                            "dot",
                            "unstyled"
                        ]),
                        default: "filled"
                    },
                    {
                        property: "intent",
                        description: "The intent of the badge",
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
                        description: "The size of the badge",
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
                        property: "shape",
                        description: "The shape of the badge",
                        type: createTypeOptions(["rounded", "square", "pill"]),
                        default: "rounded"
                    },
                    {
                        property: "radius",
                        description: "The radius of the badge",
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
                        property: "color",
                        description: "The color of the badge",
                        type: "string",
                        default: "transparent"
                    },
                    {
                        property: "asLink",
                        description: "Whether the badge is a link",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "href (if asLink is true)",
                        description: "The href of the badge",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "target (if asLink is true)",
                        description: "The target of the badge",
                        type: "string",
                        default: "-"
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
                        property: "classNames.dot",
                        description: "Applied when variant is dot",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

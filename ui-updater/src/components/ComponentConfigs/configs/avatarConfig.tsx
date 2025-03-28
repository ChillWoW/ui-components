import React from "react";
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonVariant,
    ButtonIntent
} from "@/components/ui/Buttons/Button";
import {
    Anchor,
    Avatar,
    AvatarBadgePosition,
    AvatarGroup,
    AvatarRadius,
    AvatarShape,
    AvatarSize,
    ButtonGroup,
    ColorSwatch,
    SelectInput,
    Switch,
    Text,
    TextInput,
    Tooltip
} from "@/components/ui";
import { IconCheck, IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import {
    activeButtonClass,
    buttonClass,
    selectInputClasses,
    switchClasses,
    tooltipClass
} from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

const renderAvatarGroup = (props?: any) => {
    return (
        <AvatarGroup
            avatars={[
                {
                    src: "https://github.com/ChillWoW.png",
                    alt: "avatar"
                },
                {
                    color: "red",
                    placeholder: "AA"
                },
                {
                    color: "blue",
                    placeholder: "AB"
                },
                {
                    color: "green",
                    placeholder: "AC"
                },
                {
                    color: "yellow",
                    placeholder: "AD"
                },
                {
                    color: "purple",
                    placeholder: "AE"
                }
            ]}
            {...props}
        />
    );
};

export const avatarConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Avatar"
                    description="Avatar for displaying user profile images, icons or initials."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Avatar"
                        description="The standard avatar is the most common avatar type in the whole library."
                        anchorId="standard"
                    >
                        <Avatar src="https://github.com/ChillWoW.png" />
                    </ConfigCard>

                    <ConfigCard
                        title="src and alt"
                        description="The avatar can have a src (image url) and alt (image description if not able to load)."
                        anchorId="src-and-alt"
                    >
                        <Avatar
                            src="https://github.com/ChillWoW.png"
                            alt="avatar"
                        />
                    </ConfigCard>

                    <ConfigCard
                        title="Placeholder"
                        description="The avatar can have a placeholder (text if not able to load image)."
                        anchorId="placeholder"
                        className="flex gap-2 items-center"
                    >
                        <Avatar placeholder="AA" className="bg-gray-700" />
                        <Avatar placeholder="AB" className="bg-gray-700" />
                        <Avatar placeholder="AC" className="bg-gray-700" />
                        <Avatar placeholder="AAA" className="bg-gray-700" />
                    </ConfigCard>

                    <ConfigCard
                        title="Size"
                        description="The avatar can be styled with different sizes."
                        anchorId="size"
                        className="flex gap-2 items-center"
                    >
                        {["xs", "sm", "md", "lg", "xl", "2xl"].map((size) => (
                            <Avatar
                                size={size as AvatarSize}
                                key={size}
                                placeholder={
                                    size.charAt(0).toUpperCase() + size.slice(1)
                                }
                                className="bg-gray-700"
                            />
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Shape"
                        description="The avatar can have a shape. It will be applied to all avatars."
                        anchorId="shape"
                        className="flex gap-2 items-center"
                    >
                        {["circle", "square"].map((shape) => (
                            <Tooltip
                                label={shape}
                                key={shape}
                                className={tooltipClass}
                            >
                                <Avatar
                                    shape={shape as AvatarShape}
                                    className="bg-gray-700"
                                />
                            </Tooltip>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The avatar group can have a radius. It will be applied to all avatars. Shape must be square to use this prop."
                        anchorId="radius"
                        className="flex gap-2 items-center"
                    >
                        {["none", "sm", "md", "lg", "full"].map((radius) => (
                            <Tooltip
                                label={radius}
                                key={radius}
                                className={tooltipClass}
                            >
                                <Avatar
                                    radius={radius as AvatarRadius}
                                    shape="square"
                                    className="bg-gray-700"
                                />
                            </Tooltip>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Badges"
                        description="The avatar can have a badge. Badge can have a content and color. Position is shown under this section."
                        anchorId="badges"
                        className="flex gap-2 items-center"
                    >
                        <Avatar
                            size="md"
                            badge={{
                                content: "1",
                                color: "red"
                            }}
                            className="bg-gray-700"
                        />
                        <Avatar
                            size="md"
                            badge={{
                                color: "red"
                            }}
                            className="bg-gray-700"
                        />
                        <Avatar size="md" badge={{}} className="bg-gray-700" />
                    </ConfigCard>

                    <ConfigCard
                        title="Badge Position"
                        description="The badge can have a different position. Hover over the avatar to see the badge position."
                        anchorId="badge-position"
                        className="flex gap-2 items-center"
                    >
                        {[
                            "top-right",
                            "bottom-left",
                            "bottom-right",
                            "top-left"
                        ].map((position) => (
                            <Tooltip label={position} key={position}>
                                <Avatar
                                    size="md"
                                    badge={{
                                        position:
                                            position as AvatarBadgePosition
                                    }}
                                    className="bg-gray-700"
                                />
                            </Tooltip>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Color"
                        description="The avatar can have a different color (any CSS color)."
                        anchorId="color"
                        className="flex gap-2 items-center"
                    >
                        <Avatar color="red" />
                        <Avatar color="blue" />
                        <Avatar color="green" />
                        <Avatar color="yellow" />
                        <Avatar color="purple" />
                        <Avatar color="pink" />
                        <Avatar color="gray" />
                        <Avatar color="black" />
                    </ConfigCard>

                    <ConfigLabel label="Group" />
                    <ConfigCard
                        title="Group"
                        description="Avatars can be grouped together using the AvatarGroup component."
                        anchorId="group"
                    >
                        {renderAvatarGroup()}
                    </ConfigCard>

                    <ConfigCard
                        title="Limit"
                        description="The avatar group can have a limit. If the limit is reached, the remaining avatars will be shown as a +N."
                        anchorId="limit"
                    >
                        {renderAvatarGroup({ limit: 3 })}
                    </ConfigCard>

                    <ConfigCard
                        title="Spacing"
                        description="The avatar group can have a spacing. Spacing is the distance between the avatars."
                        anchorId="spacing"
                    >
                        {renderAvatarGroup({ spacing: 10 })}
                    </ConfigCard>

                    <ConfigCard
                        title="Overlap"
                        description="The avatar group can have a overlap. Overlap is between right and left."
                        anchorId="overlap"
                        className="flex gap-2"
                    >
                        <div className="flex flex-col">
                            <Text size="sm">Left</Text>
                            {renderAvatarGroup({ overlapFrom: "left" })}
                        </div>
                        <div className="flex flex-col">
                            <Text size="sm">Right</Text>
                            {renderAvatarGroup({ overlapFrom: "right" })}
                        </div>
                    </ConfigCard>

                    <ConfigCard
                        title="Size"
                        description="The avatar group can have a size. Size is the size of the avatars."
                        anchorId="size"
                        className="flex flex-col gap-2"
                    >
                        <Anchor id="size">Click here to see the size</Anchor>
                    </ConfigCard>

                    <ConfigCard
                        title="Shape"
                        description="The avatar group can have a shape. It will be applied to all avatars."
                        className="flex gap-2 items-center"
                    >
                        <Anchor id="shape">Click here to see the shape</Anchor>
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The avatar group can have a radius. It will be applied to all avatars. Shape must be square to use this prop."
                        className="flex gap-2 items-center"
                    >
                        <Anchor id="radius">
                            Click here to see the radius
                        </Anchor>
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        showImage: true,
        src: "https://github.com/ChillWoW.png",
        alt: "avatar",
        size: "md",
        shape: "circle",
        radius: "md",
        showBadge: false,
        color: "#228be6",
        placeholder: "AA",
        badge: {
            color: "#228be6",
            position: "top-right"
        }
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
                    <Avatar
                        src={props.showImage ? props.src : undefined}
                        alt={props.alt}
                        size={props.size}
                        shape={props.shape}
                        radius={props.radius}
                        placeholder={props.placeholder}
                        color={props.color}
                        badge={
                            props.showBadge && {
                                color: props.badge.color,
                                position: props.badge.position
                            }
                        }
                    />
                }
                exampleCode={`
<Avatar
    src="https://github.com/ChillWoW.png"
    alt="avatar"
    size="md"
    shape="square"
    radius="md"
/>
`}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Appearance">
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
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="Shape">
                            <ButtonGroup>
                                <Button
                                    className={`${buttonClass} ${
                                        props.shape === "circle" &&
                                        activeButtonClass
                                    }`}
                                    onClick={() =>
                                        setProps({ ...props, shape: "circle" })
                                    }
                                >
                                    Circle
                                </Button>

                                <Button
                                    className={`${buttonClass} ${
                                        props.shape === "square" &&
                                        activeButtonClass
                                    }`}
                                    onClick={() =>
                                        setProps({ ...props, shape: "square" })
                                    }
                                >
                                    Square
                                </Button>
                            </ButtonGroup>

                            <SelectInput
                                label="Radius"
                                value={props.radius}
                                onChange={(value) =>
                                    setProps({ ...props, radius: value })
                                }
                                classNames={selectInputClasses}
                                disabled={props.shape !== "square"}
                            >
                                <SelectInput.Option value="none" label="none" />
                                <SelectInput.Option value="sm" label="sm" />
                                <SelectInput.Option value="md" label="md" />
                                <SelectInput.Option value="lg" label="lg" />
                                <SelectInput.Option value="xl" label="xl" />
                                <SelectInput.Option value="full" label="full" />
                            </SelectInput>

                            <Text size="sm" weight="bold">
                                Background Color
                            </Text>
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
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="Badge">
                            <Switch
                                label="Show Badge"
                                checked={props.showBadge}
                                onChange={(checked) =>
                                    setProps({ ...props, showBadge: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Text size="sm" weight="bold">
                                Badge Color
                            </Text>
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
                                                badge: {
                                                    ...props.badge,
                                                    color
                                                }
                                            })
                                        }
                                        aria-label={`Set color to ${color}`}
                                        disabled={!props.showBadge}
                                    >
                                        {props.badge &&
                                            props.badge.color === color && (
                                                <IconCheck size={16} />
                                            )}
                                    </ColorSwatch>
                                ))}
                            </div>
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="States">
                            <Switch
                                label="Show Image"
                                checked={props.showImage}
                                onChange={(checked) =>
                                    setProps({ ...props, showImage: checked })
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
                        property: "src",
                        description: "The source of the image",
                        type: "string"
                    },
                    {
                        property: "alt",
                        description: "The alt text of the image",
                        type: "string"
                    },
                    {
                        property: "placeholder",
                        description: "The placeholder text of the avatar",
                        type: "string"
                    },
                    {
                        property: "color",
                        description: "The color of the avatar",
                        type: "string"
                    },
                    {
                        property: "size",
                        description: "The size of the avatar",
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
                        description: "The shape of the avatar",
                        type: createTypeOptions(["circle", "square"]),
                        default: "circle"
                    },
                    {
                        property: "radius",
                        description: "The radius of the avatar",
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
                        property: "badge",
                        description: "The badge of the avatar",
                        type: "object",
                        default: "{}"
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
                        description: "Root avatar element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.image",
                        description: "Avatar image element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.placeholder",
                        description: "Placeholder text element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.badge",
                        description: "Badge element",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
            <StylesAPI
                title="Avatar Group API"
                apiData={[
                    {
                        property: "avatars",
                        description: "The avatars of the avatar group",
                        type: "array",
                        default: "[]"
                    },
                    {
                        property: "limit",
                        description: "The limit of the avatar group",
                        type: "number",
                        default: "0"
                    },
                    {
                        property: "spacing",
                        description: "The spacing of the avatar group",
                        type: "number",
                        default: "0"
                    },
                    {
                        property: "size",
                        description: "The size of the avatar",
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
                        description: "The shape of the avatar",
                        type: createTypeOptions(["circle", "square"]),
                        default: "circle"
                    },
                    {
                        property: "radius",
                        description: "The radius of the avatar",
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
                        property: "overlapFrom",
                        description: "The overlap of the avatar",
                        type: createTypeOptions(["left", "right"]),
                        default: "left"
                    }
                ]}
            />

            <StylesAPI
                title="Avatar Group Styles API"
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
                        description: "Root avatar element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.avatar",
                        description: "Avatar element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.remaining",
                        description: "Remaining avatars element",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

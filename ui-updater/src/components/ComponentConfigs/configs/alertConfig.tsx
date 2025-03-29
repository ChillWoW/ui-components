import React from "react";
import {
    Alert,
    AlertIconPosition,
    AlertIntent,
    AlertRadius,
    AlertShadow,
    AlertVariant,
    RadioGroup,
    SelectInput,
    Switch,
    Text
} from "@/components/ui";
import { IconAlertCircle, IconX } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const alertConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Alert"
                    description="Alert for user interaction."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Alert"
                        description="The standard alert is the most common alert type in the whole library."
                        anchorId="standard"
                    >
                        <Alert>
                            <Alert.Title>Alert Title</Alert.Title>
                            <Alert.Description>
                                Alert Description
                            </Alert.Description>
                        </Alert>
                    </ConfigCard>

                    <ConfigCard
                        title="Variants"
                        description="The button can be styled with different variants."
                        anchorId="variants"
                        className="flex flex-col gap-2 items-center"
                    >
                        {["filled", "outline", "unstyled"].map((variant) => (
                            <Alert
                                variant={variant as AlertVariant}
                                key={variant}
                            >
                                {variant.charAt(0).toUpperCase() +
                                    variant.slice(1)}
                            </Alert>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Intents"
                        description="The button can be styled with different intents."
                        anchorId="intents"
                        className="flex flex-col gap-2 items-center"
                    >
                        {["success", "error", "warning", "info"].map(
                            (intent) => (
                                <Alert
                                    intent={intent as AlertIntent}
                                    key={intent}
                                    icon={<IconAlertCircle />}
                                >
                                    <Alert.Title>
                                        {intent.charAt(0).toUpperCase() +
                                            intent.slice(1)}
                                    </Alert.Title>
                                    <Alert.Description>
                                        This is an alert description.
                                    </Alert.Description>
                                </Alert>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The button can have a different radius."
                        anchorId="radius"
                        className="flex flex-col gap-2 items-center"
                    >
                        {["none", "sm", "md", "lg", "xl", "full"].map(
                            (radius) => (
                                <Alert
                                    radius={radius as AlertRadius}
                                    key={radius}
                                >
                                    <Alert.Title>
                                        {radius.charAt(0).toUpperCase() +
                                            radius.slice(1)}
                                    </Alert.Title>
                                </Alert>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Shadow"
                        description="The alert can have a different shadow."
                        anchorId="shadow"
                        className="flex flex-col gap-4 items-center"
                    >
                        {["none", "xs", "sm", "md", "lg", "xl", "2xl"].map(
                            (shadow) => (
                                <Alert
                                    shadow={shadow as AlertShadow}
                                    key={shadow}
                                >
                                    <Alert.Title>
                                        {shadow.charAt(0).toUpperCase() +
                                            shadow.slice(1)}
                                    </Alert.Title>
                                </Alert>
                            )
                        )}
                        <Text size="sm" className="text-gray-400">
                            The shadow may not show in the preview, but it
                            should work in the playground.
                        </Text>
                    </ConfigCard>

                    <ConfigCard
                        title="Compact"
                        description="The button can be compact."
                        anchorId="compact"
                    >
                        <Alert compact>
                            <Alert.Title>This is a compact alert</Alert.Title>
                            <Alert.Description>
                                This is a compact alert description.
                            </Alert.Description>
                        </Alert>
                    </ConfigCard>

                    <ConfigCard
                        title="Without Border"
                        description="The alert does not have a border. (withBorder={false})"
                        anchorId="without-border"
                    >
                        <Alert withBorder={false}>
                            <Alert.Title>
                                This is an alert without a border
                            </Alert.Title>
                            <Alert.Description>
                                This is an alert without a border description.
                            </Alert.Description>
                        </Alert>
                    </ConfigCard>

                    <ConfigCard
                        title="Icon Position"
                        description="The alert can have a different icon position."
                        anchorId="icon-position"
                        className="flex flex-col gap-2 items-center"
                    >
                        {["top", "center", "bottom"].map((position) => (
                            <Alert
                                iconPosition={position as AlertIconPosition}
                                icon={<IconAlertCircle />}
                                key={position}
                            >
                                <Alert.Title>
                                    {position.charAt(0).toUpperCase() +
                                        position.slice(1)}
                                </Alert.Title>
                                <Alert.Description>
                                    This is an alert description.
                                </Alert.Description>
                            </Alert>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Closeable"
                        description="The alert can be closed."
                        anchorId="closeable"
                        className="flex flex-col gap-2 items-center"
                    >
                        {["success", "error", "warning", "info"].map(
                            (intent) => (
                                <Alert
                                    closeable
                                    intent={intent as AlertIntent}
                                    key={intent}
                                    icon={<IconAlertCircle />}
                                >
                                    <Alert.Title>
                                        This is a closeable alert
                                    </Alert.Title>
                                    <Alert.Description>
                                        This is a closeable alert description.
                                    </Alert.Description>
                                </Alert>
                            )
                        )}
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        intent: "info",
        variant: "filled",
        radius: "md",
        shadow: "sm",
        iconPosition: "center",
        showIcon: true,
        compact: false,
        withBorder: true
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
                    <Alert
                        icon={props.showIcon ? <IconAlertCircle /> : undefined}
                        intent={props.intent as AlertIntent}
                        variant={props.variant as AlertVariant}
                        radius={props.radius as AlertRadius}
                        shadow={props.shadow as AlertShadow}
                        iconPosition={props.iconPosition as AlertIconPosition}
                        closeable={props.closeable}
                        withBorder={props.withBorder}
                        compact={props.compact}
                    >
                        <Alert.Title>Alert Title</Alert.Title>
                        <Alert.Description>Alert Description</Alert.Description>
                    </Alert>
                }
                exampleCode={`
<Alert icon={<IconAlertCircle />}>
    <Alert.Title>Alert Title</Alert.Title>
    <Alert.Description>Alert Description</Alert.Description>
</Alert>
`}
                controls={
                    <>
                        <Alert compact icon={<IconAlertCircle />}>
                            <Alert.Title>Info</Alert.Title>
                            <Alert.Description>
                                If you close the Alert, just re-render a
                                property.
                            </Alert.Description>
                        </Alert>
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
                                label="Intent"
                                value={props.intent}
                                onChange={(value) =>
                                    setProps({ ...props, intent: value })
                                }
                                classNames={selectInputClasses}
                            >
                                <SelectInput.Option value="info" label="Info" />
                                <SelectInput.Option
                                    value="success"
                                    label="Success"
                                />
                                <SelectInput.Option
                                    value="error"
                                    label="Error"
                                />
                                <SelectInput.Option
                                    value="warning"
                                    label="Warning"
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
                                label="Closeable"
                                checked={props.closeable}
                                onChange={(checked) =>
                                    setProps({ ...props, closeable: checked })
                                }
                                classNames={switchClasses}
                            />
                            <Switch
                                label="With Border"
                                checked={props.withBorder}
                                onChange={(checked) =>
                                    setProps({ ...props, withBorder: checked })
                                }
                                classNames={switchClasses}
                            />
                            <Switch
                                label="Compact"
                                checked={props.compact}
                                onChange={(checked) =>
                                    setProps({ ...props, compact: checked })
                                }
                                classNames={switchClasses}
                            />
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="Icon">
                            <Switch
                                label="Show Icon"
                                checked={props.showIcon}
                                onChange={(checked) =>
                                    setProps({ ...props, showIcon: checked })
                                }
                                classNames={switchClasses}
                            />
                            <div className="flex flex-col gap-2">
                                <Text size="sm" weight="bold">
                                    Icon Position
                                </Text>
                                <RadioGroup
                                    value={props.iconPosition}
                                    onChange={(value) =>
                                        setProps({
                                            ...props,
                                            iconPosition: value
                                        })
                                    }
                                    disabled={!props.showIcon}
                                >
                                    <RadioGroup.Item value="top" label="Top" />
                                    <RadioGroup.Item
                                        value="center"
                                        label="Center"
                                    />
                                    <RadioGroup.Item
                                        value="bottom"
                                        label="Bottom"
                                    />
                                </RadioGroup>
                            </div>
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
                        description: "The content of the alert",
                        type: "ReactNode"
                    },
                    {
                        property: "icon",
                        description: "The icon of the alert",
                        type: "ReactNode"
                    },
                    {
                        property: "iconPosition",
                        description: "The position of the icon",
                        type: createTypeOptions(["top", "center", "bottom"]),
                        default: "center"
                    },
                    {
                        property: "variant",
                        description: "The variant of the alert",
                        type: createTypeOptions([
                            "filled",
                            "outline",
                            "unstyled"
                        ]),
                        default: "filled"
                    },
                    {
                        property: "intent",
                        description: "The intent of the alert",
                        type: createTypeOptions([
                            "success",
                            "error",
                            "warning",
                            "info"
                        ]),
                        default: "info"
                    },
                    {
                        property: "radius",
                        description: "The radius of the alert",
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
                        property: "shadow",
                        description: "The shadow of the alert",
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
                        property: "closeable",
                        description: "Whether the alert is closeable",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "closeIcon",
                        description: "The icon of the close button",
                        type: "ReactNode",
                        default: <IconX />
                    },
                    {
                        property: "withBorder",
                        description: "Whether the alert has a border",
                        type: "boolean",
                        default: "true"
                    },
                    {
                        property: "compact",
                        description: "Whether the alert is compact",
                        type: "boolean",
                        default: "false"
                    },
                    {
                        property: "className",
                        description:
                            "The className of the alert to edit the styling",
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
                        description: "Root alert element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.title",
                        description: "Alert title text wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.description",
                        description: "Alert description text wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.closeButton",
                        description: "Close button wrapper",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.icon",
                        description: "Icon wrapper",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

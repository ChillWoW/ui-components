import React from "react";
import {
    Checkbox,
    CheckboxLabelPosition,
    CheckboxRadius,
    CheckboxShadow,
    CheckboxSize,
    CheckboxVariant
} from "@/components/ui/Checkbox";
import { SelectInput, Switch, Text, Tooltip } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses, tooltipClass } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const checkboxConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Checkbox"
                    description="Checkbox for user interaction."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Checkbox"
                        description="The standard checkbox is the most common checkbox type in the whole library."
                        anchorId="standard"
                    >
                        <Checkbox />
                    </ConfigCard>

                    <ConfigCard
                        title="Variants"
                        description="The checkbox can be styled with different variants."
                        anchorId="variants"
                        className="flex gap-2 items-center"
                    >
                        {["filled", "outline", "subtle", "unstyled"].map(
                            (variant) => (
                                <Tooltip
                                    label={variant}
                                    key={variant}
                                    className={tooltipClass}
                                >
                                    <Checkbox
                                        variant={variant as CheckboxVariant}
                                    />
                                </Tooltip>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Sizes"
                        description="The checkbox can be styled with different sizes."
                        className="flex gap-2 items-end"
                    >
                        {["xs", "sm", "md", "lg", "xl", "2xl"].map((size) => (
                            <Tooltip
                                label={size}
                                key={size}
                                className={tooltipClass}
                            >
                                <Checkbox size={size as CheckboxSize} />
                            </Tooltip>
                        ))}
                    </ConfigCard>

                    <ConfigCard
                        title="Radius"
                        description="The checkbox can have a different radius."
                        anchorId="radius"
                        className="flex gap-2 items-center"
                    >
                        {["none", "sm", "md", "lg", "xl", "full"].map(
                            (radius) => (
                                <Tooltip
                                    label={radius}
                                    key={radius}
                                    className={tooltipClass}
                                >
                                    <Checkbox
                                        radius={radius as CheckboxRadius}
                                    />
                                </Tooltip>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Shadow"
                        description="The checkbox can have a different shadow. "
                        anchorId="shadow"
                        className="flex flex-col gap-2"
                    >
                        <div className="flex gap-2 items-center">
                            {["none", "sm", "md", "lg", "xl", "2xl"].map(
                                (shadow) => (
                                    <Tooltip
                                        label={shadow}
                                        key={shadow}
                                        className={tooltipClass}
                                    >
                                        <Checkbox
                                            shadow={shadow as CheckboxShadow}
                                        />
                                    </Tooltip>
                                )
                            )}
                        </div>

                        <Text size="sm" className="text-gray-400">
                            The shadow may not show in the preview, but it
                            should work in the playground.
                        </Text>
                    </ConfigCard>

                    <ConfigCard
                        title="Disabled"
                        description="The checkbox can be in a disabled state."
                        anchorId="disabled"
                        className="flex gap-2 items-center"
                    >
                        {["filled", "outline", "subtle", "unstyled"].map(
                            (variant) => (
                                <Tooltip
                                    label={variant}
                                    key={variant}
                                    className={tooltipClass}
                                >
                                    <Checkbox
                                        variant={variant as CheckboxVariant}
                                        disabled
                                    />
                                </Tooltip>
                            )
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Label & Required"
                        description="The checkbox can have a label and required state."
                        anchorId="label"
                        className="flex gap-1 items-center"
                    >
                        <Checkbox label="Label" required />
                    </ConfigCard>

                    <ConfigCard
                        title="Label Position"
                        description="The checkbox can have a label on the left or right."
                        anchorId="label-position"
                        className="flex gap-2 items-center"
                    >
                        {["left", "right"].map((position) => (
                            <Checkbox
                                label={position}
                                labelPosition={
                                    position as CheckboxLabelPosition
                                }
                                key={position}
                            />
                        ))}
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        disabled: false,
        label: "Label",
        labelPosition: "right",
        variant: "filled",
        size: "md",
        radius: "md",
        shadow: "sm",
        indeterminate: false
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
                preview={<Checkbox {...props} />}
                exampleCode={`
<Checkbox checked={true} label="Label" />
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
                                    value="subtle"
                                    label="Subtle"
                                />
                                <SelectInput.Option
                                    value="unstyled"
                                    label="Unstyled"
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
                                label="Disabled"
                                checked={props.disabled}
                                onChange={(checked) =>
                                    setProps({ ...props, disabled: checked })
                                }
                                classNames={switchClasses}
                            />

                            <Switch
                                label="Indeterminate"
                                checked={props.indeterminate}
                                onChange={(checked) =>
                                    setProps({
                                        ...props,
                                        indeterminate: checked
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

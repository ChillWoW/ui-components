import React from "react";
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonVariant,
    ButtonIntent,
    ButtonGroup
} from "@/components/ui/Buttons";
import { SelectInput, StepperInput, Switch, Text } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, stepperInputClass, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const buttonGroupConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Button Group"
                    description="Button Group for easier grouping of buttons."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard ButtonGroup"
                        description="The standard button group is the most common button group type in the whole library."
                        anchorId="standard"
                    >
                        <ButtonGroup>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                        </ButtonGroup>
                    </ConfigCard>

                    <ConfigCard
                        title="Variants"
                        description="The button group can have a different variant."
                        anchorId="variants"
                        className="flex gap-1 items-center"
                    >
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Filled</Text>
                            <ButtonGroup size="md" variant="filled">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Outline</Text>
                            <ButtonGroup size="md" variant="outline">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Subtle</Text>
                            <ButtonGroup size="md" variant="subtle">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Unstyled</Text>
                            <ButtonGroup size="md" variant="unstyled">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                    </ConfigCard>

                    <ConfigCard
                        title="Intents"
                        description="The button group can have a different intent."
                        anchorId="intents"
                        className="flex gap-2 items-center"
                    >
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Primary</Text>
                            <ButtonGroup size="md" intent="primary">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Secondary</Text>
                            <ButtonGroup size="md" intent="secondary">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Success</Text>
                            <ButtonGroup size="md" intent="success">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Danger</Text>
                            <ButtonGroup size="md" intent="danger">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <Text size="sm">Warning</Text>
                            <ButtonGroup size="md" intent="warning">
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                                <Button>Click Here</Button>
                            </ButtonGroup>
                        </div>
                    </ConfigCard>

                    <ConfigCard
                        title="Orientation"
                        description="The button group can have a horizontal or vertical orientation."
                        anchorId="orientation"
                        className="flex gap-1 items-center"
                    >
                        <ButtonGroup orientation="horizontal">
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                        </ButtonGroup>
                        <ButtonGroup orientation="vertical">
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                        </ButtonGroup>
                    </ConfigCard>

                    <ConfigCard
                        title="Disabled"
                        description="The button can be in a disabled state."
                        anchorId="disabled"
                        className="flex gap-1 items-center"
                    >
                        <ButtonGroup disabled>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                        </ButtonGroup>
                    </ConfigCard>

                    <ConfigCard
                        title="Loading"
                        description="The button can be in a loading state."
                        anchorId="loading"
                        className="flex gap-1 items-center"
                    >
                        <ButtonGroup isLoading>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                            <Button size="md">Click Here</Button>
                        </ButtonGroup>
                    </ConfigCard>

                    <ConfigCard
                        title="Full Width"
                        description="The button can be full width of the container."
                        anchorId="full-width"
                    >
                        <ButtonGroup fullWidth>
                            <Button>Click Here</Button>
                            <Button>Click Here</Button>
                            <Button>Click Here</Button>
                        </ButtonGroup>
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        variant: "filled",
        intent: "",
        size: "sm",
        radius: "md",
        disabled: false,
        isLoading: false,
        fullWidth: false,
        spacing: 0
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
                    <ButtonGroup
                        variant={props.variant as ButtonVariant}
                        intent={props.intent as ButtonIntent}
                        size={props.size as ButtonSize}
                        radius={props.radius as ButtonRadius}
                        disabled={props.disabled}
                        isLoading={props.isLoading}
                        fullWidth={props.fullWidth}
                        spacing={props.spacing}
                    >
                        <Button>Click Here</Button>
                        <Button>Click Here</Button>
                        <Button>Click Here</Button>
                    </ButtonGroup>
                }
                exampleCode={`
<ButtonGroup>
    <Button>Click Here</Button>
    <Button>Click Here</Button>
    <Button>Click Here</Button>
</ButtonGroup>
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

                            <StepperInput
                                label="Spacing"
                                value={props.spacing}
                                onChange={(value) =>
                                    setProps({ ...props, spacing: value })
                                }
                                classNames={stepperInputClass}
                            />
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
                        property: "orientation",
                        description: "The orientation of the button group",
                        type: createTypeOptions(["horizontal", "vertical"]),
                        default: "horizontal"
                    },
                    {
                        property: "spacing",
                        description: "The spacing of the button group",
                        type: "number",
                        default: "0"
                    },
                    {
                        property: "className",
                        description:
                            "The className of the button group to edit the styling",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

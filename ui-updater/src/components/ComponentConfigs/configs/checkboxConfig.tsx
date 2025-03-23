import React from "react";
import {
    Text,
    Switch,
    Checkbox,
    SelectInput,
    RadioGroup
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses } from "./index";

export const checkboxConfig: ComponentConfigType = {
    defaultProps: {
        checked: false,
        disabled: false,
        showLabel: true,
        label: "Checkbox",
        required: false,
        size: "md",
        indeterminate: false,
        variant: "filled",
        animation: "smooth",
        labelPosition: "right"
    },

    renderComponent: (props, setProps) => (
        <Checkbox
            checked={props.checked}
            onChange={(checked) => setProps({ ...props, checked })}
            disabled={props.disabled}
            label={props.showLabel ? props.label : undefined}
            required={props.required}
            size={props.size}
            indeterminate={props.indeterminate}
            variant={props.variant}
            animation={props.animation}
            labelPosition={props.labelPosition}
        />
    ),

    renderPropsPanel: () => {
        return ({
            props,
            setProps
        }: {
            props: any;
            setProps: (newProps: any) => void;
        }) => (
            <div className="space-y-4 w-full">
                <Text
                    size="md"
                    weight="bold"
                    align="center"
                    className="border-b border-dark-500 pb-1"
                >
                    Checkbox Properties
                </Text>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Label / Required
                    </Text>
                    <Switch
                        label="Show Label"
                        checked={props.showLabel}
                        onChange={(checked) =>
                            setProps({ ...props, showLabel: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Required"
                        checked={props.required}
                        onChange={(checked) =>
                            setProps({ ...props, required: checked })
                        }
                        classNames={switchClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Size
                    </Text>
                    <SelectInput
                        options={[
                            { value: "xs", label: "xs" },
                            { value: "sm", label: "sm" },
                            { value: "md", label: "md" },
                            { value: "lg", label: "lg" },
                            { value: "xl", label: "xl" }
                        ]}
                        value={props.size}
                        onChange={(value) =>
                            setProps({ ...props, size: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Animation
                    </Text>
                    <SelectInput
                        options={[
                            { value: "smooth", label: "smooth" },
                            { value: "bounce", label: "bounce" },
                            { value: "pulse", label: "pulse" },
                            { value: "none", label: "none" }
                        ]}
                        value={props.animation}
                        onChange={(value) =>
                            setProps({ ...props, animation: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Variant
                    </Text>
                    <RadioGroup
                        value={props.variant}
                        onChange={(value) =>
                            setProps({ ...props, variant: value })
                        }
                    >
                        <RadioGroup.Item value="filled" label="Filled" />
                        <RadioGroup.Item value="outline" label="Outline" />
                        <RadioGroup.Item value="subtle" label="Subtle" />
                    </RadioGroup>
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Label Position
                    </Text>
                    <RadioGroup
                        value={props.labelPosition}
                        onChange={(value) =>
                            setProps({ ...props, labelPosition: value })
                        }
                    >
                        <RadioGroup.Item value="left" label="Left" />
                        <RadioGroup.Item value="right" label="Right" />
                    </RadioGroup>
                </div>
                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Other
                    </Text>
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
                            setProps({ ...props, indeterminate: checked })
                        }
                        classNames={switchClasses}
                    />
                </div>
            </div>
        );
    },

    infoPanel: () => (
        <InfoPanel
            propInfo={{
                checked: {
                    type: "boolean",
                    description: "Determines if the checkbox is checked"
                },
                onChange: {
                    type: "function",
                    description:
                        "Determines the function when the checkbox is changed"
                },
                disabled: {
                    type: "boolean",
                    description: "Determines if the checkbox is disabled"
                },
                label: {
                    type: "string",
                    description: "Determines the label of the checkbox"
                },
                required: {
                    type: "boolean",
                    description: "Determines if the checkbox is required"
                },
                className: {
                    type: "string",
                    description: "Determines the class name of the checkbox"
                },
                classNames: {
                    type: "object",
                    description: "Determines the class name of the checkbox",
                    properties: {
                        container: {
                            type: "string",
                            description:
                                "Determines the class name of the checkbox container"
                        },
                        label: {
                            type: "string",
                            description:
                                "Determines the class name of the checkbox label"
                        },
                        checkbox: {
                            type: "string",
                            description:
                                "Determines the class name of the checkbox"
                        },
                        required: {
                            type: "string",
                            description:
                                "Determines the class name of the required label"
                        }
                    }
                }
            }}
        />
    )
};

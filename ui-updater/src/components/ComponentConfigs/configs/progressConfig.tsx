import React from "react";
import {
    Text,
    Switch,
    Checkbox,
    Progress,
    SelectInput,
    Slider,
    ButtonGroup,
    Button
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
    switchClasses,
    selectInputClasses,
    buttonClass,
    activeButtonClass
} from "./index";

export const progressConfig: ComponentConfigType = {
    defaultProps: {
        size: "md",
        value: 0,
        color: "blue",
        leftSideText: "0%",
        rightSideText: "100%",
        hint: "This is a hint",
        showHint: false,
        showLabel: true,
        radius: "md",
        labelPosition: "top"
    },

    renderComponent: (props) => (
        <Progress
            size={props.size}
            value={props.value}
            color={props.color}
            leftSideText={props.leftSideText}
            rightSideText={props.rightSideText}
            hint={props.showHint ? props.hint : undefined}
            showLabel={props.showLabel}
            radius={props.radius}
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
                    Progress Properties
                </Text>

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
                        onChange={(value: any) =>
                            setProps({ ...props, size: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Radius
                    </Text>
                    <SelectInput
                        options={[
                            { value: "none", label: "None" },
                            { value: "sm", label: "Sm" },
                            { value: "md", label: "Md" },
                            { value: "lg", label: "Lg" },
                            { value: "full", label: "Full" }
                        ]}
                        value={props.radius}
                        onChange={(value: any) =>
                            setProps({ ...props, radius: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Color
                    </Text>
                    <SelectInput
                        options={[
                            { value: "yellow", label: "Yellow" },
                            { value: "orange", label: "Orange" },
                            { value: "red", label: "Red" },
                            { value: "pink", label: "Pink" },
                            { value: "blue", label: "Blue" },
                            { value: "green", label: "Green" },
                            { value: "purple", label: "Purple" }
                        ]}
                        value={props.color}
                        onChange={(value) =>
                            setProps({ ...props, color: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Value
                    </Text>
                    <Slider
                        value={props.value}
                        onChange={(value: any) =>
                            setProps({ ...props, value: value })
                        }
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Label Position
                    </Text>

                    <ButtonGroup>
                        <Button
                            onClick={() =>
                                setProps({ ...props, labelPosition: "top" })
                            }
                            className={`${buttonClass} ${
                                props.labelPosition === "top" &&
                                activeButtonClass
                            }`}
                        >
                            Top
                        </Button>
                        <Button
                            onClick={() =>
                                setProps({ ...props, labelPosition: "bottom" })
                            }
                            className={`${buttonClass} ${
                                props.labelPosition === "bottom" &&
                                activeButtonClass
                            }`}
                        >
                            Bottom
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Options
                    </Text>
                    <Switch
                        label="Show Hint"
                        checked={props.showHint}
                        onChange={(checked) =>
                            setProps({ ...props, showHint: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Show Label"
                        checked={props.showLabel}
                        onChange={(checked) =>
                            setProps({ ...props, showLabel: checked })
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

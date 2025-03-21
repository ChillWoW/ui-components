import React from "react";
import {
    Text,
    RadioGroup,
    Switch,
    Avatar,
    SelectInput,
    ButtonGroup,
    Button
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
    switchClasses,
    selectInputClasses,
    activeButtonClass,
    buttonClass
} from "./index";

export const avatarConfig: ComponentConfigType = {
    defaultProps: {
        src: "https://github.com/shadcn.png",
        placeholder: "HI",
        color: "gray",
        showImage: true,
        showPlaceholder: false,
        size: "md",
        shape: "circle",
        showBadge: false,
        badge: {
            position: "top-right",
            color: "red"
        }
    },

    renderComponent: (props) => (
        <Avatar
            src={props.showImage ? props.src : undefined}
            placeholder={props.showPlaceholder ? props.placeholder : undefined}
            size={props.size}
            shape={props.shape}
            color={props.color}
            badge={
                props.showBadge && {
                    position: props.badge.position,
                    color: props.badge.color
                }
            }
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
                    Avatar Properties
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
                        onChange={(value) =>
                            setProps({ ...props, size: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Background color
                    </Text>
                    <SelectInput
                        options={[
                            { value: "gray", label: "Gray" },
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
                        Shape
                    </Text>
                    <ButtonGroup>
                        <Button
                            key="circle"
                            variant="filled"
                            size="sm"
                            onClick={() =>
                                setProps({ ...props, shape: "circle" })
                            }
                            className={`
                                ${buttonClass}
                              ${props.shape === "circle" && activeButtonClass}`}
                        >
                            Circle
                        </Button>

                        <Button
                            key="rounded"
                            variant="filled"
                            size="sm"
                            onClick={() =>
                                setProps({ ...props, shape: "rounded" })
                            }
                            className={`${buttonClass} ${
                                props.shape === "rounded" && activeButtonClass
                            }`}
                        >
                            Rounded
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Badge
                    </Text>
                    <div className="flex flex-col gap-2">
                        <Switch
                            label="Show Badge"
                            checked={props.showBadge}
                            onChange={(checked) =>
                                setProps({ ...props, showBadge: checked })
                            }
                            classNames={switchClasses}
                        />
                        <SelectInput
                            options={[
                                { value: "top-right", label: "Top Right" },
                                { value: "top-left", label: "Top Left" },
                                {
                                    value: "bottom-right",
                                    label: "Bottom Right"
                                },
                                { value: "bottom-left", label: "Bottom Left" }
                            ]}
                            value={props.badge.position}
                            onChange={(value) =>
                                setProps({
                                    ...props,
                                    badge: { ...props.badge, position: value }
                                })
                            }
                            classNames={selectInputClasses}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Other
                    </Text>
                    <Switch
                        label="Show Image"
                        checked={props.showImage}
                        onChange={(checked) =>
                            setProps({
                                ...props,
                                showImage: checked
                            })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Show Placeholder (Turns off image)"
                        checked={props.showPlaceholder}
                        onChange={(checked) =>
                            setProps({
                                ...props,
                                showPlaceholder: checked,
                                showImage: props.showImage && !checked
                            })
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
                src: {
                    type: "string",
                    description: "Image of the avatar"
                },
                placeholder: {
                    type: "string",
                    description:
                        "Placeholder of the avatar if no image is provided"
                },
                size: {
                    type: "string",
                    default: "md",
                    description: "Determines the size of the avatar",
                    possibleValues: ["xs", "sm", "md", "lg", "xl"]
                },
                shape: {
                    type: "string",
                    default: "circle",
                    description: "Determines the shape of the avatar",
                    possibleValues: ["circle", "rounded"]
                },
                color: {
                    type: "string",
                    description: "Color of the avatar background"
                },
                className: {
                    type: "string",
                    description: "Additional CSS classes to apply to the avatar"
                },
                classNames: {
                    type: "object",
                    description:
                        "Additional CSS classes to apply to the avatar",
                    properties: {
                        container: {
                            type: "string",
                            description: "Container of the avatar"
                        },
                        image: {
                            type: "string",
                            description: "Image of the avatar"
                        },
                        placeholder: {
                            type: "string",
                            description: "Placeholder of the avatar"
                        },
                        badge: {
                            type: "string",
                            description: "Badge of the avatar"
                        }
                    }
                },
                badge: {
                    type: "object",
                    description:
                        "Determines the position and color of the badge",
                    properties: {
                        position: {
                            type: "string",
                            description: "Determines the position of the badge"
                        },
                        color: {
                            type: "string",
                            description: "Determines the color of the badge"
                        }
                    }
                }
            }}
        />
    )
};

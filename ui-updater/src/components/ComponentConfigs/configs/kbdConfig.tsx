import React from "react";
import { Text, Kbd, SelectInput, RadioGroup, Switch } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, selectInputClasses } from "./index";

export const kbdConfig: ComponentConfigType = {
    defaultProps: {
        size: "md",
        variant: "filled",
        onHover: false
    },

    renderComponent: (props) => (
        <div className="flex items-center gap-2">
            <Kbd {...props}>⌘</Kbd> + <Kbd {...props}>E</Kbd>
        </div>
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
                    Kbd Properties
                </Text>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Size
                    </Text>
                    <SelectInput
                        options={[
                            { label: "xs", value: "xs" },
                            { label: "sm", value: "sm" },
                            { label: "md", value: "md" },
                            { label: "lg", value: "lg" },
                            { label: "xl", value: "xl" }
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
            </div>
        );
    },

    infoPanel: () => (
        <InfoPanel
            propInfo={{
                children: {
                    type: "ReactNode",
                    required: true,
                    description: "Content of the kbd"
                },
                className: {
                    type: "string",
                    description: "Determines the class name of the kbd"
                },
                classNames: {
                    type: "object",
                    description: "Determines the class name of the kbd",
                    properties: {
                        container: {
                            type: "string",
                            description:
                                "Determines the class name of the kbd container"
                        }
                    }
                }
            }}
        />
    )
};

import React, { useState } from "react";
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonVariant,
    ButtonIntent
} from "@/components/ui/Buttons/Button";
import { Anchor, SelectInput, StepperInput, Switch } from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, stepperInputClass, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const anchorConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Anchor"
                    description="Anchor for user interaction."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Anchor"
                        description="The standard anchor is the most common anchor type in the whole library."
                        anchorId="standard"
                    >
                        <Anchor id="standard">Click Here</Anchor>
                    </ConfigCard>

                    <ConfigCard
                        title="No Icon"
                        description="The anchor is shown without an icon."
                        anchorId="no-icon"
                    >
                        <Anchor id="no-icon" showIcon={false}>
                            Click Here
                        </Anchor>
                    </ConfigCard>

                    <ConfigCard
                        title="Icon"
                        description="The anchor can have an custom icon."
                        anchorId="icon"
                        className="flex gap-1 items-center"
                    >
                        <Anchor id="icon" icon={<IconUser />} leftOffset={20}>
                            Click Here
                        </Anchor>
                    </ConfigCard>

                    <ConfigCard
                        title="Left Offset"
                        description="The anchor can be styled with a left offset."
                        anchorId="left-offset"
                        className="flex gap-1 items-center"
                    >
                        <Anchor id="left-offset" leftOffset={10}>
                            Click Here
                        </Anchor>
                    </ConfigCard>

                    <ConfigCard
                        title="Title"
                        description="The anchor can have a custom title."
                        anchorId="title"
                        className="flex gap-1 items-center"
                    >
                        <Anchor id="title" title="Custom Title">
                            Click Here
                        </Anchor>
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        children: "Click me",
        showIcon: true,
        showCustomIcon: false,
        customIcon: <IconUser />,
        leftOffset: 15,
        title: ""
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
                    <Anchor
                        id="playground"
                        showIcon={props.showIcon}
                        icon={
                            props.showCustomIcon ? props.customIcon : undefined
                        }
                        leftOffset={props.leftOffset}
                        title={props.title}
                    >
                        {props.children}
                    </Anchor>
                }
                exampleCode={`
<Anchor id="playground">
    Click me
</Anchor>
`}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Content">
                            <StepperInput
                                label="Left Offset"
                                value={props.leftOffset}
                                onChange={(value) =>
                                    setProps({ ...props, leftOffset: value })
                                }
                                classNames={stepperInputClass}
                            />
                        </PlaygroundPreview.Section>

                        <PlaygroundPreview.Section title="States">
                            <Switch
                                label="Custom Title"
                                checked={props.title !== ""}
                                onChange={(checked) =>
                                    setProps({
                                        ...props,
                                        title: checked ? "Custom Title" : ""
                                    })
                                }
                                classNames={switchClasses}
                            />
                            <Switch
                                label="Show Icon"
                                checked={props.showIcon}
                                onChange={(checked) =>
                                    setProps({ ...props, showIcon: checked })
                                }
                                classNames={switchClasses}
                            />
                            <Switch
                                label="Show Custom Icon"
                                checked={props.showCustomIcon}
                                onChange={(checked) =>
                                    setProps({
                                        ...props,
                                        showCustomIcon: checked
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
                        description: "The content of the anchor",
                        type: "ReactNode"
                    },
                    {
                        property: "id",
                        description: "The id of the anchor where to scroll to",
                        type: "string"
                    },
                    {
                        property: "leftOffset",
                        description: "The left offset of the anchor",
                        type: "number"
                    },
                    {
                        property: "showIcon",
                        description: "Whether the anchor has an icon",
                        type: "boolean"
                    },
                    {
                        property: "title",
                        description: "The title of the anchor",
                        type: "string"
                    }
                ]}
            />
        </>
    )
};

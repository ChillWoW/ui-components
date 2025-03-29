import React from "react";
import {
    Breadcrumb,
    BreadcrumbSize,
    SelectInput,
    StepperInput,
    TextInput
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, stepperInputClass, textInputClass } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

const renderBreadcrumb = (props?: any) => {
    return <Breadcrumb {...props} />;
};

const breadcrumbItems = ({ asLink = false }: { asLink?: boolean }) => [
    {
        children: "Home",
        href: asLink ? "https://chillwow.org" : undefined,
        target: asLink ? "_blank" : undefined
    },
    {
        children: "Products",
        href: asLink ? "https://chillwow.org" : undefined,
        target: asLink ? "_blank" : undefined
    },
    {
        children: "Categories",
        href: asLink ? "https://chillwow.org" : undefined,
        target: asLink ? "_blank" : undefined
    },
    { children: "Electronics", active: true }
];

export const breadcrumbConfig: ComponentConfigType = {
    renderComponent: () => (
        <div className="space-y-12">
            <div>
                <ComponentInfo
                    title="Breadcrumb"
                    description="Breadcrumb for navigation."
                />

                <div className="space-y-8">
                    <ConfigLabel label="Types" />
                    <ConfigCard
                        title="Standard Breadcrumb"
                        description="The standard breadcrumb is the most common breadcrumb type in the whole library."
                        anchorId="standard"
                    >
                        {renderBreadcrumb({
                            items: breadcrumbItems({})
                        })}
                    </ConfigCard>

                    <ConfigCard
                        title="Sizes"
                        description="The breadcrumb can be styled with different sizes."
                        anchorId="sizes"
                        className="flex flex-col gap-1"
                    >
                        {["xs", "sm", "md", "lg", "xl", "2xl"].map((size) =>
                            renderBreadcrumb({
                                size: size as BreadcrumbSize,
                                items: breadcrumbItems({}),
                                key: size
                            })
                        )}
                    </ConfigCard>

                    <ConfigCard
                        title="Separator"
                        description="The breadcrumb can have a custom separator."
                        anchorId="separator"
                        className="flex flex-col gap-1"
                    >
                        <Breadcrumb items={breadcrumbItems({})} separator=">" />
                        <Breadcrumb items={breadcrumbItems({})} separator="|" />
                        <Breadcrumb items={breadcrumbItems({})} separator="!" />
                    </ConfigCard>

                    <ConfigCard
                        title="Max Items"
                        description="The breadcrumb can be collapsed if it has too many items."
                        anchorId="max-items"
                        className="flex flex-col gap-1"
                    >
                        {renderBreadcrumb({
                            items: breadcrumbItems({}),
                            maxItems: 3
                        })}
                        {renderBreadcrumb({
                            items: breadcrumbItems({}),
                            maxItems: 2
                        })}
                    </ConfigCard>

                    <ConfigCard
                        title="Items linked to a URL"
                        description="The breadcrumb items can be linked to a URL. Uses href and target props."
                        anchorId="items-linked-to-url"
                        className="flex flex-col gap-1"
                    >
                        {renderBreadcrumb({
                            items: breadcrumbItems({ asLink: true })
                        })}
                    </ConfigCard>
                </div>
            </div>
        </div>
    ),

    defaultProps: {
        items: [
            {
                children: "Home",
                href: "https://chillwow.org",
                target: "_blank"
            },
            {
                children: "Products",
                href: "https://chillwow.org",
                target: "_blank"
            },
            {
                children: "Categories",
                href: "https://chillwow.org",
                target: "_blank"
            },
            { children: "Electronics", active: true }
        ],
        separator: "/",
        size: "md",
        maxItems: 3
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
                preview={<Breadcrumb {...props} />}
                exampleCode={`const items = [
    {
        children: "Home",
        href: "https://chillwow.org",
        target: "_blank"
    },
    {
        children: "Products",
        href: "https://chillwow.org",
        target: "_blank"
    },
]

<Breadcrumb items={items} />
`}
                controls={
                    <>
                        <PlaygroundPreview.Section title="Separator">
                            <TextInput
                                label="Separator"
                                value={props.separator}
                                onChange={(value) =>
                                    setProps({ ...props, separator: value })
                                }
                                classNames={textInputClass}
                            />
                        </PlaygroundPreview.Section>

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

                        <PlaygroundPreview.Section title="Items">
                            <StepperInput
                                min={0}
                                max={props.items.length - 1}
                                value={props.maxItems}
                                onChange={(value) =>
                                    setProps({ ...props, maxItems: value })
                                }
                                classNames={stepperInputClass}
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
                        property: "items",
                        description: "The items of the breadcrumb",
                        type: "object",
                        default: "[]"
                    },
                    {
                        property: "separator",
                        description: "The separator of the breadcrumb",
                        type: "ReactNode",
                        default: "/"
                    },
                    {
                        property: "size",
                        description: "The size of the breadcrumb",
                        type: createTypeOptions([
                            "xs",
                            "sm",
                            "md",
                            "lg",
                            "xl",
                            "2xl"
                        ]),
                        default: "md"
                    },
                    {
                        property: "maxItems",
                        description: "The maximum number of items to show",
                        type: "number",
                        default: "3"
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
                        description: "Root breadcrumb element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.item",
                        description: "Item element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.activeItem",
                        description: "Active item element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.separator",
                        description: "Separator element",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.collapsed",
                        description: "Applied when breadcrumb is collapsed",
                        type: "string",
                        default: "-"
                    },
                    {
                        property: "classNames.home",
                        description: "Home item element",
                        type: "string",
                        default: "-"
                    }
                ]}
            />
        </>
    )
};

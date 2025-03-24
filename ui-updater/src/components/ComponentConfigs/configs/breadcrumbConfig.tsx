import React from "react";
import {
    Text,
    Switch,
    NumberInput,
    SelectInput,
    ButtonGroup,
    Button,
    TextInput,
    Breadcrumb
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import {
    switchClasses,
    buttonClass,
    activeButtonClass,
    numberInputClass,
    textInputClass
} from "./index";

export const breadcrumbConfig: ComponentConfigType = {
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
        maxItems: 0
    },

    renderComponent: (props, setProps) => (
        <div className="w-full flex justify-center">
            <Breadcrumb
                items={props.items}
                separator={props.separator}
                size={props.size}
                maxItems={props.maxItems > 0 ? props.maxItems : undefined}
            />
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
                <div className="flex flex-col gap-2">
                    <Text size="sm" weight="bold">
                        Size
                    </Text>
                    <ButtonGroup>
                        <Button
                            onClick={() => setProps({ ...props, size: "xs" })}
                            className={`${buttonClass} ${
                                props.size === "xs" && activeButtonClass
                            }`}
                        >
                            XS
                        </Button>
                        <Button
                            onClick={() => setProps({ ...props, size: "sm" })}
                            className={`${buttonClass} ${
                                props.size === "sm" && activeButtonClass
                            }`}
                        >
                            SM
                        </Button>
                        <Button
                            onClick={() => setProps({ ...props, size: "md" })}
                            className={`${buttonClass} ${
                                props.size === "md" && activeButtonClass
                            }`}
                        >
                            MD
                        </Button>
                        <Button
                            onClick={() => setProps({ ...props, size: "lg" })}
                            className={`${buttonClass} ${
                                props.size === "lg" && activeButtonClass
                            }`}
                        >
                            LG
                        </Button>
                        <Button
                            onClick={() => setProps({ ...props, size: "xl" })}
                            className={`${buttonClass} ${
                                props.size === "xl" && activeButtonClass
                            }`}
                        >
                            XL
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="flex flex-col gap-2">
                    <Text size="sm" weight="bold">
                        Separator
                    </Text>
                    <ButtonGroup>
                        <Button
                            onClick={() =>
                                setProps({ ...props, separator: "/" })
                            }
                            className={`${buttonClass} ${
                                props.separator === "/" && activeButtonClass
                            }`}
                        >
                            /
                        </Button>
                        <Button
                            onClick={() =>
                                setProps({ ...props, separator: ">" })
                            }
                            className={`${buttonClass} ${
                                props.separator === ">" && activeButtonClass
                            }`}
                        >
                            &gt;
                        </Button>
                        <Button
                            onClick={() =>
                                setProps({ ...props, separator: "|" })
                            }
                            className={`${buttonClass} ${
                                props.separator === "|" && activeButtonClass
                            }`}
                        >
                            |
                        </Button>
                        <Button
                            onClick={() =>
                                setProps({ ...props, separator: "•" })
                            }
                            className={`${buttonClass} ${
                                props.separator === "•" && activeButtonClass
                            }`}
                        >
                            •
                        </Button>
                        <Button
                            onClick={() =>
                                setProps({ ...props, separator: "-" })
                            }
                            className={`${buttonClass} ${
                                props.separator === "-" && activeButtonClass
                            }`}
                        >
                            -
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="flex flex-col gap-2">
                    <Text size="sm" weight="bold">
                        Max Items (0 = show all)
                    </Text>
                    <NumberInput
                        value={props.maxItems}
                        onChange={(value) =>
                            setProps({ ...props, maxItems: value })
                        }
                        min={0}
                        max={10}
                        classNames={numberInputClass}
                    />
                </div>
            </div>
        );
    }
};

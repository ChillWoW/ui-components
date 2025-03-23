import React from "react";
import {
    Text,
    RadioCard,
    Switch,
    SelectInput,
    RadioGroup
} from "@/components/ui";
import { IconUser, IconBell, IconDatabase } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses } from "./index";

export const radioCardConfig: ComponentConfigType = {
    defaultProps: {
        value: "profile",
        showHeader: true,
        showDescriptions: true,
        showIcons: true,
        disabled: false
    },

    renderComponent: (props, setProps) => (
        <div className="w-full max-w-md mx-auto">
            <RadioCard
                value={props.value}
                onChange={(value) => setProps({ ...props, value })}
            >
                {props.showHeader && (
                    <RadioCard.Header>
                        <Text size="md" weight="semibold">
                            Settings
                        </Text>
                    </RadioCard.Header>
                )}

                <RadioCard.Item
                    value="profile"
                    label="Profile Settings"
                    description={
                        props.showDescriptions
                            ? "Manage your account information and preferences"
                            : undefined
                    }
                    icon={props.showIcons ? <IconUser size={20} /> : undefined}
                    disabled={props.disabled}
                />

                <RadioCard.Item
                    value="notifications"
                    label="Notifications"
                    description={
                        props.showDescriptions
                            ? "Configure how you receive alerts and messages"
                            : undefined
                    }
                    icon={props.showIcons ? <IconBell size={20} /> : undefined}
                    disabled={props.disabled}
                />

                <RadioCard.Item
                    value="data"
                    label="Data & Privacy"
                    description={
                        props.showDescriptions
                            ? "Control your data and privacy settings"
                            : undefined
                    }
                    icon={
                        props.showIcons ? <IconDatabase size={20} /> : undefined
                    }
                    disabled={props.disabled}
                />
            </RadioCard>
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
                    RadioCard Properties
                </Text>

                <div className="flex flex-col gap-1">
                    <Text size="sm" weight="bold">
                        Selected Value
                    </Text>
                    <RadioGroup
                        value={props.value}
                        onChange={(value) => setProps({ ...props, value })}
                    >
                        <RadioGroup.Item value="profile" label="Profile" />
                        <RadioGroup.Item
                            value="notifications"
                            label="Notifications"
                        />
                        <RadioGroup.Item value="data" label="Data & Privacy" />
                    </RadioGroup>
                </div>

                <div className="flex flex-col gap-2">
                    <Text size="sm" weight="bold">
                        Display Options
                    </Text>
                    <Switch
                        label="Show Header"
                        checked={props.showHeader}
                        onChange={(checked) =>
                            setProps({ ...props, showHeader: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Show Descriptions"
                        checked={props.showDescriptions}
                        onChange={(checked) =>
                            setProps({ ...props, showDescriptions: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Show Icons"
                        checked={props.showIcons}
                        onChange={(checked) =>
                            setProps({ ...props, showIcons: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Disabled"
                        checked={props.disabled}
                        onChange={(checked) =>
                            setProps({ ...props, disabled: checked })
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
                defaultValue: {
                    type: "string",
                    description:
                        "Initial selected value (for uncontrolled component)"
                },
                value: {
                    type: "string",
                    description:
                        "Currently selected value (for controlled component)"
                },
                onChange: {
                    type: "function",
                    description:
                        "Function called when selection changes with new value as argument"
                },
                children: {
                    type: "ReactNode",
                    required: true,
                    description:
                        "Should include RadioCard.Header and RadioCard.Item components"
                },
                className: {
                    type: "string",
                    description:
                        "Additional CSS classes to apply to the RadioCard container"
                },
                classNames: {
                    type: "object",
                    description: "Custom CSS classes for RadioCard elements",
                    properties: {
                        container: {
                            type: "string",
                            description: "CSS class for the RadioCard container"
                        },
                        header: {
                            type: "string",
                            description: "CSS class for the RadioCard header"
                        },
                        item: {
                            type: "string",
                            description: "CSS class for RadioCard items"
                        }
                    }
                }
            }}
        />
    )
};

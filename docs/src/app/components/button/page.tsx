"use client";

import { useState, useEffect } from "react";
import { ComponentLayout } from "@/components/Layout";
import { CodeDemo } from "@/components/Demo";
import { DemoControls } from "@/components/Demo/DemoControls";
import { Button, ButtonSize, ButtonVariant } from "@/components/ui";
import { formatCode } from "@/utils/formatCode";
import { DemoControl } from "@/types/demo";
import { IconPlus } from "@tabler/icons-react";

const tableColumns = [
    {
        key: "name",
        label: "Name",
        className: "w-[150px] font-mono text-sm"
    },
    {
        key: "type",
        label: "Type",
        className: "w-[150px] font-mono text-sm text-blue-400"
    },
    {
        key: "default",
        label: "Default",
        className: "w-[150px] font-mono text-sm text-gray-400"
    },
    {
        key: "description",
        label: "Description",
        className: "text-sm"
    }
];

const tableData = [
    {
        name: "variant",
        type: "ButtonVariant",
        default: "filled",
        description: "The visual style of the button"
    },
    {
        name: "size",
        type: "ButtonSize",
        default: "sm",
        description: "The size of the button"
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the button is disabled"
    },
    {
        name: "leftSection",
        type: "React.ReactNode",
        default: "undefined",
        description: "Content to be rendered on the left side of the button"
    },
    {
        name: "rightSection",
        type: "React.ReactNode",
        default: "undefined",
        description: "Content to be rendered on the right side of the button"
    }
];

const sizeValues: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];
const sizeMap: Record<ButtonSize, number> = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
};

export default function ButtonPage() {
    const [variant, setVariant] = useState<ButtonVariant>("filled");
    const [leftSection, setLeftSection] = useState(false);
    const [rightSection, setRightSection] = useState(false);
    const [size, setSize] = useState<ButtonSize>("sm");
    const [disabled, setDisabled] = useState(false);
    const [demoCode, setDemoCode] = useState("");

    const controls: DemoControl[] = [
        {
            type: "switch",
            label: "Left Section",
            value: leftSection,
            onChange: setLeftSection
        },
        {
            type: "switch",
            label: "Right Section",
            value: rightSection,
            onChange: setRightSection
        },
        {
            type: "switch",
            label: "Disabled",
            value: disabled,
            onChange: setDisabled
        },
        {
            type: "select",
            label: "Variant",
            value: variant,
            onChange: setVariant,
            options: [
                { label: "Filled", value: "filled" },
                { label: "Outline", value: "outline" }
            ]
        },
        {
            type: "slider",
            label: "Size",
            value: sizeMap[size],
            onChange: (value) => setSize(sizeValues[value]),
            min: 0,
            max: 4,
            step: 1
        }
    ];

    useEffect(() => {
        const getProps = () => {
            const props = [];

            if (variant && variant !== "filled") {
                props.push(`variant="${variant}"`);
            }

            if (leftSection) {
                props.push("leftSection={<IconPlus />}");
            }

            if (rightSection) {
                props.push("rightSection={<IconPlus />}");
            }

            if (disabled) {
                props.push("disabled");
            }

            if (size) {
                props.push(`size="${size}"`);
            }

            return props.join(" ");
        };

        const code = `
import { Button } from '@/components/ui';
    
function Demo() {
    return (
        <Button ${getProps()}>
            Click me
        </Button>
    );
}
    `;

        formatCode(code).then(setDemoCode);
    }, [variant, leftSection, rightSection, disabled, size]);

    return (
        <ComponentLayout
            title="Button"
            description="A simple button component"
            usage={
                <CodeDemo
                    code={demoCode}
                    controls={<DemoControls controls={controls} />}
                />
            }
            table={{
                title: "Props",
                columns: tableColumns,
                data: tableData
            }}
        >
            <Button
                variant={variant}
                size={size}
                disabled={disabled}
                leftSection={leftSection ? <IconPlus /> : undefined}
                rightSection={rightSection ? <IconPlus /> : undefined}
            >
                Click me
            </Button>
        </ComponentLayout>
    );
}

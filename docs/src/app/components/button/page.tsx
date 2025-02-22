"use client";

import { useState, useEffect } from "react";
import { ComponentLayout } from "@/components/Layout";
import { CodeDemo } from "@/components/Demo";
import { DemoControls } from "@/components/Demo/DemoControls";
import { Button, ButtonSize, ButtonVariant } from "@/components/ui";
import { formatCode } from "@/utils/formatCode";
import { DemoControl } from "@/types/demo";
import { IconPlus } from "@tabler/icons-react";

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
            type: "select",
            label: "Size",
            value: size,
            onChange: setSize,
            options: [
                { label: "Extra Small", value: "xs" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" }
            ]
        }
    ];

    useEffect(() => {
        const getProps = () => {
            const props = [];

            props.push(`variant="${variant}"`);

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

        const code = `import { Button } from '@/components';
    
    function Demo() {
        return (
            <Button ${getProps()}>
                Click me
            </Button>
        );
    }`;

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

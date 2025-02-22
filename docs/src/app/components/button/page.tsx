"use client";

import { ComponentLayout } from "@/components/Layout";
import { CodeDemo } from "@/components/Demo";
import { DemoControls } from "@/components/Demo/DemoControls";
import { Button, ButtonVariant } from "@/components/ui";
import { useState, useEffect } from "react";
import { formatCode } from "@/utils/formatCode";
import { DemoControl } from "@/types/demo";
import { Slider } from "@/components/ui/Slider";
import { IconPlus } from "@tabler/icons-react";

export default function ButtonPage() {
    const [variant, setVariant] = useState<ButtonVariant>("filled");
    const [leftSection, setLeftSection] = useState(false);
    const [rightSection, setRightSection] = useState(false);
    const [demoCode, setDemoCode] = useState("");
    const [value, setValue] = useState(0);

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
            type: "select",
            label: "Variant",
            value: variant,
            onChange: setVariant,
            options: [
                { label: "Filled", value: "filled" },
                { label: "Outline", value: "outline" }
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
    }, [variant, leftSection, rightSection]);

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
                variant="filled"
                leftSection={leftSection ? <IconPlus /> : undefined}
                rightSection={rightSection ? <IconPlus /> : undefined}
            >
                Click me
            </Button>
        </ComponentLayout>
    );
}

"use client";

import { useState, useEffect } from "react";
import { ComponentLayout } from "@/components/Layout";
import { CodeDemo } from "@/components/Demo";
import { DemoControls } from "@/components/Demo/DemoControls";
import {
  Button,
  ButtonGroup,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui";
import { formatCode } from "@/utils/formatCode";
import { DemoControl } from "@/types/demo";
import { IconPlus } from "@tabler/icons-react";

const tableColumns = [
  {
    key: "name",
    label: "Name",
    className: "w-[150px] font-mono text-sm",
  },
  {
    key: "type",
    label: "Type",
    className: "w-[150px] font-mono text-sm text-blue-400",
  },
  {
    key: "default",
    label: "Default",
    className: "w-[150px] font-mono text-sm text-gray-400",
  },
  {
    key: "description",
    label: "Description",
    className: "text-sm",
  },
];

const tableData = [
  {
    name: "size",
    type: "ButtonSize",
    default: "sm",
    description: "The size of the button",
  },
];

const sizeValues: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];
const sizeMap: Record<ButtonSize, number> = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
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
      type: "slider",
      label: "Size",
      value: sizeMap[size],
      onChange: (value) => setSize(sizeValues[value]),
      min: 0,
      max: 4,
      step: 1,
      marks: [
        { value: 0, label: "xs" },
        { value: 1, label: "sm" },
        { value: 2, label: "md" },
        { value: 3, label: "lg" },
        { value: 4, label: "xl" },
      ],
      stickToMarks: true,
    },
  ];

  useEffect(() => {
    const getProps = () => {
      const props = [];

      if (size) {
        props.push(`size="${size}"`);
      }

      return props.join(" ");
    };

    const code = `
import { Button } from '@/components/ui';
    
function Demo() {
    return (
        <ButtonGroup ${getProps()}>
        </ButtonGroup>
    );
}
    `;

    formatCode(code).then(setDemoCode);
  }, [variant, leftSection, rightSection, disabled, size]);

  return (
    <ComponentLayout
      title="Button Group"
      description="A group of buttons"
      usage={
        <CodeDemo
          code={demoCode}
          controls={<DemoControls controls={controls} />}
        />
      }
      table={{
        title: "Props",
        columns: tableColumns,
        data: tableData,
      }}
    >
      <ButtonGroup size={size}>
        <Button
          size={size}
          disabled={disabled}
          leftSection={leftSection ? <IconPlus /> : undefined}
          rightSection={rightSection ? <IconPlus /> : undefined}
        >
          Click me
        </Button>
        <Button
          size={size}
          disabled={disabled}
          leftSection={leftSection ? <IconPlus /> : undefined}
          rightSection={rightSection ? <IconPlus /> : undefined}
        >
          Click me
        </Button>
      </ButtonGroup>
    </ComponentLayout>
  );
}

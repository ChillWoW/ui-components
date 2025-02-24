"use client";

import { useState, useEffect } from "react";
import { ComponentLayout } from "@/components/Layout";
import { CodeDemo } from "@/components/Demo";
import { DemoControls } from "@/components/Demo/DemoControls";
import { Button, ButtonSize, ButtonVariant, TextInput } from "@/components/ui";
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
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the input is disabled",
  },
  {
    name: "leftSection",
    type: "React.ReactNode",
    default: "undefined",
    description: "Content to be rendered on the left side of the input",
  },
  {
    name: "readOnly",
    type: "boolean",
    default: "false",
    description: "Whether the input is read only",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "The label of the input",
  },
  {
    name: "description",
    type: "string",
    default: "undefined",
    description: "The description of the input",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "Whether the input is required",
  },
];

export default function ButtonPage() {
  const [variant, setVariant] = useState<ButtonVariant>("filled");
  const [leftSection, setLeftSection] = useState(false);
  const [size, setSize] = useState<ButtonSize>("sm");
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [inputValue, setInputValue] = useState("This Is The Content");
  const [demoCode, setDemoCode] = useState("");

  const controls: DemoControl[] = [
    {
      type: "switch",
      label: "Left Section",
      value: leftSection,
      onChange: setLeftSection,
    },
    {
      type: "switch",
      label: "Disabled",
      value: disabled,
      onChange: setDisabled,
    },
    {
      type: "switch",
      label: "Read Only",
      value: readOnly,
      onChange: setReadOnly,
    },
  ];

  useEffect(() => {
    const getProps = () => {
      const props = [];

      if (leftSection) {
        props.push("leftSection={<IconPlus />}");
      }

      if (disabled) {
        props.push("disabled");
      }

      return props.join(" ");
    };

    const code = `
import { Button } from '@/components/ui';
    
function Demo() {
    return (
        <TextInput ${getProps()}/>
    );
}
    `;

    formatCode(code).then(setDemoCode);
  }, [variant, leftSection, disabled, size]);

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
        data: tableData,
      }}
    >
      <TextInput
        disabled={disabled}
        leftSection={leftSection ? <IconPlus /> : undefined}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        readOnly={readOnly}
      />
    </ComponentLayout>
  );
}

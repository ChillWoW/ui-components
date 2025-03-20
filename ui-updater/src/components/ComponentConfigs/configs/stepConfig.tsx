import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  Step,
  Button,
} from "@/components/ui";
import { IconCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

const switchClasses = {
  track: "bg-dark-700",
  thumb: "bg-white",
  checked: {
    track: "bg-blue-600",
    thumb: "bg-white",
  },
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-700",
  option: "hover:bg-dark-600",
  selectedOption: "bg-dark-600",
};

// Define the steps array outside to ensure it's always available
const defaultSteps = [
  {
    label: "Account Setup",
    description: "Create your account",
  },
  {
    label: "Personal Info",
    description: "Add your personal details",
  },
  {
    label: "Verification",
    description: "Verify your identity",
  },
  {
    label: "Complete",
    description: "Finalize your profile",
  },
];

export const stepConfig: ComponentConfigType = {
  defaultProps: {
    active: 0,
    steps: defaultSteps,
    variant: "default",
    size: "md",
    orientation: "horizontal",
    withNumbers: true,
    showCompletedIcon: true,
    disabled: false,
    allowClick: true,
    allowClickOnCompleted: true,
  },

  renderComponent: (props, setProps) => {
    const handleStepChange = (index: number) => {
      setProps({ ...props, active: index });
    };

    // Make sure steps are always defined, even if they somehow got unset
    const steps = props.steps || defaultSteps;
    const activeStep = steps[props.active] || steps[0];

    return (
      <div className="w-full flex flex-col gap-6">
        <Step
          steps={steps}
          active={props.active}
          onChange={handleStepChange}
          variant={props.variant}
          size={props.size}
          orientation={props.orientation}
          withNumbers={props.withNumbers}
          completedIcon={
            props.showCompletedIcon ? <IconCheck size={16} /> : undefined
          }
          disabled={props.disabled}
          allowClick={props.allowClick}
          allowClickOnCompleted={props.allowClickOnCompleted}
        />

        <div className="p-4 bg-dark-800 rounded border border-dark-600 text-center">
          <Text size="lg" weight="semibold" className="mb-2">
            {activeStep.label}
          </Text>
          <Text size="sm" className="text-gray-400">
            {activeStep.description}
          </Text>
          <div className="flex justify-between mt-6">
            <button
              className="px-4 py-2 text-sm border border-dark-600 rounded hover:bg-dark-700 disabled:opacity-50"
              onClick={() => handleStepChange(Math.max(0, props.active - 1))}
              disabled={props.active === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
              onClick={() =>
                handleStepChange(Math.min(steps.length - 1, props.active + 1))
              }
              disabled={props.active === steps.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  },

  renderPropsPanel: () => {
    return ({
      props,
      setProps,
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
          Step Properties
        </Text>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Active Step
          </Text>
          <RadioGroup
            value={String(props.active)}
            onChange={(value) => setProps({ ...props, active: Number(value) })}
          >
            {props.steps?.map((step: any, index: any) => (
              <RadioGroup.Item
                key={index}
                value={String(index)}
                label={`Step ${index + 1}: ${step.label || "Step"}`}
              />
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="default" label="Default" />
            <RadioGroup.Item value="outline" label="Outline" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            options={[
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
            ]}
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Orientation
          </Text>
          <RadioGroup
            value={props.orientation}
            onChange={(value) => setProps({ ...props, orientation: value })}
          >
            <RadioGroup.Item value="horizontal" label="Horizontal" />
            <RadioGroup.Item value="vertical" label="Vertical" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Show Numbers"
            checked={props.withNumbers}
            onChange={(checked) => setProps({ ...props, withNumbers: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Completed Icon"
            checked={props.showCompletedIcon}
            onChange={(checked) =>
              setProps({ ...props, showCompletedIcon: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Allow Click"
            checked={props.allowClick}
            onChange={(checked) => setProps({ ...props, allowClick: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Allow Click on Completed"
            checked={props.allowClickOnCompleted}
            onChange={(checked) =>
              setProps({ ...props, allowClickOnCompleted: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        steps: {
          type: "StepItem[]",
          required: true,
          description:
            "Array of step objects with label and optional description",
        },
        active: {
          type: "number",
          required: true,
          description: "Index of the current active step (zero-based)",
        },
        onChange: {
          type: "function",
          description:
            "Function called when step changes with index as argument",
        },
        variant: {
          type: "string",
          default: "default",
          description: "Visual style variant of the steps",
          possibleValues: ["default", "outline"],
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the step indicators and text",
          possibleValues: ["sm", "md", "lg"],
        },
        orientation: {
          type: "string",
          default: "horizontal",
          description: "Layout orientation of the steps",
          possibleValues: ["horizontal", "vertical"],
        },
        withNumbers: {
          type: "boolean",
          default: true,
          description: "Whether to show step numbers inside the indicators",
        },
        completedIcon: {
          type: "ReactNode",
          description: "Icon to display in completed steps instead of numbers",
        },
        disabled: {
          type: "boolean",
          default: false,
          description: "Whether the stepper is disabled",
        },
        allowClick: {
          type: "boolean",
          default: false,
          description: "Whether to allow navigation by clicking on steps",
        },
        allowClickOnCompleted: {
          type: "boolean",
          default: false,
          description:
            "Whether to allow navigation to previously completed steps",
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for step elements",
          properties: {
            container: {
              type: "string",
              description: "CSS class for the steps container",
            },
            step: {
              type: "string",
              description: "CSS class for the step indicators",
            },
            label: {
              type: "string",
              description: "CSS class for step labels",
            },
            description: {
              type: "string",
              description: "CSS class for step descriptions",
            },
            separator: {
              type: "string",
              description: "CSS class for the separator lines between steps",
            },
          },
        },
      }}
    />
  ),
};

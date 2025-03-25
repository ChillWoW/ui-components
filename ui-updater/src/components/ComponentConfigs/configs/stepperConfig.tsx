import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  RadioGroup,
  Stepper,
  Button,
  ButtonGroup,
  Slider,
} from "@/components/ui";
import { IconCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
} from "./index";

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

export const stepperConfig: ComponentConfigType = {
  defaultProps: {
    active: 0,
    steps: defaultSteps,
    variant: "filled",
    size: "md",
    orientation: "horizontal",
    withNumbers: true,
    showCompletedIcon: true,
    disabled: false,
    loading: false,
    allowClick: true,
    allowClickOnCompleted: true,
    radius: "full",
    iconPosition: "left",
  },

  renderComponent: (props, setProps) => {
    const handleStepChange = (index: number) => {
      setProps({ ...props, active: index });
    };

    // Make sure steps are always defined, even if they somehow got unset
    const steps = props.steps || defaultSteps;
    const activeStep = steps[props.active] || steps[0];

    // Determine if we should show the completed state
    const showCompleted = props.active >= steps.length;

    return (
      <div className="w-full flex flex-col gap-6">
        {showCompleted ? (
          <div className="w-full">
            <Stepper
              steps={steps}
              active={steps.length}
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
              radius={props.radius}
              iconPosition={props.iconPosition}
              loading={props.loading}
            >
              {steps.map((step: any, index: any) => (
                <React.Fragment key={index}>
                  <Stepper.Step
                    index={index}
                    label={step.label}
                    description={step.description}
                    allowStepSelect={props.allowClick}
                  />
                  {index < steps.length - 1 && <></>}
                </React.Fragment>
              ))}
              <Stepper.Completed icon={<IconCheck size={24} />}>
                <Text className="text-center mt-2">
                  All steps completed successfully!
                </Text>
              </Stepper.Completed>
            </Stepper>
          </div>
        ) : (
          <Stepper
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
            radius={props.radius}
            iconPosition={props.iconPosition}
            loading={props.loading}
          />
        )}

        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex flex-col gap-2">
            <Text weight="semibold" size="sm" className="text-white">
              Active Step: {showCompleted ? "Completed" : activeStep.label}
            </Text>
            <Text size="xs" className="text-gray-400">
              {showCompleted
                ? "All steps completed"
                : activeStep.description || "No description"}
            </Text>

            {!showCompleted && (
              <div className="flex gap-2 mt-2">
                <Button
                  size="xs"
                  variant="filled"
                  disabled={props.active === 0}
                  onClick={() =>
                    setProps({
                      ...props,
                      active: Math.max(0, props.active - 1),
                    })
                  }
                >
                  Previous
                </Button>
                <Button
                  size="xs"
                  variant="filled"
                  onClick={() =>
                    setProps({
                      ...props,
                      active: Math.min(steps.length, props.active + 1),
                    })
                  }
                >
                  {props.active === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              </div>
            )}
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
        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Active Step
          </Text>
          <SelectInput
            value={props.active.toString()}
            onChange={(value) =>
              setProps({ ...props, active: parseInt(value) })
            }
            classNames={selectInputClasses}
          >
            {defaultSteps.map((step, index) => (
              <SelectInput.Option
                key={index}
                value={index.toString()}
                label={step.label}
              />
            ))}
            <SelectInput.Option
              value={defaultSteps.length.toString()}
              label="Completed"
            />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="filled" label="Filled" />
            <RadioGroup.Item value="outline" label="Outline" />
            <RadioGroup.Item value="subtle" label="Subtle" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="xs" label="xs" />
            <SelectInput.Option value="sm" label="sm" />
            <SelectInput.Option value="md" label="md" />
            <SelectInput.Option value="lg" label="lg" />
            <SelectInput.Option value="xl" label="xl" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Orientation
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, orientation: "horizontal" })}
              className={`${buttonClass} ${
                props.orientation === "horizontal" && activeButtonClass
              }`}
            >
              Horizontal
            </Button>
            <Button
              onClick={() => setProps({ ...props, orientation: "vertical" })}
              className={`${buttonClass} ${
                props.orientation === "vertical" && activeButtonClass
              }`}
            >
              Vertical
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Icon Position
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, iconPosition: "left" })}
              className={`${buttonClass} ${
                props.iconPosition === "left" && activeButtonClass
              }`}
            >
              Left
            </Button>
            <Button
              onClick={() => setProps({ ...props, iconPosition: "right" })}
              className={`${buttonClass} ${
                props.iconPosition === "right" && activeButtonClass
              }`}
            >
              Right
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Radius
          </Text>
          <SelectInput
            value={props.radius}
            onChange={(value) => setProps({ ...props, radius: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="none" label="None" />
            <SelectInput.Option value="sm" label="Small" />
            <SelectInput.Option value="md" label="Medium" />
            <SelectInput.Option value="lg" label="Large" />
            <SelectInput.Option value="xl" label="Extra Large" />
            <SelectInput.Option value="full" label="Full" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <div className="space-y-2">
            <Switch
              label="Show Numbers"
              checked={props.withNumbers}
              onChange={(checked) =>
                setProps({ ...props, withNumbers: checked })
              }
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
              onChange={(checked) =>
                setProps({ ...props, allowClick: checked })
              }
              classNames={switchClasses}
            />
            <Switch
              label="Allow Click On Completed"
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
            <Switch
              label="Loading"
              checked={props.loading}
              onChange={(checked) => setProps({ ...props, loading: checked })}
              classNames={switchClasses}
            />
          </div>
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
          default: "filled",
          description: "Visual style variant of the steps",
          possibleValues: ["filled", "outline", "subtle"],
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the step indicators and text",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
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
        loading: {
          type: "boolean",
          default: false,
          description: "Whether the stepper is in loading state",
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
        radius: {
          type: "string",
          default: "full",
          description: "Border radius of step indicators",
          possibleValues: ["none", "sm", "md", "lg", "xl", "full"],
        },
        iconPosition: {
          type: "string",
          default: "left",
          description: "Position of step indicators relative to text",
          possibleValues: ["left", "right"],
        },
      }}
    />
  ),
};

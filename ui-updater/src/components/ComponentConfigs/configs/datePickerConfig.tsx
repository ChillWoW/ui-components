import React from "react";
import {
  Text,
  Switch,
  NumberInput,
  DatePicker,
  ButtonGroup,
  Button,
} from "@/components/ui";
import { IconAlertCircle } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { switchClasses } from "./index";

export const datePickerConfig: ComponentConfigType = {
  defaultProps: {
    value: new Date(),
    showLabel: true,
    showHint: false,
    label: "Date Picker",
    hint: "Pick a date",
    required: false,
    disabled: false,
    minDate: new Date(),
    maxDate: new Date("2025-12-31"),
    format: "MM/DD/YYYY",
    showWeekNumbers: false,
    firstDayOfWeek: 1,
    clearable: true,
    yearRange: 10,
    leftSection: false,
    error: false,
  },

  renderComponent: (props, setProps) => (
    <DatePicker
      value={props.value}
      onChange={(value) => setProps({ ...props, value })}
      disabled={props.disabled}
      label={props.showLabel ? props.label : undefined}
      required={props.required}
      hint={props.showHint ? props.hint : undefined}
      minDate={props.minDate}
      maxDate={props.maxDate}
      format={props.format}
      showWeekNumbers={props.showWeekNumbers}
      firstDayOfWeek={props.firstDayOfWeek}
      clearable={props.clearable}
      yearRange={props.yearRange}
      error={props.error && "Error"}
    />
  ),

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
          Date Picker Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Label"
            checked={props.showLabel}
            onChange={(checked) => setProps({ ...props, showLabel: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Hint"
            checked={props.showHint}
            onChange={(checked) => setProps({ ...props, showHint: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Required"
            checked={props.required}
            onChange={(checked) => setProps({ ...props, required: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Error"
            checked={props.error}
            onChange={(checked) => setProps({ ...props, error: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Week Numbers"
            checked={props.showWeekNumbers}
            onChange={(checked) =>
              setProps({ ...props, showWeekNumbers: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Clearable"
            checked={props.clearable}
            onChange={(checked) => setProps({ ...props, clearable: checked })}
            classNames={switchClasses}
          />
          <ButtonGroup>
            <Button
              onClick={() => setProps({ ...props, firstDayOfWeek: 0 })}
              className={props.firstDayOfWeek === 0 ? "bg-dark-700" : ""}
            >
              Sunday
            </Button>
            <Button
              onClick={() => setProps({ ...props, firstDayOfWeek: 1 })}
              className={props.firstDayOfWeek === 1 ? "bg-dark-700" : ""}
            >
              Monday
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
};

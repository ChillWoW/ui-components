import React from "react";
import {
  Text,
  SelectInput,
  ButtonGroup,
  Button,
  AvatarGroup,
  Slider,
  NumberInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  selectInputClasses,
  buttonClass,
  activeButtonClass,
  numberInputClass,
  sliderClass,
} from "./index";

export const avatarGroupConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    shape: "circle",
    limit: 3,
    spacing: 10,
    overlapFrom: "left",
  },

  renderComponent: (props) => (
    <AvatarGroup
      avatars={[
        {
          src: "https://github.com/shadcn.png",
          placeholder: "SCN",
        },
        {
          src: "https://github.com/shadcn.png",
          placeholder: "SCN",
        },
        {
          src: "https://github.com/shadcn.png",
          placeholder: "SCN",
        },
        {
          src: "https://github.com/shadcn.png",
          placeholder: "SCN",
        },
      ]}
      size={props.size}
      shape={props.shape}
      rounded={props.rounded}
      limit={props.limit}
      spacing={props.spacing}
      overlapFrom={props.overlapFrom}
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
          Avatar Group Properties
        </Text>

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
            Shape
          </Text>
          <ButtonGroup>
            <Button
              key="circle"
              variant="filled"
              size="sm"
              onClick={() => setProps({ ...props, shape: "circle" })}
              className={`${buttonClass} ${
                props.shape === "circle" && activeButtonClass
              }`}
            >
              Circle
            </Button>
            <Button
              key="rounded"
              variant="filled"
              size="sm"
              onClick={() => setProps({ ...props, shape: "rounded" })}
              className={`${buttonClass} ${
                props.shape === "rounded" && activeButtonClass
              }`}
            >
              Rounded
            </Button>
          </ButtonGroup>
        </div>

        {props.shape === "rounded" && (
          <div className="flex flex-col gap-1">
            <Text size="sm" weight="bold">
              Rounded
            </Text>
            <SelectInput
              value={props.rounded}
              onChange={(value) => setProps({ ...props, rounded: value })}
              classNames={selectInputClasses}
            >
              <SelectInput.Option value="none" label="None" />
              <SelectInput.Option value="sm" label="Sm" />
              <SelectInput.Option value="md" label="Md" />
              <SelectInput.Option value="lg" label="Lg" />
              <SelectInput.Option value="full" label="Full" />
            </SelectInput>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Overlap From
          </Text>
          <ButtonGroup>
            <Button
              key="left"
              variant="filled"
              size="sm"
              onClick={() => setProps({ ...props, overlapFrom: "left" })}
              className={`${buttonClass} ${
                props.overlapFrom === "left" && activeButtonClass
              }`}
            >
              Left
            </Button>
            <Button
              key="right"
              variant="filled"
              size="sm"
              onClick={() => setProps({ ...props, overlapFrom: "right" })}
              className={`${buttonClass} ${
                props.overlapFrom === "right" && activeButtonClass
              }`}
            >
              Right
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Limit
          </Text>
          <Slider
            value={props.limit}
            onChange={(value) => setProps({ ...props, limit: value })}
            min={1}
            max={5}
            marks={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" },
            ]}
            stickToMarks
            showTooltip
            classNames={sliderClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Spacing
          </Text>
          <NumberInput
            value={props.spacing}
            onChange={(value) => setProps({ ...props, spacing: value })}
            className="w-full"
            classNames={numberInputClass}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        avatars: {
          type: "array",
          description: "Array of avatars",
        },
        limit: {
          type: "number",
          description:
            "Determines the number of avatars to show, other avatars will be hidden and shown as +N",
        },
        spacing: {
          type: "number",
          description: "Determines the spacing between avatars",
        },
        size: {
          type: "string",
          default: "md",
          description: "Determines the size of the avatar",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        shape: {
          type: "string",
          default: "circle",
          description: "Determines the shape of the avatar",
          possibleValues: ["circle", "rounded"],
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the avatar",
        },
        overlapFrom: {
          type: "string",
          description: "Determines the position of the overlap",
          possibleValues: ["left", "right"],
        },
      }}
    />
  ),
};

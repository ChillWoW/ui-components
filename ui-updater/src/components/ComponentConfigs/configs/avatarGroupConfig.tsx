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

const switchClasses = {
  track: "bg-dark-700",
  activeTrack: "bg-dark-100",
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-800",
  option: "bg-dark-800 hover:bg-dark-700 text-white",
  selectedOption: "bg-dark-700",
};

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
          Avatar Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            options={[
              { value: "xs", label: "xs" },
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
              { value: "xl", label: "xl" },
            ]}
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Shape
          </Text>
          <ButtonGroup
            children={[
              <Button
                key="circle"
                variant="filled"
                size="sm"
                onClick={() => setProps({ ...props, shape: "circle" })}
                className={`${props.shape === "circle" && "bg-dark-500"}`}
              >
                Circle
              </Button>,
              <Button
                key="rounded"
                variant="filled"
                size="sm"
                onClick={() => setProps({ ...props, shape: "rounded" })}
                className={`${props.shape === "rounded" && "bg-dark-500"}`}
              >
                Rounded
              </Button>,
            ]}
          />
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
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Overlap From
          </Text>
          <ButtonGroup
            children={[
              <Button
                key="left"
                variant="filled"
                size="sm"
                onClick={() => setProps({ ...props, overlapFrom: "left" })}
                className={`${props.overlapFrom === "left" && "bg-dark-500"}`}
              >
                Left
              </Button>,
              <Button
                key="right"
                variant="filled"
                size="sm"
                onClick={() => setProps({ ...props, overlapFrom: "right" })}
                className={`${props.overlapFrom === "right" && "bg-dark-500"}`}
              >
                Right
              </Button>,
            ]}
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
            classNames={{
              input: "bg-dark-800",
              incrementButton: "bg-dark-800",
              decrementButton: "bg-dark-800",
            }}
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

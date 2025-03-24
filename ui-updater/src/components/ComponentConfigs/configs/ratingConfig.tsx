import React from "react";
import {
  Text,
  Rating,
  RatingInput,
  Switch,
  SelectInput,
  NumberInput,
  RadioGroup,
  ButtonGroup,
  Button,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  buttonClass,
  activeButtonClass,
} from "./index";

export const ratingConfig: ComponentConfigType = {
  defaultProps: {
    rating: 3,
    maxRating: 5,
    size: "md",
    allowHalf: false,
    readOnly: false,
    showRating: true,
    color: "yellow",
    emptyColor: "",
    orientation: "horizontal",
  },

  renderComponent: (props, setProps) => (
    <div className="flex flex-col items-center gap-3">
      <RatingInput
        rating={props.rating}
        onChange={(value: any) => setProps({ ...props, rating: value })}
        maxRating={props.maxRating}
        size={props.size}
        allowHalf={props.allowHalf}
        showRating={props.showRating}
        color={props.color}
        readOnly={props.readOnly}
        emptyColor={props.emptyColor}
        orientation={props.orientation}
      />
    </div>
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
          Rating Properties
        </Text>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Rating Value
          </Text>
          <NumberInput
            value={props.rating}
            onChange={(value) =>
              setProps({
                ...props,
                rating: Math.min(Math.max(0, value), props.maxRating),
              })
            }
            min={0}
            max={props.maxRating}
            step={props.allowHalf ? 0.5 : 1}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Max Rating
          </Text>
          <NumberInput
            value={props.maxRating}
            onChange={(value) =>
              setProps({
                ...props,
                maxRating: Math.max(1, value),
                rating: Math.min(props.rating, value),
              })
            }
            min={1}
            max={10}
          />
        </div>

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
            Color
          </Text>
          <SelectInput
            options={[
              { value: "yellow", label: "Yellow" },
              { value: "orange", label: "Orange" },
              { value: "red", label: "Red" },
              { value: "pink", label: "Pink" },
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "purple", label: "Purple" },
            ]}
            value={props.color}
            onChange={(value) => setProps({ ...props, color: value })}
            classNames={selectInputClasses}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Empty Color
          </Text>
          <SelectInput
            options={[
              { value: "", label: "None" },
              { value: "yellow", label: "Yellow" },
              { value: "orange", label: "Orange" },
              { value: "red", label: "Red" },
              { value: "pink", label: "Pink" },
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "purple", label: "Purple" },
            ]}
            value={props.emptyColor}
            onChange={(value) => setProps({ ...props, emptyColor: value })}
            classNames={selectInputClasses}
          />
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
            Options
          </Text>
          <Switch
            label="Allow Half Values"
            checked={props.allowHalf}
            onChange={(checked) => setProps({ ...props, allowHalf: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Read Only"
            checked={props.readOnly}
            onChange={(checked) => setProps({ ...props, readOnly: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Rating"
            checked={props.showRating}
            onChange={(checked) => setProps({ ...props, showRating: checked })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        rating: {
          type: "number",
          default: 0,
          description: "Current rating value",
        },
        onChange: {
          type: "function",
          description:
            "Function called when rating changes with new value as argument",
        },
        maxRating: {
          type: "number",
          default: 5,
          description: "Maximum rating value (number of stars)",
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the rating stars",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        allowHalf: {
          type: "boolean",
          default: false,
          description: "Whether to allow half-star ratings",
        },
        showRating: {
          type: "boolean",
          default: false,
          description: "Whether to show the current rating value as text",
        },
        color: {
          type: "string",
          default: "yellow",
          description: "Color of the filled stars",
        },
        emptyColor: {
          type: "string",
          default: "",
          description: "Color of the empty stars",
        },
        orientation: {
          type: "string",
          default: "horizontal",
          description: "Orientation of the rating stars",
          possibleValues: ["horizontal", "vertical"],
        },
        readOnly: {
          type: "boolean",
          default: false,
          description: "Whether to make the rating read-only",
        },
        className: {
          type: "string",
          description:
            "Additional CSS classes to apply to the rating container",
        },
      }}
    />
  ),
};

import React from "react";
import {
  Text,
  Pagination,
  Switch,
  NumberInput,
  SelectInput,
} from "@/components/ui";
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

const numberInputClasses = {
  input: "bg-dark-800",
  incrementButton: "bg-dark-800",
  decrementButton: "bg-dark-800",
};

export const paginationConfig: ComponentConfigType = {
  defaultProps: {
    total: 10,
    page: 1,
    siblings: 1,
  },

  renderComponent: (props, setProps) => (
    <div className="w-full flex justify-center">
      <Pagination
        total={props.total}
        page={props.page}
        onChange={(page) => setProps({ ...props, page })}
        siblings={props.siblings}
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
          Pagination Properties
        </Text>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Current Page
          </Text>
          <NumberInput
            value={props.page}
            onChange={(value) =>
              setProps({ ...props, page: Math.min(value, props.total) })
            }
            min={1}
            max={props.total}
            className="w-full"
            classNames={numberInputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Total Pages
          </Text>
          <NumberInput
            value={props.total}
            onChange={(value) => {
              const newTotal = Math.max(1, value);
              setProps({
                ...props,
                total: newTotal,
                page: Math.min(props.page, newTotal),
              });
            }}
            min={1}
            max={100}
            className="w-full"
            classNames={numberInputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Siblings
          </Text>
          <div className="flex items-center gap-2">
            <Text size="xs" className="text-gray-400">
              Number of siblings to show on each side of the current page
            </Text>
          </div>
          <NumberInput
            value={props.siblings}
            onChange={(value) => setProps({ ...props, siblings: value })}
            min={0}
            max={3}
            className="w-full"
            classNames={numberInputClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        total: {
          type: "number",
          required: true,
          description: "Total number of pages",
        },
        page: {
          type: "number",
          required: true,
          description: "Current active page",
        },
        onChange: {
          type: "function",
          required: true,
          description:
            "Function called when page changes with new page number as argument",
        },
        siblings: {
          type: "number",
          default: 1,
          description:
            "Number of siblings pages to display on each side of the current page",
        },
        className: {
          type: "string",
          description:
            "Additional CSS classes to apply to the pagination container",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for pagination elements",
          properties: {
            container: {
              type: "string",
              description: "CSS class for the pagination container",
            },
            button: {
              type: "string",
              description: "CSS class for pagination buttons",
            },
            activeButton: {
              type: "string",
              description: "CSS class for the active pagination button",
            },
            disabledButton: {
              type: "string",
              description: "CSS class for disabled pagination buttons",
            },
            dots: {
              type: "string",
              description: "CSS class for the ellipsis (...) element",
            },
          },
        },
      }}
    />
  ),
};

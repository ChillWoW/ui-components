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
import { switchClasses, selectInputClasses, numberInputClass } from "./index";

export const paginationConfig: ComponentConfigType = {
  defaultProps: {
    total: 10,
    page: 1,
    siblings: 1,
    disabled: false,
    showPrevNext: true,
    showFirstLast: false,
    size: "md",
    ariaLabel: "Pagination",
  },

  renderComponent: (props, setProps) => (
    <div className="w-full flex justify-center">
      <Pagination
        total={props.total}
        page={props.page}
        onChange={(page) => setProps({ ...props, page })}
        siblings={props.siblings}
        disabled={props.disabled}
        showPrevNext={props.showPrevNext}
        showFirstLast={props.showFirstLast}
        size={props.size}
        ariaLabel={props.ariaLabel}
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
        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="xs" label="Extra Small" />
            <SelectInput.Option value="sm" label="Small" />
            <SelectInput.Option value="md" label="Medium" />
            <SelectInput.Option value="lg" label="Large" />
            <SelectInput.Option value="xl" label="Extra Large" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Current Page
          </Text>
          <NumberInput
            value={props.page}
            onChange={(value) =>
              setProps({
                ...props,
                page: Math.min(value, props.total),
              })
            }
            min={1}
            max={props.total}
            classNames={numberInputClass}
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
            classNames={numberInputClass}
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
            classNames={numberInputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Disabled"
            checked={props.disabled}
            onChange={(checked) => setProps({ ...props, disabled: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Show Previous/Next"
            checked={props.showPrevNext}
            onChange={(checked) =>
              setProps({ ...props, showPrevNext: checked })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Show First/Last"
            checked={props.showFirstLast}
            onChange={(checked) =>
              setProps({ ...props, showFirstLast: checked })
            }
            classNames={switchClasses}
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
        disabled: {
          type: "boolean",
          default: false,
          description: "Disables all pagination buttons when true",
        },
        showPrevNext: {
          type: "boolean",
          default: true,
          description: "Whether to show previous and next page buttons",
        },
        showFirstLast: {
          type: "boolean",
          default: false,
          description: "Whether to show first and last page buttons",
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of pagination buttons: xs, sm, md, lg, or xl",
        },
        ariaLabel: {
          type: "string",
          default: "Pagination",
          description: "Accessibility label for the navigation element",
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
            prevNextButton: {
              type: "string",
              description: "CSS class for previous/next/first/last buttons",
            },
          },
        },
        prevNextLabels: {
          type: "object",
          description: "Custom labels or icons for navigation buttons",
          properties: {
            prev: {
              type: "node",
              description: "Content for the previous page button",
            },
            next: {
              type: "node",
              description: "Content for the next page button",
            },
            first: {
              type: "node",
              description: "Content for the first page button",
            },
            last: {
              type: "node",
              description: "Content for the last page button",
            },
          },
        },
      }}
    />
  ),
};

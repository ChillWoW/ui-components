import React from "react";
import {
  Text,
  Switch,
  SelectInput,
  NumberInput,
  Stat,
  TextInput,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  switchClasses,
  selectInputClasses,
  numberInputClass,
  textInputClass,
} from "./index";
import {
  IconTrendingUp,
  IconUsers,
  IconCurrencyDollar,
  IconShoppingCart,
} from "@tabler/icons-react";

export const statConfig: ComponentConfigType = {
  defaultProps: {
    title: "Revenue",
    value: "$13,456",
    description: "Compared to last month",
    icon: <IconCurrencyDollar />,
    variant: "primary",
    size: "md",
    trend: 12.5,
    trendLabel: "vs last month",
    loading: false,
    bordered: true,
  },

  renderComponent: (props, setProps) => (
    <div className="flex justify-center w-full p-4">
      <div className="w-full max-w-md">
        <Stat
          title={props.title}
          value={props.value}
          description={props.description}
          icon={
            props.icon === "users" ? (
              <IconUsers />
            ) : props.icon === "currency" ? (
              <IconCurrencyDollar />
            ) : props.icon === "trending" ? (
              <IconTrendingUp />
            ) : props.icon === "cart" ? (
              <IconShoppingCart />
            ) : null
          }
          variant={props.variant}
          size={props.size}
          trend={props.trend}
          trendLabel={props.trendLabel}
          loading={props.loading}
          bordered={props.bordered}
        />
      </div>
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
            Content
          </Text>

          <TextInput
            label="Title"
            value={props.title}
            onChange={(value) => setProps({ ...props, title: value })}
            classNames={textInputClass}
          />

          <TextInput
            label="Value"
            value={props.value}
            onChange={(value) => setProps({ ...props, value: value })}
            classNames={textInputClass}
          />

          <TextInput
            label="Description"
            value={props.description}
            onChange={(value) => setProps({ ...props, description: value })}
            classNames={textInputClass}
          />

          <SelectInput
            label="Icon"
            value={props.icon}
            onChange={(value) => setProps({ ...props, icon: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="users" label="Users" />
            <SelectInput.Option value="currency" label="Currency" />
            <SelectInput.Option value="trending" label="Trending" />
            <SelectInput.Option value="cart" label="Shopping Cart" />
          </SelectInput>
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Appearance
          </Text>

          <SelectInput
            label="Variant"
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
            classNames={selectInputClasses}
          >
            <SelectInput.Option value="default" label="Default" />
            <SelectInput.Option value="primary" label="Primary" />
            <SelectInput.Option value="secondary" label="Secondary" />
            <SelectInput.Option value="tertiary" label="Tertiary" />
            <SelectInput.Option value="success" label="Success" />
            <SelectInput.Option value="warning" label="Warning" />
            <SelectInput.Option value="danger" label="Danger" />
            <SelectInput.Option value="info" label="Info" />
          </SelectInput>

          <SelectInput
            label="Size"
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

          <NumberInput
            label="Trend (%)"
            value={props.trend}
            onChange={(value) => setProps({ ...props, trend: value })}
            min={-100}
            max={100}
            classNames={numberInputClass}
          />

          <TextInput
            label="Trend Label"
            value={props.trendLabel}
            onChange={(value) => setProps({ ...props, trendLabel: value })}
            classNames={textInputClass}
          />

          <Switch
            label="Bordered"
            checked={props.bordered}
            onChange={(checked) => setProps({ ...props, bordered: checked })}
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
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        title: {
          type: "ReactNode",
          description: "Title text displayed above the value",
        },
        value: {
          type: "ReactNode",
          description: "Main value or metric to display",
        },
        description: {
          type: "ReactNode",
          description: "Additional description below the value",
        },
        icon: {
          type: "ReactNode",
          description: "Icon to display in the top right",
        },
        variant: {
          type: "string",
          default: "default",
          description: "Color variant of the stat component",
          possibleValues: [
            "default",
            "primary",
            "secondary",
            "tertiary",
            "success",
            "warning",
            "danger",
            "info",
          ],
        },
        size: {
          type: "string",
          default: "md",
          description: "Size of the stat component",
          possibleValues: ["xs", "sm", "md", "lg", "xl"],
        },
        trend: {
          type: "number",
          description: "Percentage trend value (positive or negative)",
        },
        trendLabel: {
          type: "string",
          description: "Label to show next to the trend percentage",
        },
        loading: {
          type: "boolean",
          default: false,
          description: "Shows skeleton loaders when true",
        },
        bordered: {
          type: "boolean",
          default: false,
          description: "Adds a border around the stat component",
        },
        className: {
          type: "string",
          description: "Additional CSS classes for the container",
        },
        valueClassName: {
          type: "string",
          description: "Additional CSS classes for the value element",
        },
        titleClassName: {
          type: "string",
          description: "Additional CSS classes for the title element",
        },
        descriptionClassName: {
          type: "string",
          description: "Additional CSS classes for the description element",
        },
        iconClassName: {
          type: "string",
          description: "Additional CSS classes for the icon element",
        },
        onClick: {
          type: "function",
          description: "Click handler for the entire stat component",
        },
      }}
    />
  ),
};

import React, { ReactNode } from "react";
import { cn } from "../_utils";
import { IconDots } from "@tabler/icons-react";
import { BreadcrumbItem } from "./Item";
import { BreadcrumbProps } from "./types";

export const Breadcrumb: React.FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem;
} = ({
  items = [],
  children,
  separator = "/",
  size = "md",
  maxItems,
  collapsedLabel = "...",
  className,
  classNames = {},
}) => {
  // Determine size classes
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }[size];

  const renderItems = () => {
    let breadcrumbItems: ReactNode[] = [];

    if (items.length > 0) {
      breadcrumbItems = items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          {...item}
          className={cn(classNames.item, item.active && classNames.activeItem)}
        />
      ));
    } else if (children) {
      breadcrumbItems = React.Children.toArray(children);
    }

    if (maxItems && breadcrumbItems.length > maxItems) {
      const visibleCount = maxItems - 2;
      const firstItem = breadcrumbItems[0];
      const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
      const collapsedCount = breadcrumbItems.length - maxItems;

      const collapsedIndicator = (
        <span
          key="collapsed"
          className={cn(
            "text-gray-500 flex items-center",
            classNames.collapsed
          )}
        >
          <IconDots />
          <span className="ml-1">{collapsedCount}</span>
        </span>
      );

      breadcrumbItems = [firstItem, collapsedIndicator, lastItem];
    }

    return breadcrumbItems.map((item, index) => {
      if (index === breadcrumbItems.length - 1) {
        return item;
      }

      return (
        <React.Fragment key={`fragment-${index}`}>
          {item}
          <span
            className={cn("mx-2 text-gray-500", classNames.separator)}
            aria-hidden="true"
          >
            {separator}
          </span>
        </React.Fragment>
      );
    });
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center py-2",
        sizeClasses,
        className,
        classNames.container
      )}
    >
      {renderItems()}
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

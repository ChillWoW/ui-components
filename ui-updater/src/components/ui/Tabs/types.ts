import React from "react";

// Shared types
export type TabsOrientation = "horizontal" | "vertical";
export type TabsPosition = "top" | "bottom" | "left" | "right";
export type TabsVariant = "default" | "outline" | "pills";
export type TabsSize = "xs" | "sm" | "md" | "lg";

// ClassNames interfaces
export interface TabsClassNames {
  root?: string;
  list?: string;
  tab?: string;
  tabActive?: string;
  tabIcon?: string;
  tabLabel?: string;
  tabDescription?: string;
  tabRightSection?: string;
  indicator?: string;
  panel?: string;
}

// Context type
export interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
  orientation: TabsOrientation;
  variant: TabsVariant;
  size: TabsSize;
  position: TabsPosition;
  withBorder: boolean;
  fullWidth: boolean;
  grow: boolean;
  classNames?: TabsClassNames;
}

// Main Tabs component props
export interface TabsProps {
  /** Value for controlled component */
  value?: string;
  /** Default value for uncontrolled component */
  defaultValue?: string;
  /** Called when value changes */
  onChange?: (value: string) => void;
  /** Tabs orientation, horizontal or vertical */
  orientation?: TabsOrientation;
  /** Visual variant */
  variant?: TabsVariant;
  /** Size of tabs */
  size?: TabsSize;
  /** Position of tabs relative to content */
  position?: TabsPosition;
  /** Whether to display border around tabs and content */
  withBorder?: boolean;
  /** Whether tabs should take full width of container */
  fullWidth?: boolean;
  /** Whether tabs should grow to fill available space */
  grow?: boolean;
  /** Additional className for root element */
  className?: string;
  /** Custom CSS classes for tabs elements */
  classNames?: TabsClassNames;
  /** Tabs.List and Tabs.Panel components */
  children: React.ReactNode;
}

// Tabs.Tab props
export interface TabsTabProps {
  /** Unique tab value */
  value: string;
  /** Tab label content */
  label: React.ReactNode;
  /** Icon or element displayed before label */
  leftSection?: React.ReactNode;
  /** Element displayed after label */
  rightSection?: React.ReactNode;
  /** Optional description shown below label */
  description?: React.ReactNode;
  /** Whether tab is disabled */
  disabled?: boolean;
  /** Additional className */
  className?: string;
  /** Internal function to register tab for indicator */
  registerTab?: (value: string, element: HTMLElement | null) => void;
}

// Tabs.List props
export interface TabsListProps {
  /** Additional className */
  className?: string;
  /** Tabs.Tab components */
  children: React.ReactNode;
}

// Tabs.Panel props
export interface TabsPanelProps {
  /** Panel value, must match corresponding tab */
  value: string;
  /** Panel content */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
  /** Keep panel mounted even when not active */
  keepMounted?: boolean;
}

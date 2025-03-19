export interface TabItemProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface TabsClassNames {
  container?: string;
  tabList?: string;
  tab?: string;
  tabIcon?: string;
  tabLabel?: string;
  tabDescription?: string;
  indicator?: string;
  content?: string;
  activeTab?: string;
}

export interface TabsProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  classNames?: TabsClassNames;
  children: React.ReactNode;
}

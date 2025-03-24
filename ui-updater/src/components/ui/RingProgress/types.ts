export interface RingProgressSection {
  value: number;
  color: string;
}

export interface RingProgressClassNames {
  root?: string;
  svg?: string;
  track?: string;
  progress?: string;
  section?: string;
  label?: string;
}

export interface RingProgressProps {
  value: number;
  size?: number;
  thickness?: number;
  color?: string;
  label?: React.ReactNode;
  roundCaps?: boolean;
  className?: string;
  classNames?: RingProgressClassNames;
  sections?: RingProgressSection[];
  rootColor?: string;
  labelClassName?: string;
  animate?: boolean;
}

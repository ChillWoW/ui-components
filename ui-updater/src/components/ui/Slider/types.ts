export type SliderSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SliderVariant = "default" | "filled";
export type SliderLabelPosition = "top" | "bottom";

export interface SliderMarks {
    value: number;
    label?: React.ReactNode;
}

export interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
    size?: SliderSize;
    variant?: SliderVariant;
    color?: string;
    marks?: SliderMarks[];
    stickToMarks?: boolean;
    label?: React.ReactNode;
    labelPosition?: SliderLabelPosition;
    showTooltip?: boolean;
    tooltipAlways?: boolean;
    thumbLabel?: React.ReactNode;
    thumbChildren?: React.ReactNode;
    classNames?: {
        root?: string;
        track?: string;
        thumb?: string;
        label?: string;
        tooltip?: string;
        mark?: string;
        markLabel?: string;
    };
}

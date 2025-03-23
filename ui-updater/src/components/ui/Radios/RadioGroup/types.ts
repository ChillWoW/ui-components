import {
    RadioSize,
    RadioVariant,
    RadioLabelPosition,
    RadioClassNames
} from "../Radio/types";

export type RadioGroupOrientation = "vertical" | "horizontal";

export interface RadioGroupProps {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    children: React.ReactNode;
    size?: RadioSize;
    variant?: RadioVariant;
    labelPosition?: RadioLabelPosition;
    disabled?: boolean;
    classNames?: RadioClassNames;
    orientation?: RadioGroupOrientation;
    name?: string;
}

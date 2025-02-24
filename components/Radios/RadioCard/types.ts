export interface RadioCardProps {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        header?: string;
        item?: string;
    };
}

export interface RadioCardContextValue {
    selectedValue?: string;
    onChange: (value: string) => void;
    classNames?: {
        container?: string;
        header?: string;
        item?: string;
    };
}

export interface RadioCardItemProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description?: string;
    icon?: React.ReactNode;
    value: string;
    className?: string;
    classNames?: {
        container?: string;
        radio?: string;
        content?: string;
        icon?: string;
        label?: string;
        description?: string;
    };
}

export interface RadioCardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

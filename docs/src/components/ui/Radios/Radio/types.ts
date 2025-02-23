export interface RadioClassNames {
    container?: string;
    title?: string;
    radio?: string;
}

export interface RadioProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    title?: string;
    className?: string;
    classNames?: RadioClassNames;
}

export interface RadioGroupProps {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    children: React.ReactNode;
}

export type DemoControl = {
    type:
        | "switch"
        | "select"
        | "radio"
        | "number"
        | "color"
        | "slider"
        | "button-group";
    label: string;
    value: any;
    onChange: (value: any) => void;
    min?: number;
    max?: number;
    step?: number;
    format?: "hex" | "rgb" | "rgba";
    swatches?: string[];
    marks?: Array<{ value: number; label?: string }>;
    stickToMarks?: boolean;
    options?: Array<{ label: string; value: any }>;
};

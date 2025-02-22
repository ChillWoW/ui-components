export type DemoControl = {
    type: "switch" | "select" | "radio" | "number" | "color";
    label: string;
    value: any;
    onChange: (value: any) => void;
    options?: { label: string; value: any }[];
    min?: number;
    max?: number;
    format?: "hex" | "rgb" | "rgba";
    swatches?: string[];
};

export type DemoControl = {
    type: "switch" | "select" | "radio" | "number" | "color" | "slider";
    label: string;
    value: any;
    onChange: (value: any) => void;
    options?: { label: string; value: any }[];
    min?: number;
    max?: number;
    step?: number;
    format?: "hex" | "rgb" | "rgba";
    swatches?: string[];
};

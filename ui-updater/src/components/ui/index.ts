export * from "./Alert";
export * from "./Avatars";
export * from "./Badge";
export * from "./Buttons";
export * from "./Card";
export * from "./Checkbox";
export * from "./Drawer";
export * from "./Inputs";
export * from "./Kbd";
export * from "./Loader";
export * from "./Menu";
export * from "./Modal";
export * from "./Pagination";
export * from "./Progress";
export * from "./Radios";
export * from "./RingProgress";
export * from "./Slider";
export * from "./Step";
export * from "./Switch";
export * from "./Table";
export * from "./Tabs";
export * from "./Text";
export * from "./Timeline";
export * from "./Tooltip";

//Tailwind Support
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

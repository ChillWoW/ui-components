export * from "./Badge";
export * from "./Button";
export * from "./Checkbox";
export * from "./Loader";
export * from "./Menu";
export * from "./Modal";
export * from "./Inputs";
export * from "./Pagination";
export * from "./Progress";
export * from "./RadioCard";
export * from "./RingProgress";
export * from "./Switch";
export * from "./Tabs";
export * from "./Text";
export * from "./Tooltip";

//Tailwind Support
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

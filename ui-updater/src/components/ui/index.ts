export * from "./Accordion";
export * from "./Alert";
export * from "./Avatars";
export * from "./Badge";
export * from "./Buttons";
export * from "./Breadcrumb";
export * from "./Card";
export * from "./Checkbox";
export * from "./Code";
export * from "./ColorSwatch";
export * from "./Drawer";
export * from "./Flex";
export * from "./Grid";
export * from "./Inputs";
export * from "./Kbd";
export * from "./Loader";
export * from "./Menu";
export * from "./Modal";
export * from "./Pagination";
export * from "./Progress";
export * from "./Radios";
export * from "./Rating";
export * from "./RingProgress";
export * from "./Slider";
export * from "./Skeleton";
export * from "./Stat";
export * from "./Stepper";
export * from "./Switch";
export * from "./Table";
export * from "./Tabs";
export * from "./Text";
export * from "./Timeline";
export * from "./Tooltip";

//Tailwind Support - Moved to utils
//@deprecated
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

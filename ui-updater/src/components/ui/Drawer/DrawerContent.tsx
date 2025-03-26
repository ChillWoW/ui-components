import { cn } from "../_utils";
import { useDrawerContext } from "./context";
import { DrawerContentProps } from "./types";

export const DrawerContent = ({ children, className }: DrawerContentProps) => {
  const { classNames } = useDrawerContext();

  return (
    <div className={cn("p-4 overflow-y-auto", classNames?.content, className)}>
      {children}
    </div>
  );
};

DrawerContent.displayName = "DrawerContent";

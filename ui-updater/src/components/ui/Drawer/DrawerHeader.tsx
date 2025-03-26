import { DrawerHeaderProps } from "./types";
import { cn, CloseButton } from "../_utils";
import { useDrawerContext } from "./context";

export const DrawerHeader = ({
  children,
  className,
  separator = true,
}: DrawerHeaderProps) => {
  const { classNames, canClose, onClose } = useDrawerContext();

  return (
    <div
      className={cn(
        "flex items-center justify-between p-4",
        separator && "border-b border-[#3e4249]",
        classNames?.header,
        className
      )}
    >
      <div className="text-lg font-semibold text-white">{children}</div>
      {canClose && (
        <CloseButton
          onClick={() => onClose?.()}
          className={classNames?.closeButton}
        />
      )}
    </div>
  );
};

DrawerHeader.displayName = "DrawerHeader";

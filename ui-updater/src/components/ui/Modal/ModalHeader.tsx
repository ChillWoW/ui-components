import React from "react";
import { Text } from "../Text";
import { cn, CloseButton } from "../_utils";
import { ModalHeaderProps } from "./types";
import { useModalContext } from "./context";

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className,
  separator = true,
  padding = "md",
}) => {
  const { classNames, canClose, onClose } = useModalContext();

  const paddingClass = {
    xs: "p-2",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
    none: "p-0",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        paddingClass[padding],
        separator && "border-b border-[#3e4249]",
        classNames?.header,
        className
      )}
    >
      <div className="flex-1">
        {typeof children === "string" ? (
          <Text size="lg" weight="semibold">
            {children}
          </Text>
        ) : (
          children
        )}
      </div>
      {canClose && (
        <div className="ml-4">
          <CloseButton
            onClick={() => onClose?.()}
            className={classNames?.closeButton}
          />
        </div>
      )}
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";

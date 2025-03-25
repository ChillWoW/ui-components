import React, { createContext } from "react";

type ChipGroupContextValue = {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  isChipSelected: (chipValue: string) => boolean;
  toggleChip: (chipValue: string) => void;
};

export const ChipGroupContext = createContext<ChipGroupContextValue | null>(
  null
);

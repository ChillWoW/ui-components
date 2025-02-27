export * from "./NumberInput";
export * from "./TextInput";
export * from "./PasswordInput";
export * from "./TextArea";
export * from "./SelectInput";
export * from "./ColorPicker";
export * from "./PinInput";
export * from "./DatePickerInput";

export const defaultInputContainerClass = "flex flex-col gap-1";

export const defaultInputClass =
  "flex items-center border border-[#3e4249] rounded-lg bg-[#252627] overflow-hidden";

export const defaultInputContentClass =
  "flex border-none bg-transparent px-3 py-2 text-sm outline-none w-full text-white [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

export const defaultLabelClass =
  "text-sm text-white font-semibold ml-2 flex items-center gap-1";

export const defaultIconClass =
  "px-3 flex items-center justify-center text-gray-300";

export const defaultButtonClass =
  "py-2 px-2 cursor-pointer text-gray-300 bg-transparent flex items-center justify-center h-[50%] hover:text-gray-50 hover:text-white hover:bg-dark-600 disabled:opacity-60 disabled:cursor-not-allowed";

export const defaultButtonFirstChildClass =
  "first:border-b first:border-[#3e4249]";

export const defaultDescriptionClass = "text-xs text-gray-300 ml-2";

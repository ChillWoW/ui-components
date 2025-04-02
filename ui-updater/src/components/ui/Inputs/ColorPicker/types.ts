/*export interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  hint?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  format?: "hex" | "rgb" | "rgba";
  swatches?: string[];
  swatchesPerRow?: number;
  allowEyeDropper?: boolean;
  error?: string;
  id?: string;
  classNames?: ColorPickerClassNames;
}

export interface ColorPickerClassNames {
  container?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  colorPreview?: string;
  textInput?: string;
  swatchesContainer?: string;
  swatch?: string;
  eyeDropper?: string;
  alphaSlider?: string;
}
*/

export type ColorPickerRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type ColorPickerFormat = "hex" | "rgb" | "rgba";

export interface ColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  radius?: ColorPickerRadius;
  label?: string;
  hint?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  colorPreview?: boolean;
  readOnly?: boolean;
  format?: ColorPickerFormat;
  allowEyeDropper?: boolean;
  className?: string;
  classNames?: ColorPickerClassNames;
}

export interface ColorPickerClassNames {
  container?: string;
  inputContainer?: string;
  label?: string;
  hint?: string;
  required?: string;
  input?: string;
  eyeDropper?: string;
}

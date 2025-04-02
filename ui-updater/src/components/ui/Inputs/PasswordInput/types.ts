import { TextInputProps } from "../TextInput/types";

export interface PasswordInputProps extends TextInputProps {
  eyeIcon?: {
    show?: React.ReactNode;
    hide?: React.ReactNode;
  };
}

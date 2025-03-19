import { alertConfig } from "./configs/alertConfig";
import { avatarConfig } from "./configs/avatarConfig";
import { avatarGroupConfig } from "./configs/avatarGroupConfig";
import { buttonConfig } from "./configs/buttonConfig";
import { badgeConfig } from "./configs/badgeConfig";
import { buttonGroupConfig } from "./configs/buttonGroupConfig";
import { cardConfig } from "./configs/cardConfig";
import { checkboxConfig } from "./configs/checkboxConfig";
import { drawerConfig } from "./configs/drawerConfig";
import { numberInputConfig } from "./configs/numberInputConfig";
import { datePickerConfig } from "./configs/datePickerConfig";
import { colorPickerConfig } from "./configs/colorPickerConfig";
import { passwordInputConfig } from "./configs/passwordInputConfig";
import { pinInputConfig } from "./configs/pinInputConfig";
import { selectInputConfig } from "./configs/selectInputConfig";
import { textAreaConfig } from "./configs/textAreaConfig";
import { textInputConfig } from "./configs/textInputConfig";
import { kbdConfig } from "./configs/kbdConfig";
import { loaderConfig } from "./configs/loaderConfig";

export const componentConfigs = {
  alert: alertConfig,
  avatar: avatarConfig,
  avatarGroup: avatarGroupConfig,
  badge: badgeConfig,
  button: buttonConfig,
  buttonGroup: buttonGroupConfig,
  card: cardConfig,
  checkbox: checkboxConfig,
  drawer: drawerConfig,
  numberInput: numberInputConfig,
  colorPicker: colorPickerConfig,
  datePicker: datePickerConfig,
  passwordInput: passwordInputConfig,
  pinInput: pinInputConfig,
  selectInput: selectInputConfig,
  textArea: textAreaConfig,
  textInput: textInputConfig,
  kbd: kbdConfig,
  loader: loaderConfig,
};

export type ComponentConfigType = {
  renderComponent: (props: any, setProps: (props: any) => void) => any;
  renderPropsPanel: () => any;
  generateCode?: (props: any) => any;
  renderError?: () => any;
  infoPanel?: () => any;
  defaultProps: any;
};

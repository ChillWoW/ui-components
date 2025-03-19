import { alertConfig } from "./configs/alertConfig";
import { avatarConfig } from "./configs/avatarConfig";
import { buttonConfig } from "./configs/buttonConfig";

export const componentConfigs = {
  alert: alertConfig,
  avatar: avatarConfig,
  button: buttonConfig,
};

export type ComponentConfigType = {
  renderComponent: (props: any) => any;
  renderPropsPanel: () => any;
  defaultProps: any;
};

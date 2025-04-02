import { alertConfig } from "./configs/alertConfig";
import { avatarConfig } from "./configs/avatarConfig";
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
import { menuConfig } from "./configs/menuConfig";
import { modalConfig } from "./configs/modalConfig";
import { paginationConfig } from "./configs/paginationConfig";
import { progressConfig } from "./configs/progressConfig";
import { radioCardConfig } from "./configs/radioCardConfig";
import { radioConfig } from "./configs/radioConfig";
import { radioGroupConfig } from "./configs/radioGroupConfig";
import { ratingConfig } from "./configs/ratingConfig";
import { ringProgressConfig } from "./configs/ringProgressConfig";
import { sliderConfig } from "./configs/sliderConfig";
import { stepperConfig } from "./configs/stepperConfig";
import { switchConfig } from "./configs/switchConfig";
import { tableConfig } from "./configs/tableConfig";
import { tabsConfig } from "./configs/tabsConfig";
import { textConfig } from "./configs/textConfig";
import { timelineConfig } from "./configs/timelineConfig";
import { tooltipConfig } from "./configs/tooltipConfig";
import { fileInputConfig } from "./configs/fileInputConfig";
import { breadcrumbConfig } from "./configs/breadcrumbConfig";
import { multiSelectConfig } from "./configs/multiSelectConfig";
import { codeConfig } from "./configs/codeConfig";
import { flexConfig } from "./configs/flexConfig";
import { gridConfig } from "./configs/gridConfig";
import { accordionConfig } from "./configs/accordionConfig";
import { colorSwatchConfig } from "./configs/colorSwatchConfig";
import { statConfig } from "./configs/statConfig";
import { skeletonConfig } from "./configs/skeletonConfig";
import { anchorConfig } from "./configs/anchorConfig";
import { groupConfig } from "./configs/groupConfig";
import { stackConfig } from "./configs/stackConfig";
import { portalConfig } from "./configs/portalConfig";
import { centerConfig } from "./configs/centerConfig";
import { snippetConfig } from "./configs/snippetConfig";

export const componentConfigs = {
  accordion: accordionConfig,
  alert: alertConfig,
  anchor: anchorConfig,
  avatar: avatarConfig,
  badge: badgeConfig,
  breadcrumb: breadcrumbConfig,
  button: buttonConfig,
  buttonGroup: buttonGroupConfig,
  card: cardConfig,
  center: centerConfig,
  checkbox: checkboxConfig,
  colorSwatch: colorSwatchConfig,
  drawer: drawerConfig,
  flex: flexConfig,
  grid: gridConfig,
  group: groupConfig,
  numberInput: numberInputConfig,
  colorPicker: colorPickerConfig,
  datePicker: datePickerConfig,
  fileInput: fileInputConfig,
  passwordInput: passwordInputConfig,
  pinInput: pinInputConfig,
  selectInput: selectInputConfig,
  textArea: textAreaConfig,
  textInput: textInputConfig,
  multiSelect: multiSelectConfig,
  kbd: kbdConfig,
  loader: loaderConfig,
  menu: menuConfig,
  modal: modalConfig,
  pagination: paginationConfig,
  portal: portalConfig,
  progress: progressConfig,
  radio: radioConfig,
  radioCard: radioCardConfig,
  radioGroup: radioGroupConfig,
  rating: ratingConfig,
  ringProgress: ringProgressConfig,
  slider: sliderConfig,
  snippet: snippetConfig,
  stack: stackConfig,
  stat: statConfig,
  skeleton: skeletonConfig,
  stepper: stepperConfig,
  switch: switchConfig,
  table: tableConfig,
  tabs: tabsConfig,
  text: textConfig,
  timeline: timelineConfig,
  tooltip: tooltipConfig,
  code: codeConfig,
};

export type ComponentConfigType = {
  renderComponent: (props: any, setProps: (props: any) => void) => any;
  renderPropsPanel?: () => any;
  renderDocumentation?: () => any;
  generateCode?: (props: any) => any;
  renderError?: () => any;
  infoPanel?: () => any;
  defaultProps?: any;
  renderStylesAPI?: () => any;
  renderPlayground?: () => any;
};

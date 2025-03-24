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
import { stepConfig } from "./configs/stepConfig";
import { switchConfig } from "./configs/switchConfig";
import { tableConfig } from "./configs/tableConfig";
import { tabsConfig } from "./configs/tabsConfig";
import { textConfig } from "./configs/textConfig";
import { timelineConfig } from "./configs/timelineConfig";
import { tooltipConfig } from "./configs/tooltipConfig";
import { fileInputConfig } from "./configs/fileInputConfig";
import { breadcrumbConfig } from "./configs/breadcrumbConfig";

export const componentConfigs = {
    alert: alertConfig,
    avatar: avatarConfig,
    avatarGroup: avatarGroupConfig,
    badge: badgeConfig,
    button: buttonConfig,
    buttonGroup: buttonGroupConfig,
    breadcrumb: breadcrumbConfig,
    card: cardConfig,
    checkbox: checkboxConfig,
    drawer: drawerConfig,
    numberInput: numberInputConfig,
    colorPicker: colorPickerConfig,
    datePicker: datePickerConfig,
    fileInput: fileInputConfig,
    passwordInput: passwordInputConfig,
    pinInput: pinInputConfig,
    selectInput: selectInputConfig,
    textArea: textAreaConfig,
    textInput: textInputConfig,
    kbd: kbdConfig,
    loader: loaderConfig,
    menu: menuConfig,
    modal: modalConfig,
    pagination: paginationConfig,
    progress: progressConfig,
    radio: radioConfig,
    radioCard: radioCardConfig,
    radioGroup: radioGroupConfig,
    rating: ratingConfig,
    ringProgress: ringProgressConfig,
    slider: sliderConfig,
    step: stepConfig,
    switch: switchConfig,
    table: tableConfig,
    tabs: tabsConfig,
    text: textConfig,
    timeline: timelineConfig,
    tooltip: tooltipConfig
};

export type ComponentConfigType = {
    renderComponent: (props: any, setProps: (props: any) => void) => any;
    renderPropsPanel: () => any;
    generateCode?: (props: any) => any;
    renderError?: () => any;
    infoPanel?: () => any;
    defaultProps: any;
};

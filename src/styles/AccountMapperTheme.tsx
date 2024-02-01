import { ThemeConfig } from "antd";

export const AccountMapperTheme: ThemeConfig = {
  token: {
    fontSize: 14,
    fontFamily: "var(--bdo-font-family)",
    colorPrimary: "var(--bdo-red)",
    colorInfo: "var(--bdo-red)",
    colorSuccess: "var(--bdo-jade)",
    colorWarning: "var(--bdo-gold)",
    colorSuccessBg: "#cdefe4",
    colorError: "var(--bdo-error)",
    colorErrorBg: "#ffebed",
    colorLink: "var(--bdo-cobalt)",
    colorBgLayout: "var(--bdo-light-grey)",
    boxShadow: "",
    boxShadowSecondary: "",
    colorTextSecondary: "var(--bdo-slate)",
  },
  components: {
    Tooltip: {
      colorBgSpotlight: "var(--bdo-charcoal-100)",
      colorIcon: "var(--bdo-charcoal) !important",
    },
    Table: {
      colorText: "var(--bdo-charcoal)",
      colorBgContainer: "var(--bdo-white)",
      borderRadius: 0,
      headerBg: "var(--bdo-white)",
      fixedHeaderSortActiveBg: "",
      lineHeight: 1,
      rowHoverBg: "",
      headerSortHoverBg: "",
      headerSortActiveBg: "",
      bodySortBg: "",
    },
    Pagination: {
      colorInfoActive: "var(--bdo-red)",
      itemActiveBg: "var(--bdo-light-grey)",
      borderRadius: 0,
      controlOutlineWidth: 26,
    },
    Button: {
      paddingInline: "24px",
      colorTextDisabled: "var(--bdo-white)",
      colorBgContainerDisabled: "rgba(var(--bdo-red) , 0.8)!important",
      borderRadius: 0,
    },
    Breadcrumb: {
      lastItemColor: "rgb(232, 26, 59)",
      colorBgTextHover: "rgba(51, 51, 51, 0)",
    },
    DatePicker: {
      colorText: "rgb(51, 51, 51)",
      colorTextDescription: "rgb(51, 51, 51)",
      colorTextHeading: "rgb(51, 51, 51)",
      colorTextPlaceholder: "rgb(51, 51, 51)",
      colorTextQuaternary: "rgb(51, 51, 51)",
      colorTextTertiary: "rgb(51, 51, 51)",
      colorBorder: "rgb(231, 231, 231)",
      colorIcon: "rgb(51, 51, 51)",
      borderRadius: 0,
      controlHeight: 42,
    },
    Modal: {
      headerBg: "var(--bdo-light-grey)",
      paddingContentVertical: 0,
      paddingContentHorizontal: 0,
    },
    Select: {
      colorBorder: "var(--bdo-pale-charcoal)",
      colorIcon: "var(--bdo-slate) !important",
      paddingContentHorizontal: 16,
      paddingContentVertical: 10,
      borderRadius: 0,
      colorTextPlaceholder: "var(--bdo-slate)",
      controlHeight: 42,
      optionSelectedBg: "var(--bdo-light-grey)",
      borderRadiusSM: 0,
    },
    Switch: {
      //Background color of the switch button in off state
      colorTextQuaternary: "var(--bdo-slate)",
      //Background color of the switch button in on state
      colorPrimary: "var(--bdo-jade) !important",
      //hover color
      colorTextTertiary: "RGBA(currentColor, 0.4)",
    },
    Form: {
      labelRequiredMarkColor: "var(--bdo-red)",
      colorError: "var(--bdo-red)",
      colorErrorBorder: "var(--bdo-red)",
    },
    Input: {
      colorErrorBorder: "var(--bdo-red)",
      colorBorder: "var(--bdo-pale-charcoal)",
      borderRadius: 0,
      controlHeight: 42,
    },
    Steps: {
      iconSize: 28,
      colorBgContainer: "var(--bdo-red)",
      colorBgBase: "var(--bdo-red) !important",
    },
    Radio: {
      buttonSolidCheckedBg: "var(--bdo-slate)",
      buttonSolidCheckedHoverBg: "var(--bdo-slate)",
      buttonPaddingInline: 24,
    },
  },
};

export default {
  config: {
    default: true,
    MD003: {
      style: "atx",
    },
    MD004: {
      style: "dash",
    },
    MD013: false,
    MD024: {
      siblings_only: true,
    },
    MD033: {
      allowed_elements: [
        "div",
        "span",
        "br",
        "template",
        "script",
        "style",
        "iframe",
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "Catalog",
        "CodePen",
        "DemoProject",
        "FontIcon",
        "HighlightPanel",
        "ProjectLink",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "XiGua",
        "VPBanner",
        "VPCard",
        "VidStack",
        "VideoPlayer",
        "YouTube",
        "MyComponent",
        "ColorModeSwitch",
        "HopeIcon",
        "FlowChartPlayground",
        "IconDisplay",
        "KatexPlayground",
        "PrintButton",
        "ThemeColorPicker",
        "ToggleFullScreenButton",
        "ToggleRTLButton",
      ],
    },
    MD035: {
      style: "---",
    },
    MD040: false,
    MD046: false,
    MD049: false,
  },
  ignores: [
    "**/node_modules/**",
    "**/__tests__/**",
    // markdown import demo
    "**/*.snippet.md",
    "**/CHANGELOG.md",
  ],
};
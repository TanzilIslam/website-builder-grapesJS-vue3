<template>
  <div id="gjs"></div>
</template>

<script>
import grapesjs from "grapesjs";
import defaultPreset from "grapesjs-preset-webpage";
import gjsForms from "grapesjs-plugin-forms";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/index.js";

const defaultPresetBlock = [
  {
    id: "cell",
    label: "Cell",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M2 3h20v18H2z'/><path d='M2 6h20v3H2zm0 6h20v3H2z'/></svg>",
    content: { type: "cell" },
    activate: true,
  },
  {
    id: "row",
    label: "Row",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M2 5h20v2H2zM2 17h20v2H2z'/><path d='M2 11h20v2H2z'/></svg>",
    content: { type: "row" },
    activate: true,
  },
  {
    id: "table",
    label: "Table",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M4 10H10V4H4V10M14,4V10H20V4H14M20 14H14V20H20V14M4,14V20H10V14H4M3,3H21V21H3V3Z'/></svg>",
    content: { type: "table" },
    activate: true,
  },
  {
    id: "thead",
    label: "THead",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,2H4C3.45,2 3,2.45 3,3V19C3,19.55 3.45,20 4,20H20C20.55,20 21,19.55 21,19V3C21,2.45 20.55,2 20,2M20,6H4V4H20V6M20,11H4V9H20V11M4,13H20V15H4V13M4,17H20V19H4V17Z'/></svg>",
    content: { type: "thead" },
    activate: true,
  },
  {
    id: "tbody",
    label: "TBody",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,2H4C3.45,2 3,2.45 3,3V19C3,19.55 3.45,20 4,20H20C20.55,20 21,19.55 21,19V3C21,2.45 20.55,2 20,2M20,6H4V4H20V6M20,11H4V9H20V11M4,13H20V15H4V13M4,17H20V19H4V17Z'/></svg>",
    content: { type: "tbody" },
    activate: true,
  },
  {
    id: "tfoot",
    label: "TFoot",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,2H4C3.45,2 3,2.45 3,3V19C3,19.55 3.45,20 4,20H20C20.55,20 21,19.55 21,19V3C21,2.45 20.55,2 20,2M20,6H4V4H20V6M20,11H4V9H20V11M4,13H20V15H4V13M4,17H20V19H4V17Z'/></svg>",
    content: { type: "tfoot" },
    activate: true,
  },
  {
    id: "link",
    label: "Link",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M3 13c1.63-3.66 4.95-6 9-6 4.41 0 8 3.59 8 8s-3.59 8-8 8c-4.05 0-7.37-2.34-9-6'/><path d='M13 3c-4.05 0-7.37 2.34-9 6'/></svg>",
    content: { type: "link" },
    activate: true,
  },
  {
    id: "label",
    label: "Label",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20 6v3H4V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zM12 18h-1V9h1v9z'/></svg>",
    content: { type: "label" },
    activate: true,
  },
  {
    id: "video",
    label: "Video",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 8 7.58 8 12 11.58 20 12 20M12 0A12 12 0 0 0 0 12A12 12 0 0 0 12 24A12 12 0 0 0 24 12A12 12 0 0 0 12 0M16 12.94V11.06L9.5 7V17L16 12.94Z'/></svg>",
    content: { type: "video" },
    activate: true,
  },
  {
    id: "image",
    label: "Image",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z'/></svg>",
    content: { type: "image" },
    activate: true,
  },
  {
    id: "script",
    label: "Script",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M6,16C5.7,16 5.5,15.7 5.5,15.5C5.5,15.2 5.7,15 6,15C6.3,15 6.5,15.2 6.5,15.5C6.5,15.7 6.3,16 6,16M12,16C11.7,16 11.5,15.7 11.5,15.5C11.5,15.2 11.7,15 12,15C12.3,15 12.5,15.2 12.5,15.5C12.5,15.7 12.3,16 12,16M18,16C17.7,16 17.5,15.7 17.5,15.5C17.5,15.2 17.7,15 18,15C18.3,15 18.5,15.2 18.5,15.5C18.5,15.7 18.3,16 18,16M18,13C17.7,13 17.5,12.7 17.5,12.5C17.5,12.2 17.7,12 18,12C18.3,12 18.5,12.2 18.5,12.5C18.5,12.7 18.3,13 18,13M12,13C11.7,13 11.5,12.7 11.5,12.5C11.5,12.2 11.7,12 12,12C12.3,12 12.5,12.2 12.5,12.5C12.5,12.7 12.3,13 12,13M6,13C5.7,13 5.5,12.7 5.5,12.5C5.5,12.2 5.7,12 6,12C6.3,12 6.5,12.2 6.5,12.5C6.5,12.7 6.3,13 6,13M6,10C5.7,10 5.5,9.7 5.5,9.5C5.5,9.2 5.7,9 6,9C6.3,9 6.5,9.2 6.5,9.5C6.5,9.7 6.3,10 6,10M12,10C11.7,10 11.5,9.7 11.5,9.5C11.5,9.2 11.7,9 12,9C12.3,9 12.5,9.2 12.5,9.5C12.5,9.7 12.3,10 12,10M18,10C17.7,10 17.5,9.7 17.5,9.5C17.5,9.2 17.7,9 18,9C18.3,9 18.5,9.2 18.5,9.5C18.5,9.7 18.3,10 18,10'/></svg>",
    content: { type: "script" },
    activate: true,
  },
  {
    id: "svg",
    label: "SVG",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,2H4C2.9,2 2,2.9 2,4V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V4C22,2.9 21.1,2 20,2M12,15L10.7,16.3L7.3,13L5.2,15.1L4.5,14.4L7.3,11.6L10.7,15L12,13.7L18.5,20.3V4H14.8L12,6.8V11.6H14.8V15.8L18.5,12L17.5,11H20V4H13V11L14.5,12.5L11.2,15.8L12,16.6L11.2,17.4L8.2,14.4L11.7,11L12,11.3V7H9.2L6.3,4H4V20H6V18H8.5L10.5,20L11.5,19H15V18H11.5L10.5,17H14.5L12.5,19H10.5V20.5H20V12.5L12.5,19V18.5L14.2,20.2L17.8,16.6L17,15.8H20V20H12Z'/></svg>",
    content: { type: "svg" },
    activate: true,
  },
  {
    id: "comment",
    label: "Comment",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H16L20,24V6C20,4.9 20,4 19,4'/></svg>",
    content: { type: "comment" },
    activate: true,
  },
  {
    id: "textnode",
    label: "Text Node",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M0,0V1H10V0H0M0,2V3H10V2H0M0,4V5H10V4H0M0,6V7H10V6H0'/></svg>",
    content: { type: "textnode" },
    activate: true,
  },
  {
    id: "text",
    label: "Text",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M12 20h-1.5L8 5h1.5l1 6h3l1-6h1.5l-2.5 15z'/><path d='M5 12H4V8H2V6h2V2h2v4h2v2H6v4zm6 0v3h3v2h-5V8h5v2h-3v2zm5 0h4v2h-2v2h4v2h-4v2h4v2h-4v4h2v4h-4v-4h-2v4h-4v-4h2v-4h-4v-2h4v-2h-4v-2h4v-4h-2v-4h4v2h4v-2h-4v-2zm6 2h-4v2h4z'/></svg>",
    content: { type: "text" },
    activate: true,
  },
  {
    id: "wrapper",
    label: "Wrapper",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20,2H4C2.9,2 2,2.9 2,4V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V4C22,2.9 21.1,2 20,2ZM20,20H4V4H20V20Z'/></svg>",
    content: { type: "wrapper" },
    activate: true,
  },
  {
    id: "default",
    label: "Default",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M0,0V24H24V0H0M24,20H4V4H24V20Z'/></svg>",
    content: { type: "default" },
    activate: true,
  },
];

const formElements = [
  {
    id: "form",
    label: "Form",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm0 14H4V6h16v12zm-5-2H9v-2h6v2zm2-4H7v-2h10v2zm-2-4H7V8h8v2z'/></svg>",
    content: { type: "form" },
    activate: true,
  },
  {
    id: "input",
    label: "Input",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 13H5V7h14v10z'/></svg>",
    content: { type: "input" },
    activate: true,
  },
  {
    id: "textarea",
    label: "Textarea",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 16H4V4h16v14z'/></svg>",
    content: { type: "textarea" },
    activate: true,
  },
  {
    id: "select",
    label: "Select",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M16 8.14v2.86c0 .24.08.45.23.62.14.18.32.28.54.28.22 0 .4-.09.54-.28.15-.17.23-.38.23-.62V8.14c0-.24-.08-.45-.23-.62a.771.771 0 0 0-.54-.28c-.22 0-.4.09-.54.28-.15.17-.23.38-.23.62z'/><path d='M12 10h4V7.5h-4zM10 8h-4v2h4V8zm12 12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2h2v2h16v-2h2v2zm-3-8.5c0 2.48-2.02 4.5-4.5 4.5S10 14.48 10 12s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5z'/></svg>",
    content: { type: "select" },
    activate: true,
  },
  {
    id: "button",
    label: "Button",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-3v3H9v-3H6V11h3V8h3v3h3v2z'/></svg>",
    content: { type: "button" },
    activate: true,
  },
  {
    id: "label",
    label: "Label",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-4H6V8h12v4z'/></svg>",
    content: { type: "label" },
    activate: true,
  },
  {
    id: "checkbox",
    label: "Checkbox",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M10 17L4 11l1.4-1.4 4.6 4.6 7.6-7.6L19 8l-9 9z'/></svg>",
    content: { type: "checkbox" },
    activate: true,
  },
  {
    id: "radio",
    label: "Radio",
    media:
      "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path d='M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z'/></svg>",
    content: { type: "radio" },
    activate: true,
  },
];

export default {
  name: "WebBuilder",

  mounted() {
    grapesjs.init({
      container: "#gjs",
      height: "900px",
      width: "100%",
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: "",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
      plugins: [defaultPreset, gjsForms],
      blockManager: {
        blocks: [...defaultPresetBlock, ...formElements],
      },
    });
  },
};
</script>
<style></style>

<!-- eslint-disable no-unused-vars -->
<template>
  <div id="gjs"></div>
</template>

<script>
import grapesjs from "grapesjs";
import defaultPreset from "grapesjs-preset-webpage";
import gjsForms from "grapesjs-plugin-forms";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/index.js";
import { nextTick } from "vue";
import { landingComponents, landingStyles } from "./static";

export default {
  name: "WebBuilder",

  mounted() {
    nextTick(() => {
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
          autoload: false,
        },

        deviceManager: {
          devices: [
            { id: "desktop", name: "Desktop", width: "" },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile",
              width: "320px",
              widthMedia: "575px",
            },
          ],
        },

        plugins: [defaultPreset, gjsForms, gjsBasicBlocks],

        pluginsOpts: {
          [gjsBasicBlocks]: {
            blocks: ["column1", "column2", "column3", "text", "link"],
          },
        },

        // 👇 Default landing page
        components: landingComponents,

        // 👇 Basic styling
        style: landingStyles,
      });
    });
  },
};
</script>
<style></style>

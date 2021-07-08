<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
import Vue from "vue";

const icons: any = {};
const requireComponents = require.context(
  "@/components/icons/",
  false,
  /.vue$/
);
requireComponents.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/icon-(.+)\.vue$/, "$1");
  const componentConfig = requireComponents(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: "react",
    },
    iconName: {
      type: String,
      default: "react",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    iconComponent() {
      return icons[this.iconName.toString()];
    },
  },
});
</script>

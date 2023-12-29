<template>
  <router-view />
</template>

<script>
import { provide } from "vue";
import useDarkMode from "./directives/useDarkMode";
export default {
  setup() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    provide("isDarkMode", isDarkMode);
    provide("toggleDarkMode", toggleDarkMode);
  },
};
</script>

<style></style>

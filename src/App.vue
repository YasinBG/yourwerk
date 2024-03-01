<template>
  <router-view />
</template>

<script>
import { provide } from "vue";
import useDarkMode from "./directives/useDarkMode";
export default {
  setup() {
    const { isDarkMode } = useDarkMode();
    provide("isDarkMode", isDarkMode);

    return {};
  },
};
</script>

<style>
.active-link {
  color: #f89844;
}
</style>

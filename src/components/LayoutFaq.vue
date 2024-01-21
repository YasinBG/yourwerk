<template>
  <div class="mx-4 lg:mx-0 mt-20">
    <h3 class="heading1 lg:!text-7xl" v-motion="fadeUp">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-l from-mkSecondary to-white"
      >
        Frequently Asked Questions
      </span>
      <div
        class="gradientLine max-w-7xl mx-auto !my-10"
        v-motion="leftLine"
      ></div>
    </h3>
    <div
      class="mx-auto flex lg:flex-row flex-col lg:items-start items-center justify-center gap-6 pb-10 h-full"
    >
      <div class="flex flex-col items-center w-full" v-motion="fadeUp">
        <AccordionApp />
      </div>
    </div>
  </div>
</template>

<script>
import { fadeUpAnimate, leftLineAnimate } from "@/directives/mkAnimate";
import AccordionApp from "./AccordionApp.vue";
export default {
  setup() {
    const fadeUp = fadeUpAnimate;
    const leftLine = leftLineAnimate;
    return { fadeUp, leftLine };
  },
  components: { AccordionApp },
};
</script>

<style lang="scss" scoped></style>

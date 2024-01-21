<template>
  <div
    class="carousel w-full flex flex-col justify-center max-w-6xl mx-auto py-20"
  >
    <h3
      class="heading1 !mb-2 uppercase bg-clip-text text-transparent bg-gradient-to-l from-mkSecondary to-white lg:!text-7xl"
      v-motion="fadeUp"
    >
      Roadmap
    </h3>
    <p
      class="text-center max-w-3xl text-sm font-medium lg:text-base mx-auto"
      v-motion="fadeLeft"
    >
      Detailed action plan for the first year. This roadmap comprehensively
      outlines <span class="bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white">WERK 1000X</span> project’s goals and main strategies for 2024, with
      each quarter set to contribute to the overall success and growth of the
      project.
    </p>
    <div class="gradientLine max-w-3xl mx-auto !mt-2" v-motion="leftLine"></div>

    <CarouselApp v-motion="fadeLeft" />
  </div>
</template>

<script>
import CarouselApp from "./CarouselApp.vue";
import {
  fadeUpAnimate,
  fadeLeftAnimate,
  leftLineAnimate,
} from "@/directives/mkAnimate";
export default {
  setup() {
    const fadeUp = fadeUpAnimate;
    const fadeLeft = fadeLeftAnimate;
    const leftLine = leftLineAnimate;

    return { fadeUp, fadeLeft, leftLine };
  },
  components: { CarouselApp },
};
</script>

<style lang="scss" scoped></style>

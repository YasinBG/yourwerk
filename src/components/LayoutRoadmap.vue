<template>
  <div
    class="carousel w-full flex flex-col justify-center max-w-6xl mx-auto py-4"
  >
    <h3
      class="heading1 uppercase bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
      v-motion="fadeUp"
    >
      Roadmap
    </h3>
    <p
      class="text-center max-w-lg text-sm font-medium lg:text-base mx-auto"
      v-motion="fadeLeft"
    >
      Explore the limitless possibilities of blockchain technology. Unleash
      decentralized solutions, foster innovation, and navigate the future of
      secure, transparent, and trustless systems.
    </p>
    <div class="gradientLine max-w-lg mx-auto !mt-10" v-motion="leftLine"></div>

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

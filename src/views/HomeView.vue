<template>
  <div
    class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite"
    :class="{ 'bgnew': isDarkMode }"
  >
    <LayoutHeader />
    <!-- Hero Section -->
    <LayoutHero />
    <!-- Animation Section -->
    <LayoutAnimation />
    <!-- Feature Box Section -->
    <LayoutFeatureBox />
    <!-- RoadMAp -->
    <LayoutRoadmap />
    <!-- Features -->
    <LayoutFeatures />
    <!-- Faq Section -->
    <LayoutFaq />
    <!-- Footer -->
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutFooter from "@/components/LayoutFooter.vue";
import LayoutHeader from "@/components/LayoutHeader.vue";
import LayoutHero from "@/components/LayoutHero.vue";
import LayoutAnimation from "@/components/LayoutAnimation.vue";
import LayoutFaq from "@/components/LayoutFaq.vue";
import LayoutRoadmap from "@/components/LayoutRoadmap.vue";
import LayoutFeatures from "@/components/LayoutFeatures.vue";
import LayoutFeatureBox from "@/components/LayoutFeatureBox.vue";
import { inject } from "vue";
export default {
  setup() {
    const isDarkMode = inject("isDarkMode");
    const toggleDarkMode = inject("toggleDarkMode");
    return { isDarkMode, toggleDarkMode };
  },
  components: {
    LayoutFooter,
    LayoutHeader,
    LayoutHero,
    LayoutAnimation,
    LayoutFaq,
    LayoutRoadmap,
    LayoutFeatures,
    LayoutFeatureBox,
  },
};
</script>

<style lang="css" scoped>
.bgnew {
  /* background: url("../assets/mkover.webp"); */
  background: linear-gradient(
    to right,
    #0b2142,
    #0d2e55,
    #103b68,
    #12487b,
    #14558e
  );
  /* background: linear-gradient(to right, #080a10, #241b28); */

  /* background: linear-gradient(to right, #080a10, #241b28, #241a28, #090b11); */
  /* background: linear-gradient(to right, #1a182c, #241a28); */

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */

  /* background-image: linear-gradient(180deg, #080a10 0%, #080a1000 100%); */
  /* transition: background 0.3s, border-radius 0.3s, opacity 0.3s; */
}
</style>

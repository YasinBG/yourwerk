<template>
  <div
    class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite"
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
export default {
  setup() {
    return {};
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

<style lang="css" scoped></style>

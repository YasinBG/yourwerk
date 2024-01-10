<template>
  <div
    class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite flex flex-col items-center"
    :class="{ 'bgnew': isDarkMode }"
  >
    <LayoutHeader />
    <!-- Hero Section -->
    <LayoutHero />
    <!-- Animation Section -->
    <LayoutFeatures />
    <!-- Features -->
    <LayoutAnimation />
    <!-- Feature Box Section -->
    <LayoutFeatureBox />
    <!-- RoadMAp -->
    <LayoutRoadmap />

    <!-- Faq Section -->
    <LayoutFaq />
    <!-- Footer -->
    <LayoutFooter></LayoutFooter>
  </div>
  <!-- Scroll-top -->
  <div v-if="isVisible" class="">
    <button @click="scrollToTop" class="scroll-to-top-btn">
      <svg
        class="rotate-180"
        fill="#FFF"
        height="24px"
        width="24px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 407.437 407.437"
        xml:space="preserve"
      >
        <polygon
          points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "
        />
      </svg>
    </button>
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
import { inject, onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const isDarkMode = inject("isDarkMode");
    // const toggleDarkMode = inject("toggleDarkMode");

    const isVisible = ref(false);

    const checkScroll = () => {
      // Örneğin, sayfa 300px'ten fazla kaydırıldığında butonu göster
      isVisible.value = window.scrollY > 300;
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return { isDarkMode, scrollToTop, isVisible };
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

.scroll-to-top-btn {
  position: fixed; /* Sabit pozisyon */
  bottom: 20px; /* Alt kısımdan 20px yukarıda */
  right: 20px; /* Sağ kısımdan 20px sola */
  z-index: 1000; /* Diğer içeriklerin üstünde görünmesi için yüksek bir z-index değeri */
  padding: 12px;
  border-radius: 50%;

  background: linear-gradient(
    to bottom,
    #1c437d,
    #0b2142,
    #0d2e55,
    #13447a,
    #12487b,
    #14558e
  );

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  opacity: 1;
  transition: background 0.3s;
}

.scroll-to-top-btn:hover {
  background: linear-gradient(
    to top,
    #1c437d,
    #0b2142,
    #0d2e55,
    #13447a,
    #12487b,
    #14558e,
    #0d2e55
  );
}

@media (max-width: 768px) {
  .scroll-to-top-btn {
    display: none;
  }
}
</style>

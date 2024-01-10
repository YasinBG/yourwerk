<template>
  <!-- Animation Section -->
  <div
    class="ScrollAnimation w-full relative py-20 mt-24 lg:mt-32 pointer-events-none !-skew-y-6"
  >
    <div
      :class="{ 'yes': isDarkMode }"
      class="absolute -top-10 lg:h-32 w-full bg-gradient-to-t from-transparent to-white dark:to-mkPrimary z-30"
    ></div>
    <div class="pt-20">
      <h1
        v-motion="fadeUp"
        class="heading1 text-xl lg:!text-7xl !mb-0 pt-10 dark:!text-white !text-mkPrimary scroller-bg"
      >
        The Transaction Tool of the Future
      </h1>

      <div
        class="scroller w-full mx-auto py-4 scroller-bg"
        data-speed="fast"
        ref="fastScroller"
      >
        <ul class="tag-list scroller__inner py-4 pb-12 flex flex-wrap gap-4">
          <li
            v-for="(tag, index) in tags"
            :key="index"
            class="p-8 bg-mkSecondary/80 rounded-lg shadow-md flex items-center font-semibold uppercase tagBg"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
      <!-- <div
        class="scroller max-w-[1000px] mx-auto mt-20"
        data-direction="right"
        data-speed="slow"
        ref="slowScroller"
      >
        <div class="scroller__inner flex items-center gap-4 py-4 flex-wrap">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt=""
            class="rounded-full border-4 border-mkPurple/50"
          />
        </div>
      </div> -->
    </div>
  </div>
  <!-- Animation Section -->
</template>

<script>
import { inject, onMounted, ref } from "vue";
import { fadeUpAnimate } from "@/directives/mkAnimate";
export default {
  setup() {
    onMounted(() => {
      // Scroll Animasyon
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation(fastScroller.value, 20); // Hızlı scroller için 20s animasyon süresi
        addAnimation(slowScroller.value, 60); // Yavaş scroller için 60s animasyon süresi
      }
    });

    // Scroll Animasyon
    const fastScroller = ref(null);
    const slowScroller = ref(null);
    const tags = [
      "Sustainable",
      "Innovative",
      "Combiner",
      "Trustworthy",
      "Evolutionary",
      "Revolutionary",
      "Transaction",
      // "#TokenEconomy",
      // "#ImmutableLedger",
      // "#BlockchainNetwork",
    ];
    // const images = [
    //   "https://i.pravatar.cc/150?img=1",
    //   "https://i.pravatar.cc/150?img=2",
    //   "https://i.pravatar.cc/150?img=3",
    //   "https://i.pravatar.cc/150?img=4",
    //   "https://i.pravatar.cc/150?img=5",
    //   "https://i.pravatar.cc/150?img=6",
    // ];

    // Animasyon ekleyen fonksiyon
    function addAnimation(scroller) {
      if (scroller) {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }

    const fadeUp = fadeUpAnimate;

    const isDarkMode = inject("isDarkMode");
    //   const toggleDarkMode = inject('toggleDarkMode');

    return {
      fastScroller,
      slowScroller,
      tags,
      // images,
      fadeUp,
      isDarkMode,
    };
  },
};
</script>

<style lang="css" scoped>
.yes {
  display: none;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

.scroller-bg {
  background: url("../assets/mks.svg");
  /* border: 4px solid rgba(138, 43, 226, 0.3); */
}

.tagBg {
  background: linear-gradient(
    to bottom,
    #1c437d,
    #0b2142,
    #0d2e55,
    #13447a,
    #12487b,
    #14558e
  );
  color: #e2ecf6;
}
</style>

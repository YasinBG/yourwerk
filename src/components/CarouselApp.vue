<template>
  <div class="my-20 flex flex-col items-center">
    <div
      ref="scrollContainer"
      class="scroll-snap-container shadow-mkPurple/50 shadow-xl rounded-xl"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="scroll-snap-item !border-r-8 !border-r-mkPurple/40"
        :class="{ 'bg-transparent': isDarkMode }"
      >
        <div
          class="p-4 max-w-xl flex flex-col text-start items-start rounded-xl"
        >
          <span class="border-4 rounded-full p-3 bg-mkPurple mb-4">
            <!-- 1. card -->
            <svg
              v-show="index === 0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 16.5L3 19.44V11H6V16.5ZM11 14.66L9.43 13.32L8 14.64V7H11V14.66ZM16 13L13 16V3H16V13ZM18.81 12.81L17 11H22V16L20.21 14.21L13 21.36L9.53 18.34L5.75 22H3L9.47 15.66L13 18.64"
                fill="white"
              />
            </svg>
            <!-- 2.card -->
            <svg
              v-show="index === 1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.13 22.1899L11.5 18.3599C13.07 17.7799 14.54 16.9999 15.9 16.0899L13.13 22.1899ZM5.64 12.4999L1.81 10.8699L7.91 8.09991C7 9.45991 6.22 10.9299 5.64 12.4999ZM21.61 2.38991C21.61 2.38991 16.66 0.268911 11 5.92991C8.81 8.11991 7.5 10.5299 6.65 12.6399C6.37 13.3899 6.56 14.2099 7.11 14.7699L9.24 16.8899C9.79 17.4499 10.61 17.6299 11.36 17.3499C13.5 16.5299 15.88 15.1899 18.07 12.9999C23.73 7.33991 21.61 2.38991 21.61 2.38991ZM14.54 9.45991C13.76 8.67991 13.76 7.40991 14.54 6.62991C15.32 5.84991 16.59 5.84991 17.37 6.62991C18.14 7.40991 18.15 8.67991 17.37 9.45991C16.59 10.2399 15.32 10.2399 14.54 9.45991ZM8.88 16.5299L7.47 15.1199L8.88 16.5299ZM6.24 21.9999L9.88 18.3599C9.54 18.2699 9.21 18.1199 8.91 17.9099L4.83 21.9999H6.24ZM2 21.9999H3.41L8.18 17.2399L6.76 15.8299L2 20.5899V21.9999ZM2 19.1699L6.09 15.0899C5.88 14.7899 5.73 14.4699 5.64 14.1199L2 17.7599V19.1699Z"
                fill="white"
              />
            </svg>
            <!-- 3.card -->
            <svg
              v-show="index === 2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2_58761)">
                <path
                  d="M15.1003 1.30511C14.6965 0.89192 14.2142 0.563601 13.6818 0.339444C13.1494 0.115288 12.5775 -0.000183105 11.9998 -0.000183105C11.4221 -0.000183105 10.8502 0.115288 10.3177 0.339444C9.7853 0.563601 9.30302 0.89192 8.89927 1.30511L7.96627 2.26211L6.63127 2.24561C6.05339 2.23877 5.47999 2.34755 4.94476 2.56554C4.40954 2.78354 3.92331 3.10635 3.51466 3.515C3.10601 3.92365 2.7832 4.40988 2.5652 4.9451C2.34721 5.48033 2.23843 6.05374 2.24527 6.63161L2.26027 7.96661L1.30627 8.89961C0.89308 9.30337 0.56476 9.78564 0.340604 10.3181C0.116448 10.8505 0.000976563 11.4224 0.000976562 12.0001C0.000976563 12.5778 0.116448 13.1497 0.340604 13.6821C0.56476 14.2146 0.89308 14.6969 1.30627 15.1006L2.26177 16.0336L2.24527 17.3686C2.23843 17.9465 2.34721 18.5199 2.5652 19.0551C2.7832 19.5903 3.10601 20.0766 3.51466 20.4852C3.92331 20.8939 4.40954 21.2167 4.94476 21.4347C5.47999 21.6527 6.05339 21.7614 6.63127 21.7546L7.96627 21.7396L8.89927 22.6936C9.30302 23.1068 9.7853 23.4351 10.3177 23.6593C10.8502 23.8834 11.4221 23.9989 11.9998 23.9989C12.5775 23.9989 13.1494 23.8834 13.6818 23.6593C14.2142 23.4351 14.6965 23.1068 15.1003 22.6936L16.0333 21.7381L17.3683 21.7546C17.9461 21.7614 18.5196 21.6527 19.0548 21.4347C19.59 21.2167 20.0762 20.8939 20.4849 20.4852C20.8935 20.0766 21.2163 19.5903 21.4343 19.0551C21.6523 18.5199 21.7611 17.9465 21.7543 17.3686L21.7393 16.0336L22.6933 15.1006C23.1065 14.6969 23.4348 14.2146 23.6589 13.6821C23.8831 13.1497 23.9986 12.5778 23.9986 12.0001C23.9986 11.4224 23.8831 10.8505 23.6589 10.3181C23.4348 9.78564 23.1065 9.30337 22.6933 8.89961L21.7378 7.96661L21.7543 6.63161C21.7611 6.05374 21.6523 5.48033 21.4343 4.9451C21.2163 4.40988 20.8935 3.92365 20.4849 3.515C20.0762 3.10635 19.59 2.78354 19.0548 2.56554C18.5196 2.34755 17.9461 2.23877 17.3683 2.24561L16.0333 2.26061L15.1003 1.30661V1.30511ZM15.5308 10.2811L11.0308 14.7811C10.9611 14.851 10.8783 14.9064 10.7872 14.9442C10.6961 14.982 10.5984 15.0015 10.4998 15.0015C10.4011 15.0015 10.3034 14.982 10.2123 14.9442C10.1212 14.9064 10.0384 14.851 9.96877 14.7811L7.71877 12.5311C7.64904 12.4614 7.59372 12.3786 7.55598 12.2875C7.51825 12.1964 7.49882 12.0987 7.49882 12.0001C7.49882 11.9015 7.51825 11.8038 7.55598 11.7127C7.59372 11.6216 7.64904 11.5388 7.71877 11.4691C7.7885 11.3994 7.87128 11.3441 7.96239 11.3063C8.0535 11.2686 8.15115 11.2492 8.24977 11.2492C8.34838 11.2492 8.44604 11.2686 8.53714 11.3063C8.62825 11.3441 8.71104 11.3994 8.78077 11.4691L10.4998 13.1896L14.4688 9.21911C14.6096 9.07828 14.8006 8.99916 14.9998 8.99916C15.1989 8.99916 15.3899 9.07828 15.5308 9.21911C15.6716 9.35994 15.7507 9.55095 15.7507 9.75011C15.7507 9.94927 15.6716 10.1403 15.5308 10.2811Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_58761">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <!-- 4.card -->
            <svg
              v-show="index === 3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 12V6M12 12L6.75 15.031L12 12ZM12 12L17.2499 15.031L12 12Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 8C7 9.10455 6.10455 10 5 10C3.89543 10 3 9.10455 3 8C3 6.89545 3.89543 6 5 6C6.10455 6 7 6.89545 7 8Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 16C7 17.1046 6.10455 18 5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14C6.10455 14 7 14.8954 7 16Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 16C21 17.1046 20.1046 18 19 18C17.8954 18 17 17.1046 17 16C17 14.8954 17.8954 14 19 14C20.1046 14 21 14.8954 21 16Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 8C21 9.10455 20.1046 10 19 10C17.8954 10 17 9.10455 17 8C17 6.89545 17.8954 6 19 6C20.1046 6 21 6.89545 21 8Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 4C14 5.10455 13.1046 6 12 6C10.8954 6 10 5.10455 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <!-- 5.card -->
            <svg
              v-show="index === 4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 5.95715L12 9.5L22 5.95715L12 2.5L2 5.95715Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M2 10L12 13.5L22 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 14L12 17.5L22 14"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 18L12 21.5L22 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
          <h2 class="font-semibold mb-2">{{ item.subtitle }}</h2>
          <div class="space-y-2">
            <div class="text-sm flex items-start justify-center font-light">
              <span class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M17.4805 7.63525H22.7301V12.8849"
                    stroke="#8a2be2"
                    stroke-width="1.49989"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.2334 18.1345L8.92219 12.4457C9.06147 12.3064 9.22683 12.1959 9.40883 12.1205C9.59082 12.0451 9.78589 12.0063 9.98289 12.0063C10.1799 12.0063 10.375 12.0451 10.5569 12.1205C10.7389 12.1959 10.9043 12.3064 11.0436 12.4457L13.4218 14.824C13.5611 14.9633 13.7265 15.0738 13.9085 15.1492C14.0905 15.2246 14.2856 15.2634 14.4825 15.2634C14.6795 15.2634 14.8746 15.2246 15.0566 15.1492C15.2386 15.0738 15.404 14.9633 15.5432 14.824L21.982 8.38525"
                    stroke="#8a2be2"
                    stroke-width="1.49989"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>{{ item.text1 }}</span>
            </div>
            <div class="text-sm flex items-start justify-center">
              <span class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M17.4805 7.63525H22.7301V12.8849"
                    stroke="#8a2be2"
                    stroke-width="1.49989"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.2334 18.1345L8.92219 12.4457C9.06147 12.3064 9.22683 12.1959 9.40883 12.1205C9.59082 12.0451 9.78589 12.0063 9.98289 12.0063C10.1799 12.0063 10.375 12.0451 10.5569 12.1205C10.7389 12.1959 10.9043 12.3064 11.0436 12.4457L13.4218 14.824C13.5611 14.9633 13.7265 15.0738 13.9085 15.1492C14.0905 15.2246 14.2856 15.2634 14.4825 15.2634C14.6795 15.2634 14.8746 15.2246 15.0566 15.1492C15.2386 15.0738 15.404 14.9633 15.5432 14.824L21.982 8.38525"
                    stroke="#8a2be2"
                    stroke-width="1.49989"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>{{ item.text2 }}</span>
            </div>
            <div class="text-sm flex items-start justify-center">
              <span class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M17.4805 7.63525H22.7301V12.8849"
                    stroke="#8a2be2"
                    stroke-width="1.49989"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.2334 18.1345L8.92219 12.4457C9.06147 12.3064 9.22683 12.1959 9.40883 12.1205C9.59082 12.0451 9.78589 12.0063 9.98289 12.0063C10.1799 12.0063 10.375 12.0451 10.5569 12.1205C10.7389 12.1959 10.9043 12.3064 11.0436 12.4457L13.4218 14.824C13.5611 14.9633 13.7265 15.0738 13.9085 15.1492C14.0905 15.2246 14.2856 15.2634 14.4825 15.2634C14.6795 15.2634 14.8746 15.2246 15.0566 15.1492C15.2386 15.0738 15.404 14.9633 15.5432 14.824L21.982 8.38525"
                    stroke="#8a2be2"
                    stroke-width="1.49989"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>{{ item.text3 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="button-container lg:my-6 my-2 flex items-center space-x-10 mx-auto"
    >
      <button @click="scrollToPrev">
        <span>
          <svg
            :style="{ fill: isAtStart ? ' grey' : '#8a2be2' }"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              :style="{ stroke: isAtStart ? 'white' : 'white' }"
              d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              :style="{ stroke: isAtStart ? 'white' : 'white' }"
              d="M13.5 16.5L9 12L13.5 7.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      <button @click="scrollToNext">
        <span>
          <!-- transform="scale(-1, 1)" -->
          <svg
            :style="{ fill: isAtEnd ? ' gray' : '#8a2be2' }"
            class="scale-x-[-1]"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              :style="{ stroke: isAtEnd ? 'white' : 'white' }"
              d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              :style="{ stroke: isAtEnd ? 'white' : 'white' }"
              d="M13.5 16.5L9 12L13.5 7.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, inject } from "vue";

export default {
  setup() {
    const items = ref([
      {
        title: "Understanding Blockchain",
        subtitle: "The Core Principles",
        text1:
          "Decentralization: Explaining how blockchain operates on a peer-to-peer network, eliminating the need for a central authority.",
        text2:
          "Transparency & Security: Discussing the immutable and transparent nature of blockchain transactions.",
        text3:
          "Consensus Algorithms: Overview of mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) that validate transactions.",
      },
      {
        title: "Blockchain Revolutionizing Finance",
        subtitle: "A New Era of Fintech",
        text1:
          "Cryptocurrencies: Introduction to Bitcoin and other digital currencies as applications of blockchain.",
        text2:
          "Smart Contracts: How blockchain enables automatic, self-executing contracts.",
        text3:
          "Cross-Border Payments: Benefits of blockchain in reducing costs and time for international transactions.",
      },
      {
        title: "Diverse Applications of Blockchain",
        subtitle: "Beyond Just Cryptocurrency",
        text1:
          "Supply Chain Transparency: Enhancing traceability and accountability in supply chains.",
        text2:
          "Voting Systems: Potential of blockchain in creating secure and transparent voting mechanisms.",
        text3:
          "Decentralized Identity: How blockchain can provide secure and sovereign digital identities.",
      },
      {
        title: "Navigating Blockchain Challenges",
        subtitle: "Addressing Key Issues",
        text1:
          "Scalability: Discussing the limitations in transaction speed and volume.",
        text2:
          "Energy Consumption: Addressing concerns over the environmental impact of blockchain technologies like Bitcoin.",
        text3:
          "Regulatory Hurdles: Exploring the evolving landscape of government regulations and compliance.",
      },
      {
        title: "The Future of Blockchain",
        subtitle: "Emerging Trends and Predictions",
        text1:
          "Integration with AI and IoT: Exploring how blockchain can synergize with other technologies.",
        text2:
          "Decentralized Finance (DeFi): The rise of financial services built on blockchain.",
        text3:
          "Quantum Computing & Blockchain: Preparing for future challenges in blockchain security with the advent of quantum computing.",
      },
    ]);
    const scrollContainer = ref(null);
    const isMobile = ref(window.innerWidth < 1024);
    const currentIndex = ref(0);

    //! Scroll Snap Svg Fill Change
    const totalItems = computed(() => items.value.length);
    const isAtStart = computed(() => currentIndex.value <= 0);
    const isAtEnd = computed(
      () => currentIndex.value >= totalItems.value - scrollStep.value
    );
    //! Scroll Snap Svg Fill Change

    const updateIsMobile = () => {
      isMobile.value = window.innerWidth < 1024;
    };

    onMounted(() => {
      window.addEventListener("resize", updateIsMobile);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateIsMobile);
    });

    const scrollStep = computed(() => (isMobile.value ? 1 : 2));
    const scrollToNext = () => {
      if (currentIndex.value < totalItems.value - scrollStep.value) {
        currentIndex.value += scrollStep.value;
        scrollByIndex(scrollStep.value);
      }
    };

    const scrollToPrev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= scrollStep.value;
        scrollByIndex(-scrollStep.value);
      }
    };

    const scrollByIndex = (indexOffset) => {
      const container = scrollContainer.value;
      const itemWidth =
        container.querySelector(".scroll-snap-item").offsetWidth + 20; // Margin dahil genişlik
      container.scrollTo({
        left: container.scrollLeft + indexOffset * itemWidth,
        behavior: "smooth",
      });
    };

    const isDarkMode = inject("isDarkMode");

    return {
      items,
      scrollContainer,
      scrollToNext,
      scrollToPrev,
      isAtStart,
      isAtEnd,
      isDarkMode,
    };
  },
};
</script>

<style scoped>
.scroll-snap-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  white-space: wrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 190px;
}

.scroll-snap-container::-webkit-scrollbar {
  display: none;
}

.scroll-snap-item {
  flex: 0 0 calc(50% - 20px); /* Her öğe için genişliği azalt */
  scroll-snap-align: start;
  text-align: center;
  padding: 20px;
  border: 1px solid #a6adb92c;
  border-radius: 15px;
  margin-right: 20px; /* Sonraki öğenin bir kısmını göstermek için */
}

@media (max-width: 1024px) {
  .scroll-snap-item {
    /*flex: 0 0 calc(100% - 20px);*/
    flex: 0 0 100%;
    margin-right: 10px;
  }
  .scroll-snap-container {
    padding-right: 3px;
    width: 94%;
    margin-left: auto;
    margin-right: auto;
  }
}

.button-container {
  margin-bottom: 20px;
}

.button-container button {
  margin: 5px;
}

.bgCard {
  /* background: url("../assets/mkover.webp"); */
  background: linear-gradient(to right, #080a10, #241b28);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

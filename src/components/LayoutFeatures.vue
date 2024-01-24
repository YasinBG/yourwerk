<template>
  <!-- Features -->
  <div class="features mt-12 lg:mt-44 z-20" v-motion="fadeUp">
    <div class="container mx-auto mt-16 px-6 md:px-0">
      <h2 class="!mb-3 pb-2 heading1 lg:!text-7xl bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white">Unique Deflationary Policies</h2>
      <!-- <p class="max-w-xl mx-auto text-center">
        Blockchain is a decentralized ledger system that ensures reliability and
        transparency. It maintains the immutability of data and supports
        automated functionalities like smart contracts.
      </p> -->
    </div>
  </div>
  <!-- Features Tabs -->
  <section id="tabs" v-motion="fadeUp">
    <!-- Tabs/Panels Container -->
    <div class="container relative mx-auto my-6 lg:mb-32 mt-4 px-6">
      <!-- <div class="bg-tabs"></div> -->
      <!-- Tabs Flex Container -->
      <div
        class="flex flex-col justify-center w-full mx-auto mb-6 border-b border-b-gray-700 md:space-x-10 md:flex-row"
      >
        <!-- Tabs -->
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="flex justify-center text-center cursor-pointer text-mkGray border-b md:border-b-0 hover:text-mkPurple md:w-1/3 tab"
          @click="activateTab(index)"
        >
          <div
            class="py-5 font-semibold text-xl"
            :class="{
              'border-mkPurple border-b-4 text-mkPurple': activeTab === index,
            }"
          >
            {{ tab.title }}
          </div>
        </div>
      </div>

      <!-- Tab Panels -->
      <div id="panels" class="container mx-auto">
        <!-- Panels -->
        <div
          v-for="(panel, index) in tabs"
          :key="index"
          :class="[
            'flex flex-col py-5 md:flex-row md:space-x-7 panel',
            { hidden: activeTab !== index },
          ]"
        >
          <!-- Panel Image -->
          <div class="flex justify-center md:w-1/2">
            <img
              :src="require(`../assets/${panel.imgSrc}`)"
              alt=""
              class="relative  w-full h-full md:h-96 rounded-xl object-cover z-10 "

            />
          </div>
          <!-- Panel Content -->
          <div class="panel-content animate-fadeInSlide flex flex-col justify-center">
            <h3
              class="mt-12 text-3xl font-semibold text-center md:mt-0 md:text-left bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
            >
              {{ panel.title }}
            </h3>
            <p class="max-w-md text-center text-xl text-white/80 md:text-left mt-4">
              {{ panel.content }}
            </p>
            <p class="max-w-md text-center text-xl text-white/80 md:text-left mt-4">
              {{ panel.content2 }}
            </p>
            <p v-if="panel.content3" class="max-w-md text-center text-xl text-white/80 md:text-left mt-4">
              {{ panel.content3 }}
            </p>
            <div class="mx-auto md:mx-0 mt-8 text-center md:text-start">
              <button class="neon-button !text-white">
                <a
                  href="https://werkpaper.netlify.app/#/topic/Token%20Economics,%20Distribution,%20and%20Staking%20Policy"
                  target="_blank"
                  >More Info</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fadeUpAnimate, fadeLeftAnimate } from "@/directives/mkAnimate";
import { ref } from "vue";
export default {
  setup() {
    const fadeUp = fadeUpAnimate;
    const fadeLeft = fadeLeftAnimate;

    const activeTab = ref(0);

    const tabs = ref([
      {
        title: "Burn Burn",
        content:
          "The total number of tokens will be reduced from 1.000 to 500 in one year.",
        content2:
          " A fixed number of 41,66667 tokens will be burned each month according to the schedule.",
        imgSrc: "burn.png",
      },
      {
        title: "Collaborations & Staking",
        content:
          "Until the first 100 projects, 1% of the non-circulating tokens that are not planned to be burned in that month will be burned with each new collaboration announcement.  ",
        content2:
          "Special staking offers will be made to qualified large investors to encourage them to buy WERK 1000X from the market and invest long-term.",
        content3: "The most ambitious staking programs in Cryptocurrency history will be launched.",
        imgSrc: "collabortations.png",
      },
      {
        title: "Win Win",
        content:
          "Collaborating Web3 applications and games can earn a commission of 1-5% on transactions made with WERK 1000X, as per the agreements. ",
        content2:
          "In addition to the amount specified in the burning schedule, tokens equivalent to the total monthly commission volume will also be burned.",
        imgSrc: "win.png",
      },
    ]);

    const activateTab = (index) => {
      activeTab.value = index;
    };

    return { fadeUp, fadeLeft, activateTab, tabs, activeTab };
  },
};
</script>

<style lang="scss" scoped></style>

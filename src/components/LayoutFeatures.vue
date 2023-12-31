<template>
  <!-- Features -->
  <div class="features mt-44 z-50" v-motion="fadeLeft">
    <div class="container mx-auto mt-16 px-6 md:px-0">
      <h2 class="mb-6 heading1 !text-8xl">
        One Token, infinite possibilities!
      </h2>
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
    <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
      <div class="bg-tabs"></div>
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
            class="py-5 font-semibold text-2xl"
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
              class="relative z-10"
            />
          </div>
          <!-- Panel Content -->
          <div class="panel-content animate-fadeInSlide">
            <h3
              class="mt-12 text-3xl font-semibold text-center md:mt-0 md:text-left"
            >
              {{ panel.title }}
            </h3>
            <p class="max-w-md text-center text-mkGray md:text-left mt-4">
              {{ panel.content }}
            </p>
            <p class="max-w-md text-center text-mkGray md:text-left mt-4">
              {{ panel.content2 }}
            </p>
            <div class="mx-auto md:mx-0 mt-8 text-center md:text-start">
              <button class="neon-button !text-white">More Info</button>
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
        title: "Decentralization",
        content:
          "Blockchain offers a decentralized structure, enhancing security by distributing control across the network and mitigating the risk of data manipulation.",
        content2:
          "Blockchain's consensus mechanisms, like proof-of-work or proof-of-stake, ensure agreement on the validity of transactions among network participants, fostering trust without a central authority.",
        imgSrc: "illustration-features-tab-1.svg",
      },
      {
        title: "Trustworthy",
        content:
          "The immutability feature of blockchain ensures that once data is recorded, it remains unalterable, providing a trustworthy and tamper-proof ledger.",
        content2:
          "The transparency inherent in blockchain allows all participants to view the entire transaction history, promoting accountability and eliminating the need for blind trust in centralized systems.",
        imgSrc: "illustration-features-tab-2.svg",
      },
      {
        title: "Efficiency",
        content:
          "Smart contracts, a core feature of blockchain, facilitate self-executing agreements, automating processes and reducing the need for intermediaries, leading to increased operational efficiency.",
        content2:
          "Interoperability is a notable blockchain feature, facilitating seamless communication and data exchange between different blockchain networks, fostering a more connected and collaborative digital ecosystem.",
        imgSrc: "illustration-features-tab-3.svg",
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

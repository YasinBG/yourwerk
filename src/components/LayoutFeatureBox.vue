<template>
  <section id="section1" class="flex flex-col items-center mb-32">
    <div class="titte heading1 !text-6xl !my-20 md:pt-10">
      <h1
        v-motion="fadeRight"
        class="bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
      >
        Werk Token Use Cases
      </h1>
      <div class="gradientLine w-full mx-auto !mt-4" v-motion="leftLine"></div>
    </div>
    <div
      class="relative container flex flex-col px-6 mx-auto flex-wrap md:flex-nowrap md:flex-row md:space-x-7"
    >
      <!-- Horizontal Line -->
      <div
        v-motion="leftLine2"
        class="hidden absolute top-24 w-10/12 left-16 h-3 bg-mkPurple md:block"
      ></div>
      <!-- Vertical Line -->
      <div
        v-motion="leftLine2"
        class="absolute w-2 left-1/2 h-full -ml-1 bg-mkPurple md:hidden"
      ></div>

      <!-- Box 1 -->
      <div
        v-motion="fadeUp1"
        class="relative shadow-xl shadow-mkSecondary flex flex-col p-6 h-f bg-gray-100 rounded-lg md:w-1/3"
        :class="{ 'cardGlass shadow-lg shadow-[#12487b]  ': isDarkMode }"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full dark:mkPurple bgCard"
          >
            <img src="../assets/icon-brand-recognition.svg" alt="" />
          </div>
        </div>
        <div class="h-full">
          <h5
            class="pt-8 pb-4 text-xl font-bold text-center md:text-left uppercase"
          >
            As an Investment Tool
          </h5>
          <p class="text-center text-white/80 md:text-left flex-wrap">
            WERK, as an innovative investment tool that enriches your digital
            asset portfolios, offers sustainable growth and stable return
            opportunities in the rapidly expanding market of the Web3 ecosystem.
          </p>
        </div>
      </div>

      <!-- Box 2 -->
      <div
        v-motion="fadeUp2"
        class="relative flex flex-col shadow-xl shadow-mkSecondary mt-24 p-6 h-f bg-gray-100 rounded-lg md:mt-0 md:w-1/3"
        :class="{
          'cardGlass shadow-lg shadow-[#12487b]  ': isDarkMode,
        }"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full dark:mkPurple bgCard"
          >
            <img src="../assets/icon-detailed-records.svg" alt="" />
          </div>
        </div>
        <div class="h-full">
          <h5
            class="pt-8 pb-4 text-xl font-bold text-center md:text-left uppercase"
          >
            As a Currency
          </h5>
          <p class="text-center text-white/80 md:text-left flex-wrap">
            WERK, as a tool that simplifies your daily life and opens new doors
            in the digital world, enables you to securely complete transactions
            in a short time as an alternative payment method in Web3 projects.
          </p>
        </div>
      </div>

      <!-- Box 3 -->
      <div
        v-motion="fadeUp3"
        class="relative flex flex-col shadow-xl shadow-mkSecondary mt-24 p-6 h-f bg-gray-100 rounded-lg md:mt-0 md:w-1/3"
        :class="{ 'cardGlass shadow-lg shadow-[#12487b]  ': isDarkMode }"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full dark:mkPurple bgCard"
          >
            <img src="../assets/icon-fully-customizable.svg" alt="" />
          </div>
        </div>
        <div class="h-full">
          <h5
            class="pt-8 pb-4 text-xl font-bold text-center md:text-left uppercase"
          >
            Management and Voting
          </h5>
          <p class="text-center text-white/80 md:text-left flex-wrap">
            WERK grants token holders an active role in shaping the project’s
            future, offering a transparent and tamper-resistant voting mechanism
            at the heart of the Web3 ecosystem, fostering a democratic and
            participatory approach.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  fadeUpAnimate1,
  fadeUpAnimate2,
  fadeUpAnimate3,
  leftLineAnimate2,
  leftLineAnimate,
  fadeRightAnimate,
} from "@/directives/mkAnimate";
import { inject } from "vue";
export default {
  setup() {
    const fadeUp1 = fadeUpAnimate1; //
    const fadeUp2 = fadeUpAnimate2; //
    const fadeUp3 = fadeUpAnimate3; //
    const leftLine2 = leftLineAnimate2; //
    const leftLine = leftLineAnimate;
    const fadeRight = fadeRightAnimate;

    const isDarkMode = inject("isDarkMode");

    return {
      fadeUp1,
      fadeUp2,
      fadeUp3,
      leftLine2,
      leftLine,
      fadeRight,
      isDarkMode,
    };
  },
};
</script>

<style lang="css" scoped>
.bgCard {
  /* background: url("../assets/mkover.webp"); */
  /* background: linear-gradient(to right, #080a10, #241b28); */

  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  background: linear-gradient(
    to left top,
    #0b2142,
    #0d2e55,
    #13447a,
    #12487b,
    #14558e
  );

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border: 3.5px solid #b9c7d5c7;
}

.cardGlass {
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
}
</style>

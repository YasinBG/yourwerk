<template>
  <section id="section1" class="flex flex-col items-center mb-32">
    <div class="titte heading1 !my-20 md:pt-10">
      <h1 v-motion="fadeRight">Our Services Empowered by Blockchain</h1>
      <div class="gradientLine w-full mx-auto !mt-4" v-motion="leftLine"></div>
    </div>
    <div
      class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7"
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
        class="relative flex flex-col p-6 space-y-6 bg-gray-100 rounded-lg md:w-1/3"
        :class="{ 'bgCard shadow-lg shadow-mkPrimary  ': isDarkMode }"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full dark:mkPurple bg-mkPurple border-8 border-[#13447a]"
          >
            <img src="../assets/icon-brand-recognition.svg" alt="" />
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          Blockchain Branding
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          Elevate your brand recognition with every transaction. Unique
          blockchain links add authenticity and trust to your content.
        </p>
      </div>

      <!-- Box 2 -->
      <div
        v-motion="fadeUp2"
        class="relative flex flex-col mt-24 p-6 space-y-6 bg-gray-100 rounded-lg md:mt-8 md:w-1/3"
        :class="{ 'bgCard shadow-lg shadow-mkPrimary  ': isDarkMode }"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full dark:mkPurple bg-mkPurple border-8 border-[#13447a]"
          >
            <img src="../assets/icon-detailed-records.svg" alt="" />
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          Transparent Records
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          Access detailed records of every interaction on the blockchain.
          Understanding how and when users engage with your content facilitates
          informed decision-making.
        </p>
      </div>

      <!-- Box 3 -->
      <div
        v-motion="fadeUp3"
        class="relative flex flex-col mt-24 p-6 space-y-6 bg-gray-100 rounded-lg md:mt-16 md:w-1/3"
        :class="{ 'bgCard shadow-lg shadow-mkPrimary  ': isDarkMode }"
      >
        <!-- Image Positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image Container For Background & Center -->
          <div
            class="flex items-center justify-center w-20 h-20 p-4 rounded-full dark:mkPurple bg-mkPurple border-8 border-[#13447a]"
          >
            <img src="../assets/icon-fully-customizable.svg" alt="" />
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
          Fully Customizable Blockchain
        </h5>
        <p class="text-center text-gray-400 md:text-left">
          Enhance brand awareness and content discoverability through
          customizable blockchain links, supercharging audience engagement.
        </p>
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
    to left,
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

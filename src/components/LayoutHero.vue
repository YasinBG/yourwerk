<template>
  <div
    class="HeroSection flex flex-col lg:flex-row justify-between items-center lg:gap-44 max-w-[1000px] mx-auto py-12 lg:py-24 z-10"
    style="position: relative"
  >
    <div class="leftSection lg:w-1/2 space-y-12 lg:text-start text-center">
      <h1 class="text-3xl lg:text-5xl mb-6 tracking-wide font-header">
        YourWerk lorem, ipsum dolor.
      </h1>
      <p class="tracking-widest px-4 lg:px-0 text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        laboriosam cum eveniet, asperiores voluptatibus facere quidem, nobis
        beatae, cupiditate odio error esse? Fuga, assumenda aliquid.
      </p>

      <a
        v-if="isDarkMode"
        href="#"
        class="neon-button !mb-12 lg:mb-0"
        :class="{ '!text-white': isDarkMode }"
        @mouseover="handleHover"
        @mouseout="handleHoverOut"
        >Learn More</a
      >
      <a
        v-else
        href="#"
        class="neon-button !bg-inherit !text-white !bg-mkPurple hover:!text-white hover:!border-mkPurple !mb-12 lg:mb-0"
        @mouseover="handleHover"
        @mouseout="handleHoverOut"
        >Learn More</a
      >
    </div>
    <div class="rightSection w-1/2">
      <div
        class="HeroImg shadow-xl bgchange"
        :class="{ 'animate-wiggle': isHovered }"
      >
        <img
          class="rounded-md w-full h-full object-cover border-t-mkPurple border-r-mkPurple border-2 border-b-transparent border-l-transparent"
          src="../assets/hero.png"
          alt="image"
        />
      </div>
    </div>
  </div>
  <div
    class="background bgchange relative"
    :class="{ 'background-hovered': isHovered }"
  >
    <svg
      class="object-contain w-full mx-auto"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 1600 900"
    >
      <defs>
        <linearGradient id="bg" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: rgba(138, 43, 226, 0.6)"></stop>
          <stop
            offset="100%"
            style="stop-color: rgba(38, 122, 190, 0.06)"
          ></stop>
        </linearGradient>
        <path
          id="wave"
          fill="url(#bg)"
          d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
        s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
        />
      </defs>
      <g>
        <use xlink:href="#wave" opacity=".3">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="8s"
            calcMode="spline"
            values="270 230; -334 180; 270 230"
            keyTimes="0; .5; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
        <use xlink:href="#wave" opacity=".6">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="6s"
            calcMode="spline"
            values="-270 230;243 220;-270 230"
            keyTimes="0; .6; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
        <use xlink:href="#wave" opacty=".9">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="4s"
            calcMode="spline"
            values="0 230;-140 200;0 230"
            keyTimes="0; .4; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
      </g>
    </svg>
    <!-- Shadow Hero Bottom -->

    <div
      class="absolute bottom-0 lg:h-32 w-full bg-gradient-to-b from-transparent to-white dark:to-mkPrimary z-30"
    ></div>
  </div>
</template>

<script>
import useDarkMode from "@/directives/useDarkMode.js";
import { ref } from "vue";
export default {
  setup() {
    //* Button hover svg opacity
    const isHovered = ref(false);
    const handleHover = () => {
      isHovered.value = true;
    };
    const handleHoverOut = () => {
      isHovered.value = false;
    };

    const { isDarkMode } = useDarkMode();
    return { isDarkMode, isHovered, handleHoverOut, handleHover };
  },
};
</script>

<style lang="css" scoped>
.background {
  position: absolute;
  /* z-index: -1; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* transform: translateY(-90deg); */
}

.background svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* transform: scaleY(3) scaleX(2.25); */
  transform: scaleY(2.2);
  transform-origin: bottom;
  box-sizing: border-box;
  display: block;
  pointer-events: none;
}

/* Button Hover Change */

.bgchange {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.background-hovered {
  opacity: 0.3;
}

.st0 {
  stroke: #ffffff;
  stroke-miterlimit: 10;
}
.st1 {
  fill: #ffffff;
}
</style>

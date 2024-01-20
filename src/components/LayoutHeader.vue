<template>
  <header
    class="header w-full sticky top-0 p-6 transition-all duration-500 ease-in-out z-50"
    :class="{
      'headerImgBg': headerBackgroundColor === 'dark',
      'bg-mkPurple text-white': headerBackgroundColor === 'mkBg',
    }"
  >
    <!-- Desktop Navbar -->
    <div class="wrapper hidden lg:block max-w-5xl mx-auto">
      <div class="primary-header flex justify-between items-center">
        <RouterLink
          to="/"
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 700 },
          }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          class="logo flex items-center text-3xl cursor-pointer italic"
        >
          <p
            class="font-serif text-6xl bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
          >
            W
          </p>
          ERK<span
            class="bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white ml-2"
            >1000</span
          ><span class="text-3xl">X</span>
        </RouterLink>
        <ul
          class="nav-list flex items-center space-x-12 font-semibold uppercase"
        >
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="https://werk1000x.netlify.app/#/" target="_blank"
              >WhitePaper</a
            >
          </li>
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#" @click="navigateTo('section1')">How To Buy</a>
          </li>
          <!-- <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#">Contact</a>
          </li> -->
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#">Buy</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Mobile Navbar -->
    <div class="lg:hidden block">
      <div class="flex justify-between items-center">
        <span
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 700 },
          }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          class="logo flex items-center text-3xl cursor-pointer font-bold"
        >
          Your<span
            class="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
            >W</span
          ><span class="font-bold">erk</span>
        </span>
        <!-- hamburger menu -->
        <div
          @click="toggleMenu"
          class="menu-toggle p-4 cursor-pointer hover:bg-gray-800 rounded-full hover:bg-opacity-40 transition-colors duration-300"
          :class="{ open: isNavOpen }"
        >
          <div class="hamburger"></div>
        </div>
      </div>
      <nav class="site-nav mobileBg" :class="{ 'site-nav--open': isNavOpen }">
        <ul>
          <li class="flex items-center border-b border-b-[#103b68]">
            <router-link to="/" class="!flex items-center w-full px-4 py-6">
              <span class="mr-4">
                <svg
                  class="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#eae9ea"
                >
                  <path
                    d="M11.9999 5.38875L2.89451 14.4239C2.82701 14.4923 2.74076 14.5242 2.66659 14.5809V23.25C2.66659 23.6644 2.96493 24 3.33326 24H9.55118L7.99993 20.587L12.3378 17.587L9.83118 11.9986L15.9999 18.4102L11.662 21.4102L13.3253 24H20.6666C21.0349 24 21.3333 23.6644 21.3333 23.25V14.5828C21.2624 14.5284 21.1783 14.4975 21.1141 14.4328L11.9999 5.38875ZM23.7787 11.0756L21.3333 8.64609V2.25C21.3333 1.83563 21.0349 1.5 20.6666 1.5H17.9999C17.6316 1.5 17.3333 1.83563 17.3333 2.25V4.67297L13.1145 0.483282C12.7966 0.16172 12.3983 0.000469775 11.9999 1.02496e-06C11.6016 -0.000467725 11.2041 0.159845 10.8874 0.481407L0.221177 11.0756C-0.0525729 11.3527 -0.0754896 11.8266 0.17076 12.135L1.06243 13.2516C1.30826 13.5595 1.72993 13.5853 2.00409 13.3083L11.5591 3.82641C11.8112 3.57656 12.1891 3.57656 12.4412 3.82641L21.9962 13.3078C22.2699 13.5844 22.6916 13.5591 22.9378 13.2511L23.8295 12.1345C24.0753 11.8266 24.0528 11.3522 23.7787 11.0756Z"
                  />
                </svg>
              </span>
              <span>Home</span>
            </router-link>
          </li>
          <li class="border-b border-b-[#103b68]">
            <routerLink
              to="#"
              href="#"
              class="!flex items-center w-full px-4 py-6"
            >
              <span class="mr-4">
                <svg
                  class="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                >
                  <path
                    d="M14 20C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V6L10 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14ZM9 2L14 7H9V2ZM3 6H6V8H3V6ZM3 10H13V12H3V10ZM3 14H13V16H3V14Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>WhitePaper </span>
            </routerLink>
          </li>
          <li class="border-b border-b-[#103b68]">
            <routerLink
              @click="mobileNavigate('section1')"
              to="#"
              class="!flex items-center w-full px-4 py-6"
            >
              <span class="w-8 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  class="mr-4"
                >
                  <path
                    d="M20 4.5069e-06C20 4.5069e-06 12.36 -0.369996 6.34 7.88C1.72 14.21 0 20 0 20L1.94 19C3.38 16.5 4.13 15.47 5.54 14C8.07 14.74 10.71 14.65 13 12C11 11.44 9.4 11.57 7.04 11.81C9.69 10 11.5 9.60001 14 10L15 8C13.2 7.66 12 7.63 10.22 8.04C12.19 6.65 13.56 5.87 16 6L17.21 4.07C15.65 3.96 14.71 4.13 12.92 4.57C14.53 3.11 16 2.45 18.14 2.32C18.14 2.32 19.19 0.430005 20 4.5069e-06Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>How to Buy</span>
            </routerLink>
          </li>
          <li class="border-b border-b-[#103b68]">
            <routerLink to="#" class="!flex items-center w-full px-4 py-6">
              <span class="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-8 h-8"
                >
                  <path
                    d="M4 16H7V22H4V16ZM19 2.39C18.92 3.86 18.55 5.13 17.86 6.21C17.17 7.29 16.22 8 15 8.39V22H13V16H11V22H9V10.08C8.72 10.17 8.5 10.28 8.39 10.41C7.45 11.16 7 12.19 7 13.5V14H5V13.5C5 11.53 5.72 9.94 7.13 8.72C8.53 7.56 10.16 7 12 7C13.41 7 14.56 6.64 15.47 5.95C16.5 5.11 17 3.95 17 2.5V2H19V2.39ZM12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.53043 13.7893 5.03914 13.4142 5.41421C13.0391 5.78929 12.5304 6 12 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2107 5.03914 10 4.53043 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span> Contact </span>
            </routerLink>
          </li>
          <li class="">
            <routerLink to="#" class="!flex items-center w-full px-4 py-6">
              <span class="mr-4">
                <svg
                  fill="#FFF"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 487.888 487.888"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M457.2,80.881c-40.9-40.9-107.1-40.9-148,0c-39.4,39.4-40.8,102.3-4.4,143.4l1.1,0.9c-4,8.5-10.8,19.1-21.6,24.4
			c-3.6,1.8-2.7,7.1,1.2,7.7c11.8,1.8,28.7-0.2,44.5-12.2l0.2,0.2c40.1,23.6,92.6,18.2,127.1-16.3
			C498.1,188.081,498.1,121.781,457.2,80.881z M411.1,193.281c-4.2,5.2-9.8,8.6-16.2,10.4c-2.8,0.8-4.1,2.2-3.9,5.2
			c0.1,2.9,0,5.7,0,8.6c0,2.6-1.3,3.9-3.8,4c-3.1,0.1-6.2,0.1-9.3,0c-2.7,0-4-1.6-4-4.2c0-2.1,0-4.2-0.1-6.3c0-4.6-0.2-4.8-4.6-5.5
			c-5.7-0.9-11.3-2.2-16.5-4.7c-4.1-2-4.5-3-3.3-7.3c0.9-3.2,1.8-6.4,2.7-9.6c1.2-3.7,2.1-4.1,5.5-2.4c5.8,3,11.9,4.7,18.3,5.5
			c4.1,0.5,8.2,0.1,12-1.6c7.1-3.1,8.3-11.4,2.2-16.4c-2.1-1.7-4.4-2.9-6.8-4c-6.3-2.8-12.8-4.9-18.7-8.4
			c-9.6-5.7-15.7-13.6-15-25.3c0.8-13.2,8.3-21.4,20.4-25.9c5-1.8,5-1.7,5-7c0-1.8,0-3.5,0-5.3c0.1-3.9,0.8-4.6,4.7-4.7
			c1.2,0,2.4,0,3.6,0c8.4,0,8.4,0,8.4,8.3c0,5.9,0,5.9,5.9,6.9c4.5,0.7,8.8,2,13,3.9c2.3,1,3.2,2.6,2.5,5c-1,3.6-2,7.2-3.2,10.8
			c-1.1,3.4-2.2,3.9-5.4,2.3c-6.5-3.2-13.4-4.5-20.6-4.1c-1.9,0.1-3.7,0.4-5.5,1.1c-6.2,2.7-7.2,9.6-1.9,13.8c2.7,2.1,5.7,3.7,8.9,5
			c5.5,2.3,11.1,4.5,16.3,7.4C418.4,158.081,422.9,178.981,411.1,193.281z"
                      />
                      <path
                        d="M427.4,368.481c-3.2-4-5-8.9-5-14v-23.1v-14.8v-42.8c-12.5,4.1-25.7,6.2-39.2,6.2v36.6v14.8v25.4H66.9v-29.8v-10.4v-161.6
			c0,0,0-0.1,0.1-0.1h191.2c0-13.3,2.1-26.5,6.3-39.2H67c-21.7,0-39.3,17.6-39.3,39.3v161.5v8.6v29c0,5.1-1.8,10-5,14l-20.3,24.9
			c-1.5,1.9-2.4,4.2-2.4,6.6v11.4c0,14.7,11.9,26.7,26.7,26.7h396.4c14.7,0,26.7-11.9,26.7-26.7v-11.4c0-2.4-0.8-4.8-2.4-6.7
			L427.4,368.481z M267.7,398.881c0,7.5-6.1,13.6-13.6,13.6H196c-7.5,0-13.6-6.1-13.6-13.6v-2.9h85.2v2.9H267.7z"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span> Buy </span>
            </routerLink>
          </li>
        </ul>
        <div class="border-t-mkPrimary border-t my-2"></div>
        <div class="text-center py-2 font-semibold uppercase">
          Us on social media
        </div>
        <!-- Social media -->
        <div class="Social-Media flex items-center w-full py-4 mx-auto">
          <ul class="flex justify-around items-center w-full">
            <li class="social-Icon p-4 rounded-full">
              <a href="" class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-youtube"
                >
                  <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                  ></path>
                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                  ></polygon>
                </svg>
              </a>
            </li>
            <li class="social-Icon p-4 rounded-full">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="social-Icon p-4 rounded-full">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
            <li class="social-Icon p-4 rounded-full">
              <a href="">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li class="social-Icon p-4 rounded-full">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(248, 244, 244);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="border-b-mkPrimary border-b my-2"></div>
      </nav>
    </div>
  </header>
</template>

<script>
import { inject, onMounted, onUnmounted, ref, watch } from "vue";
import { useNavigation } from "@/directives/useNavigation";
export default {
  setup() {
    // Header
    const headerBackgroundColor = ref("light");

    const scrollY = ref(0);
    //* Dark-Light Mode

    const isDarkMode = inject("isDarkMode");

    const updateScroll = () => {
      scrollY.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", updateScroll);
    });

    watch([scrollY, isDarkMode], ([newScrollY, newIsDarkMode]) => {
      if (newScrollY > 10) {
        headerBackgroundColor.value = newIsDarkMode ? "dark" : "mkBg";
      } else {
        headerBackgroundColor.value = "light";
      }
    });

    //* Mobile Navbar
    const isNavOpen = ref(false);
    const toggleMenu = () => {
      isNavOpen.value = !isNavOpen.value;
    };

    //* Navigation Scroll
    const { navigateTo } = useNavigation();

    //* Mobile'de scroll yönlendirmesi.
    const mobileNavigate = (event) => {
      navigateTo(event);
      isNavOpen.value = false;
    };

    return {
      headerBackgroundColor,
      updateScroll,
      isNavOpen,
      toggleMenu,
      isDarkMode,
      navigateTo,
      mobileNavigate,
    };
  },
};
</script>

<style lang="css">
.headerImgBg {
  /* background: url("../assets/mkover.webp"); */
  background: linear-gradient(to right, #103b68, #241b28);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* hamburger menü */

.hamburger,
.hamburger::before,
.hamburger::after {
  content: "";
  display: block;
  /* background: #eae9ea; */
  background: #eae9ea;
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
  transition: all ease-in-out 300ms;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}

.open .hamburger {
  transform: rotate(45deg);
}

.open .hamburger::before {
  opacity: 0;
}

.open .hamburger::after {
  transform: translateY(-3px) rotate(-90deg);
}

/* Mobile Link */
.site-nav {
  position: absolute;
  top: 100%;
  right: 0%;
  /* background: #252525; */
  background: #14161a;
  clip-path: circle(0px at top right);
  transition: clip-path ease-in-out 500ms;
  width: 100%;
  z-index: 999;

  /*   display: none; */
}

.site-nav--open {
  clip-path: circle(250% at top right);
  /* display: block; */
}

.site-nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-nav a {
  color: #ebebd3;
  /* display: block; */
  /* padding: 2em 4em 2em 1.5em; */
  text-transform: uppercase;
  text-decoration: none;
}

.site-nav a:hover,
.site-nav a:focus {
  /* background: #e4b363; */
  background: #0d2e55;
  /* color: #464655; */
  color: #eae9ea;
}

.mobileBg {
  background: linear-gradient(
    to right,
    #0b2142,
    #0d2e55,
    #103b68,
    #12487b,
    #14558e
  );

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.social-Icon {
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
</style>

<template>
  <header
    class="header sticky top-0 p-6 transition-all duration-500 ease-in-out z-50"
    :class="{
      'headerImgBg': headerBackgroundColor === 'dark',
      'bg-mkPurple text-white': headerBackgroundColor === 'mkBg',
    }"
  >
    <!-- Desktop Navbar -->
    <div class="wrapper hidden lg:block max-w-5xl mx-auto">
      <div class="primary-header flex justify-between items-center">
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
          class="logo flex items-center text-3xl border-b-2 border-b-mkPurple cursor-pointer"
        >
          Multi<span class="italic font-serif dark:text-mkPurple text-mkGray"
            >funct</span
          ><span class="font-bold">ional</span>
        </span>
        <ul
          class="nav-list flex items-center space-x-12 font-semibold uppercase"
        >
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#">Home</a>
          </li>
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#">Docs</a>
          </li>
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#" @click="navigateTo('section1')">About</a>
          </li>
          <li
            class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
          >
            <a href="#">Contact</a>
          </li>
          <!-- Dark/Light Mode Button -->
          <button
            @click="toggleDarkMode"
            id="theme-toggle"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2 5"
          >
            <!-- Dark SVG Icon -->
            <svg
              v-show="!isDarkMode"
              id="theme-toggle-dark-icon"
              class="w-5 h-5"
              :class="{
                'fill-white': headerBackgroundColor === 'mkBg',
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
            <!-- Light SVG Icon -->
            <svg
              v-show="isDarkMode"
              id="theme-toggle-light-icon"
              class="w-5 h-5"
              :class="{
                'fill-white': headerBackgroundColor === 'mkBg',
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
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
          class="logo flex items-center text-3xl border-b-2 border-b-mkPurple cursor-pointer"
        >
          Your<span class="italic font-serif text-mkPurple">W</span
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
      <nav class="site-nav" :class="{ 'site-nav--open': isNavOpen }">
        <ul>
          <li class="flex items-center">
            <router-link to="/" class="!flex items-center w-full">
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
          <li class="">
            <routerLink
              to="#"
              href="#"
              :class="{
                '!bg-[#8a8b8c] transition-all duration-200': dropDownMenu,
              }"
              @click="openDropdown"
              class="!flex items-center w-full"
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
              <span
                >Docs
                <span class="ml-2">{{ dropDownMenu ? "▲" : "▼" }}</span></span
              >
            </routerLink>

            <a href="" class="!pl-12 !py-4" v-show="dropDownMenu">WhitePaper</a>
            <a href="" class="!pl-12 !py-4" v-show="dropDownMenu">Lorem</a>
          </li>
          <li>
            <routerLink to="#" class="!flex items-center w-full">
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
              <span>About</span>
            </routerLink>
          </li>
          <li>
            <routerLink to="#" class="!flex items-center w-full">
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
        </ul>
        <!-- Social media -->
        <div class="Social-Media flex items-center w-full">
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="facebook w-24 h-24"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2_20289)">
                <path
                  d="M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8022 4.62609 22.6116 10.1836 23.4844V15.3605H7.23047V12H10.1836V9.43875C10.1836 6.52547 11.918 4.91625 14.5744 4.91625C15.8466 4.91625 17.1769 5.14313 17.1769 5.14313V8.0025H15.7106C14.2669 8.0025 13.8164 8.89875 13.8164 9.81797V12H17.0405L16.5248 15.3605H13.8164V23.4844C19.3739 22.6116 23.625 17.8022 23.625 12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_20289">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="facebook w-24 h-24"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
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
    // const handleScroll = () => {
    //   const scrollY = window.scrollY;

    //   if (scrollY > 5) {
    //     // Scroll yukarıdaysa ve dark mod aktifse, rengi mkBg yap
    //     headerBackgroundColor.value = isDarkMode.value ? "dark" : "mkBg";
    //   } else {
    //     // Scroll en üstteyse, varsayılan rengi ayarla (örneğin "light")
    //     headerBackgroundColor.value = "light";
    //   }
    // };

    const scrollY = ref(0);
    //* Dark-Light Mode

    const isDarkMode = inject("isDarkMode");
    const toggleDarkMode = inject("toggleDarkMode");

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
      if (newScrollY > 5) {
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
    const dropDownMenu = ref(false);
    const openDropdown = () => {
      dropDownMenu.value = !dropDownMenu.value;
    };

    //* Navigation Scroll
    const { navigateTo } = useNavigation();

    return {
      headerBackgroundColor,
      updateScroll,
      isNavOpen,
      toggleMenu,
      openDropdown,
      dropDownMenu,
      isDarkMode,
      toggleDarkMode,
      navigateTo,
    };
  },
};
</script>

<style lang="css" scoped>
.headerImgBg {
  /* background: url("../assets/mkover.webp"); */
  background: linear-gradient(to right, #080a10, #241b28);

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

.site-nav li {
  border-bottom: 1px solid #575766;
}

.site-nav li:last-child {
  border-bottom: none;
}

.site-nav a {
  color: #ebebd3;
  display: block;
  padding: 2em 4em 2em 1.5em;
  text-transform: uppercase;
  text-decoration: none;
}

.site-nav a:hover,
.site-nav a:focus {
  /* background: #e4b363; */
  background: #8a2be2;
  /* color: #464655; */
  color: #eae9ea;
}
</style>

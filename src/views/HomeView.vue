<!-- Colors used: #f65215 (Orange), #f89844 (yellow) #eae9ea, #0d0a09, #8a8b8c,, #a6adb9(gray) -->
<template>
  <div
    class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite"
  >
    <header
      class="header sticky top-0 p-6 transition-all duration-500 ease-in-out z-50"
      :class="{
        'bg-mkDarkGray': headerBackgroundColor === 'dark',
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
            Your<span class="italic font-serif dark:text-mkPurple text-mkGray"
              >W</span
            ><span class="font-bold">erk</span>
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
              <a href="#">About</a>
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

              <a href="" class="!pl-12 !py-4" v-show="dropDownMenu"
                >WhitePaper</a
              >
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
    <!-- HERO SECTION -->
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
          <!-- <img
            v-if="isDarkMode"
            class="rounded-md shadow-md w-full h-full object-cover border-t-mkPurple border-r-mkPurple border-2 border-b-transparent border-l-transparent"
            src="https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          /> -->
          <!-- <img
            v-else
            class="rounded-md shadow-md w-full h-full object-cover border-t-mkPurple border-r-mkPurple border-2 border-b-transparent border-l-transparent"
            src="../assets/hero.png"
            alt="image"
          /> -->
          <img
            class="rounded-md w-full h-full object-cover border-t-mkPurple border-r-mkPurple border-2 border-b-transparent border-l-transparent"
            src="../assets/hero.png"
            alt="image"
          />
        </div>
      </div>
    </div>
    <!-- SVG Background -->
    <!-- style="stop-color: rgba(242, 144, 53, 0.6)" -->
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
            <stop
              offset="0%"
              style="stop-color: rgba(138, 43, 226, 0.6)"
            ></stop>
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

    <!-- Animation Section -->
    <div
      v-motion="fadeUp"
      class="ScrollAnimation py-20 mt-24 lg:mt-32 pointer-events-none"
    >
      <h1 class="heading1 -skew-y-6 dark:!text-white !text-mkPrimary">
        The Digital Infrastructure of the Future.
      </h1>

      <div
        class="scroller scroller-bg w-full mx-auto py-4 -skew-y-6"
        data-speed="fast"
        ref="fastScroller"
      >
        <ul class="tag-list scroller__inner py-4 flex flex-wrap gap-4">
          <li
            v-for="(tag, index) in tags"
            :key="index"
            class="p-8 bg-mkPurple/30 rounded-lg shadow-md flex items-center font-semibold"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
      <div
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
      </div>
    </div>
    <!-- Animation Section -->
    <div class="mx-4 lg:mx-0">
      <h3 class="heading1" v-motion="fadeUp">
        <span class="dark:!text-white !text-mkPrimary">
          Frequently Asked Questions
        </span>
        <div
          class="gradientLine max-w-lg mx-auto !my-10"
          v-motion="leftLine"
        ></div>
      </h3>
      <div
        class="mx-auto flex lg:flex-row flex-col lg:items-start items-center justify-center gap-6 pb-10 h-full"
      >
        <div class="flex flex-col items-center w-full" v-motion="fadeUp">
          <AccordionApp />
        </div>
      </div>
    </div>
    <!-- RoadMAp -->
    <div class="carousel flex flex-col justify-center max-w-6xl mx-auto py-4">
      <h3 class="heading1 uppercase" v-motion="fadeUp">Roadmap</h3>
      <p
        class="text-center max-w-lg text-sm font-medium lg:text-base mx-auto"
        v-motion="fadeLeft"
      >
        Explore the limitless possibilities of blockchain technology. Unleash
        decentralized solutions, foster innovation, and navigate the future of
        secure, transparent, and trustless systems.
      </p>
      <div
        class="gradientLine max-w-lg mx-auto !mt-10"
        v-motion="leftLine"
      ></div>

      <CarouselApp v-motion="fadeLeft" />
    </div>
    <!-- Features -->
    <div class="features" v-motion="fadeLeft">
      <div class="container mx-auto mt-16 px-6 md:px-0">
        <h2 class="mb-6 heading1">Features</h2>
        <p class="max-w-xl mx-auto text-center">
          Blockchain is a decentralized ledger system that ensures reliability
          and transparency. It maintains the immutability of data and supports
          automated functionalities like smart contracts.
        </p>
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
              class="py-5"
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
                <button class="neon-button">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselApp from "@/components/CarouselApp.vue";
import { onMounted, onUnmounted, ref } from "vue";
import {
  fadeUpAnimate,
  fadeLeftAnimate,
  fadeRightAnimate,
  leftLineAnimate,
} from "@/directives/mkAnimate";
import AccordionApp from "@/components/AccordionApp.vue";

export default {
  setup() {
    const fadeUp = fadeUpAnimate;
    const fadeLeft = fadeLeftAnimate;
    const fadeRight = fadeRightAnimate;
    const leftLine = leftLineAnimate;
    const isDarkMode = ref(false);

    // Header
    const headerBackgroundColor = ref("light");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // headerBackgroundColor.value = scrollY > 50 ? "dark" : "light";
      // if (isDarkMode.value) {
      //   headerBackgroundColor.value = scrollY > 50 ? "dark" : "dark"; // Dark mod aktifse ve scroll yapıldıysa kırmızı
      // } else {
      //   headerBackgroundColor.value = scrollY > 50 ? "light" : "light";
      // }
      if (scrollY > 50) {
        // Scroll yukarıdaysa ve dark mod aktifse, rengi mkBg yap
        headerBackgroundColor.value = isDarkMode.value ? "dark" : "mkBg";
      } else {
        // Scroll en üstteyse, varsayılan rengi ayarla (örneğin "light")
        headerBackgroundColor.value = "light";
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      // Scroll Animasyon
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation(fastScroller.value, 20); // Hızlı scroller için 20s animasyon süresi
        addAnimation(slowScroller.value, 60); // Yavaş scroller için 60s animasyon süresi
      }
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    // Scroll Animasyon
    const fastScroller = ref(null);
    const slowScroller = ref(null);
    const tags = [
      "#BlockchainTechnology",
      "#Cryptocurrencies",
      "#DistributedLedger",
      "#SmartContracts",
      "#DecentralizedFinance",
      "#InterblockchainCommunication",
      "#EncryptionTechnology",
      "#TokenEconomy",
      "#ImmutableLedger",
      "#BlockchainNetwork",
    ];
    const images = [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
      "https://i.pravatar.cc/150?img=4",
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=6",
    ];

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
    //* Mobile Navbar
    const isNavOpen = ref(false);
    const toggleMenu = () => {
      isNavOpen.value = !isNavOpen.value;
    };
    const dropDownMenu = ref(false);
    const openDropdown = () => {
      dropDownMenu.value = !dropDownMenu.value;
    };
    //* Button hover svg opacity
    const isHovered = ref(false);
    const handleHover = () => {
      isHovered.value = true;
    };
    const handleHoverOut = () => {
      isHovered.value = false;
    };

    //* tabs code

    const activeTab = ref(0);

    const tabs = ref([
      {
        title: "Decentralization for Enhanced Security",
        content:
          "Blockchain offers a decentralized structure, enhancing security by distributing control across the network and mitigating the risk of data manipulation.",
        content2:
          "Blockchain's consensus mechanisms, like proof-of-work or proof-of-stake, ensure agreement on the validity of transactions among network participants, fostering trust without a central authority.",
        imgSrc: "illustration-features-tab-1.svg",
      },
      {
        title: "Trustworthy and Tamper-Proof Records",
        content:
          "The immutability feature of blockchain ensures that once data is recorded, it remains unalterable, providing a trustworthy and tamper-proof ledger.",
        content2:
          "The transparency inherent in blockchain allows all participants to view the entire transaction history, promoting accountability and eliminating the need for blind trust in centralized systems.",
        imgSrc: "illustration-features-tab-2.svg",
      },
      {
        title: "Efficiency through Smart Contracts",
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

    //* DarkMode - LightMode

    // const toggleDarkMode = () => {
    //   isDarkMode.value = !isDarkMode.value;
    //   if (isDarkMode.value) {
    //     document.documentElement.classList.add("dark");
    //     localStorage.theme = "dark";
    //   } else {
    //     document.documentElement.classList.remove("dark");
    //     localStorage.theme = "light";
    //   }
    // };

    // onMounted(() => {
    //   if (
    //     localStorage.theme === "dark" ||
    //     (!("theme" in localStorage) &&
    //       window.matchMedia("(prefers-color-scheme: dark)").matches)
    //   ) {
    //     isDarkMode.value = true;
    //   }
    // });

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        isDarkMode.value = savedTheme === "dark";
      } else {
        isDarkMode.value = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
      }
      if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
      }
    });

    return {
      headerBackgroundColor,
      fastScroller,
      slowScroller,
      tags,
      images,
      toggleMenu,
      isNavOpen,
      openDropdown,
      dropDownMenu,
      fadeUp,
      fadeLeft,
      fadeRight,
      isHovered,
      handleHover,
      handleHoverOut,
      leftLine,
      tabs,
      activeTab,
      activateTab,
      toggleDarkMode,
      isDarkMode,
    };
  },
  components: { AccordionApp, CarouselApp },
};
</script>

<style lang="css" scoped>
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
  border: 4px solid rgba(138, 43, 226, 0.3);
}

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
  background: #df8536;
  /* color: #464655; */
  color: #eae9ea;
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

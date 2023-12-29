<template>
  <div class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite border-t-2 flex py-12 justify-center items-center">

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
            class="logo mt-12 ml-24 flex items-center text-3xl border-b-2 border-b-mkPurple cursor-pointer"
          >
          Multi<span class="italic font-serif dark:text-mkPurple text-mkGray"
              >funct</span
            ><span class="font-bold">ional</span>
          </span>
     
    <ul class="nav-list mt-12 flex items-center space-x-12 font-semibold uppercase ml-40">
      <li  v-for="menu in menus" :key="menu"    
              class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
            >
            <a href="#">{{ menu.name }}</a>
            </li>
    </ul>

    <div class="w-[500px] mx-auto">
      <h3>DISCLAIMER</h3>
      <p class="mt-2">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
    </div>

  </div>

  <div class=" flex my-12">
    <div class="w-1/2">

    </div>
    <ul class="flex w-1/3 justify--center items-end   mx-auto ">
      <li class="w-10 h-10 text-center items-center mx-4 ">
        <a href="">
          <img src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136_1280.png" alt="">
        </a>
      </li>
      <li class="w-10 h-10 mx-4 text-center items-center">
        <a href="">
          <img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png" alt="">
        </a>
      </li>
      <li class="w-10 h-10 mx-4 text-center items-center">
        <a href="">
          <img src="https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082_1280.png" alt="">
        </a>
      </li>
      <li class="w-10 h-10 mx-4 text-center items-center">
        <a href="">
          <img src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp" alt="">
        </a>
      </li>
      <li class="w-20 h-20 mx-4">
        <a href="">
          <img src="" alt="">
        </a>
      </li>
    </ul>
  </div>

  <footer class="bg-gray-800 text-white p-4">
    <div class="flex justify-between items-center">
      <!-- Logo bölümü -->
      <img src="/path/to/your/logo.png" alt="Logo" class="w-12 h-12">
      <div>
        <!-- Ana sayfa, Hakkında ve İletişim bağlantıları -->
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div>
      <!-- 20 kelimelik açıklama -->
      <p class="text-sm">Your 20-word description goes here...</p>
      <!-- Sosyal medya linkleri -->
      <div class="flex space-x-4 mt-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'
export default {
    components:{

    },

    setup(){

    const menus = ref([
      {
        name:'home', detail:'',
      },
      {
        name:'Docs',  detail:'',
      },
      {
        name:'about',  detail:'',
      },
      {
        name:'contact',  detail:'',
      }
     
    ])
      return{
          menus
      }
    }
}
</script>

<style>

</style>
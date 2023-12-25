<template>
  <div class="dark:bg-mkPrimary text-mkPrimary dark:text-mkWhite selection:bg-mkPurple selection:text-mkWhite border-t-2 flex">

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

  </div>
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
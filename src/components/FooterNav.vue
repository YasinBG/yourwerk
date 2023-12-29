<template>
  <div>
     
     <ul class="nav-list flex items-center space-x-12 font-semibold uppercase  ">
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
<template>
  <div>
     
     <ul class="nav-list flex items-center space-x-12 font-semibold uppercase  ">
       <li  v-for="menu in menus" :key="menu"    
               class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase"
             >
             <a href="#">{{ menu.name }}</a>
               
             </li>
             
     </ul>
     <router-link to="/Privacy">
            
            <button class="border w-24 h-10">
             
             Privacy Policy</button>

             
           
           </router-link>

           <router-link to="/TermsCondition">
           <button class="border w-24 h-10">
            TermsCondition
             </button>

            </router-link>

            <router-link to="/PresalePublic">
           <button class="border w-24 h-10">
            PresalePublic
             </button>

            </router-link>

            
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
        name:'whitepaper',  detail:'',
      },
      {
        name:'home to buy',  detail:'',
      },
      {
        name:'contact',  detail:'',
      },
       {
      name:'buy',  detail:'',
      },
     
      {
      name:'privacy',  detail:'',
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
<template>
  <div>
     
     <ul class="nav-list flex items-center space-x-12 font-semibold uppercase  ">
       <li  v-for="menu in menus" :key="menu"    
               class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase"
             >
             <a href="#">{{ menu.name }}</a>
               
             </li>
             
     </ul>

     <div class="flex items-center space-x-12 font-semibold uppercase mx-auto justify-center mt-10">
      <router-link to="/Privacy">
            
            <button class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase">
             
             Privacy Policy</button>

             
           
           </router-link>

           <router-link to="/TermsCondition">
           <button class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase">
            TermsCondition
             </button>

            </router-link>

            <router-link to="/PresalePublic">
           <button class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase">
            PresalePublic
             </button>

            </router-link>
     </div>
     

            
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
     
      
     
     
    ])
      return{
          menus
      }
    }
}
</script>

<style>

</style>
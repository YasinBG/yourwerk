<template>
  <div class="lg:pl-12">
     
     <div class="  flex flex-col lg:flex-row space-y-4 lg:space-y-0 py-4 lg:py-0 items-center justify-between w-full text-center mx-auto lg:space-x-4">
      <router-link to="/Privacy">
          <button class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase bg-clip-text text-transparent bg-gradient-to-t from-mkSecondary to-white">
            Privacy Policy
          </button>
      </router-link>

      <router-link to="/TermsCondition">
          <button class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase bg-clip-text text-transparent bg-gradient-to-t from-mkSecondary to-white">
          Terms & Conditions
          </button>
      </router-link>
      <router-link to="/PresalePublic">
           <button class="hover:opacity-70 focus:opacity-70 transition-all duration-200 ease-linear cursor-pointer uppercase bg-clip-text text-transparent bg-gradient-to-t from-mkSecondary to-white">
            Presale-Public Sale
            </button>
        </router-link>
     </div>
     

            
   </div>
</template>

<script>


export default {
    components:{
    
    },

    setup(){

    
      return{
      }
    }
}
</script>

<style>

</style>
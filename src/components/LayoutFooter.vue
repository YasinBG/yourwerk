<template>
<div class="border-t-2 flex flex-col justify-between">
  <div class="items-center mx-auto pt-24 ">
    2023© IRR Group LTD | All Rights Reserved
  </div>
  
</div>
  <div class="text-center mt-2">
    Ajeltake Road, Reg no: 118412, Marshall Island, info@multifunctional.com
  </div>
  <div class="lg:flex w-full lg:justify-evenly mx-auto  pt-10 mt-6 ">


    <div class="my-12 mx-4">
       <LayoutLogo></LayoutLogo>

    </div>

    <div class="flex flex-col justify-center mx-4 ">
      <FooterNav></FooterNav>

      

      
    </div>

    <div class=" lg:flex flex-col mt-12">
      <FooterIcons></FooterIcons>
       
       </div>
       
    </div>
    <div class="mt-24 items-center mx-4">
        
        <FooterDetail></FooterDetail>
  </div>
</template>

<script>
import LayoutLogo from '@/components/LayoutLogo.vue'
import FooterNav from  '@/components/FooterNav.vue'
import FooterDetail from '@/components/FooterDetail.vue';
import FooterIcons from '@/components/FooterIcons.vue';
export default {
 components:{
  LayoutLogo,
  FooterNav,
  FooterDetail,
  FooterIcons
 },
}
</script>

<style>

</style>
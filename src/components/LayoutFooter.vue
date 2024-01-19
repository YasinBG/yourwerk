<template>
<div class="border-t-2 flex flex-col justify-between w-full">
  <div class="items-center mx-auto pt-24 ">
    2023© IRR Group LTD | All Rights Reserved
  </div>
  
</div>
  <div class="text-center mt-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit quos accusantium eos voluptas est suscipit.
  </div>
  <div class="lg:flex w-full lg:justify-evenly mx-auto  pt-10 ">


    <div class="my-12 flex justify-center">
       <LayoutLogo></LayoutLogo>

    </div>

    <div class="flex flex-col justify-center mx-4 ">
      <FooterNav></FooterNav>

      

      
    </div>

    <div class=" lg:flex  my-12 flex justify-center">
      <FooterIcons></FooterIcons>
       
       </div>
       
    </div>
    <div class="mt-6 items-center mx-4">
        
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
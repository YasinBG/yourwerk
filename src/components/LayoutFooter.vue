<template>
<div class="border-t-2  py-12 px-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint voluptatem debitis, labore eos vel officiis tenetur cum eum velit sequi? Quibusdam nam veritatis fuga soluta illo omnis ipsum accusantium.</div>
  
  <div class="lg:flex w-full justify-evenly  py-10 ">


    <div>
       <LayoutLogo></LayoutLogo>

    </div>

    <div class=" flex flex-col justify-center">
      <FooterNav></FooterNav>

      <div class="mt-24 items-center">
        
        <FooterDetail></FooterDetail>
  </div>

      
    </div>

    <div class=" lg:flex flex-col justi">
      <FooterIcons></FooterIcons>
       
       </div>
       
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
<template>
<div class="border-t border-t-mkSecondary flex flex-col items-center justify-between w-full">
  <div class="items-center mx-auto pt-24 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white">
    2024© WERK 1000X | All Rights Reserved
  </div>
  
  <div class="text-center mt-2 max-w-lg px-4 md:px-0">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit quos accusantium eos voluptas est suscipit.
  </div>
</div>
<div class="w-full flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto pt-10 ">
    <LayoutLogo></LayoutLogo>
    <FooterNav></FooterNav>
    <FooterIcons></FooterIcons>
  </div>
  <div class="lg:mt-6 items-center mx-4">
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
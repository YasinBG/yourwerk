<template>
  <div class="lg:flex w-full justify-between border-t-2 px-12 py-10">
    <div>
       <LayoutLogo></LayoutLogo>
    </div>

    <div class="">
      <FooterNav></FooterNav>

      
    </div>

    <div class=" lg:flex flex-col justify-between">
       <FooterDetail></FooterDetail>
       <div class="mb-16 ">
        <FooterIcons></FooterIcons>
       </div>
       
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
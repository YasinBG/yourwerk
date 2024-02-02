<template>
  <div
    class="border-t border-t-mkSecondary flex flex-col items-center justify-between w-full"
  >
    <div
      class="items-center mx-auto pt-24 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
    >
      2024© WERK 1000X | All Rights Reserved
    </div>

    <div
      class="text-center mt-4 font-medium max-w-lg px-4 text-sm md:px-0 flex flex-col"
    >
      Contact us for additional information regarding Werk 1000X and to stay
      informed about upcoming events.
      <span class="mt-2">
        <a
          href="mailto:contact@werk1000x.com"
          class="bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white hover:border-b border-b-orange-300"
          >contact@werk1000x.com</a
        >
      </span>
    </div>
  </div>
  <div
    class="w-full flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto pt-10"
  >
    <LayoutLogo></LayoutLogo>
    <FooterNav></FooterNav>
    <FooterIcons></FooterIcons>
  </div>
  <div class="lg:mt-6 items-center mx-4">
    <FooterDetail></FooterDetail>
  </div>
</template>

<script>
import LayoutLogo from "@/components/LayoutLogo.vue";
import FooterNav from "@/components/FooterNav.vue";
import FooterDetail from "@/components/FooterDetail.vue";
import FooterIcons from "@/components/FooterIcons.vue";
export default {
  components: {
    LayoutLogo,
    FooterNav,
    FooterDetail,
    FooterIcons,
  },
};
</script>

<style></style>

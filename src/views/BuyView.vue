<template>
  <LayoutHeader class="text-white !static"></LayoutHeader>
  <div class="">
    <iframe
      src="https://tokentool.bitbond.com/tokensale/0x8E2Dbf1224eE9e37dd6acD8F819E971dFA67f2E5?chainId=56"
      width="100%"
      height="1800px"
      frameborder="0"
      name="tokensale"
    ></iframe>
  </div>
  <LayoutFooter />
</template>

<script>
import LayoutFooter from "@/components/LayoutFooter.vue";
import LayoutHeader from "@/components/LayoutHeader.vue";

export default {
  setup() {
    return {};
  },
  components: { LayoutHeader, LayoutFooter },
};
</script>

<style scoped>
.def {
  background: #eee !important;
}

.mkk {
  background-color: palevioletred;
}
</style>

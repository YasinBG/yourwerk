<template>
<div>test

  <CardOne></CardOne>
  <ImgCard></ImgCard>
  <TextCard></TextCard>
</div>
</template>

<script>
import CardOne from "../components/CardOne.vue"
import ImgCard from "../components/ImgCard.vue"
import TextCard from "@/components/TextCard.vue";
export default {
components:{
  CardOne,
  ImgCard,
  TextCard
}
};


</script>

<style scoped>

</style>

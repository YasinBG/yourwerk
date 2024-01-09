<template>
  <div class="flex-col sm:flex-col justify-between">
    <span
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 700 },
          }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.2 }"
          class="logo flex items-center text-3xl cursor-pointer font-bold"
        >
          Your<span
            class="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-mkSecondary to-white"
            >W</span
          ><span class="font-bold">erk</span>
        </span>
          
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
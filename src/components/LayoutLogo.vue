<template>
  <RouterLink
    to="/"
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
    class="logo flex items-center text-3xl cursor-pointer -ml-16 md:ml-0"
  >
    <img src="../assets/headerLogo.png" class="w-12 object-cover" alt="" />
    <div class="flex items-center text-3xl ml-2">
      <div class="font-serif text-3xl relative">
        <p
          class="bg-clip-text text-transparent bg-gradient-to-l from-mkSecondary to-white"
        >
          WERK
        </p>
        <p
          class="absolute top-1 -right-14 text-lg bg-clip-text text-transparent bg-gradient-to-l from-mkSecondary to-white"
        >
          1000X
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {};
</script>

<style></style>

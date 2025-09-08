<script setup lang="ts">
import HeroHome from '@/component/HeroHome.vue'
import ServicesHome from '@/component/ServicesHome.vue'
</script>

<template>
  <HeroHome
    title="Infortel"
    subtitle="Web Development App Development Od Serca"
    class="main-content"
  />
  <ServicesHome />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -56px; // Negative margin equal to navbar height
  padding-top: 56px; // Padding to push content below navbar
}
</style>

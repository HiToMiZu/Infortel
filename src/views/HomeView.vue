<script setup lang="ts">
import HeroHome from '@/component/Home/HeroHome.vue'
import ReviewsHome from '@/component/Home/ReviewsHome.vue'
import ServicesHome from '@/component/Home/ServicesHome.vue'
</script>

<template>
  <HeroHome
    title="Infortel"
    subtitle="Od linii kodu po pełną historię tworzymy Twój cyfrowy komiks."
    class="main-content"
  />
  <ServicesHome />
  <ReviewsHome />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

<script setup lang="ts">
import HeroHome from '@/component/Hero.vue'
import PortfoliosHome from '@/component/Home/PackedIn/Portfolios.vue'
import ReviewsHome from '@/component/Home/PackedIn/Reviews.vue'
import ServicesHome from '@/component/Home/PackedIn/Services.vue'
import Processes from '@/component/Home/PackedIn/Processes.vue'
import Prototypes from '@/component/Home/Prototypes.vue'
</script>

<template>
  <HeroHome
    title="Infortel"
    subtitle="Od linii kodu po pełną historię tworzymy Twój cyfrowy komiks."
    class="main-content"
  />
  <ServicesHome />
  <Processes />
  <ReviewsHome />
  <PortfoliosHome />
  <Prototypes />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

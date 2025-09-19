<script setup lang="ts">
import HeroHome from '@/component/HeroGlobal.vue'
import PortfoliosHome from '@/component/PackedIn/PortfoliosPack.vue'
import ReviewsHome from '@/component/PackedIn/ReviewsPack.vue'
import ServicesHome from '@/component/PackedIn/ServicesPack.vue'
import Processes from '@/component/PackedIn/ProcessesPack.vue'
import FooterGlobal from '@/component/FooterGlobal.vue'
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
  <FooterGlobal />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

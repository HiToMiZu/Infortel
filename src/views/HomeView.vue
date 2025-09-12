<script setup lang="ts">
import HeroHome from '@/component/HeroGlobal.vue'
import PortfoliosHome from '@/component/Home/PackedIn/PortfoliosPack.vue'
import ReviewsHome from '@/component/Home/PackedIn/ReviewsPack.vue'
import ServicesHome from '@/component/Home/PackedIn/ServicesPack.vue'
import Processes from '@/component/Home/PackedIn/ProcessesPack.vue'
import Footer from '@/component/Home/PackedIn/FooterPack.vue'
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
  <Footer />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

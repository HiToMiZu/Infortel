<script setup lang="ts"></script>

<template>
  <HeroGlobal
    title="Infortel"
    subtitle="Od linii kodu po pełną historię tworzymy Twój cyfrowy komiks."
    class="main-content"
  />
  <MotionGroup
    class="main-content"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :delay="200"
    :duration="600"
  >
    <ServicesPack />
    <ProcessesPack />
    <ReviewsPack />
    <PortfoliosPack />
  </MotionGroup>
  <FooterGlobal :showme="true" />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

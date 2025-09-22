<script setup lang="ts"></script>

<template>
  <HeroGlobal
    title="Infortel"
    subtitle="Od linii kodu po pełną historię tworzymy Twój cyfrowy komiks."
    class="main-content"
  />
  <ServicesPack />
  <ProcessesPack />
  <ReviewsPack />
  <PortfoliosPack />
  <FooterGlobal :showme="true" />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

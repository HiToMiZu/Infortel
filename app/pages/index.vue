<script setup lang="ts">
const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 400, // seconds
      duration: 600, // seconds
      easing: "ease-out",
    },
  },
};
</script>

<template>
  <HeroGlobal
    title="Infortel"
    subtitle="Od linii kodu po pełną historię tworzymy Twój cyfrowy komiks."
    class="main-content"
  />
  <div v-motion="fadeInUp">
    <ServicesPack />
  </div>
  <div v-motion="fadeInUp">
    <ProcessesPack />
  </div>
  <div v-motion="fadeInUp">
    <ReviewsPack />
  </div>
  <div v-motion="fadeInUp">
    <PortfoliosPack />
  </div>
  <FooterGlobal :showme="true" />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

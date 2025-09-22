<script setup lang="ts">
</script>

<template>
  <HeroGlobal
    title="Każdy projekt to nowa przygoda."
    subtitle="Pracujemy dla marek, które chcą rosnąć. Zobacz, jakie historie już opowiedzieliśmy kodem i designem."
    title-size="clamp(30px, 3vw, 3vw)"
    subtitle-size="clamp(8px, 1vw, 1vw)"
    class="main-content"
  />
  <PortfoliosPack />
  <FooterGlobal title="Zobacz wszystkie realizacje" />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

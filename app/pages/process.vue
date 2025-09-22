<script setup lang="ts">
</script>

<template>
  <HeroGlobal
    title="Jak tworzymy strony i aplikacje krok po kroku"
    subtitle="Od pierwszej rozmowy do gotowego produktu, który zdobywa użytkowników."
    title-size="clamp(30px, 3vw, 3vw)"
    subtitle-size="clamp(8px, 1vw, 1vw)"
    class="main-content"
  />
  <ProcessesPack />
  <BenefitsPack />
  <FooterGlobal title="Masz pomysł? Zacznijmy od rozmowy." />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

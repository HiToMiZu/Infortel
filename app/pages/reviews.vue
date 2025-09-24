<script setup lang="ts"></script>

<template>
  <HeroGlobal
    title="Głosy naszych klientów mówią same za siebie."
    subtitle="Zaufanie buduje się poprzez jakość i rezultaty. Oto, co mówią ci, którzy już z nami współpracowali."
    title-size="clamp(30px, 3vw, 3vw)"
    subtitle-size="clamp(14px, 1.5vw, 1.5vw)"
    class="main-content"
  />

  <ReviewsPack />
  <FAQ file="/faqreviews.json" />
  <FooterGlobal />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

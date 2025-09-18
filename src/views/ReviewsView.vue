<script setup lang="ts">
import HeroHome from '@/component/HeroGlobal.vue'
import FooterGlobal from '@/component/FooterGlobal.vue'
import ReviewsPack from '@/component/Home/PackedIn/ReviewsPack.vue'
</script>

<template>
  <HeroHome
    title="Głosy naszych klientów mówią same za siebie."
    subtitle="Zaufanie buduje się poprzez jakość i rezultaty. Oto, co mówią ci, którzy już z nami współpracowali."
    title-size="clamp(30px, 3vw, 3vw)"
    subtitle-size="clamp(8px, 1vw, 1vw)"
    class="main-content"
  />
  <ReviewsPack />
  <FooterGlobal />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

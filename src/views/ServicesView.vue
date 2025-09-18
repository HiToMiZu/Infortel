<script setup lang="ts">
import HeroHome from '@/component/HeroGlobal.vue'
import ServicesHome from '@/component/Home/PackedIn/ServicesPack.vue'
import FooterGlobal from '@/component/FooterGlobal.vue'
import WhyComp from '@/component/Services/WhyComp.vue'
</script>

<template>
  <HeroHome
    title="Twoja wizja, nasz kod. Oto jak możemy pomóc 🚀"
    subtitle="Specjalizujemy się w tworzeniu aplikacji webowych, mobilnych i nowoczesnych stron internetowych. Pomagamy Ci nie tylko w kodzie, ale też w designie i marketingu."
    title-size="clamp(30px, 3vw, 3vw)"
    subtitle-size="clamp(8px, 1vw, 1vw)"
    class="main-content"
  />
  <ServicesHome />
  <WhyComp />
  <FooterGlobal
    title="Gotowy, aby zacząć swój projekt?"
    subtitle="Napisz do nas – wspólnie stworzymy coś wyjątkowego."
  />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

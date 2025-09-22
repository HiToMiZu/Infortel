<script lang="ts">
</script>

<template>
  <HeroGlobal
    title="Masz pytania? Porozmawiajmy!"
    subtitle="Napisz do nas, a wspólnie znajdziemy najlepsze rozwiązanie dla Twojego pomysłu."
    title-size="clamp(30px, 3vw, 3vw)"
    subtitle-size="clamp(8px, 1vw, 1vw)"
    class="main-content"
  />
  <CompanyLocation />
  <FooterGlobal title="Wyślij wiadomość" />
</template>

<style scoped lang="scss">
.main-content {
  // Apply this class to your main content wrapper
  margin-top: -58px; // Negative margin equal to navbar height
  padding-top: 58px; // Padding to push content below navbar
}
</style>

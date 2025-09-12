<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue'
import PortfolioHome from '../Cards/Portfolio.vue'
import Autoplay from 'embla-carousel-autoplay'

const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()])
</script>

<template>
  <div class="text">
    <h2 class="title">Nasze projekty!</h2>
    <p class="subtitle">Twój też tu może być!</p>
  </div>
  <section class="slider" ref="emblaRef">
    <div class="embla__container">
      <PortfolioHome />
      <PortfolioHome />
      <PortfolioHome />
      <PortfolioHome />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;

.slider {
  // border: 6px solid $gray;
  border-radius: 20px;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  margin: 4rem auto;
  width: 80%;
  overflow: hidden;
  height: 100%;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>

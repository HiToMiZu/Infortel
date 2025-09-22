<script lang="ts" setup>
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

const [emblaRef] = emblaCarouselVue(
  {
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
      "(min-width: 1024px)": { slidesToScroll: 1 },
    },
  },
  [Autoplay({ delay: 4000 })]
);
</script>

<template>
  <div class="portfolio-section">
    <div class="text">
      <h2 class="title">Nasze projekty!</h2>
      <p class="subtitle">Twój też tu może być!</p>
    </div>
    <section class="slider" ref="emblaRef">
      <div class="embla__container">
        <PortfolioComp
          title="Minecraft Portfolio Manager"
          desc="aplikacja inspirowana stylem menu gry Minecraft, stworzona do zarządzania i prezentacji projektów programistycznych w przejrzysty i interaktywny sposób."
          tech="Native HTML CSS AND JS"
        />
        <PortfolioComp />
        <PortfolioComp />
        <PortfolioComp />
        <PortfolioComp />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-section {
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 100px;
}

.slider {
  border-radius: 15px;
  box-shadow:
    4px 4px 0 $gray,
    0 0 20px rgba($gray, 0.2);
  overflow: hidden;

  @media (min-width: 480px) {
    border-radius: 20px;
    box-shadow:
      6px 6px 0 $gray,
      0 0 25px rgba($gray, 0.25);
  }

  @media (min-width: 768px) {
    box-shadow:
      8px 8px 0 $gray,
      0 0 30px rgba($gray, 0.3);
  }
}

.embla__container {
  display: flex;
  touch-action: pan-y;
}

// Mobile-first responsive adjustments
@media (max-width: 479px) {
  .portfolio-section {
    padding: 0.5rem;
    width: 90vw;
  }

  .text {
    margin-bottom: 1rem;
  }

  .slider {
    margin: 1rem auto;
    border-radius: 10px;
    box-shadow:
      2px 2px 0 $gray,
      0 0 15px rgba($gray, 0.15);
  }
}
</style>

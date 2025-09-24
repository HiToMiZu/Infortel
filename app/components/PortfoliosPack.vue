<script lang="ts" setup>
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import { ref, onMounted } from "vue";

const [emblaRef, emblaApi] = emblaCarouselVue(
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

// Button states
const canScrollPrev = ref(false);
const canScrollNext = ref(false);

// Navigation functions
const scrollPrev = () => {
  if (emblaApi.value) emblaApi.value.scrollPrev();
};

const scrollNext = () => {
  if (emblaApi.value) emblaApi.value.scrollNext();
};

// Update button states
const updateButtonStates = () => {
  if (emblaApi.value) {
    canScrollPrev.value = emblaApi.value.canScrollPrev();
    canScrollNext.value = emblaApi.value.canScrollNext();
  }
};

onMounted(() => {
  if (emblaApi.value) {
    updateButtonStates();
    emblaApi.value.on("select", updateButtonStates);
  }
});
</script>

<template>
  <div class="portfolio-section">
    <div class="text">
      <h2 class="title">Nasze projekty!</h2>
      <p class="subtitle">Twój też tu może być!</p>
    </div>

    <div class="carousel-wrapper">
      <button
        class="carousel-btn carousel-btn--prev"
        @click="scrollPrev"
        :disabled="!canScrollPrev"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

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

      <button
        class="carousel-btn carousel-btn--next"
        @click="scrollNext"
        :disabled="!canScrollNext"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-section {
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 100px;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.5rem;
  }
}

.carousel-btn {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid $gray;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: $gray;
  box-shadow: 2px 2px 0 $gray;

  &:hover:not(:disabled) {
    background: $gray;
    color: white;
    transform: translateY(-1px);
    box-shadow: 3px 3px 0 $gray;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 1px 1px 0 $gray;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: $gray;
  }

  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 479px) {
    display: none;
  }
}

.slider {
  flex: 1;
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
    margin: 0;
    border-radius: 10px;
    box-shadow:
      2px 2px 0 $gray,
      0 0 15px rgba($gray, 0.15);
  }
}
</style>

<script lang="ts" setup>
import ComicReview from '../Cards/Review.vue'
</script>

<template>
  <div class="content">
    <div class="text">
      <h2 class="title">Nasi Klienci!</h2>
      <div class="subtitle">I ich opinie 😉</div>
    </div>
    <div class="reviews">
      <ComicReview />
      <ComicReview />
      <ComicReview />
      <ComicReview />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;

.reviews {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem; // Space between cards
  padding: 2rem 3rem; // Prevents touching borders: top/bottom 2rem, left/right 4rem
  justify-items: center; // Centers cards within their grid areas
  align-items: stretch; // Makes all cards same height
}
</style>

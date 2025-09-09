<script lang="ts" setup>
import ComicReview from './ComicReview.vue'
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;

.title {
  text-align: center;
  font-size: 2.5vw;
  margin-bottom: 1rem;
}

.subtitle {
  letter-spacing: 1px;
  text-align: center;
  font-size: 1.3vw;
  margin-bottom: 2rem;
  color: #666;
}

.reviews {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem; // Space between cards
  padding: 2rem 3rem; // Prevents touching borders: top/bottom 2rem, left/right 4rem
  justify-items: center; // Centers cards within their grid areas
  align-items: stretch; // Makes all cards same height
}
</style>

<script lang="ts" setup>
</script>

<template>
  <div class="content">
    <div class="text">
      <h2 class="title">Nasi Klienci!</h2>
      <div class="subtitle">I ich opinie 😉</div>
    </div>
    <div class="reviews">
      <ReviewComp/>
      <ReviewComp/>
      <ReviewComp/>
      <ReviewComp/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 1rem; // Space between cards
  padding: 2rem 3rem; // Prevents touching borders: top/bottom 2rem, left/right 4rem
  justify-items: center; // Centers cards within their grid areas
  align-items: stretch; // Makes all cards same height
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
}
</style>

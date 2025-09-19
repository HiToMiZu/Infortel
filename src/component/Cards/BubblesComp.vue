<script lang="ts" setup>
defineProps({
  iconmg: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="bubbles">
    <div class="bubble">
      <span class="icon">{{ iconmg }}</span>
      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.bubble {
  position: relative;
  background: white;
  border-radius: 20px;
  border: 3px solid $gray;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  padding: 1.5rem;
  box-shadow: 6px 6px 0 $gray;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  .icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
  }

  // Dymek "ogon"
  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: -2px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top: 20px solid white;
    z-index: 1;
    transform: rotate(-76deg);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -24px;
    left: -6px;
    width: 0;
    height: 0;
    border: 18px solid transparent;
    border-top: 22px solid $gray;
    transform: rotate(-76deg);
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>

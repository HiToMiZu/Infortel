<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'TITLE',
  },
  subtitle: {
    type: String,
    default: 'SUBTITLE',
  },
})
</script>

<template>
  <section class="root">
    <div class="main">
      <div class="text">
        <h1 class="title">
          {{ title }}
        </h1>
        <p class="subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;
.root {
  display: flex;
  align-items: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/src/assets/images/header-bg.jpeg');
  background-size: cover;
  height: 93vh;
}
.main {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: $font_family;
  text-shadow: 4px 4px #2e2e2e;
}

h1.title {
  font-size: 8vw;
  font-weight: 800;
  color: white;
}

.subtitle {
  width: 50vw;
  margin-top: 0;
  font-size: 3vw;
  color: white;
}

@media (min-width: 640px) {
  /* sm: breakpoint */
  .main {
    padding-left: 1.5rem; /* sm:px-6 (6 * 0.25rem = 1.5rem) */
    padding-right: 1.5rem; /* sm:px-6 */
  }
  .title {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  /* lg: breakpoint */
  .main {
    padding-left: 2rem; /* lg:px-8 (8 * 0.25rem = 2rem) */
    padding-right: 2rem; /* lg:px-8 */
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 3.75rem;
    line-height: 1;
  }
}
</style>

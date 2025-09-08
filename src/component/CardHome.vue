<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
defineProps({
  title: {
    type: String,
    default: 'TITLE',
  },
  desc: {
    type: String,
    default: 'DESC',
  },
  button: {
    type: String,
    default: 'Get to know more',
  },
})
</script>

<template>
  <section class="main">
    <div class="text">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
    <router-link class="link" to="/service">
      <button class="btn">{{ button }}</button>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;
.main {
  text-decoration: none;
  color: black;
  max-width: 300px;
  width: 100%;
  aspect-ratio: 0.7;
  background-color: $background;
  box-shadow: 0 0 2rem 0 rgb(0 0 0 / 0.2);
  border-radius: 8px;
  padding: 1rem;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:hover {
    box-shadow:
      0 0 20px rgba(74, 144, 255, 0.5),
      0 0 40px rgba(74, 144, 255, 0.3),
      0 0 60px rgba(74, 144, 255, 0.1);

    h2 {
      transform: scale(1.1);
    }
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    transition: transform 0.3s ease;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
    flex-grow: 1; // This will make the paragraph take up available space
  }

  .link {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    transform: translateY(100px); // Initially hide the button below the card
    transition: transform 0.3s ease;
  }

  // Animate the button up on hover
  &:hover .link {
    transform: translateY(0); // Bring the button into view
  }

  .btn {
    box-shadow: 0 0 2rem 0 rgb(0 0 0 / 0.2);
    transition: box-shadow 0.3s ease; // Add transition for smooth shadow change

    &:hover {
      box-shadow:
        0 0 20px rgba(74, 144, 255, 0.5),
        0 0 40px rgba(74, 144, 255, 0.3),
        0 0 60px rgba(74, 144, 255, 0.1);
    }
  }
}
</style>

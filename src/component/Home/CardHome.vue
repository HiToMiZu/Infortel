<script setup lang="ts">
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
  image: {
    type: String,
    default: 'public/code.png',
  },
})
</script>

<template>
  <section class="main">
    <img :src="image" alt="" />
    <div class="text">
      <div class="project-badge">
        <span>{{ title }}</span>
      </div>
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
  width: 60%;
  aspect-ratio: 0.7;
  background-color: $background;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  border: 6px solid $gray;
  border-radius: 20px;
  padding: 1rem;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;

  img {
    width: 45%;
    aspect-ratio: 1.4;
    align-self: center;
    transition: transform 0.3s ease;
    margin: 10px;
  }

  &:hover {
    transform: scale(1.05);

    img {
      transform: scale(1.1);
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center; // centers all children
    text-align: center; // centers text as well
    margin: auto 0;
  }

  .project-badge {
    max-width: 100px;
    width: 100%;
    background: $supportcolor;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    border: 3px solid $gray;
    font-weight: bold;
    font-size: 0.8rem;
    text-shadow: 1px 1px 0 rgba($gray, 0.5);
    box-shadow: 3px 3px 0 $gray;
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
    z-index: 1;
    background-color: white;
    transition: all 0.3s ease; // Add transition for smooth shadow change

    &:hover {
      background-color: $primarycolor;
      color: white;
    }
  }
}
</style>

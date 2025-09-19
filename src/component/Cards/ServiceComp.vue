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
    default: '/code.png',
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
    <router-link class="link" to="/services">
      <button class="btn">{{ button }}</button>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.main {
  text-decoration: none;
  color: black;
  width: 80%;
  max-width: 400px;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  border-radius: 20px;
  padding: 1rem;
  margin: 20px 0;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease;
  will-change: transform;
  @media (max-width: 500px) {
    width: 80vw;
    margin: 20px 3vw;
  }
  img {
    width: 5vw;
    will-change: transform;
    min-width: 100px;
    aspect-ratio: 1;
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
    height: 100%;
  }

  .project-badge {
    max-width: clamp(100px, 150px, 200px);
    width: 100%;
    max-height: 50px;
    background: $supportcolor;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    border: 3px solid $gray;
    font-weight: bold;
    font-size: clamp(12px, 0.7vw, 1vw);
    text-shadow: 1px 1px 0 rgba($gray, 0.5);
    box-shadow: 3px 3px 0 $gray;
  }

  p {
    font-size: clamp(14px, 0.8vw, 1vw);
    text-align: center;
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
    height: 40px;
    width: 160px;
    font-size: 0.875rem;

    &:hover {
      background-color: $primarycolor;
      color: white;
    }
  }
}
</style>

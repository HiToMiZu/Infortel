<script setup lang="ts">
import NavBar from './component/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style lang="scss">
@use '@/colors.scss' as *;
body {
  margin: 0;
  padding: 0;
}
.link {
  text-decoration: none;
  color: black;
}
.text {
  font-family: $font_family;
  margin-bottom: 50px;
}

.title {
  text-align: center;
  font-size: clamp(40px, 2.5vw, 3vw);
  margin-bottom: 1rem;
}

.subtitle {
  letter-spacing: 1px;
  text-align: center;
  font-size: clamp(25px, 1.3vw, 1.8vw);
  margin-bottom: 2rem;
  color: #666;
}

.btn {
  background: transparent;
  border: 2.5px solid $gray;
  border-radius: 12px;
  padding: 8px 12px;
  font-family: $font_family;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  color: $gray;
  box-shadow: 2px 2px 0 $gray;
  transform: rotate(-1deg);

  &:hover {
    transform: rotate(0deg) scale(1.05);
    background: $primarycolor;
    color: white;
    box-shadow: 3px 3px 0 $gray;
    text-shadow: 1px 1px 0 rgba($gray, 0.5);
  }

  &.btn--active {
    background: $supportcolor;
    color: white;
    text-shadow: 1px 1px 0 $gray;
    transform: rotate(0deg);
    animation: pulse 1.5s ease-in-out infinite;

    .active-burst {
      opacity: 1;
      transform: scale(1) rotate(-15deg);
    }
  }
}
</style>

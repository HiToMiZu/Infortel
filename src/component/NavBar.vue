<script setup lang="ts"></script>
import {RouterLink} from 'vue-router'
<template>
  <nav>
    <div class="navbar-left">
      <router-link to="/" class="logo">
        <img src="/src/assets/images/infortel.png" alt="Logo" />
      </router-link>
    </div>

    <div class="navbar-center">
      <div class="buttons">
        <button>Our Services</button>
        <button>Process</button>
        <button>Staff</button>
        <button>Reviews</button>
      </div>
    </div>

    <div class="navbar-right">
      <button id="contact">Contact Us!</button>
    </div>
  </nav>
</template>

<style lang="scss">
@use '@/colors.scss' as *;

html,
body {
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 52px;
  position: sticky;
  top: 0;
  background-color: $gray;
  z-index: 100;
  border-bottom: 1px solid rgba(74, 144, 255, 0.1);
}
.navbar-left {
  display: flex;
  align-items: center;
  flex: 1;
}
.navbar-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: $background;
  border-radius: 8px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: flex-end;
}
.logo {
  box-shadow:
    0 0 20px rgba(74, 144, 255, 0.5),
    0 0 40px rgba(74, 144, 255, 0.3),
    0 0 60px rgba(74, 144, 255, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow:
      0 0 20px rgba(74, 144, 255, 0.7),
      0 0 40px rgba(74, 144, 255, 0.5),
      0 0 60px rgba(74, 144, 255, 0.3);
  }
}

img {
  display: flex;
  background-color: white;
  width: 100px;
  border-radius: 8px;
  background-color: $background;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  box-shadow:
    0 0 20px rgba(74, 144, 255, 0.5),
    0 0 40px rgba(74, 144, 255, 0.3),
    0 0 60px rgba(74, 144, 255, 0.1);
  border-radius: 8px;
}
button {
  background-color: transparent;
  border: none;
  border-radius: 8px;
  width: 100px;
  aspect-ratio: 3;
  font-family: $font_family;
  font-size: 14px;
  font-weight: 550;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow:
      0 0 20px rgba(74, 144, 255, 0.5),
      0 0 40px rgba(74, 144, 255, 0.3),
      0 0 60px rgba(74, 144, 255, 0.1);
  }
}
button#contact {
  outline: 2px solid $supportcolor;
  box-shadow:
    0 0 20px rgba(74, 144, 255, 0.5),
    0 0 40px rgba(74, 144, 255, 0.3),
    0 0 60px rgba(74, 144, 255, 0.1);
  background-color: $background;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: $supportcolor;
  }
}
</style>

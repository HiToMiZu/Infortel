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
  text-align: center;
  font-family: $font_family;
}
</style>

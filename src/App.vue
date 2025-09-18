<script setup lang="ts">
import NavBar from './component/NavBar.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <NavBar />
  <div class="route-wrapper">
    <RouterView />
  </div>
</template>
<style lang="scss">
// dawdaw
</style>

<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 1s;
  isolation: isolate;
  backface-visibility: hidden;
}

::view-transition-old(root) {
  animation-name: slide-out;
}

::view-transition-new(root) {
  animation-name: slide-in;
}

@keyframes slide-out {
  to {
    opacity: 1;
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
  }
}
</style>

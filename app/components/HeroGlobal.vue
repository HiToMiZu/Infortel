<script lang="ts" setup>
defineProps({
  title: { type: String, default: "TITLE" },
  subtitle: { type: String, default: "SUBTITLE" },
  titleSize: { type: String, default: "clamp(80px, 8vw, 8vw)" },
  subtitleSize: { type: String, default: "clamp(20px, 3vw, 3vw)" },
});
</script>

<template>
  <section class="root">
    <div class="main">
      <div class="text">
        <h1 class="title-hero" :style="{ fontSize: titleSize }">
          {{ title }}
        </h1>
        <p class="subtitle-hero" :style="{ fontSize: subtitleSize }">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  background: url("/header-bg.jpeg");
  background-size: cover;
  height: 96vh;
}
.main {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
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

h1.title-hero {
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
}

.subtitle-hero {
  width: 50vw;
  margin-top: 0;
  margin: 0 auto;
  color: white;
}
</style>

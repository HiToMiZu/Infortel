<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'placeholder',
  },
  desc: {
    type: String,
    default: 'placeholder',
  },
  tech: {
    type: String,
    default: `What we've used:`,
  },
})
</script>
<template>
  <div class="main">
    <img src="/header-bg.jpeg" alt="" />
    <div class="text">
      <h3 class="name">{{ title }}</h3>
      <p class="desc">{{ desc }}</p>
      <p class="tech">{{ tech }}</p>
    </div>
    <router-link class="link" to="/projects">
      <button class="btn">Get to know more</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;
.main {
  // Use flexbox with wrap and minimum widths
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 100%;
  min-width: 0;
  container-type: inline-size; // Enable container queries if supported

  img {
    max-height: clamp(100px, 160px, 460px);
    margin: 20px;
    outline: 6px solid $gray;
    border-radius: 20px;
  }
  .text {
    margin: 0 auto;
  }

  .name {
    text-align: center;
    font-size: clamp(30px, 1.3vw, 1.3vw);
    margin-top: 10px;
  }
  .desc {
    letter-spacing: 1px;
    font-size: clamp(14px, 1.3vw, 1.3vw);
    margin-bottom: 2rem;
    text-align: center;
    color: #666;
  }
  .tech {
    font-size: clamp(14px, 1.3vw, 1.3vw);
    text-align: center;
    color: #666;
  }
  .link {
    align-self: flex-end;
    transform: translateY(100px);
    transition: transform 0.3s ease;
    margin-right: 20px;
    margin-left: auto;
  }
  &:hover .link {
    transform: translateY(-20px); // Bring the button into view
  }

  .btn {
    box-shadow: 0 0 2rem 0 rgb(0 0 0 / 0.2);
    z-index: 1;
    background-color: white;
    transition: all 0.3s ease; // Add transition for smooth shadow change
    height: 40px;

    &:hover {
      background-color: $primarycolor;
      color: white;
    }
  }
}
</style>

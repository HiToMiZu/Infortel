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
    <img src="/src/assets/header-bg.jpeg" alt="" />
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
  display: flex;
  user-select: none;
  height: 500px;
  flex: 0 0 100%;
  min-width: 0;

  img {
    height: 460px;
    margin: 20px;
    outline: 6px solid $gray;
    border-radius: 20px;
  }
  .name {
    text-align: center;
    font-size: 2.5vw;
    margin-top: 10px;
  }
  .desc {
    letter-spacing: 1px;
    font-size: 1.3vw;
    margin-bottom: 2rem;
    color: #666;
  }
  .tech {
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

<script setup lang="ts">
import router from '@/router'
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isOnTop = ref(true)

function goPage(destination: string): void {
  router.push(destination).catch((error) => {
    console.error('Navigation failed:', error)
  })
}
const isActiveLink = (routePath: string): boolean => {
  const route = useRoute()
  return route.path === routePath
}

const updateScrollPosition = (): void => {
  isOnTop.value = window.scrollY === 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition)
  updateScrollPosition() // Check initial position
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
})
</script>

<template>
  <nav :class="{ 'nav-top': isOnTop }">
    <div class="navbar-left">
      <router-link to="/" class="logo" :class="{ 'home--active': isActiveLink('/') }">
        <img src="/src/assets/images/infortel.png" alt="Logo" width="100px" />
      </router-link>
    </div>

    <div class="navbar-center">
      <div class="buttons">
        <button
          @click="goPage('/service')"
          :class="{ btn: true, 'btn--active': isActiveLink('/service') }"
        >
          Our Services
        </button>
        <button
          @click="goPage('/process')"
          :class="{ btn: true, 'btn--active': isActiveLink('/process') }"
        >
          Process
        </button>
        <button
          @click="goPage('/staff')"
          :class="{ btn: true, 'btn--active': isActiveLink('/staff') }"
        >
          Staff
        </button>
        <button
          @click="goPage('/reviews')"
          :class="{ btn: true, 'btn--active': isActiveLink('/reviews') }"
        >
          Reviews
        </button>
      </div>
    </div>

    <div class="navbar-right">
      <button
        id="contact"
        @click="goPage('/contact')"
        :class="{ btn: true, 'btn--active': isActiveLink('/contact') }"
      >
        Contact Us!
      </button>
    </div>
  </nav>
</template>

<style lang="scss">
@use '@/colors.scss' as *;

nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: transparent;
  transition: box-shadow 0.3s ease;
}
.nav-top {
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
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

.btn--active {
  transition: box-shadow 0.3s ease;
  box-shadow:
    0 0 20px rgba(74, 144, 255, 0.7),
    0 0 40px rgba(74, 144, 255, 0.5),
    0 0 60px rgba(74, 144, 255, 0.3);
}

.btn--active:hover {
  transition: box-shadow 0.3s ease;
  box-shadow:
    0 0 20px rgba(74, 144, 255, 0.9),
    0 0 40px rgba(74, 144, 255, 0.7),
    0 0 60px rgba(74, 144, 255, 0.5);
}
.logo {
  background-color: $background;
  border-radius: 8px;
  width: 100px;
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
.home--active {
  transition: box-shadow 0.3s ease;
  box-shadow: 5px 4px 2px black;
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
.btn {
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
.btn#contact {
  outline: 3px solid $supportcolor;
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
.btn--active#contact {
  transition: background-color 0.3s ease;
  background-color: $supportcolor;
}
</style>

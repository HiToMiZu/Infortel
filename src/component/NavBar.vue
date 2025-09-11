<script setup lang="ts">
import router from '@/router'
import { RouterLink, useRoute } from 'vue-router'

function goPage(destination: string): void {
  router.push(destination).catch((error) => {
    console.error('Navigation failed:', error)
  })
}

const isActiveLink = (routePath: string): boolean => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav>
    <div class="navbar-left">
      <router-link to="/" class="logo" :class="{ 'home--active': isActiveLink('/') }">
        <img src="/src/assets/infortel.png" alt="Logo" width="100px" />
      </router-link>
    </div>

    <div class="navbar-center">
      <div class="buttons">
        <button
          @click="goPage('/service')"
          :class="{ btn: true, 'btn--active': isActiveLink('/service') }"
        >
          <span class="btn-text">Our Services</span>
          <div v-if="isActiveLink('/service')" class="active-burst">POW!</div>
        </button>
        <button
          @click="goPage('/process')"
          :class="{ btn: true, 'btn--active': isActiveLink('/process') }"
        >
          <span class="btn-text">Process</span>
          <div v-if="isActiveLink('/process')" class="active-burst">ZAP!</div>
        </button>
        <button
          @click="goPage('/staff')"
          :class="{ btn: true, 'btn--active': isActiveLink('/staff') }"
        >
          <span class="btn-text">Staff</span>
          <div v-if="isActiveLink('/staff')" class="active-burst">TEAM!</div>
        </button>
        <button
          @click="goPage('/reviews')"
          :class="{ btn: true, 'btn--active': isActiveLink('/reviews') }"
        >
          <span class="btn-text">Reviews</span>
          <div v-if="isActiveLink('/reviews')" class="active-burst">WOW!</div>
        </button>
      </div>
    </div>

    <div class="navbar-right">
      <button
        id="contact"
        @click="goPage('/contact')"
        :class="{ btn: true, 'contact-btn': true, 'btn--active': isActiveLink('/contact') }"
      >
        <span class="btn-text">Contact Us!</span>
        <!-- Speech bubble for contact -->
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// Color variables (matching your theme)
@use '@/colors.scss' as *;

nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 58px;
  position: sticky;
  top: 8px;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;
  border-radius: 0 0 20px 20px;
  border-top: none;
  font-family: $font_family;
  overflow: visible;
}

.navbar-left {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  .logo {
    background: white;
    border: 4px solid $gray;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 4px 4px 0 $gray;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 29px;
    transform: rotate(-1deg);

    &:hover {
      transform: rotate(0deg) scale(1.05);
      box-shadow: 6px 6px 0 $gray;
    }

    &.home--active {
      animation: wiggle 0.8s ease-in-out infinite;

      .logo-bubble {
        opacity: 1;
        background: $primarycolor;
      }
    }
  }
}

.navbar-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  .buttons {
    height: 35px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: 2px solid $gray;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 2px 2px 0 $gray;
    transform: rotate(0.5deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(0deg);
    }
  }
}

.navbar-right {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  position: relative;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.active-burst {
  position: absolute;
  top: -15px;
  right: -10px;
  background: $focus;
  color: white;
  padding: 3px 6px;
  border: 2px solid $gray;
  border-radius: 8px;
  font-size: 8px;
  font-weight: bold;
  text-shadow: 1px 1px 0 $gray;
  box-shadow: 2px 2px 0 $gray;
  opacity: 0;
  transform: scale(0.5) rotate(0deg);
  transition: all 0.3s ease;
  z-index: 5;
}

.contact-btn {
  height: 45px;
  background: $supportcolor !important;
  color: white !important;
  text-shadow: 1px 1px 0 $gray !important;
  border-color: $gray !important;
  transform: rotate(1deg) !important;
  position: relative;
  font-size: 16px;

  &:hover {
    background: $focus !important;
    transform: rotate(0deg) scale(1.1) !important;
  }

  &.btn--active {
    background: $focus !important;
    animation: bounce 0.8s ease-in-out infinite !important;

    .contact-burst {
      background: $primarycolor !important;
    }
  }
}

// Animations
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-1deg);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0px) rotate(1deg);
  }
  50% {
    transform: translateY(-3px) rotate(1deg);
  }
}
</style>

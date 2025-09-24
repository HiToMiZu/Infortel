<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

// Use Nuxt's navigation instead of Vue Router
async function goPage(destination: string): Promise<void> {
  try {
    await navigateTo(destination);
  } catch (error: any) {
    console.error("Navigation failed:", error);
  }
  // Close mobile menu after navigation
  isMobileMenuOpen.value = false;
}

const isActiveLink = (routePath: string): boolean => {
  const route = useRoute();
  return route.path === routePath;
};

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav>
    <!-- Mobile Hamburger Button (only visible on mobile) -->
    <button
      class="mobile-menu-toggle"
      @click="toggleMobileMenu"
      :class="{ 'is-open': isMobileMenuOpen }"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- Desktop/Mobile Content -->
    <div class="navbar-left" :class="{ 'mobile-hidden': isMobileMenuOpen }">
      <NuxtLink
        to="/"
        class="logo"
        :class="{ 'home--active': isActiveLink('/') }"
      >
        <img src="/infortel.png" alt="Logo" width="100px" />
      </NuxtLink>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay" :class="{ 'is-open': isMobileMenuOpen }">
      <div class="mobile-menu-content">
        <button
          @click="goPage('/services')"
          :class="{
            'mobile-btn': true,
            'btn--active': isActiveLink('/services'),
          }"
        >
          <span class="btn-text">Services</span>
          <div v-if="isActiveLink('/services')" class="active-burst">POW!</div>
        </button>
        <button
          @click="goPage('/process')"
          :class="{
            'mobile-btn': true,
            'btn--active': isActiveLink('/process'),
          }"
        >
          <span class="btn-text">Process</span>
          <div v-if="isActiveLink('/process')" class="active-burst">ZAP!</div>
        </button>
        <button
          @click="goPage('/projects')"
          :class="{
            'mobile-btn': true,
            'btn--active': isActiveLink('/projects'),
          }"
        >
          <span class="btn-text">Projects</span>
          <div v-if="isActiveLink('/projects')" class="active-burst">BAM!</div>
        </button>
        <button
          @click="goPage('/reviews')"
          :class="{
            'mobile-btn': true,
            'btn--active': isActiveLink('/reviews'),
          }"
        >
          <span class="btn-text">Reviews</span>
          <div v-if="isActiveLink('/reviews')" class="active-burst">WOW!</div>
        </button>
        <button
          @click="goPage('/contact')"
          :class="{
            'mobile-btn': true,
            'contact-btn': true,
            'btn--active': isActiveLink('/contact'),
          }"
        >
          <span class="btn-text">Contact Us!</span>
        </button>
      </div>
    </div>

    <!-- Desktop Center Navigation -->
    <div class="navbar-center" :class="{ 'mobile-hidden': isMobileMenuOpen }">
      <div class="buttons">
        <button
          @click="goPage('/services')"
          :class="{ btn: true, 'btn--active': isActiveLink('/services') }"
        >
          <span class="btn-text">Services</span>
          <div v-if="isActiveLink('/services')" class="active-burst">POW!</div>
        </button>
        <button
          @click="goPage('/process')"
          :class="{ btn: true, 'btn--active': isActiveLink('/process') }"
        >
          <span class="btn-text">Process</span>
          <div v-if="isActiveLink('/process')" class="active-burst">ZAP!</div>
        </button>
        <button
          @click="goPage('/projects')"
          :class="{ btn: true, 'btn--active': isActiveLink('/projects') }"
        >
          <span class="btn-text">Projects</span>
          <div v-if="isActiveLink('/projects')" class="active-burst">BAM!</div>
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

    <!-- Desktop Right Navigation -->
    <div class="navbar-right" :class="{ 'mobile-hidden': isMobileMenuOpen }">
      <button
        id="contact"
        @click="goPage('/contact')"
        :class="{
          btn: true,
          'contact-btn': true,
          'btn--active': isActiveLink('/contact'),
        }"
      >
        <span class="btn-text">Contact Us!</span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 58px;
  position: sticky;
  top: 16px;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;
  border-radius: 0 0 20px 20px;
  border-top: none;
  font-family: $font_family;
  overflow: visible;
}

// Mobile hamburger menu button
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  width: 40px;
  height: 40px;
  background: white;
  border: 3px solid $gray;
  border-radius: 12px;
  box-shadow: 3px 3px 0 $gray;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 200;

  &:hover {
    box-shadow: 4px 4px 0 $gray;
  }

  .hamburger-line {
    width: 18px;
    height: 2px;
    background: $gray;
    margin: 2px 0;
    transition: all 0.3s ease;
    transform-origin: center;
  }
}

// Mobile menu overlay
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 150;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }

  .mobile-menu-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding: 40px;
  }

  .mobile-btn {
    font-family: $font-family;
    padding: 15px 30px;
    background: white;
    border: 3px solid $gray;
    border-radius: 15px;
    box-shadow: 4px 4px 0 $gray;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    color: $gray;
    transform: rotate(-0.5deg);

    &:hover {
      transform: rotate(0deg) scale(1.05);
      box-shadow: 6px 6px 0 $gray;
      background: $primarycolor;
      color: white;
    }

    &.btn--active {
      background: $primarycolor;
      color: white;
      animation: pulse 2s infinite;
    }

    &.contact-btn {
      background: $supportcolor;
      color: white;
      text-shadow: 1px 1px 0 $gray;
      transform: rotate(1deg);
      height: 60px;

      &:hover {
        background: $focus;
        transform: rotate(0deg) scale(1.1);
      }
    }
  }
}

// Hide elements on mobile when menu is open
.mobile-hidden {
  opacity: 0;
  pointer-events: none;
}

.navbar-left {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  transition: opacity 0.3s ease;

  .logo {
    background: white;
    border: 4px solid $gray;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 4px 4px 0 $gray;
    transition: all 0.3s ease;
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
    }
  }
}

.navbar-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  transition: opacity 0.3s ease;

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
    .btn {
      height: 37px;
      text-align: center;
    }
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
  transition: opacity 0.3s ease;
}

// Existing button styles
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
  }
}

// Mobile breakpoint
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .navbar-center,
  .navbar-right {
    display: none;
  }

  .navbar-left {
    justify-content: flex-start;
  }
}

// Animations
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

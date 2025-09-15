<script lang="ts" setup>
import Contact from '../Cards/ContactComp.vue'
</script>

<template>
  <contact />
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-top">
      <img src="/infortel.png" alt="logo" class="logo" />
      <nav class="footer-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/process">Process</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/reviews">Reviews</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>

    <div class="footer-bottom">
      <div class="social">
        <a href="#" target="_blank">🐦</a>
        <a href="#" target="_blank">💼</a>
        <a href="#" target="_blank">📷</a>
      </div>
      <p>© 2025 Infortel – Tworzymy produkty, które mają supermoce!</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;

.footer {
  background: $gray;
  font-family: $font-family;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  overflow: hidden;

  .footer-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    .logo {
      background-color: white;
      border-radius: 10px;
      width: 8rem;
      margin: 0 auto;
    }

    .footer-nav {
      display: flex;
      gap: 1.5rem;

      a {
        color: white;
        font-weight: bold;
        text-decoration: none;
        position: relative;
        font-size: clamp(10px, 1vw, 1vw);

        &:after {
          content: '';
          display: block;
          width: 0%;
          height: 2px;
          background: $primarycolor;
          transition: width 0.3s ease;
          position: absolute;
          bottom: -3px;
          left: 0;
        }

        &:hover:after {
          width: 100%;
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .social {
      display: flex;
      gap: 1rem;
      font-size: 1.5rem;

      a {
        transition: transform 0.3s ease;
        text-decoration: none;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    p {
      font-size: 0.9rem;
    }
  }
}
</style>

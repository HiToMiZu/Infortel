<script lang="ts" setup>
defineProps({
  title: { type: String, default: 'Masz pomysł? Porozmawiajmy!' },
  subtitle: {
    type: String,
    default: 'Napisz do nas – wspólnie stworzymy coś wyjątkowego.',
  },
})

const name = ref('')
const email = ref('')
const message = ref('')

const sendMessage = () => {
  alert(`Wiadomość wysłana!\nImię: ${name.value}\nEmail: ${email.value}\nTreść: ${message.value}`)
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="contact-section">
    <!-- Contact Hero -->
    <div class="contact-hero">
      <h2>{{ title }}</h2>
      <p>
        {{ subtitle }}
      </p>
    </div>

    <!-- Contact Form -->
    <form class="contact-form" @submit.prevent="sendMessage">
      <input type="text" v-model="name" placeholder="Imię" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <textarea v-model="message" placeholder="Twoja wiadomość" required></textarea>
      <button type="submit" class="btn">Wyślij 🚀</button>
    </form>
  </section>
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-top">
      <nuxt-link to="/">
        <img src="/infortel.png" alt="logo" class="logo" />
      </nuxt-link>
      <nav class="footer-nav">
        <nuxt-link to="/services">Services</nuxt-link>
        <nuxt-link to="/process">Process</nuxt-link>
        <nuxt-link to="/projects">Projects</nuxt-link>
        <nuxt-link to="/reviews">Reviews</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>
    </div>

    <div class="footer-bottom">
      <!-- <div class="social">
        <a href="#" target="_blank">🐦</a>
        <a href="#" target="_blank">💼</a>
        <a href="#" target="_blank">📷</a>
      </div> -->
      <p>© 2025 Infortel – Tworzymy produkty, które mają supermoce!</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
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
.contact-section {
  padding: 3rem 1rem;
  text-align: center;
  background: $background;
  font-family: $font-family;

  .contact-hero {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      color: $primarycolor;
      text-shadow: 2px 2px 0 $gray;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;

    input,
    textarea {
      padding: 0.75rem 1rem;
      border: 3px solid $gray;
      border-radius: 15px;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;

      &:focus {
        border-color: $primarycolor;
        box-shadow: 0 0 10px rgba($primarycolor, 0.5);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .btn {
      background: $primarycolor;
      color: white;
      border: 3px solid $gray;
      border-radius: 15px;
      padding: 0.75rem;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 5px 5px 0 $gray;
      transform: rotate(0deg);

      &:hover {
        transform: scale(1.05);
        box-shadow: 8px 8px 0 $gray;
      }
    }
  }
}
</style>

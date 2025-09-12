<script setup lang="ts">
import { ref } from 'vue'

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
      <h2>Masz pomysł? Porozmawiajmy!</h2>
      <p>
        Bądź na bieżąco lub napisz do nas – wspólnie znajdziemy najlepsze rozwiązanie dla Twojego
        projektu.
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
</template>

<style lang="scss" scoped>
@use '@/colors.scss' as *;

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

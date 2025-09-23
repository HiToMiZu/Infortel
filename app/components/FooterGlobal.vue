<script setup lang="ts">
const toast = useToast();
import emailjs from "@emailjs/browser";

defineProps({
  title: { type: String, default: "Masz pomysł? Porozmawiajmy!" },
  subtitle: {
    type: String,
    default: "Napisz do nas – wspólnie stworzymy coś wyjątkowego.",
  },
  showme: { type: Boolean, default: false },
});

const config = useRuntimeConfig();
const EMAILJS_SERVICE_ID = config.public.emailjsServiceId;
const EMAILJS_TEMPLATE_ID = config.public.emailjsTemplateId;
const EMAILJS_PUBLIC_KEY = config.public.emailjsPublicKey;

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Reactive form data
const name = ref("");
const email = ref("");
const message = ref("");

// UI state
const loading = ref(false);

// Send message function
const sendMessage = async () => {
  loading.value = true;

  try {
    // Create template parameters
    const templateParams = {
      from_name: name.value,
      from_email: email.value,
      message: message.value,
      to_name: "Nikodem", // Replace with your name
      reply_to: email.value,
      sent_date: new Date().toLocaleDateString("pl-PL"),
      sent_time: new Date().toLocaleTimeString("pl-PL"),
    };

    // Send email via EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Email wysłany pomyślnie:", result);
    toast.success({
      title: "Dziękujemy!",
      message:
        "Twoja wiadomość została wysłana pomyślnie. Odpiszę tak szybko jak to możliwe! ✨",
      backgroundColor: "#1cace4", // bg color
      timeout: 5000, // auto close (ms)
    });

    // Reset form
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    console.error("Błąd EmailJS:", error);
    toast.error({
      title: "Przepraszamy!",
      message: "Coś poszło nie tak!",
      backgroundColor: "#5c6474", // bg color
      timeout: 5000, // auto close (ms)
    });
  } finally {
    loading.value = false;
  }
};

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
</script>

<template>
  <section v-if="showme == true" class="contact-section">
    <!-- Contact Hero -->
    <div class="contact-hero">
      <h2>{{ title }}</h2>
      <p>
        {{ subtitle }}
      </p>
    </div>

    <!-- Contact Form -->
    <div class="contact-form-container">
      <form class="contact-form" @submit.prevent="sendMessage">
        <input
          type="text"
          v-model="name"
          placeholder="Imię"
          required
          :disabled="loading"
        />
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          required
          :disabled="loading"
        />
        <textarea
          v-model="message"
          placeholder="Twoja wiadomość"
          required
          :disabled="loading"
        ></textarea>

        <button type="submit" class="btn" :disabled="loading">
          <span v-if="loading" class="loading-content">
            <svg class="spinner" viewBox="0 0 24 24">
              <circle
                class="spinner-circle"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="spinner-path"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Wysyłanie...
          </span>
          <span v-else>Wyślij 🚀</span>
        </button>
      </form>
    </div>
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
          content: "";
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
      font-family: $font_family;
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
      display: flex; /* make it a flex container */
      justify-content: center; /* center horizontally */
      align-items: center; /* center vertically */
      gap: 0.5rem;

      &:hover {
        transform: scale(1.05);
        box-shadow: 8px 8px 0 $gray;
      }
    }
  }
}
.loading-content {
  display: flex;
  align-items: center;
  justify-content: center; /* ensures spinner + text stay centered */
  gap: 0.5rem;
  width: 100%; /* takes full width of button */
}

.spinner {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

.spinner-circle {
  opacity: 0.25;
}

.spinner-path {
  opacity: 0.75;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

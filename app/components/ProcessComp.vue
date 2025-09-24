<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "SuperheroProcess",
});

// Reactive data
const currentStep = ref(0);

// Steps data
const steps = ref([
  {
    title: "1. Odkrywamy Misję",
    expandedDetails: [
      {
        icon: "🎯",
        title: "Cele",
        description: "Poznajemy potrzeby i oczekiwania",
      },
      {
        icon: "🔬",
        title: "Research",
        description: "Analizujemy rynek i konkurencję",
      },
      {
        icon: "📋",
        title: "Plan",
        description: "Tworzymy harmonogram działań",
      },
    ],
  },
  {
    title: "2. Rysujemy Bohatera",
    expandedDetails: [
      { icon: "✏️", title: "Szkice", description: "Układ strony i struktura" },
      { icon: "🎭", title: "Design", description: "Projektujemy UI/UX" },
      {
        icon: "🖼️",
        title: "Prototypy",
        description: "Tworzymy interaktywne modele",
      },
    ],
  },
  {
    title: "3. Kodujemy Supermoce",
    expandedDetails: [
      {
        icon: "⚡",
        title: "Frontend",
        description: "Budujemy responsywny interfejs",
      },
      { icon: "⚙️", title: "Backend", description: "Tworzymy systemy i bazy" },
      { icon: "🔗", title: "Integracje", description: "Łączymy API i usługi" },
    ],
  },
  {
    title: "4. Testujemy w Akcji",
    expandedDetails: [
      { icon: "🔍", title: "QA", description: "Sprawdzamy funkcjonalność" },
      {
        icon: "🚀",
        title: "Wydajność",
        description: "Optymalizujemy szybkość",
      },
      {
        icon: "📱",
        title: "Cross-platform",
        description: "Testy na różnych urządzeniach",
      },
    ],
  },
  {
    title: "5. Startujemy na Rynek",
    expandedDetails: [
      { icon: "🌐", title: "Deployment", description: "Publikujemy projekt" },
      { icon: "📈", title: "SEO", description: "Optymalizujemy widoczność" },
      { icon: "💫", title: "Wsparcie", description: "Pomagamy przy starcie" },
    ],
  },
]);

// Methods
const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
</script>
<template>
  <div class="superhero-process">
    <div class="container">
      <!-- Hero Section -->

      <!-- Current Step Details -->
      <div class="current-step-detail">
        <h2 :key="currentStep">{{ steps[currentStep]?.title }}</h2>
        <div class="detail-grid">
          <div
            v-for="detail in steps[currentStep]?.expandedDetails"
            :key="detail.title"
            class="detail-card"
          >
            <div class="detail-icon">{{ detail.icon }}</div>
            <h4>{{ detail.title }}</h4>
            <p>{{ detail.description }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation Controls -->
      <div class="navigation-controls">
        <button @click="previousStep" class="btn">← Poprzedni Krok</button>
        <button @click="nextStep" class="btn">Następny Krok →</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.superhero-process {
  font-family: $font-family;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.current-step-detail {
  padding: 30px;
  border-radius: 20px;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  text-align: center;
}

.current-step-detail h2 {
  margin-top: 0;
  font-size: 2rem;
  margin-bottom: 30px;
  animation: slideInDown 0.6s ease;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.detail-card {
  padding: 30px;
  border-radius: 20px;
  // border: 6px solid $gray;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  transition: transform 0.6s ease;
  animation: fadeIn 0.6s ease forwards;
}

.detail-card:hover {
  transform: translateY(-5px);
}

.detail-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.detail-card h4 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: $primarycolor;
}

.detail-card p {
  opacity: 0.9;
  line-height: 1.6;
}

.navigation-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
.btn {
  height: 40px;
  width: 160px;
  font-size: 0.875rem;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }

  .navigation-controls {
    flex-direction: column;
    align-items: center;
  }
}
</style>

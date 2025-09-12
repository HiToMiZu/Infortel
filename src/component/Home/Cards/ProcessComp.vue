<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'SuperheroProcess',
})

// Reactive data
const currentStep = ref(0)

// Steps data
const steps = ref([
  {
    title: 'Odkrywamy Misję',
    expandedDetails: [
      {
        icon: '🎯',
        title: 'Analiza Celów',
        description: 'Dokładnie poznajemy Twoje potrzeby biznesowe i cele projektu',
      },
      {
        icon: '🔬',
        title: 'Research',
        description: 'Badamy rynek, konkurencję i najlepsze praktyki w branży',
      },
      {
        icon: '📋',
        title: 'Plan Akcji',
        description: 'Tworzymy szczegółowy plan realizacji projektu z terminami',
      },
    ],
  },
  {
    title: 'Rysujemy Bohatera',
    expandedDetails: [
      {
        icon: '✏️',
        title: 'Wireframing',
        description: 'Szkicujemy strukturę i układ elementów na stronie',
      },
      {
        icon: '🎭',
        title: 'UI/UX Design',
        description: 'Projektujemy intuicyjny i atrakcyjny interfejs użytkownika',
      },
      {
        icon: '🖼️',
        title: 'Prototypy',
        description: 'Tworzymy interaktywne prototypy do testowania koncepcji',
      },
    ],
  },
  {
    title: 'Kodujemy Supermoce',
    expandedDetails: [
      {
        icon: '⚡',
        title: 'Frontend Development',
        description: 'Kodujemy responsywny interfejs z najnowszymi technologiami',
      },
      {
        icon: '⚙️',
        title: 'Backend Systems',
        description: 'Budujemy solidne systemy backendowe i bazy danych',
      },
      {
        icon: '🔗',
        title: 'API & Integracje',
        description: 'Łączymy systemy zewnętrzne i tworzymy API',
      },
    ],
  },
  {
    title: 'Testujemy w Akcji',
    expandedDetails: [
      {
        icon: '🔍',
        title: 'Quality Assurance',
        description: 'Dokładnie testujemy każdą funkcjonalność projektu',
      },
      {
        icon: '🚀',
        title: 'Performance Testing',
        description: 'Optymalizujemy wydajność i szybkość ładowania',
      },
      {
        icon: '📱',
        title: 'Cross-platform Testing',
        description: 'Sprawdzamy działanie na różnych urządzeniach i przeglądarkach',
      },
    ],
  },
  {
    title: 'Startujemy na Rynek',
    expandedDetails: [
      {
        icon: '🌐',
        title: 'Deployment',
        description: 'Wdrażamy projekt na serwery produkcyjne',
      },
      {
        icon: '📈',
        title: 'SEO Optimization',
        description: 'Optymalizujemy stronę pod kątem wyszukiwarek',
      },
      {
        icon: '💫',
        title: 'Launch Support',
        description: 'Wspieramy podczas startu i pomagamy w promocji',
      },
    ],
  },
])

// Methods
const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
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
@use '@/colors.scss' as *;
.superhero-process {
  font-family: $font-family;
}

.container {
  max-width: 1200px;
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

<script lang="ts" setup>
import Card from './CardHome.vue'
</script>

<template>
  <section class="services">
    <div class="text">
      <h1 class="services__title">Nasza oferta</h1>
      <div class="services__subtitle">To nasza specjalnosc!</div>
    </div>
    <div class="services__cards">
      <card
        title="Web Development"
        desc="Tworzymy nowoczesne strony internetowe i platformy online, które są szybkie, bezpieczne i w pełni responsywne. Nasze rozwiązania łączą najnowsze technologie z najlepszymi praktykami UX/UI, aby użytkownicy mogli korzystać z nich intuicyjnie i wygodnie. Dbamy o optymalizację SEO oraz integrację z narzędziami analitycznymi, dzięki czemu Twoja witryna nie tylko wygląda świetnie, ale także osiąga realne wyniki biznesowe."
      />
      <card
        title="App Development"
        desc="Projektujemy i rozwijamy aplikacje mobilne i desktopowe dostosowane do potrzeb Twojej firmy i użytkowników. Nasze aplikacje cechują się wysoką wydajnością, stabilnością i nowoczesnym designem, który zapewnia komfort korzystania na każdym urządzeniu. Wspieramy cały proces – od koncepcji, przez prototypowanie, aż po wdrożenie i utrzymanie – aby dostarczyć produkt, który realnie wspiera Twój biznes."
      />
      <Card
        title="Marketing"
        desc="Tworzymy kompleksowe strategie marketingowe, które pomagają Twojej marce wyróżnić się w sieci i przyciągnąć nowych klientów. Łączymy działania w social media, content marketing, kampanie reklamowe i analitykę danych, aby maksymalizować efektywność i ROI. Nasze podejście jest zawsze dopasowane do specyfiki Twojego biznesu, co pozwala osiągać długotrwałe i mierzalne rezultaty."
      />
      <Card
        title="Design"
        desc="Projektujemy atrakcyjne i funkcjonalne rozwiązania wizualne, które wzmacniają wizerunek Twojej marki i angażują odbiorców. Od identyfikacji wizualnej, przez projekty UI/UX, aż po grafiki promocyjne – stawiamy na estetykę połączoną z użytecznością. Nasze projekty nie tylko przyciągają uwagę, ale również budują spójny i profesjonalny wizerunek Twojej firmy w każdym kanale komunikacji."
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  padding: 2rem 0;

  &__title {
    text-align: center;
    font-size: 2.5vw;
    margin-bottom: 1rem;
  }

  &__subtitle {
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.3vw;
    margin-bottom: 2rem;
    color: #666;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 6rem; // Space between cards
    padding: 2rem 3rem; // Prevents touching borders: top/bottom 2rem, left/right 4rem
    justify-items: center; // Centers cards within their grid areas
    align-items: stretch; // Makes all cards same height
  }
}

// Responsive design
@media (max-width: 768px) {
  .services__cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>

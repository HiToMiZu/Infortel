<script lang="ts" setup>
import CardHome from './CardHome.vue'
</script>

<template>
  <section class="services">
    <div class="text">
      <h1 class="services__title">Nasza oferta</h1>
      <div class="services__subtitle">To nasza specjalnosc!</div>
    </div>
    <div class="services__cards">
      <CardHome
        title="Web Development"
        desc="Budujemy strony internetowe, które nie tylko dobrze wyglądają, ale przede wszystkim działają szybko, bezpiecznie i niezawodnie. Nasze projekty są w pełni responsywne i zoptymalizowane, aby zapewnić użytkownikom komfort korzystania na każdym urządzeniu. Integrujemy witryny z nowoczesnymi narzędziami oraz dbamy o ich wydajność, aby Twoja strona była realnym wsparciem w rozwoju biznesu i pozyskiwaniu nowych klientów."
        image="src/assets/images/programming.png"
      />
      <CardHome
        title="App Development"
        desc="Tworzymy aplikacje webowe i mobilne, które odpowiadają na realne potrzeby użytkowników. Od pierwszego pomysłu, przez projekt i prototyp, aż po finalny produkt – dbamy o każdy szczegół. Nasze aplikacje są skalowalne, stabilne i łatwe w obsłudze, co sprawia, że sprawdzają się zarówno w małych projektach, jak i w dużych systemach biznesowych. Stawiamy na rozwiązania, które rozwijają Twój produkt wraz z rosnącymi wymaganiami rynku."
        image="src/assets/images/app-development.png"
      />
      <CardHome
        title="Marketing"
        desc="Pomagamy zwiększyć widoczność Twojej strony internetowej lub aplikacji, aby docierała do jak najszerszego grona użytkowników. Tworzymy strategie marketingowe ukierunkowane na rozwój popularności produktu – od działań w social media, przez kampanie reklamowe, aż po optymalizację SEO. Dzięki temu Twoja aplikacja czy strona nie tylko istnieje, ale także skutecznie zdobywa nowych odbiorców i staje się realnym narzędziem wzrostu."
        image="src/assets/images/development.png"
      />
      <CardHome
        title="Design"
        desc="Projektujemy nowoczesne i intuicyjne interfejsy, które wyróżniają Twoją stronę internetową lub aplikację na tle konkurencji. Dbamy o spójny UX/UI, który sprawia, że użytkownicy chętnie wracają i łatwo odnajdują to, czego potrzebują. Każdy element designu – od kolorystyki po typografię – jest starannie dopasowany, aby tworzyć profesjonalny i angażujący wizerunek Twojej marki w sieci."
        image="src/assets/images/web-designing.png"
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

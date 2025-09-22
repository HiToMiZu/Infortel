<script lang="ts" setup>
</script>

<template>
  <section class="services">
    <div class="text">
      <h1 class="title">Nasza oferta</h1>
      <div class="subtitle">To nasza specjalnosc!</div>
    </div>
    <div class="cards">
      <ServiceComp
        title="Web Development"
        desc="Budujemy strony internetowe, które nie tylko dobrze wyglądają, ale przede wszystkim działają szybko, bezpiecznie i niezawodnie. Nasze projekty są w pełni responsywne i zoptymalizowane, aby zapewnić użytkownikom komfort korzystania na każdym urządzeniu. Integrujemy witryny z nowoczesnymi narzędziami oraz dbamy o ich wydajność, aby Twoja strona była realnym wsparciem w rozwoju biznesu i pozyskiwaniu nowych klientów."
        image="/programming.png"
      />
      <ServiceComp
        title="App Development"
        desc="Tworzymy aplikacje webowe i mobilne, które odpowiadają na realne potrzeby użytkowników. Od pierwszego pomysłu, przez projekt i prototyp, aż po finalny produkt – dbamy o każdy szczegół. Nasze aplikacje są skalowalne, stabilne i łatwe w obsłudze, co sprawia, że sprawdzają się zarówno w małych projektach, jak i w dużych systemach biznesowych. Stawiamy na rozwiązania, które rozwijają Twój produkt wraz z rosnącymi wymaganiami rynku."
        image="/app-development.png"
      />
      <ServiceComp
        title="Marketing"
        desc="Pomagamy zwiększyć widoczność Twojej strony internetowej lub aplikacji, aby docierała do jak najszerszego grona użytkowników. Tworzymy strategie marketingowe ukierunkowane na rozwój popularności produktu – od działań w social media, przez kampanie reklamowe, aż po optymalizację SEO. Dzięki temu Twoja aplikacja czy strona nie tylko istnieje, ale także skutecznie zdobywa nowych odbiorców i staje się realnym narzędziem wzrostu."
        image="/development.png"
      />
      <ServiceComp
        title="Design"
        desc="Projektujemy nowoczesne i intuicyjne interfejsy, które wyróżniają Twoją stronę internetową lub aplikację na tle konkurencji. Dbamy o spójny UX/UI, który sprawia, że użytkownicy chętnie wracają i łatwo odnajdują to, czego potrzebują. Każdy element designu – od kolorystyki po typografię – jest starannie dopasowany, aby tworzyć profesjonalny i angażujący wizerunek Twojej marki w sieci."
        image="/web-designing.png"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  padding: 2rem 0;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));
    justify-items: center;
    @media (max-width: 1600px) {
      grid-template-columns: repeat(2, minmax(400px, auto));
    }
    @media (max-width: 1025px) {
      grid-template-columns: repeat(1, minmax(500px, auto));
    }
    @media (max-width: 450px) {
      justify-items: flex-start;
    }
  }
}
</style>

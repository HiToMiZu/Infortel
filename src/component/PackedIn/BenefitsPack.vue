<script lang="ts" setup>
import BubblesComp from '../Cards/BubblesComp.vue'
</script>

<template>
  <div class="content">
    <div class="text">
      <h2 class="title">Co zyskujesz dzięki naszej metodzie?</h2>
      <p class="subtitle">To proste!</p>
    </div>
    <section class="benefits">
      <div class="bubbles">
        <BubblesComp
          iconmg="🔎"
          title="Transparentność na każdym etapie"
          subtitle="Od pierwszego szkicu aż po finalny produkt – wiesz, co dzieje się z Twoim projektem. Regularnie raportujemy postępy i pokazujemy kolejne etapy, żeby nic Cię nie zaskoczyło.."
        />
        <BubblesComp
          iconmg="🤝"
          title="Produkt, który powstaje z Twoim udziałem"
          subtitle="Twoje pomysły i uwagi są dla nas kluczowe. Każda decyzja powstaje w dialogu z Tobą, dzięki czemu końcowy efekt naprawdę odzwierciedla Twoją wizję.."
        />
        <BubblesComp
          iconmg="🚀"
          title="Możliwość rozwoju projektu w przyszłości"
          subtitle="Budujemy projekty w taki sposób, aby łatwo je rozwijać. Niezależnie, czy chcesz dodać nowe funkcje za pół roku, czy całkowicie rozwinąć platformę – jesteśmy na to gotowi."
        />
        <BubblesComp
          iconmg="🛠️📈"
          title="Wsparcie techniczne i marketingowe"
          subtitle="Nie zostawiamy Cię po wdrożeniu. Oferujemy opiekę techniczną, pomoc w optymalizacji oraz wskazówki marketingowe, by Twój projekt faktycznie dotarł do klientów."
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.benefits {
  text-align: center;
  margin: 4rem auto;
  max-width: 1600px;
  @media (max-width: 1600px) {
    margin: 4rem 40px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
.bubbles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
</style>

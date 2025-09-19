<script lang="ts" setup>
import BubblesComp from '../Cards/BubblesComp.vue'
</script>

<template>
  <div class="content">
    <div class="text">
      <h2 class="title">Dlaczego my?</h2>
      <p class="subtitle">Pomóżmy ci z decyzją!</p>
    </div>
    <section class="why-us">
      <div class="bubbles">
        <BubblesComp
          iconmg="⚡"
          title="Szybkość i jakość"
          subtitle="Realizujemy projekty sprawnie, ale nigdy kosztem jakości kodu i designu."
        />
        <BubblesComp
          iconmg="🎨"
          title="Design jak z komiksu"
          subtitle="Tworzymy interfejsy, które wciągają i są łatwe w obsłudze."
        />
        <BubblesComp
          iconmg="🔒"
          title="Bezpieczeństwo i stabilność"
          subtitle="Twoja aplikacja działa niezawodnie i chroni dane użytkowników."
        />
        <BubblesComp
          iconmg="🚀"
          title="Wsparcie po starcie"
          subtitle="Nie znikamy po wdrożeniu – pomagamy rozwijać Twój projekt."
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.why-us {
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

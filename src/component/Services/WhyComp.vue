<script lang="ts" setup></script>

<template>
  <div class="content">
    <div class="text">
      <h2 class="title">Dlaczego my?</h2>
      <p class="subtitle">Pomóżmy ci z decyzją!</p>
    </div>
    <section class="why-us">
      <div class="bubbles">
        <div class="bubble">
          <span class="icon">⚡</span>
          <h3>Szybkość i jakość</h3>
          <p>Realizujemy projekty sprawnie, ale nigdy kosztem jakości kodu i designu.</p>
        </div>
        <div class="bubble">
          <span class="icon">🎨</span>
          <h3>Design jak z komiksu</h3>
          <p>Tworzymy interfejsy, które wciągają i są łatwe w obsłudze.</p>
        </div>
        <div class="bubble">
          <span class="icon">🔒</span>
          <h3>Bezpieczeństwo i stabilność</h3>
          <p>Twoja aplikacja działa niezawodnie i chroni dane użytkowników.</p>
        </div>
        <div class="bubble">
          <span class="icon">🚀</span>
          <h3>Wsparcie po starcie</h3>
          <p>Nie znikamy po wdrożeniu – pomagamy rozwijać Twój projekt.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.why-us {
  text-align: center;
  margin: 4rem auto;
  max-width: 1600px;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .bubbles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }
  .bubble:nth-last-child(1),
  .bubble:nth-last-child(2) {
    transform: rotateY(180deg);

    h3,
    p {
      transform: rotateY(180deg);
    }
    &:hover {
      transform: rotateY(180deg) scale(1.05);
    }
  }

  .bubble {
    position: relative;
    background: white;
    border-radius: 20px;
    border: 3px solid $gray;
    box-shadow:
      8px 8px 0 $gray,
      0 0 30px rgba($gray, 0.3);
    padding: 1.5rem;
    box-shadow: 6px 6px 0 $gray;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    .icon {
      font-size: 2rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    h3 {
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.9rem;
    }

    // Dymek "ogon"
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: -4px;
      width: 0;
      height: 0;
      border: 15px solid transparent;
      border-top: 20px solid white;
      z-index: 1;
      transform: rotate(-70deg);
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -26px;
      left: -8px;
      width: 0;
      height: 0;
      border: 18px solid transparent;
      border-top: 22px solid $gray;
      transform: rotate(-70deg);
      z-index: 0;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>

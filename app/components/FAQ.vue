<script setup lang="ts">
const props = defineProps({
  file: { type: String, default: "/faqcontact.json" },
});

interface FaqItem {
  question: string;
  answer: string;
}

const faqs = ref<FaqItem[]>([]);

onMounted(async () => {
  const res = await fetch(props.file);
  faqs.value = await res.json();

  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.value.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }) as any,
      },
    ],
  });
});
const openIndexes = ref<Set<number>>(new Set());

const toggle = (index: number) => {
  const newSet = new Set(openIndexes.value);
  if (newSet.has(index)) {
    newSet.delete(index);
  } else {
    newSet.add(index);
  }
  openIndexes.value = newSet;
};
// JS hooks for smooth height animation
const enter = (el: Element) => {
  const elH = el as HTMLElement;
  elH.style.height = "0";
  elH.style.overflow = "hidden";
  const height = elH.scrollHeight;
  requestAnimationFrame(() => {
    elH.style.transition = "height 0.3s ease";
    elH.style.height = height + "px";
  });
};

const afterEnter = (el: Element) => {
  const elH = el as HTMLElement;
  elH.style.height = "auto";
  elH.style.transition = "";
  elH.style.overflow = "";
};

const leave = (el: Element) => {
  const elH = el as HTMLElement;
  elH.style.height = elH.scrollHeight + "px";
  elH.style.overflow = "hidden";
  requestAnimationFrame(() => {
    elH.style.transition = "height 0.3s ease";
    elH.style.height = "0";
  });
};

const afterLeave = (el: Element) => {
  const elH = el as HTMLElement;
  elH.style.height = "";
  elH.style.transition = "";
  elH.style.overflow = "";
};
</script>

<template>
  <section class="faq">
    <h2 class="title">❓ Najczęściej zadawane pytania</h2>

    <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
      <button class="faq-question" @click="toggle(index)">
        {{ faq.question }}
        <span class="arrow" :class="{ open: openIndexes.has(index) }">▼</span>
      </button>

      <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div v-show="openIndexes.has(index)" class="faq-answer-wrapper">
          <p class="faq-answer">{{ faq.answer }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  max-width: 80vw;
  margin: 3rem auto;
  padding: 1rem;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.faq-item {
  position: relative;
  background: white;
  border-radius: 20px;
  border: 3px solid $gray;
  box-shadow:
    6px 6px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  margin-bottom: 20px;
  padding: 5px;
}

.faq-question {
  font-family: $font_family;
  width: 100%;
  text-align: left;
  font-weight: bold;
  background-color: white;
  padding: 14px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  transition: transform 0.3s;
}
.arrow.open {
  transform: rotate(180deg);
}

.faq-answer-wrapper {
  overflow: hidden; // Ensure smooth height transition
}

.faq-answer {
  padding: 1rem;
  background: #fff;
  border-top: 1px solid #ddd;
}
</style>

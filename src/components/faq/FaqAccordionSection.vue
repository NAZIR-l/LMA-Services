<template>
  <section class="faq-section">
    <div class="faq-container">
      <div v-for="(item, index) in faqs" :key="index" class="faq-item">
        <button class="faq-question" @click="toggleFaq(index)">
          <span>{{ item.question }}</span>
          <span class="faq-icon">{{ openFaq === index ? '−' : '+' }}</span>
        </button>
        <div v-if="openFaq === index" class="faq-answer">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openFaq = ref<number | null>(null)

const faqs = [
  {
    question: 'In welke regio’s zijn jullie actief?',
    answer: 'LMA Services is actief in heel Nederland. We hebben lokale teams die snel kunnen inzetten voor zowel eenmalige als regelmatige schoonmaakopdrachten.'
  },
  {
    question: 'Hoe bepalen jullie de prijs voor een schoonmaakopdracht?',
    answer: 'Onze prijzen zijn transparant en gebaseerd op het type dienst, de grootte van de ruimte en de gewenste frequentie. Na een gratis analyse ontvangt u een heldere offerte zonder verrassingen.'
  },
  {
    question: 'Kan ik mijn schoonmaakdienst op maat laten maken?',
    answer: 'Ja, al onze diensten zijn flexibel en op maat aanpasbaar. Wij stellen een plan op dat aansluit op uw bedrijf, budget en planning.'
  },
  {
    question: 'Werken jullie met milieuvriendelijke producten?',
    answer: 'Ja, LMA Services gebruikt gecertificeerde, milieuvriendelijke reinigingsmiddelen die veilig zijn voor medewerkers en klanten.'
  },
  {
    question: 'Hoe snel kunnen jullie starten?',
    answer: 'Afhankelijk van uw locatie en huidige werkplanning kunnen we vaak binnen 1-2 weken starten. Voor spoedgevallen zoeken we naar een snellere oplossing.'
  },
  {
    question: 'Wat als ik niet tevreden ben met het resultaat?',
    answer: 'Kwaliteit staat bij ons voorop. Bent u niet tevreden, dan nemen wij direct contact op en herstellen we de situatie tot u tevreden bent.'
  }
]

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
.faq-section { padding: 3rem 0; }

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
  overflow: hidden;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--dark-text);
  text-align: left;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: rgba(31, 164, 191, 0.03);
}

.faq-icon {
  font-size: 1.5rem;
  color: var(--primary-teal);
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: var(--text-light);
  line-height: 1.8;
  background: rgba(31, 164, 191, 0.02);
}

@media (max-width: 720px) {
  .faq-question {
    padding: 1.25rem;
    font-size: 1rem;
  }
}
</style>

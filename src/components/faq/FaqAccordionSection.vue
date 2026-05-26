<template>
  <section class="faq-section section">
    <div class="container">
      <div class="faq-layout">
        <!-- Sidebar -->
        <div class="faq-sidebar" data-aos="fade-right">
          <p class="eyebrow">FAQ</p>
          <h2 class="section-title">Heeft u een vraag?</h2>
          <div class="divider divider-left"></div>
          <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 1.5rem;">
            Staat uw vraag er niet bij? Neem direct contact met ons op.
          </p>
          <a href="mailto:info@lmaschoonmaken.nl" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Stuur een e-mail
          </a>
          <a href="tel:+31628589077" class="btn btn-primary" style="margin-top: 0.75rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 17z"/></svg>
            Bel ons direct
          </a>
        </div>

        <!-- Accordion -->
        <div class="faq-list" data-aos="fade-left" data-delay="100">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="faq-item neu-card"
            :class="{ open: openFaq === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <div class="faq-icon-wrap" :class="{ rotated: openFaq === index }">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </button>
            <transition name="faq-expand">
              <div v-if="openFaq === index" class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openFaq = ref<number | null>(0)

const faqs = [
  {
    question: 'In welke regio\'s zijn jullie actief?',
    answer: 'LMA Services is actief in heel Nederland. We hebben lokale teams die snel kunnen inzetten voor zowel eenmalige als regelmatige schoonmaakopdrachten, van Groningen tot Zeeland.'
  },
  {
    question: 'Hoe bepalen jullie de prijs voor een schoonmaakopdracht?',
    answer: 'Onze prijzen zijn transparant en gebaseerd op het type dienst, de grootte van de ruimte en de gewenste frequentie. Na een gratis analyse ontvangt u binnen 24 uur een heldere offerte zonder verrassingen.'
  },
  {
    question: 'Kan ik mijn schoonmaakdienst op maat laten maken?',
    answer: 'Ja, al onze diensten zijn volledig flexibel en op maat aanpasbaar. Wij stellen een plan op dat aansluit op uw bedrijf, budget en planning — inclusief tijdstip, frequentie en prioriteiten.'
  },
  {
    question: 'Werken jullie met milieuvriendelijke producten?',
    answer: 'Ja, LMA Services gebruikt gecertificeerde, milieuvriendelijke reinigingsmiddelen die veilig zijn voor medewerkers en klanten. Wij werken conform geldende normen en certificeringen.'
  },
  {
    question: 'Hoe snel kunnen jullie starten?',
    answer: 'Afhankelijk van uw locatie en planning kunnen we vaak binnen 1–2 weken starten. Voor spoedgevallen zoeken we altijd naar een snellere oplossing. Bel ons direct voor spoed.'
  },
  {
    question: 'Wat als ik niet tevreden ben met het resultaat?',
    answer: 'Kwaliteit staat bij ons voorop. Bent u niet tevreden, dan nemen wij direct contact op en herstellen we de situatie totdat u volledig tevreden bent. Uw tevredenheid is onze garantie.'
  },
  {
    question: 'Zijn jullie medewerkers verzekerd en gescreend?',
    answer: 'Ja, alle medewerkers van LMA Services zijn gescreend, getraind en verzekerd. Wij werken uitsluitend met betrouwbaar personeel dat onze kwaliteits- en veiligheidsstandaarden naleeft.'
  }
]

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
.faq-section { background: var(--gray-bg); }

.faq-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 4rem;
  align-items: start;
}

.faq-sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-list { display: grid; gap: 0.85rem; }

.faq-item {
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.faq-item.open {
  box-shadow: 12px 12px 28px rgba(0,0,0,0.1), -6px -6px 20px rgba(255,255,255,0.9);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.4rem 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-text);
  text-align: left;
  font-family: inherit;
  transition: color 0.2s ease;
}
.faq-question:hover { color: var(--primary-teal); }
.faq-item.open .faq-question { color: var(--primary-teal); }

.faq-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--light-teal);
  color: var(--primary-teal);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s ease;
}
.faq-icon-wrap.rotated { transform: rotate(180deg); background: var(--primary-teal); color: white; }

.faq-answer {
  padding: 0 1.6rem 1.4rem;
  border-top: 1px solid rgba(31, 164, 191, 0.08);
}
.faq-answer p {
  margin: 1rem 0 0;
  color: var(--text-light);
  line-height: 1.85;
  font-size: 0.95rem;
}

/* Transition */
.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: max-height 0.35s ease, opacity 0.3s ease;
  max-height: 400px;
  overflow: hidden;
}
.faq-expand-enter-from,
.faq-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 900px) {
  .faq-layout { grid-template-columns: 1fr; }
  .faq-sidebar { position: static; }
}
</style>

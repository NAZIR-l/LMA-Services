<template>
  <div class="page-offerte">
    <OfferteHeroSection />

    <section class="section section-light">
      <div class="container">
        <OfferteInfoSection />
        <OfferteFormSection />
      </div>
    </section>

    <CtaCallToAction
      title="Liever direct contact?"
      subtitle="U kunt ons natuurlijk ook bereiken via telefoon of e-mail."
      buttonText="Contact opnemen"
      buttonLink="/contact"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OfferteHeroSection from '../components/offerte/OfferteHeroSection.vue'
import OfferteInfoSection from '../components/offerte/OfferteInfoSection.vue'
import OfferteFormSection from '../components/offerte/OfferteFormSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'

const form = ref({
  naam: '',
  bedrijf: '',
  email: '',
  telefoon: '',
  dienst: '',
  beschrijving: '',
  voorkeursdatum: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  alert('Dank u! We nemen contact met u op binnen 24 uur.')
  form.value = {
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    dienst: '',
    beschrijving: '',
    voorkeursdatum: ''
  }
}
</script>

<style scoped>
.page-offerte { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }

.form-intro {
  margin-bottom: 2rem;
}

.section-label {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--primary-teal);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.85rem;
}

.form-intro h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 3vw, 2.6rem);
  color: var(--dark-text);
}

.form-intro p {
  margin: 0;
  max-width: 48rem;
  color: var(--text-light);
}

.trust-badges {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.trust-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: #f5fdff;
  color: var(--dark-text);
  border: 1px solid rgba(31, 164, 191, 0.14);
  font-weight: 600;
  text-align: center;
}

.quote-form {
  margin-top: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
}

.quote-form h2 {
  margin: 0 0 1.5rem;
  color: var(--dark-text);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--dark-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-teal);
  box-shadow: 0 0 0 3px rgba(31, 164, 191, 0.1);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.2rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-primary {
  background: var(--primary-teal);
  color: white;
}

.btn-primary:hover {
  background: var(--dark-teal);
}

.btn-lg {
  padding: 1rem 2.2rem;
  font-size: 1rem;
}

.form-note {
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 1rem;
}

@media (max-width: 720px) {
  .form-grid { grid-template-columns: 1fr; }
  .trust-badges { grid-template-columns: 1fr; }
}
</style>

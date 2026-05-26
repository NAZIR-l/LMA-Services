<template>
  <div class="contact-form-wrap neu-card">
    <p class="eyebrow">Stuur een bericht</p>
    <h2 style="font-size: 1.6rem; margin-bottom: 1.5rem;">Hoe kunnen wij u helpen?</h2>

    <form @submit.prevent="submitForm" class="contact-form" v-if="!submitted">
      <div class="form-row">
        <div class="form-group">
          <label for="c-naam">Uw naam *</label>
          <input v-model="form.naam" type="text" id="c-naam" placeholder="Jan de Vries" required />
        </div>
        <div class="form-group">
          <label for="c-email">E-mailadres *</label>
          <input v-model="form.email" type="email" id="c-email" placeholder="jan@bedrijf.nl" required />
        </div>
      </div>
      <div class="form-group">
        <label for="c-onderwerp">Onderwerp *</label>
        <input v-model="form.onderwerp" type="text" id="c-onderwerp" placeholder="Offerte / vraag / informatie" required />
      </div>
      <div class="form-group">
        <label for="c-bericht">Uw bericht *</label>
        <textarea v-model="form.bericht" id="c-bericht" rows="5" placeholder="Omschrijf uw vraag of verzoek..." required></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-full">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Verstuur bericht
      </button>
    </form>

    <div v-else class="success-state">
      <div class="success-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3>Bericht ontvangen!</h3>
      <p>Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op.</p>
      <button class="btn btn-outline" @click="submitted = false; form = emptyForm()">Nieuw bericht</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emptyForm = () => ({ naam: '', email: '', onderwerp: '', bericht: '' })
const form = ref(emptyForm())
const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
}
</script>

<style scoped>
.contact-form-wrap { padding: 2.5rem; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.form-group label {
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--dark-text);
}

.form-group input,
.form-group textarea {
  padding: 0.9rem 1rem;
  border: 1.5px solid var(--border-gray);
  border-radius: 14px;
  background: var(--white);
  color: var(--dark-text);
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-teal);
  box-shadow: 0 0 0 4px rgba(31, 164, 191, 0.12);
}
.form-group textarea { resize: vertical; min-height: 130px; }

.btn-full { width: 100%; }

/* Success */
.success-state {
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.success-icon {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: var(--light-teal);
  color: var(--primary-teal);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounceIn 0.6s ease both;
}

.success-state h3 { font-size: 1.4rem; color: var(--dark-text); }
.success-state p { color: var(--text-light); line-height: 1.7; }

@keyframes bounceIn {
  0%   { opacity: 0; transform: scale(0.4); }
  50%  { opacity: 1; transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
  .contact-form-wrap { padding: 1.75rem 1.25rem; }
}
</style>

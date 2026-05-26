<template>
  <div class="offerte-form-wrap" data-aos="fade-up">
    <!-- Trust badges -->
    <div class="trust-row">
      <div class="trust-item" v-for="t in trust" :key="t.label">
        <div class="icon-box" style="width:40px;height:40px;border-radius:12px;">
          <span v-html="t.icon"></span>
        </div>
        <span>{{ t.label }}</span>
      </div>
    </div>

    <!-- Form -->
    <div class="form-card neu-card" v-if="!submitted">
      <p class="eyebrow">Stap 1 van 1</p>
      <h2>Uw aanvraag</h2>

      <form @submit.prevent="submitForm">
        <div class="form-grid">
          <div class="form-group">
            <label for="o-naam">Naam *</label>
            <input v-model="form.naam" type="text" id="o-naam" placeholder="Jan de Vries" required />
          </div>
          <div class="form-group">
            <label for="o-bedrijf">Bedrijfsnaam *</label>
            <input v-model="form.bedrijf" type="text" id="o-bedrijf" placeholder="Uw Bedrijf B.V." required />
          </div>
          <div class="form-group">
            <label for="o-email">E-mailadres *</label>
            <input v-model="form.email" type="email" id="o-email" placeholder="jan@bedrijf.nl" required />
          </div>
          <div class="form-group">
            <label for="o-telefoon">Telefoonnummer *</label>
            <input v-model="form.telefoon" type="tel" id="o-telefoon" placeholder="+31 6..." required />
          </div>
          <div class="form-group full">
            <label for="o-dienst">Type dienst *</label>
            <select v-model="form.dienst" id="o-dienst" required>
              <option value="">Selecteer een dienst...</option>
              <option value="kantoor">Kantoorschoonmaak</option>
              <option value="diepte">Diepe Reiniging & Desinfectie</option>
              <option value="ramen">Ruiten & Gevels</option>
              <option value="evenementen">Evenementen reiniging</option>
              <option value="horeca">Horeca personeel</option>
              <option value="overig">Overig / combinatie</option>
            </select>
          </div>
          <div class="form-group full">
            <label for="o-beschrijving">Beschrijving van uw ruimte / behoeften *</label>
            <textarea v-model="form.beschrijving" id="o-beschrijving" rows="4" placeholder="Beschrijf uw locatie, oppervlakte, gewenste frequentie en bijzonderheden..." required></textarea>
          </div>
          <div class="form-group">
            <label for="o-datum">Voorkeursdatum voor contact</label>
            <input v-model="form.voorkeursdatum" type="date" id="o-datum" />
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;margin-top:0.5rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Verstuur aanvraag
        </button>
        <p class="form-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Uw gegevens zijn veilig en worden uitsluitend gebruikt voor deze offerte.
        </p>
      </form>
    </div>

    <!-- Success -->
    <div v-else class="success-card neu-card">
      <div class="success-icon">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2>Aanvraag ontvangen!</h2>
      <p>Bedankt voor uw aanvraag. We nemen <strong>binnen 24 uur</strong> contact met u op via <strong>{{ form.email }}</strong>.</p>
      <div class="next-steps">
        <div class="step-item" v-for="(s, i) in nextSteps" :key="i">
          <span class="step-num-sm">{{ i + 1 }}</span>
          <span>{{ s }}</span>
        </div>
      </div>
      <button class="btn btn-outline" @click="reset">Nieuwe aanvraag</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emptyForm = () => ({ naam: '', bedrijf: '', email: '', telefoon: '', dienst: '', beschrijving: '', voorkeursdatum: '' })
const form = ref(emptyForm())
const submitted = ref(false)

const trust = [
  {
    label: 'Actief in heel Nederland',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
  {
    label: 'Gecertificeerde producten',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    label: 'Getraind personeel',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`
  },
  {
    label: 'Respons binnen 24 uur',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  }
]

const nextSteps = [
  'We bestuderen uw aanvraag zorgvuldig',
  'Een van onze adviseurs neemt contact op',
  'U ontvangt een maatwerk offerte'
]

const submitForm = () => { submitted.value = true }
const reset = () => { submitted.value = false; form.value = emptyForm() }
</script>

<style scoped>
.offerte-form-wrap { display: flex; flex-direction: column; gap: 1.5rem; }

/* Trust row */
.trust-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 0.75rem;
  border-radius: 16px;
  background: var(--neu-bg);
  box-shadow: 6px 6px 14px rgba(0,0,0,0.07), -6px -6px 14px rgba(255,255,255,0.85);
  text-align: center;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--dark-text);
}

/* Form card */
.form-card { padding: 2.5rem; }
.form-card h2 { font-size: 1.6rem; margin-bottom: 1.5rem; }

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group.full { grid-column: 1 / -1; }

.form-group label { font-weight: 700; font-size: 0.88rem; color: var(--dark-text); }

.form-group input,
.form-group textarea,
.form-group select {
  padding: 0.9rem 1rem;
  border: 1.5px solid var(--border-gray);
  border-radius: 14px;
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--dark-text);
  background: var(--white);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-teal);
  box-shadow: 0 0 0 4px rgba(31,164,191,0.12);
}
.form-group textarea { resize: vertical; min-height: 110px; }

.form-note {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.75rem;
  justify-content: center;
}

/* Success */
.success-card {
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.success-icon {
  width: 80px; height: 80px;
  border-radius: 50%;
  background: var(--light-teal);
  color: var(--primary-teal);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounceIn 0.6s ease both;
}

.success-card h2 { font-size: 1.8rem; color: var(--dark-text); }
.success-card > p { color: var(--text-light); line-height: 1.8; max-width: 45ch; }

.next-steps { display: grid; gap: 0.6rem; width: 100%; max-width: 360px; text-align: left; }
.step-item { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: var(--text-light); }
.step-num-sm {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--light-teal);
  color: var(--primary-teal);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.82rem;
  flex-shrink: 0;
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.4); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 900px) { .trust-row { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) {
  .form-grid { grid-template-columns: 1fr; }
  .form-card { padding: 1.5rem; }
  .trust-row { grid-template-columns: 1fr 1fr; }
}
</style>

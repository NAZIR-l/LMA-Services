<template>
  <div>
    <div class="form-intro">
      <p class="section-label">Offerte aanvragen</p>
      <h2>Ontvang binnen 24 uur een gepersonaliseerd voorstel</h2>
      <p>Vul het formulier in en wij nemen binnen een werkdag contact met u op.</p>
    </div>

    <div class="trust-badges">
      <div class="trust-card">Actief in heel Nederland</div>
      <div class="trust-card">Gecertificeerde producten</div>
      <div class="trust-card">Getraind personeel</div>
    </div>

    <form @submit.prevent="submitForm" class="quote-form">
      <h2>Uw Gegevens</h2>
      <div class="form-grid">
        <div class="form-group">
          <label for="naam">Naam *</label>
          <input v-model="form.naam" type="text" id="naam" required />
        </div>

        <div class="form-group">
          <label for="bedrijf">Bedrijfsnaam *</label>
          <input v-model="form.bedrijf" type="text" id="bedrijf" required />
        </div>

        <div class="form-group">
          <label for="email">E-mailadres *</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>

        <div class="form-group">
          <label for="telefoon">Telefoonnummer *</label>
          <input v-model="form.telefoon" type="tel" id="telefoon" required />
        </div>

        <div class="form-group">
          <label for="dienst">Type dienst *</label>
          <select v-model="form.dienst" id="dienst" required>
            <option value="">Selecteer een dienst...</option>
            <option value="kantoor">Kantoorschoonmaak</option>
            <option value="diepte">Diepte Reiniging</option>
            <option value="ramen">Ruiten & Gevels</option>
            <option value="evenementen">Evenementen & Horeca</option>
            <option value="overig">Overig</option>
          </select>
        </div>

        <div class="form-group full-width">
          <label for="beschrijving">Beschrijving van uw ruimte / behoeften *</label>
          <textarea v-model="form.beschrijving" id="beschrijving" rows="4" required></textarea>
        </div>

        <div class="form-group">
          <label for="voorkeursdatum">Voorkeursdatum voor contact</label>
          <input v-model="form.voorkeursdatum" type="date" id="voorkeursdatum" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-lg">Verstuur aanvraag</button>

      <p class="form-note">Privacy: uw gegevens worden beveiligd en alleen gebruikt voor offerte en communicatie.</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ naam: '', bedrijf: '', email: '', telefoon: '', dienst: '', beschrijving: '', voorkeursdatum: '' })

const submitForm = () => {
  console.log('Form submitted:', form.value)
  alert('Dank u! We nemen contact met u op binnen 24 uur.')
  form.value = { naam: '', bedrijf: '', email: '', telefoon: '', dienst: '', beschrijving: '', voorkeursdatum: '' }
}
</script>

<style scoped>
.form-intro { margin-bottom: 1.5rem; }
.section-label { display:inline-block; margin-bottom:0.75rem; color:var(--primary-teal); font-weight:700; text-transform:uppercase; letter-spacing:0.12em; font-size:0.85rem; }
.form-intro h2 { margin:0 0 0.5rem; font-size:clamp(1.6rem,2.4vw,2rem); color:var(--dark-text); }
.trust-badges { display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-bottom:1rem; }
.trust-card { padding:1rem; border-radius:12px; background:#f5fdff; text-align:center; font-weight:600; border:1px solid rgba(31,164,191,0.12); }
.quote-form { background:white; padding:2rem; border-radius:12px; box-shadow:0 6px 18px rgba(16,24,40,0.04); }
.form-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:1.25rem; margin-bottom:1rem; }
.form-group { display:flex; flex-direction:column; }
.form-group.full-width { grid-column: 1 / -1; }
.form-note { margin-top:1rem; font-size:0.9rem; color:#64748b; }

@media (max-width:720px){ .form-grid { grid-template-columns:1fr; } .trust-badges { grid-template-columns:1fr; } }
</style>

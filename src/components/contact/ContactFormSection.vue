<template>
  <form @submit.prevent="submitContactForm" class="contact-form">
    <h2>Stuur ons een bericht</h2>
    <div class="form-group">
      <label for="contact-naam">Uw naam *</label>
      <input v-model="contactForm.naam" type="text" id="contact-naam" required />
    </div>
    <div class="form-group">
      <label for="contact-email">E-mailadres *</label>
      <input v-model="contactForm.email" type="email" id="contact-email" required />
    </div>
    <div class="form-group">
      <label for="contact-onderwerp">Onderwerp *</label>
      <input v-model="contactForm.onderwerp" type="text" id="contact-onderwerp" required />
    </div>
    <div class="form-group">
      <label for="contact-bericht">Uw bericht *</label>
      <textarea v-model="contactForm.bericht" id="contact-bericht" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Verstuur</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contactForm = ref({ naam: '', email: '', onderwerp: '', bericht: '' })

const submitContactForm = () => {
  console.log('Contact form submitted:', contactForm.value)
  alert('Dank u voor uw bericht! We nemen snel contact met u op.')
  contactForm.value = { naam: '', email: '', onderwerp: '', bericht: '' }
}
</script>

<style scoped>
.contact-form { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 6px 18px rgba(16,24,40,0.04); }
.contact-form h2 { margin: 0 0 1rem; color: var(--dark-text); }
.form-group { margin-bottom: 1rem; display:flex; flex-direction:column; }
.form-group label { margin-bottom:0.5rem; font-weight:600; color:var(--dark-text); }
.form-group input, .form-group textarea { padding:0.8rem; border:1px solid #e2e8f0; border-radius:6px; font-family:inherit; }
.btn { display:inline-flex; padding:0.8rem 1.6rem; border-radius:999px; font-weight:700; cursor:pointer; border:1px solid transparent; }
.btn-primary { background:var(--primary-teal); color:white; }
</style>

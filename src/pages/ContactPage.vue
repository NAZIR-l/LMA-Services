<template>
  <div class="page-contact">
    <ContactHeroSection />

    <section class="section section-neu">
      <div class="container contact-main">
        <div class="contact-left" data-aos="fade-right">
          <ContactInfoSection />
          <ContactFollowSection style="margin-top: 2rem;" />
        </div>
        <div data-aos="fade-left" data-delay="150">
          <ContactFormSection />
        </div>
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <ContactMapSection />
      </div>
    </section>

    <CtaCallToAction
      title="Nog vragen?"
      subtitle="Neem contact op en we helpen u graag verder."
      buttonText="Offerte aanvragen"
      buttonLink="/offerte-aanvragen"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactHeroSection from '../components/contact/ContactHeroSection.vue'
import ContactInfoSection from '../components/contact/ContactInfoSection.vue'
import ContactFormSection from '../components/contact/ContactFormSection.vue'
import ContactMapSection from '../components/contact/ContactMapSection.vue'
import ContactFollowSection from '../components/contact/ContactFollowSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'

const contactForm = ref({
  naam: '',
  email: '',
  onderwerp: '',
  bericht: ''
})

const submitContactForm = () => {
  console.log('Contact form submitted:', contactForm.value)
  alert('Dank u voor uw bericht! We nemen snel contact met u op.')
  contactForm.value = {
    naam: '',
    email: '',
    onderwerp: '',
    bericht: ''
  }
}
</script>

<style scoped>
.page-contact { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }

.contact-main {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  align-items: start;
}
.contact-left { display: flex; flex-direction: column; }

.contact-info-section h2,
.contact-form h2 {
  margin: 0 0 1.5rem;
  font-size: 1.6rem;
  color: var(--dark-text);
}

.contact-item {
  margin-bottom: 2rem;
}

.contact-item h3 {
  margin: 0 0 0.5rem;
  color: var(--dark-text);
}

.contact-item p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.7;
}

.contact-item a {
  color: var(--primary-teal);
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--dark-text);
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-teal);
  box-shadow: 0 0 0 3px rgba(31, 164, 191, 0.1);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.8rem;
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

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.2rem;
  background: var(--primary-teal);
  color: white;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.25s ease;
}

.social-link:hover {
  background: var(--dark-teal);
}

@media (max-width: 1024px) {
  .contact-main { grid-template-columns: 1fr; }
}
</style>

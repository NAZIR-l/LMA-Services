<template>
  <div class="page-offerte">
    <OfferteHeroSection />

    <section class="section section-neu">
      <div class="container offerte-layout">
        <!-- Side info -->
        <div class="offerte-sidebar" data-aos="fade-right">
          <div class="sidebar-card neu-card">
            <p class="eyebrow">Waarom kiezen voor LMA?</p>
            <h3>Uw voordelen</h3>
            <ul class="check-list">
              <li>Maatwerk oplossing voor uw behoeften</li>
              <li>Transparante prijzen zonder verrassingen</li>
              <li>Persoonlijk contact met ons team</li>
              <li>Vrijblijvende offerte, geen verplichtingen</li>
              <li>Respons gegarandeerd binnen 24 uur</li>
              <li>Gecertificeerde producten en methoden</li>
              <li>Actief in heel Nederland</li>
            </ul>
          </div>

          <div class="contact-alt neu-card">
            <h4>Liever bellen?</h4>
            <a href="tel:+31628589077" class="big-phone">+31 628 589 077</a>
            <p>Bereikbaar ma–vr 08:00–18:00</p>
            <a href="mailto:info@lmaschoonmaken.nl" class="btn btn-outline btn-sm" style="margin-top: 0.75rem;">
              info@lmaschoonmaken.nl
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="offerte-main" data-aos="fade-left" data-delay="150">
          <OfferteFormSection />
        </div>
      </div>
    </section>

    <CtaCallToAction
      title="Nog vragen voor de offerte?"
      subtitle="Neem direct contact op — wij helpen u graag."
      buttonText="Contact opnemen"
      buttonLink="/contact"
    />
  </div>
</template>

<script setup lang="ts">
import OfferteHeroSection from '../components/offerte/OfferteHeroSection.vue'
import OfferteFormSection from '../components/offerte/OfferteFormSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'
</script>

<style scoped>
.page-offerte { width: 100%; }

.offerte-layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 2.5rem;
  align-items: start;
}

.offerte-sidebar { display: flex; flex-direction: column; gap: 1.5rem; position: sticky; top: 90px; }

.sidebar-card { padding: 2rem; }
.sidebar-card h3 { font-size: 1.2rem; margin-bottom: 1.25rem; }

.contact-alt { padding: 1.75rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.contact-alt h4 { font-size: 1rem; color: var(--dark-text); margin: 0; }
.big-phone { font-family: 'Montserrat', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--primary-teal); text-decoration: none; }
.big-phone:hover { color: var(--dark-teal); }
.contact-alt p { font-size: 0.82rem; color: var(--text-muted); margin: 0; }

@media (max-width: 1024px) {
  .offerte-layout { grid-template-columns: 1fr; }
  .offerte-sidebar { position: static; }
}
</style>

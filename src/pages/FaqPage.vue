<template>
  <div class="page-faq">
    <FaqHeroSection />

    <section class="section section-light">
      <div class="container">
        <FaqAccordionSection />
      </div>
    </section>

    <CtaCallToAction
      title="Uw vraag niet gevonden?"
      subtitle="Neem gerust contact met ons op! We helpen graag."
      buttonText="Contact opnemen"
      buttonLink="/contact"
    />
  </div>
</template>

<script setup lang="ts">
import FaqHeroSection from '../components/faq/FaqHeroSection.vue'
import FaqAccordionSection from '../components/faq/FaqAccordionSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'
</script>

<style scoped>
.page-faq { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }
</style>

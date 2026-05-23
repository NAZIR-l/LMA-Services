<template>
  <div class="page-werken-bij">
    <WerkenbijHeroSection />

    <section class="section section-light">
      <div class="container">
        <WerkenbijBenefitsSection />
      </div>
    </section>

    <section class="section section-gray">
      <div class="container">
        <WerkenbijVacanciesSection />
      </div>
    </section>

    <CtaCallToAction
      title="Nog vragen?"
      subtitle="Neem contact op of stuur ons je CV."
      buttonText="Contact opnemen"
      buttonLink="/contact"
    />
  </div>
</template>

<script setup lang="ts">
import WerkenbijHeroSection from '../components/werkenbij/WerkenbijHeroSection.vue'
import WerkenbijBenefitsSection from '../components/werkenbij/WerkenbijBenefitsSection.vue'
import WerkenbijVacanciesSection from '../components/werkenbij/WerkenbijVacanciesSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'
</script>

<style scoped>
.page-werken-bij { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }
.section-light { background: #f9fafb; }
.section-gray { background: #f3f4f6; }
</style>

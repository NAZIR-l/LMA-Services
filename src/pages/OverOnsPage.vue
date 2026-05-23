<template>
  <div class="page-over-ons">
    <OverOnsHeroSection />

    <section class="section section-light">
      <div class="container">
        <OverOnsContentSection />
      </div>
    </section>

    <section class="section section-light">
      <div class="container">
        <OverOnsTeamSection />
      </div>
    </section>

    <CtaCallToAction
      title="Klaar om met ons samen te werken?"
      subtitle="Laten we kennis maken en bespreken hoe LMA Services uw bedrijf kan helpen."
      buttonText="Offerte aanvragen"
      buttonLink="/offerte-aanvragen"
    />
  </div>
</template>

<script setup lang="ts">
import OverOnsHeroSection from '../components/overons/OverOnsHeroSection.vue'
import OverOnsContentSection from '../components/overons/OverOnsContentSection.vue'
import OverOnsTeamSection from '../components/overons/OverOnsTeamSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'
</script>

<style scoped>
.page-over-ons { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }
</style>

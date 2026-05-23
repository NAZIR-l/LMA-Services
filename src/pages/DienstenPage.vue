<template>
  <div class="page-diensten">
    <DienstenHeroSection />

    <section class="section section-light">
      <div class="container">
        <DienstenDetailsSection />
      </div>
    </section>

    <CtaCallToAction
      title="Geïnteresseerd in één van onze diensten?"
      subtitle="Neem vandaag contact op voor een vrijblijvende offerte"
      buttonText="Offerte aanvragen"
      buttonLink="/offerte-aanvragen"
    />
  </div>
</template>

<script setup lang="ts">
import DienstenHeroSection from '../components/diensten/DienstenHeroSection.vue'
import DienstenDetailsSection from '../components/diensten/DienstenDetailsSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'
</script>

<style scoped>
.page-diensten { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }
</style>

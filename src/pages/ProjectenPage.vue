<template>
  <div class="page-projecten">
    <ProjectenHeroSection />

    <section class="section section-light">
      <div class="container">
        <ProjectenGridSection />
      </div>
    </section>

    <CtaCallToAction
      title="Wij willen graag ook voor u aan het werk"
      subtitle="Neem contact op voor uw schoonmaakproject"
      buttonText="Offerte aanvragen"
      buttonLink="/offerte-aanvragen"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectenHeroSection from '../components/projecten/ProjectenHeroSection.vue'
import ProjectenGridSection from '../components/projecten/ProjectenGridSection.vue'
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'
</script>

<style scoped>
.page-projecten { width: 100%; }
.container { max-width: 1300px; margin: 0 auto; padding: 0 2rem; }
</style>

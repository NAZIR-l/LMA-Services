<template>
  <div class="page-home">
    <HeroSection />
    <ServicesSection />
    <ApproachSection />
    <UspsSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import ApproachSection from "../components/home/ApproachSection.vue";
import UspsSection from "../components/home/UspsSection.vue";
import CtaSection from "../components/home/CtaSection.vue";
</script>

<style scoped>
.page-home { width:100%; }
</style>

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
import HeroSection from '../components/home/HeroSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import ApproachSection from '../components/home/ApproachSection.vue'
import UspsSection from '../components/home/UspsSection.vue'
import CtaSection from '../components/home/CtaSection.vue'
</script>

<style scoped>
.page-home { width: 100%; }

.home-hero { padding: 5rem 0; background: linear-gradient(135deg, rgba(31, 164, 191, 0.98) 0%, rgba(14, 127, 153, 0.98) 100%); color: white; }

.hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 2.5rem; align-items: center; }

.hero-eyebrow { display: inline-block; margin-bottom: 1rem; font-size: 0.95rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.9); }

.hero-copy h1 { margin: 0; font-size: clamp(2.8rem, 5vw, 4.4rem); line-height: 1.02; }

.hero-copy p { margin: 1.5rem 0 2rem; max-width: 44rem; color: rgba(255,255,255,0.95); font-size: 1.05rem; line-height: 1.8; }

.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; }

.hero-highlights { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1rem; margin-top: 3rem; }

.hero-highlights div { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.18); border-radius: 18px; padding: 1.25rem 1.5rem; text-align: center; }

.hero-highlights strong { display: block; font-size: 1.8rem; margin-bottom: 0.35rem; }

.hero-highlights span { display: block; color: rgba(255,255,255,0.8); }

.home-services, .home-usps, .home-approach { padding: 5rem 0; }

.services-grid, .method-steps, .usp-grid { display: grid; gap: 1.5rem; }

.services-grid { grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); }

.service-card, .step-card, .usp-card { padding: 2rem; border-radius: 24px; background: white; border: 1px solid rgba(31,164,191,0.12); transition: transform 0.3s ease, box-shadow 0.3s ease; }

.service-card:hover, .step-card:hover, .usp-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(31,164,191,0.12); }

.service-icon, .usp-icon { display: inline-flex; width: 56px; height: 56px; align-items: center; justify-content: center; border-radius: 18px; background: var(--light-teal); color: var(--dark-teal); font-size: 1.8rem; margin-bottom: 1.25rem; }

.method-steps { grid-template-columns: repeat(4, minmax(0,1fr)); }

.step-number { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 50%; background: var(--primary-teal); color: white; font-weight: 700; margin-bottom: 1rem; }

.home-cta { padding: 4rem 0; }

.cta-banner { display: grid; grid-template-columns: 1.1fr auto; gap: 2rem; align-items: center; }

@media (max-width: 1024px) {
  .hero-grid, .cta-banner { grid-template-columns: 1fr; }
  .hero-highlights { grid-template-columns: repeat(3, minmax(0,1fr)); }
}

@media (max-width: 860px) {
  .home-services, .home-approach, .home-usps, .home-cta { padding: 3rem 0; }
}

@media (max-width: 720px) {
  .services-grid, .method-steps, .usp-grid, .hero-highlights { grid-template-columns: 1fr; }
  .hero-copy h1 { font-size: 2.4rem; }
}
</style>

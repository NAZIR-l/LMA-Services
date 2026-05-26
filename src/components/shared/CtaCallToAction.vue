<template>
  <section class="cta-section section-teal">
    <div class="cta-arc-1"></div>
    <div class="cta-arc-2"></div>
    <div class="container cta-inner">
      <div class="cta-text" data-aos="fade-right">
        <p class="eyebrow eyebrow-white">Aan de slag</p>
        <h2>{{ title }}</h2>
        <p class="cta-sub">{{ subtitle }}</p>
      </div>
      <router-link :to="buttonLink" class="btn btn-white btn-lg cta-btn" data-aos="scale-up" data-delay="200">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        {{ buttonText }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Geïnteresseerd?' },
  subtitle: { type: String, default: 'Neem vandaag contact op voor meer informatie.' },
  buttonText: { type: String, default: 'Offerte aanvragen' },
  buttonLink: { type: String, default: '/offerte-aanvragen' }
})
</script>

<style scoped>
.cta-section {
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.cta-arc-1, .cta-arc-2 {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.07);
  pointer-events: none;
}
.cta-arc-1 { width: 350px; height: 350px; right: -80px; top: -150px; }
.cta-arc-2 { width: 200px; height: 200px; left: -60px; bottom: -80px; border-color: rgba(255,255,255,0.05); }

.cta-inner {
  display: grid;
  grid-template-columns: 1.3fr auto;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.cta-text h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: white;
  margin: 0.5rem 0 0.75rem;
}

.cta-sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
  max-width: 52ch;
  margin: 0;
}

.cta-btn {
  flex-shrink: 0;
  box-shadow: 0 8px 28px rgba(0,0,0,0.18);
}

@media (max-width: 860px) {
  .cta-inner { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
  .cta-sub { margin: 0 auto; }
  .cta-btn { align-self: center; }
  .cta-section { padding: 4rem 0; }
}
</style>

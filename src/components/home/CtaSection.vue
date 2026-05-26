<template>
  <section class="home-cta">
    <div class="cta-inner container">
      <!-- Decorative elements -->
      <div class="cta-arc cta-arc-1"></div>
      <div class="cta-arc cta-arc-2"></div>

      <div class="cta-content" data-aos="fade-up">
        <p class="eyebrow eyebrow-white">Neem de eerste stap</p>
        <h2>Klaar voor een schone werkomgeving?</h2>
        <p class="cta-sub">Ontvang binnen 24 uur een gepersonaliseerd voorstel zonder verplichtingen. Actief in heel Nederland.</p>

        <div class="cta-trust">
          <div class="trust-item" v-for="t in trust" :key="t">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {{ t }}
          </div>
        </div>
      </div>

      <div class="cta-action" data-aos="scale-up" data-delay="200">
        <router-link to="/offerte-aanvragen" class="btn btn-white btn-lg cta-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Offerte aanvragen
        </router-link>
        <a href="tel:+31628589077" class="btn btn-white-outline btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 17z"/></svg>
          Bel direct
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trust = [
  'Actief in heel Nederland',
  'Gecertificeerde producten',
  'Getraind personeel',
  'Reactie binnen 24 uur',
]
</script>

<style scoped>
.home-cta {
  background: linear-gradient(135deg, #1fa4bf 0%, #0a6a82 100%);
  padding: 5rem 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-inner {
  display: grid;
  grid-template-columns: 1.2fr auto;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Decorative arcs */
.cta-arc {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.07);
  pointer-events: none;
}
.cta-arc-1 {
  width: 400px; height: 400px;
  right: -80px; top: -180px;
  animation: floatSlow 10s ease-in-out infinite;
}
.cta-arc-2 {
  width: 240px; height: 240px;
  left: -60px; bottom: -100px;
  animation: floatSlow 8s 2s ease-in-out infinite reverse;
  border-color: rgba(255,255,255,0.05);
}

.cta-content h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: white;
  margin: 0.5rem 0 1rem;
}

.cta-sub {
  color: rgba(255,255,255,0.88);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 50ch;
  margin-bottom: 1.5rem;
}

.cta-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.9);
  font-weight: 600;
}

.trust-item svg { color: #7effcc; flex-shrink: 0; }

.cta-action {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  flex-shrink: 0;
}

.cta-btn {
  box-shadow: 0 12px 36px rgba(0,0,0,0.2);
  animation: pulse-glow-white 3s ease-in-out infinite;
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

@keyframes pulse-glow-white {
  0%, 100% { box-shadow: 0 12px 36px rgba(0,0,0,0.2); }
  50%       { box-shadow: 0 12px 48px rgba(0,0,0,0.28), 0 0 0 8px rgba(255,255,255,0.06); }
}

@media (max-width: 900px) {
  .cta-inner { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
  .cta-sub { margin-left: auto; margin-right: auto; }
  .cta-trust { justify-content: center; }
  .cta-action { flex-direction: row; justify-content: center; flex-wrap: wrap; }
}

@media (max-width: 520px) {
  .cta-action { flex-direction: column; }
  .home-cta { padding: 4rem 0; }
}
</style>

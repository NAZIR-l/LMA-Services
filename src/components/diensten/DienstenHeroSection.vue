<template>
  <section class="page-hero-img">
    <!-- Professional deep cleaning / disinfection spray -->
    <div class="phi-bg" style="background-image: url('https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1400&h=600&q=85')"></div>
    <div class="phi-overlay"></div>
    <div class="phi-content container">
      <p class="eyebrow eyebrow-white" data-aos="fade-up">Wat wij aanbieden</p>
      <h1 data-aos="fade-up" data-delay="100">Onze Diensten</h1>
      <p data-aos="fade-up" data-delay="200">Professionele schoonmaakoplossingen op maat voor elk bedrijfstype en elke locatie in heel Nederland.</p>

      <div class="services-pills" data-aos="fade-up" data-delay="300">
        <div class="service-pill" v-for="s in services" :key="s.name">
          <span v-html="s.icon"></span>
          {{ s.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'Kantoorschoonmaak',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
  },
  {
    name: 'Dieptereiniging',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },
  {
    name: 'Ruiten & Gevels',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
  },
  {
    name: 'Evenementen & Horeca',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`
  }
]
</script>

<style scoped>
.page-hero-img {
  position: relative;
  overflow: hidden;
  min-height: 380px;
  display: flex;
  align-items: center;
  padding: 5.5rem 0 4.5rem;
  color: white;
  text-align: center;
}

.phi-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: phiZoom 8s ease-out forwards;
}

.phi-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(6,48,62,0.82) 0%, rgba(10,106,130,0.70) 100%);
}

.phi-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.phi-content h1 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  color: white;
  margin-bottom: 1rem;
  animation: phiSlideUp 0.7s 0.1s ease both;
}

.phi-content > p {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.88);
  max-width: 52ch;
  margin: 0 auto;
  line-height: 1.8;
  animation: phiSlideUp 0.7s 0.2s ease both;
}

.phi-content .eyebrow {
  animation: phiSlideUp 0.6s ease both;
}

.services-pills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
  animation: phiSlideUp 0.7s 0.3s ease both;
}

.service-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s ease;
}
.service-pill:hover { background: rgba(255,255,255,0.22); }

@keyframes phiZoom {
  from { transform: scale(1.06); }
  to   { transform: scale(1.0); }
}
@keyframes phiSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}

@media (max-width: 640px) {
  .page-hero-img { min-height: 300px; padding: 4rem 0 3.5rem; }
  .phi-content h1 { font-size: clamp(1.8rem, 7vw, 2.4rem); }
  .service-pill { font-size: 0.82rem; padding: 0.55rem 1rem; }
}
</style>

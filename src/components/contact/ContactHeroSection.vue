<template>
  <section class="page-hero-img">
    <!-- Clean modern office reception / contact setting -->
    <div class="phi-bg" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&h=600&q=85')"></div>
    <div class="phi-overlay"></div>
    <div class="phi-content container">
      <p class="eyebrow eyebrow-white">Neem contact op</p>
      <h1>Contact</h1>
      <p>Stel uw vraag, vraag een offerte aan of maak een afspraak. We reageren binnen 24 uur.</p>
    </div>
  </section>
</template>

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

.phi-content p {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.88);
  max-width: 52ch;
  margin: 0 auto;
  line-height: 1.8;
  animation: phiSlideUp 0.7s 0.2s ease both;
}

.phi-content .eyebrow { animation: phiSlideUp 0.6s ease both; }

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
}
</style>

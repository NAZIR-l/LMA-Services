<template>
  <section class="home-hero">
    <!-- Background decorative arcs (inspired by the LMA logo) -->
    <div class="hero-bg-arc arc-1"></div>
    <div class="hero-bg-arc arc-2"></div>
    <div class="hero-bg-arc arc-3"></div>

    <div class="hero-inner container">
      <!-- Left: text content -->
      <div class="hero-left">
 

        <h1 class="hero-heading">
          Uw Specialist in<br />
          <span class="heading-accent">Professionele</span><br />
          Schoonmaakdiensten
        </h1>

        <p class="hero-sub">
          LMA Services B.V. — uw betrouwbare schoonmaakpartner. Van dagelijks kantooronderhoud tot grootschalige evenementenreiniging.
        </p>

        <div class="hero-actions">
          <router-link to="/offerte-aanvragen" class="btn btn-white btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Vraag vrijblijvend offerte aan
          </router-link>
          <router-link to="/diensten" class="btn btn-white-outline btn-lg">Onze diensten</router-link>
        </div>

        <div class="hero-stats">
          <div class="hero-stat" v-for="s in stats" :key="s.label">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right: image card -->
      <div class="hero-right">
        <div class="hero-image-wrap">
          <img class="hero-photo" :src="heroImg" alt="LMA Services schoonmaakteam" />
          <!-- Floating badge cards -->

          <div class="hero-float-card card-bottom">
            <div class="float-icon float-icon-teal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="float-text">
              <strong>Getraind personeel</strong>
              <span>Direct inzetbaar</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="hero-wave">
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImg = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85'

const stats = [
  { value: '+500', label: 'Tevreden klanten' },
  { value: '100%', label: 'Gecertificeerde producten' },
  { value: '24u', label: 'Reactietijd offerte' },
]
</script>

<style scoped>
.home-hero {
  background: linear-gradient(135deg, #1fa4bf 0%, #0a6a82 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
}

/* --- Background decorative arcs (echo logo shape) --- */
.hero-bg-arc {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.07);
  pointer-events: none;
}
.arc-1 {
  width: 600px; height: 600px;
  right: -120px; top: -200px;
  animation: floatSlow 8s ease-in-out infinite;
}
.arc-2 {
  width: 420px; height: 420px;
  right: 60px; top: -80px;
  animation: floatSlow 10s 2s ease-in-out infinite reverse;
  border-color: rgba(255,255,255,0.05);
}
.arc-3 {
  width: 250px; height: 250px;
  left: -80px; bottom: 60px;
  border-color: rgba(255,255,255,0.06);
  animation: floatSlow 12s 1s ease-in-out infinite;
}

/* --- Layout --- */
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* --- Left --- */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.95);
  margin-bottom: 1.5rem;
  animation: heroSlideUp 0.7s 0.1s ease both;
}
.badge-dot {
  width: 8px; height: 8px;
  background: #7effcc;
  border-radius: 50%;
  animation: pulse-glow 2s infinite;
  box-shadow: 0 0 0 0 rgba(126, 255, 204, 0.5);
}

.hero-heading {
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 900;
  line-height: 1.08;
  color: white;
  margin-bottom: 1.25rem;
  animation: heroSlideUp 0.7s 0.2s ease both;
}

.heading-accent {
  background: linear-gradient(90deg, #7effcc, #d6f2f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.88);
  max-width: 50ch;
  line-height: 1.8;
  margin-bottom: 2rem;
  animation: heroSlideUp 0.7s 0.3s ease both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
  animation: heroSlideUp 0.7s 0.4s ease both;
}

/* Stats row */
.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  animation: heroSlideUp 0.7s 0.5s ease both;
}
.hero-stat {
  display: flex;
  flex-direction: column;
}
.hero-stat strong {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  line-height: 1;
}
.hero-stat span {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  margin-top: 0.25rem;
}

/* --- Right / Image --- */
.hero-right {
  animation: heroScale 0.9s 0.3s ease both;
}

.hero-image-wrap {
  position: relative;
  border-radius: 24px;
  overflow: visible;
}

.hero-photo {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.3);
  display: block;
}

/* Floating info cards */
.hero-float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255,255,255,0.97);
  border-radius: 16px;
  padding: 0.9rem 1.1rem;
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
  backdrop-filter: blur(8px);
  min-width: 185px;
}

.card-top {
  top: 20px;
  left: -24px;
  animation: float 5s 1s ease-in-out infinite;
}

.card-bottom {
  bottom: 24px;
  right: -20px;
  animation: float 6s 0.5s ease-in-out infinite;
}

.float-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--light-teal);
  color: var(--dark-teal);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.float-icon-teal {
  background: var(--primary-teal);
  color: white;
}

.float-text strong {
  display: block;
  font-size: 0.85rem;
  color: var(--dark-text);
  font-weight: 700;
  line-height: 1.2;
}
.float-text span {
  font-size: 0.75rem;
  color: var(--text-light);
}

/* Wave */
.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  line-height: 0;
  z-index: 3;
}
.hero-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .hero-right { order: -1; }
  .hero-photo { height: 340px; }
  .home-hero { padding: 4rem 0 4rem; }
  .hero-stats { gap: 1.5rem; }
}

@media (max-width: 640px) {
  .hero-photo { height: 260px; }
  .card-top { left: 0; top: 10px; min-width: 160px; }
  .card-bottom { right: 0; bottom: 10px; min-width: 160px; }
  .hero-actions { flex-direction: column; }
  .home-hero { padding: 3rem 0 3.5rem; }
}

/* Keyframes reused from global */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-10px) rotate(2deg); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
@keyframes heroSlideUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: none; }
}
@keyframes heroScale {
  from { opacity: 0; transform: scale(0.94) translateY(20px); }
  to   { opacity: 1; transform: none; }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(126, 255, 204, 0.5); }
  50%       { box-shadow: 0 0 0 8px rgba(126, 255, 204, 0); }
}
</style>

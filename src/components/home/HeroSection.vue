<template>
  <section class="home-hero">

    <!-- ── Swiper background slideshow ── -->
    <div class="hero-swiper-wrap">
      <swiper
        :modules="modules"
        :autoplay="{ delay: 4500, disableOnInteraction: false }"
        :effect="'fade'"
        :fade-effect="{ crossFade: true }"
        :loop="true"
        :speed="1200"
        :pagination="{ clickable: true }"
        class="hero-swiper"
      >
        <swiper-slide v-for="(slide, i) in slides" :key="i">
          <div
            class="slide-bg"
            :style="{ backgroundImage: `url(${slide.img})` }"
          ></div>
          <!-- Per-slide overlay (slightly different tint per image) -->
          <div class="slide-overlay"></div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- ── Centered content (same pattern as all sections) ── -->
    <div class="hero-inner container">

      <!-- <div class="hero-badge">
        <span class="badge-dot"></span>
        Professionele schoonmaakdiensten
      </div> -->

      <h1 class="hero-heading">
        Uw Specialist in<br />
        <span class="heading-accent">Professionele</span><br />
        Schoonmaakdiensten
      </h1>

      <p class="hero-sub">
        LMA Services B.V. — uw betrouwbare schoonmaakpartner. Van dagelijks
        kantooronderhoud tot grootschalige evenementenreiniging.
      </p>

      <div class="hero-actions">
        <router-link to="/offerte-aanvragen" class="hero-btn-primary">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Vraag vrijblijvend offerte aan
        </router-link>
        <router-link to="/diensten" class="hero-btn-outline">
          Onze diensten
        </router-link>
      </div>

      <!-- Stats -->
      <div class="hero-stats">
        <div class="hero-stat" v-for="s in stats" :key="s.label">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const modules = [Autoplay, EffectFade, Pagination]

const slides = [
 
  {
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=85',
  },
  {
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=85',
  },
  {
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1800&q=85',
  },
  {
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1800&q=85',
  },
]

const stats = [
  { value: '+500', label: 'Tevreden klanten' },
  { value: '100%', label: 'Gecertificeerde producten' },
  { value: '24u',  label: 'Reactietijd offerte' },
]
</script>

<style scoped>
/* ── Section shell ────────────────────────────────────────── */
.home-hero {
  position: relative;
  overflow: hidden;
  min-height: 92vh;
  display: flex;
  align-items: center;
  color: white;
}

/* ── Swiper fills the entire background ───────────────────── */
.hero-swiper-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-swiper {
  width: 100%;
  height: 100%;
}

/* Each slide image */
.slide-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.04);
  animation: kenBurns 5s ease-out forwards;
}

/* Subtle Ken Burns zoom on each slide */
@keyframes kenBurns {
  from { transform: scale(1.06); }
  to   { transform: scale(1.0); }
}

/* Dark gradient overlay */
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(6, 48, 62, 0.80) 0%,
    rgba(8, 68, 86, 0.72) 55%,
    rgba(8, 68, 86, 0.68) 100%
  );
}

/* ── Swiper pagination dots ───────────────────────────────── */
:deep(.swiper-pagination) {
  bottom: 6rem;
  z-index: 10;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.45);
  opacity: 1;
  transition: width 0.3s ease, background 0.3s ease;
  border-radius: 999px;
}

:deep(.swiper-pagination-bullet-active) {
  width: 28px;
  background: white;
}

/* ── Content — centered like all other sections ───────────── */
.hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 8rem;
}

/* ── Badge ────────────────────────────────────────────────── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.28);
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 1.75rem;
  letter-spacing: 0.03em;
  animation: heroSlideUp 0.6s 0.1s ease both;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #7effcc;
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulseDot 2s ease-in-out infinite;
}

/* ── Heading ──────────────────────────────────────────────── */
.hero-heading {
  font-size: clamp(2.4rem, 5.5vw, 5rem);
  font-weight: 900;
  line-height: 1.08;
  color: white;
  margin-bottom: 1.5rem;
  max-width: 16ch;
  animation: heroSlideUp 0.7s 0.2s ease both;
}

.heading-accent {
  background: linear-gradient(90deg, #7effcc, #a8f0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Subtitle ─────────────────────────────────────────────── */
.hero-sub {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 54ch;
  line-height: 1.85;
  margin-bottom: 2.5rem;
  animation: heroSlideUp 0.7s 0.3s ease both;
}

/* ── Buttons ──────────────────────────────────────────────── */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  animation: heroSlideUp 0.7s 0.4s ease both;
}

.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--dark-teal);
  border: 2px solid white;
  border-radius: 999px;
  font-family: 'Montserrat', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.95rem 2rem;
  text-decoration: none;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
  transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
}
.hero-btn-primary:hover {
  background: var(--light-teal);
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.25);
}

.hero-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 999px;
  font-family: 'Montserrat', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.95rem 2rem;
  text-decoration: none;
  transition: background 0.25s, border-color 0.25s, transform 0.25s;
}
.hero-btn-outline:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: white;
  transform: translateY(-2px);
}

/* ── Stats ────────────────────────────────────────────────── */
.hero-stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  animation: heroSlideUp 0.7s 0.5s ease both;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.hero-stat:last-child { border-right: none; }

.hero-stat strong {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  line-height: 1;
}
.hero-stat span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 0.3rem;
  white-space: nowrap;
}

/* ── Wave ─────────────────────────────────────────────────── */
.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  line-height: 0;
  z-index: 5;
  pointer-events: none;
}
.hero-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

/* ── Tablet ───────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .home-hero { min-height: 78vh; }
  .hero-heading { font-size: clamp(2rem, 5vw, 3.4rem); }
  :deep(.swiper-pagination) { bottom: 5rem; }
}

/* ── Mobile ───────────────────────────────────────────────── */
@media (max-width: 640px) {
  .home-hero { min-height: 100svh; }

  .slide-overlay {
    background: linear-gradient(
      to bottom,
      rgba(6, 48, 62, 0.88) 0%,
      rgba(8, 68, 86, 0.84) 100%
    );
  }

  .hero-inner {
    padding-bottom: 7rem;
  }

  .hero-heading {
    font-size: clamp(1.9rem, 7.5vw, 2.6rem);
    line-height: 1.12;
    max-width: 100%;
  }

  .hero-sub {
    font-size: 0.97rem;
    margin-bottom: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    margin-bottom: 3rem;
    width: 100%;
  }

  .hero-btn-primary,
  .hero-btn-outline {
    width: 100%;
    justify-content: center;
  }

  .hero-stat { padding: 0 1.5rem; }
  .hero-stat strong { font-size: 1.6rem; }

  .hero-wave svg { height: 48px; }

  :deep(.swiper-pagination) { bottom: 4.5rem; }
}

/* ── Small phones ─────────────────────────────────────────── */
@media (max-width: 380px) {
  .hero-heading { font-size: 1.75rem; }
  .hero-stat { padding: 0 1.1rem; }
  .hero-stat strong { font-size: 1.4rem; }
}

/* ── Keyframes ────────────────────────────────────────────── */
@keyframes heroSlideUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: none; }
}
@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 0 3px rgba(126, 255, 204, 0.25); }
  50%       { box-shadow: 0 0 0 8px rgba(126, 255, 204, 0); }
}
</style>

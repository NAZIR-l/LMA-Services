<template>
  <section class="home-hero">
    <!-- Decorative background arcs -->
    <div class="hero-bg-arc arc-1"></div>
    <div class="hero-bg-arc arc-2"></div>
    <div class="hero-bg-arc arc-3"></div>

    <div class="hero-inner container">

      <!-- ── Left: text ── -->
      <div class="hero-left">
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
          <router-link to="/offerte-aanvragen" class="btn btn-white btn-lg">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Vraag vrijblijvend offerte aan
          </router-link>
          <router-link to="/diensten" class="btn btn-white-outline btn-lg">
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

      <!-- ── Right: image ── -->
      <div class="hero-right">
        <div class="hero-image-wrap">
          <img
            class="hero-photo"
            :src="heroImg"
            alt="LMA Services schoonmaakteam"
          />

          <!-- Floating badge -->
          <div class="hero-float-card">
            <div class="float-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
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
  { value: '24u',  label: 'Reactietijd offerte' },
]
</script>

<style scoped>
/* ── Section ──────────────────────────────────────────────── */
.home-hero {
  background: linear-gradient(135deg, #1fa4bf 0%, #0a6a82 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6rem 0 5rem;
}

/* ── Decorative arcs ──────────────────────────────────────── */
.hero-bg-arc {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.07);
  pointer-events: none;
}
.arc-1 { width: 600px; height: 600px; right: -120px; top: -200px; animation: floatSlow 8s ease-in-out infinite; }
.arc-2 { width: 420px; height: 420px; right: 60px;   top: -80px;  animation: floatSlow 10s 2s ease-in-out infinite reverse; border-color: rgba(255,255,255,0.05); }
.arc-3 { width: 250px; height: 250px; left: -80px;   bottom: 60px; border-color: rgba(255,255,255,0.06); animation: floatSlow 12s 1s ease-in-out infinite; }

/* ── Layout grid ──────────────────────────────────────────── */
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ── Left: text ───────────────────────────────────────────── */
.hero-heading {
  font-size: clamp(2rem, 4.5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
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
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.88);
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

/* Stats */
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
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
}

/* ── Right: image ─────────────────────────────────────────── */
.hero-right {
  animation: heroScale 0.9s 0.3s ease both;
}

.hero-image-wrap {
  position: relative;
  border-radius: 24px;
}

.hero-photo {
  width: 100%;
  height: 460px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.3);
  display: block;
}

/* Floating badge */
.hero-float-card {
  position: absolute;
  bottom: 20px;
  right: -16px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 16px;
  padding: 0.85rem 1.1rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  animation: float 6s 0.5s ease-in-out infinite;
}

.float-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--primary-teal);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.float-text strong {
  display: block;
  font-size: 0.84rem;
  color: var(--dark-text);
  font-weight: 700;
  line-height: 1.2;
}
.float-text span {
  font-size: 0.74rem;
  color: var(--text-light);
}

/* ── Wave ─────────────────────────────────────────────────── */
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

/* ── Tablet (≤1024px) ─────────────────────────────────────── */
@media (max-width: 1024px) {
  .home-hero {
    padding: 4.5rem 0 4rem;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  /* Image on top, text below */
  .hero-right { order: -1; }

  .hero-photo {
    height: 360px;
  }

  .hero-float-card {
    right: 12px;
    bottom: 16px;
  }

  .hero-heading {
    font-size: clamp(1.9rem, 5vw, 2.8rem);
  }
}

/* ── Mobile (≤640px) ──────────────────────────────────────── */
@media (max-width: 640px) {
  .home-hero {
    padding: 3rem 0 3.5rem;
  }

  .hero-inner {
    gap: 1.75rem;
  }

  .hero-photo {
    height: 240px;
    border-radius: 18px;
  }

  .hero-image-wrap {
    border-radius: 18px;
  }

  /* Keep badge inside image bounds on small screens */
  .hero-float-card {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 0.75rem;
    animation: none;
    border-radius: 14px;
    min-width: unset;
    width: 100%;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .hero-heading {
    font-size: clamp(1.75rem, 7vw, 2.4rem);
    line-height: 1.15;
  }

  .hero-sub {
    font-size: 0.97rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    gap: 1.25rem;
  }

  .hero-stat strong {
    font-size: 1.35rem;
  }

  .hero-stat span {
    font-size: 0.75rem;
  }

  /* Shrink wave on mobile */
  .hero-wave svg {
    height: 48px;
  }
}

/* ── Small phones (≤380px) ────────────────────────────────── */
@media (max-width: 380px) {
  .hero-photo {
    height: 200px;
  }

  .hero-heading {
    font-size: 1.6rem;
  }

  .hero-stats {
    gap: 1rem;
  }
}

/* ── Keyframes ────────────────────────────────────────────── */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-10px) rotate(2deg); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
@keyframes heroSlideUp {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: none; }
}
@keyframes heroScale {
  from { opacity: 0; transform: scale(0.94) translateY(20px); }
  to   { opacity: 1; transform: none; }
}
</style>

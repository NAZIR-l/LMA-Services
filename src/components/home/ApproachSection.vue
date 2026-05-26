<template>
  <section class="home-approach section">
    <div class="container">
      <div class="approach-inner">
        <!-- Left: heading -->
        <div class="approach-header" data-aos="fade-right">
          <p class="eyebrow">Hoe wij werken</p>
          <h2 class="section-title">Onze werkwijze</h2>
          <div class="divider divider-left"></div>
          <p class="section-subtitle">In 4 eenvoudige stappen werkt u samen met LMA Services voor een schone, veilige werkomgeving.</p>
          <router-link to="/offerte-aanvragen" class="btn btn-primary mt-btn">
            Start vandaag nog
          </router-link>
        </div>

        <!-- Right: steps -->
        <div class="steps-grid">
          <div
            v-for="(step, idx) in steps"
            :key="idx"
            class="step-card neu-card"
            data-aos="fade-up"
            :data-delay="idx * 100 + 100"
          >
            <div class="step-header">
              <div class="step-num">{{ String(idx + 1).padStart(2, '0') }}</div>
              <div class="step-connector" v-if="idx < steps.length - 1"></div>
            </div>
            <div class="step-icon-wrap">
              <div class="icon-box" v-html="step.icon"></div>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Analyse van uw ruimte',
    text: 'We brengen uw specifieke schoonmaakbehoeften en prioriteiten in kaart via een gratis locatiebezoek.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>`
  },
  {
    title: 'Flexibel schema op maat',
    text: 'Wij stellen een programma op dat past bij uw activiteiten, openingstijden en budget.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`
  },
  {
    title: 'Professionele uitvoering',
    text: 'Getraind personeel met gecertificeerde producten werkt snel, discreet en effectief.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'Directe communicatie',
    text: 'Altijd bereikbaar voor vragen en aanpassingen. Regelmatige kwaliteitscontroles inbegrepen.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  }
]
</script>

<style scoped>
.home-approach { background: var(--white); }

.approach-inner {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  align-items: start;
}

.mt-btn { margin-top: 2rem; }

/* Steps grid */
.steps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.step-card {
  padding: 1.75rem;
  position: relative;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.step-num {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--primary-teal);
  background: var(--light-teal);
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
}

.step-icon-wrap {
  margin-bottom: 1rem;
}

.step-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--dark-text);
}

.step-card p {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 1100px) {
  .approach-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .approach-header { max-width: 500px; }
}

@media (max-width: 640px) {
  .steps-grid { grid-template-columns: 1fr; }
}
</style>

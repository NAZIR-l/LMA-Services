<template>
  <section class="werkenbij-vacancies section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <p class="eyebrow">Openstaande functies</p>
        <h2 class="section-title">Huidige vacatures</h2>
        <div class="divider"></div>
      </div>

  

      <!-- Open application -->
      <div class="open-app neu-card" data-aos="fade-up">
        <div class="open-app-icon">
          <div class="icon-box icon-box-teal icon-box-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
          </div>
        </div>
        <div class="open-app-text">
          <h3>Staat uw functie er niet bij?</h3>
          <p>Stuur een open sollicitatie. Wij zijn altijd op zoek naar gedreven medewerkers die bij ons team willen horen.</p>
        </div>
        <a href="mailto:info@lmaschoonmaken.nl?subject=Open+sollicitatie" class="btn btn-outline">Open sollicitatie</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.werkenbij-vacancies { background: var(--white); }

.vacancies-list { display: grid; gap: 1.5rem; margin-bottom: 2rem; }

.vacancy-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-left: 4px solid var(--primary-teal);
  border-radius: 20px;
}

.vacancy-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.vacancy-loc {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: var(--text-light);
  font-weight: 600;
}

.vacancy-card h3 { font-size: 1.25rem; color: var(--dark-text); margin: 0; }
.vacancy-card > .vacancy-top > p {
  color: var(--text-light);
  line-height: 1.7;
  margin: 0.5rem 0 0;
}

.vacancy-req strong {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--dark-text);
  margin-bottom: 0.75rem;
}

/* Open application */
.open-app {
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.open-app-text { flex: 1; }
.open-app-text h3 { font-size: 1.2rem; color: var(--dark-text); margin-bottom: 0.5rem; }
.open-app-text p { color: var(--text-light); line-height: 1.7; margin: 0; font-size: 0.95rem; }

@media (max-width: 720px) {
  .open-app { flex-direction: column; text-align: center; }
}
</style>

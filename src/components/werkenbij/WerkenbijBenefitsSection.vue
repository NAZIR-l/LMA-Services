<template>
  <section class="werkenbij-benefits section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <p class="eyebrow">Waarom LMA Services</p>
        <h2 class="section-title">Goed werkgeverschap</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Wij zoeken gemotiveerde mensen die trots zijn op hun werk. Dit bieden wij u in ruil.</p>
      </div>

      <div class="benefits-grid">
        <div
          v-for="(b, idx) in benefits"
          :key="idx"
          class="benefit-card neu-card"
          data-aos="fade-up"
          :data-delay="idx * 100"
        >
          <div class="icon-box icon-box-lg">
            <span v-html="b.icon"></span>
          </div>
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    title: 'Flexibele Werktijden',
    text: 'Werk wanneer het u uitkomt, afgestemd op uw eigen schema en privésituatie.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    title: 'Training & Scholing',
    text: 'Gratis training en professionele ontwikkelingsmogelijkheden voor iedere medewerker.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  {
    title: 'Doorgroeimogelijkheden',
    text: 'Ruimte voor persoonlijke groei en doorstroom naar leidinggevende functies.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    title: 'Marktconform Salaris',
    text: 'Competitieve beloning, sociale zekerheid en correcte uitbetaling op tijd.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    title: 'Fijn Team & Sfeer',
    text: 'Werk in een ondersteunend team met open communicatie en collegiale sfeer.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    title: 'Waardering & Erkenning',
    text: 'Wij waarderen goed werk en betrokkenheid met echte erkenning en feedback.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  }
]
</script>

<style scoped>
.werkenbij-benefits { background: var(--neu-bg); }

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.benefit-card {
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.benefit-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--dark-text); }
.benefit-card p { font-size: 0.9rem; color: var(--text-light); line-height: 1.7; margin: 0; }

@media (max-width: 900px) { .benefits-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .benefits-grid { grid-template-columns: 1fr; } }
</style>

<template>
  <section class="werkenbij-vacancies section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <p class="eyebrow">Openstaande functies</p>
        <h2 class="section-title">Huidige vacatures</h2>
        <div class="divider"></div>
      </div>

      <div class="vacancies-list">
        <article
          v-for="(v, idx) in vacancies"
          :key="v.id"
          class="vacancy-card neu-card"
          data-aos="fade-up"
          :data-delay="idx * 100"
        >
          <div class="vacancy-top">
            <div class="vacancy-meta">
              <span class="vacancy-badge badge badge-teal">{{ v.type }}</span>
              <span class="vacancy-loc">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ v.location }}
              </span>
            </div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.description }}</p>
          </div>

          <div class="vacancy-req">
            <strong>Vereisten:</strong>
            <ul class="check-list">
              <li v-for="req in v.requirements" :key="req">{{ req }}</li>
            </ul>
          </div>

          <router-link to="/contact" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Solliciteer nu
          </router-link>
        </article>
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
const vacancies = [
  {
    id: 1,
    title: 'Schoonmaker(s) Kantoor',
    type: 'Parttime / Fulltime',
    location: 'Veghel en omgeving',
    description: 'We zoeken ervaren schoonmakers voor ons kantoorschoonmaakteam. Ervaring is een plus, maar niet verplicht!',
    requirements: ['Betrouwbaar en nauwkeurig', 'Flexibel beschikbaar', 'Basiskennis Nederlands']
  },
  {
    id: 2,
    title: 'Horeca & Events Medewerker',
    type: 'Oproepbasis',
    location: 'Regionaal',
    description: 'Voor ons horeca en events team zoeken we representatief personeel met een sterke servicementaliteit.',
    requirements: ['Representatief voorkomen', 'Gastvrij karakter', 'Flexibel inzetbaar']
  },
  {
    id: 3,
    title: 'Teamleider Reiniging',
    type: 'Fulltime',
    location: 'Veghel',
    description: 'Ervaren leidinggevende gezocht. Je stuurt een team aan en bewaakt de kwaliteit van onze dienstverlening.',
    requirements: ['5+ jaar schoonmaak ervaring', 'Leidinggevende ervaring', 'Stressbestendig en organisatiegericht']
  }
]
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

<template>
  <section class="home-services section-neu section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <p class="eyebrow">Wat wij doen</p>
        <h2 class="section-title">Onze kerngebieden</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Complete, betrouwbare schoonmaakoplossingen afgestemd op uw sector en planning.</p>
      </div>

      <div class="services-grid">
        <article
          v-for="(s, i) in services"
          :key="i"
          class="service-card neu-card"
          data-aos="fade-up"
          :data-delay="i * 100"
        >
          <div class="card-icon-wrap">
            <div class="icon-box icon-box-lg" :class="i === 0 ? 'icon-box-teal' : ''">
              <span v-html="s.icon"></span>
            </div>
            <span class="card-number">0{{ i + 1 }}</span>
          </div>

          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>

          <ul class="card-features">
            <li v-for="f in s.features" :key="f">{{ f }}</li>
          </ul>

          <router-link :to="s.link" class="card-link">
            Meer informatie
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Bedrijfs- & Kantoorschoonmaak',
    desc: 'Dagelijkse of wekelijkse onderhoudsprogramma\'s voor een representatieve werkplek.',
    features: ['Dagelijks / wekelijks onderhoud', 'Vloeren en tapijten', 'Ramen & gevels'],
    link: '/diensten',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
  },
  {
    title: 'Diepte Reiniging & Desinfectie',
    desc: 'Grondige reiniging van keukens, apparatuur en gemeenschappelijke ruimtes.',
    features: ['Complete desinfectie', 'Gecertificeerde producten', 'Keuken & apparatuur'],
    link: '/diensten',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },
  {
    title: 'Ruiten & Gevels',
    desc: 'Technische reiniging van ramen en gevels, professioneel en veilig uitgevoerd.',
    features: ['Gevelbewassing', 'Ramen binnen & buiten', 'Hoogwerker inzetbaar'],
    link: '/diensten',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
  },
  {
    title: 'Evenementen & Horeca',
    desc: 'Voor- en nareiniging voor events, plus representatief hospitality personeel.',
    features: ['Pre- & post-event reiniging', 'Hospitality personeel', 'Snelle inzetbaarheid'],
    link: '/diensten',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
]
</script>

<style scoped>
.home-services { padding-bottom: 6rem; }

.section-header { margin-bottom: 3.5rem; }

/* Neumorphic grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.service-card {
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: default;
}

.service-card:hover .icon-box {
  transform: scale(1.08) rotate(-3deg);
}

.card-icon-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.card-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: rgba(31, 164, 191, 0.12);
  line-height: 1;
  align-self: flex-start;
}

.service-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--dark-text);
  margin: 0;
}

.service-card p {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

.card-features {
  display: grid;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.card-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-light);
}

.card-features li::before {
  content: '';
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background: var(--light-teal);
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230e7f99' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-size: 10px;
  background-repeat: no-repeat;
  background-position: center;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--primary-teal);
  font-weight: 700;
  font-size: 0.88rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(31, 164, 191, 0.1);
  transition: gap 0.22s ease, color 0.22s ease;
}
.card-link:hover { gap: 0.7rem; color: var(--dark-teal); }
.card-link svg { transition: transform 0.22s ease; }
.card-link:hover svg { transform: translateX(3px); }

@media (max-width: 1100px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr; } }
</style>

<template>
  <div class="diensten-details section">
    <article
      v-for="(service, idx) in services"
      :key="service.id"
      class="dienst-row"
      :class="{ reverse: idx % 2 === 1 }"
    >
      <!-- Image -->
      <div class="dienst-visual" data-aos="fade-right" :data-delay="100">
        <div class="visual-frame">
          <img :src="service.image" :alt="service.title" />
          <div class="visual-badge">
            <div class="icon-box icon-box-teal">
              <span v-html="service.icon"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="dienst-content" data-aos="fade-left" :data-delay="200">
        <span class="service-label">Service {{ String(idx + 1).padStart(2, '0') }}</span>
        <h2>{{ service.title }}</h2>
        <p class="service-desc">{{ service.description }}</p>
        <ul class="check-list">
          <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
        </ul>
        <router-link to="/offerte-aanvragen" class="btn btn-primary mt-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Offerte aanvragen
        </router-link>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    id: 1,
    title: 'Bedrijfs- en Kantoorschoonmaak',
    description: 'Regelmatige schoonmaakprogramma\'s speciaal afgestemd op uw bedrijf. Van dagelijks onderhoud tot wekelijkse dieptereiniging voor een altijd representatieve werkplek.',
    features: [
      'Dagelijkse of wekelijkse schoonmaakprogramma\'s',
      'Gespecialiseerde vloer- en tapijtreinigingen',
      'Technische reiniging van ramen en gevels',
      'Flexibel schema afgestemd op uw openingstijden'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
  },
  {
    id: 2,
    title: 'Diepe Reiniging & Desinfectie',
    description: 'Voor een grondige schoonmaak gebruiken wij gekwalificeerde technieken en gecertificeerde reinigingsproducten die effectief en milieuvriendelijk zijn.',
    features: [
      'Grondige reiniging van eetkamers en gemeenschappelijke ruimtes',
      'Totale desinfectie met gecertificeerde producten',
      'Koelkasten, apparatuur en werktuigen — complete hygiëne',
      'Milieuvriendelijke werkwijze conform normen'
    ],
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },
  {
    id: 3,
    title: 'Voorbereiding & Nareiniging Evenementen',
    description: 'Wij zorgen dat uw eventlocatie in perfecte staat is vóór en ná het evenement. Snel, discreet en altijd op tijd zodat uw event vlekkeloos verloopt.',
    features: [
      'Voorbereiding van locaties voor een perfecte eerste indruk',
      'Snelle nareiniging — ruimte hersteld in recordtijd',
      'Flexibele planning afgestemd op uw evenement',
      'Professionele en discrete aanpak'
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
  {
    id: 4,
    title: 'Gastvrijheid & Horeca Personeel',
    description: 'Representatief personeel voor uw bedrijfsbijeenkomsten, congressen en diners. Direct inzetbaar met professionele uitstraling en oog voor detail.',
    features: [
      'Representatief personeel voor alle gelegenheden',
      'Van ontvangst tot tafelbediening, volledig op maat',
      'Direct inzetbaar met professionele uitstraling',
      'Oog voor detail en correct etiquette'
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
]
</script>

<style scoped>
.diensten-details { padding: 0; }

.dienst-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 5rem 0;
  border-bottom: 1px solid rgba(31, 164, 191, 0.08);
}
.dienst-row:last-child { border-bottom: none; padding-bottom: 2rem; }
.dienst-row.reverse { direction: rtl; }
.dienst-row.reverse > * { direction: ltr; }

/* Visual */
.visual-frame {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.visual-frame img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.dienst-row:hover .visual-frame img { transform: scale(1.03); }

.visual-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

/* Content */
.service-label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary-teal);
  margin-bottom: 0.75rem;
  background: var(--light-teal);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
}

.dienst-content h2 {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  margin-bottom: 1rem;
  color: var(--dark-text);
}

.service-desc {
  color: var(--text-light);
  line-height: 1.85;
  margin-bottom: 1.5rem;
  font-size: 1.02rem;
}

.mt-btn { margin-top: 1.75rem; }

@media (max-width: 1024px) {
  .dienst-row { grid-template-columns: 1fr; gap: 2rem; padding: 3.5rem 0; direction: ltr !important; }
  .visual-frame img { height: 300px; }
}

@media (max-width: 640px) {
  .dienst-row { padding: 2.5rem 0; gap: 1.5rem; }
  .visual-frame img { height: 240px; }
}
</style>

<template>
  <div class="overons-content section">
    <!-- Mission / Approach split -->
    <div class="mission-grid" style="margin-bottom: 5rem;">
      <div class="mission-text" data-aos="fade-right">
        <p class="eyebrow">Onze missie</p>
        <h2 class="section-title">Schone ruimtes,<br/>gezonde omgevingen</h2>
        <div class="divider divider-left"></div>
        <p style="color: var(--text-light); line-height: 1.85; font-size: 1.02rem;">
          Bij LMA Services creëren we schone, veilige en productieve werkomgevingen. Wij geloven dat een professionele schoonmaak bijdraagt aan gezondheid, efficiëntie en een betere indruk bij bezoekers en medewerkers.
        </p>
        <ul class="check-list" style="margin-top: 1.5rem;">
          <li>Op maat gemaakte diensten voor uw bedrijf en branche</li>
          <li>Regelmatig onderhoud gecombineerd met diepe reiniging</li>
          <li>Persoonlijk contact met een vaste accountmanager</li>
          <li>Snelle service en landelijke dekking</li>
        </ul>
      </div>

      <div class="mission-visual" data-aos="fade-left" data-delay="100">
        <div class="mission-stats-grid">
          <div class="neu-card mission-stat-card" v-for="s in stats" :key="s.label">
            <strong class="stat-big">{{ s.value }}</strong>
            <span class="stat-desc">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- USPs -->
    <div style="text-align: center; margin-bottom: 3rem;" data-aos="fade-up">
      <p class="eyebrow">Wat ons onderscheidt</p>
      <h2 class="section-title">Onze kernwaarden</h2>
      <div class="divider"></div>
    </div>

    <div class="diff-grid" style="margin-bottom: 5rem;">
      <div
        v-for="(diff, idx) in differentiators"
        :key="idx"
        class="diff-card neu-card"
        data-aos="fade-up"
        :data-delay="idx * 120"
      >
        <div class="icon-box icon-box-lg">
          <span v-html="diff.icon"></span>
        </div>
        <h3>{{ diff.title }}</h3>
        <p>{{ diff.text }}</p>
      </div>
    </div>

    <!-- Technology -->
    <div class="tech-row" data-aos="fade-up">
      <div class="tech-card teal-card">
        <div class="icon-box icon-box-white" style="margin-bottom: 1rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        </div>
        <h3 style="color: white; margin-bottom: 0.75rem;">Gecertificeerde Producten</h3>
        <p style="color: rgba(255,255,255,0.85); line-height: 1.7; font-size: 0.95rem;">Onze reinigingsmiddelen zijn veilig, effectief en afgestemd op professionele omgevingen.</p>
      </div>
      <div class="tech-card teal-card" style="background: linear-gradient(135deg, #0e7f99, #0a5d70);">
        <div class="icon-box icon-box-white" style="margin-bottom: 1rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h3 style="color: white; margin-bottom: 0.75rem;">Geavanceerde Technieken</h3>
        <p style="color: rgba(255,255,255,0.85); line-height: 1.7; font-size: 0.95rem;">Slimme methodes en specialistische apparatuur voor efficiënte en doeltreffende schoonmaak.</p>
      </div>
      <div class="tech-card teal-card" style="background: linear-gradient(135deg, #1fa4bf, #0e7f99);">
        <div class="icon-box icon-box-white" style="margin-bottom: 1rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3 style="color: white; margin-bottom: 0.75rem;">Actief in heel Nederland</h3>
        <p style="color: rgba(255,255,255,0.85); line-height: 1.7; font-size: 0.95rem;">Landelijke dekking met lokale teams voor snelle inzetbaarheid en persoonlijke service.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '+500', label: 'Tevreden klanten' },
  { value: '100%', label: 'Gecertificeerde producten' },
  { value: 'NL', label: 'Actief in heel Nederland' },
  { value: '24u', label: 'Offerte reactietijd' },
]

const differentiators = [
  {
    title: 'Betrouwbaarheid',
    text: 'We houden ons aan afspraken, werken veilig en leveren altijd kwaliteit op tijd. Geen verrassingen, alleen resultaten.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
  },
  {
    title: 'Ervaring',
    text: 'Jarenlange expertise in kantoor, horeca, evenementen en projectmatige reiniging. Kennis die u kunt vertrouwen.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  {
    title: 'Nabijheid',
    text: 'Persoonlijk contact en een lokaal team dat snel beschikbaar is. U heeft altijd een vast aanspreekpunt.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
]
</script>

<style scoped>
.overons-content { padding: 0; }

.mission-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.mission-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.mission-stat-card {
  padding: 2rem 1.5rem;
  text-align: center;
}

.stat-big {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--primary-teal);
  margin-bottom: 0.4rem;
}

.stat-desc {
  font-size: 0.85rem;
  color: var(--text-light);
}

/* Differentiators */
.diff-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.diff-card {
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.diff-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--dark-text); }
.diff-card p { font-size: 0.9rem; color: var(--text-light); line-height: 1.7; margin: 0; }

/* Tech row */
.tech-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.tech-card {
  padding: 2rem;
  border-radius: 20px;
}

@media (max-width: 1024px) {
  .mission-grid { grid-template-columns: 1fr; }
  .diff-grid, .tech-row { grid-template-columns: 1fr; }
  .mission-stats-grid { grid-template-columns: 1fr 1fr; }
}
</style>

<template>
  <div class="overons-content">
    <section class="mission-section">
      <div class="mission-grid">
        <div class="mission-item">
          <h2>Onze Missie</h2>
          <p>Bij LMA Services creëren we schone, veilige en productieve werkomgevingen. Wij geloven dat een professionele schoonmaak bijdraagt aan gezondheid, efficiëntie en een betere indruk bij bezoekers en medewerkers.</p>
        </div>
        <div class="mission-item">
          <h2>Onze Aanpak</h2>
          <ul class="value-list">
            <li>Op maat gemaakte diensten voor uw bedrijf en branche</li>
            <li>Regelmatig onderhoud gecombineerd met diepe reiniging</li>
            <li>Persoonlijk contact met een vaste accountmanager</li>
            <li>Snelle service in heel Nederland</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="differentiators">
      <h2 style="text-align:center; margin-bottom:3rem;">Wat ons onderscheidt</h2>
      <div class="diff-grid">
        <div class="diff-card">
          <div class="diff-icon">✓</div>
          <h3>Betrouwbaarheid</h3>
          <p>We houden ons aan afspraken, werken veilig en leveren altijd kwaliteit op tijd.</p>
        </div>
        <div class="diff-card">
          <div class="diff-icon">★</div>
          <h3>Ervaring</h3>
          <p>Jarenlange expertise in kantoor, horeca, evenementen en projectmatige reiniging.</p>
        </div>
        <div class="diff-card">
          <div class="diff-icon">♡</div>
          <h3>Nabijheid</h3>
          <p>Persoonlijk contact en een lokaal team dat snel beschikbaar is in uw regio.</p>
        </div>
      </div>
    </section>

    <section class="tech-section">
      <h2 style="text-align:center; margin-bottom:3rem;">Onze Technologie & Middelen</h2>
      <div class="tech-grid">
        <div class="tech-item">
          <h3>Gecertificeerde Producten</h3>
          <p>Onze reinigingsmiddelen zijn veilig, effectief en afgestemd op professionele omgevingen.</p>
        </div>
        <div class="tech-item">
          <h3>Geavanceerde Technieken</h3>
          <p>Door slimme methodes en specialistische apparatuur houden we de service efficiënt en doeltreffend.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mission-section { padding: 2rem 0; }

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.mission-item h2 {
  margin: 0 0 1rem;
  font-size: 1.8rem;
  color: var(--dark-text);
}

.mission-item p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.8;
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.value-list li {
  margin-bottom: 0.85rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-light);
  line-height: 1.7;
}

.value-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-teal);
  font-weight: 700;
}

.differentiators {
  padding: 3rem 0;
  background: rgba(31, 164, 191, 0.04);
  border-radius: 16px;
  margin: 2rem 0;
}

.diff-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.diff-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
}

.diff-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--light-teal);
  color: var(--primary-teal);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.diff-card h3 {
  margin: 0 0 0.75rem;
  color: var(--dark-text);
}

.diff-card p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.7;
}

.tech-section { padding: 2rem 0; }

.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.tech-item h3 {
  margin: 0 0 0.75rem;
  color: var(--dark-text);
}

.tech-item p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .mission-grid, .tech-grid { grid-template-columns: 1fr; }
  .diff-grid { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .differentiators { padding: 2rem 1.5rem; }
}
</style>

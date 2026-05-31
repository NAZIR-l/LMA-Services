<template>
  <section class="team-section section-neu section">
    <div class="container">
      <div class="team-grid">
        <!-- Team image -->
        <div class="team-visual" data-aos="fade-right" data-delay="100">
          <div class="team-image-frame">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="LMA Services schoonmaakteam aan het werk"
            />
          </div>
        </div>

        <div class="team-content" data-aos="fade-left" data-delay="150">
          <p class="eyebrow">Ons team</p>
          <h2 class="section-title">Getraind voor elke uitdaging</h2>
          <div class="divider divider-left"></div>
          <p style="color: var(--text-light); line-height: 1.85; margin-bottom: 1.75rem;">
            Ons team bestaat uit getrainde medewerkers die flexibel inzetbaar zijn in heel Nederland. We hechten veel waarde aan opleiding, professionaliteit en het persoonlijke contact met onze klanten.
          </p>
          <ul class="check-list">
            <li>Gespecialiseerde teams per dienst</li>
            <li>Regelmatige trainingen en bijscholing</li>
            <li>Landelijke dekking met lokale teams</li>
            <li>Bereikbaar ma–vr 08:00–18:00</li>
          </ul>

          <div class="team-cta">
            <router-link to="/offerte-aanvragen" class="btn btn-primary">Offerte aanvragen</router-link>
            <router-link to="/werken-bij" class="btn btn-outline">Kom bij ons werken</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Team image is loaded via URL in template
</script>

<style scoped>
.team-section { }

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: center;
}

.team-image-frame {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 16px 16px 40px rgba(0,0,0,0.1), -8px -8px 24px rgba(255,255,255,0.85);
}

.team-image-frame img {
  width: 100%;
  height: 440px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.team-image-frame:hover img { transform: scale(1.03); }

.team-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .team-grid { grid-template-columns: 1fr; }
  .team-visual { order: -1; }
  .team-image-frame img { height: 320px; }
}
</style>

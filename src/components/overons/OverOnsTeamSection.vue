<template>
  <section class="team-section">
    <div class="team-grid">
      <div class="team-content">
        <h2>Ons Team & Bereik</h2>
        <p>Ons team bestaat uit getrainde medewerkers die flexibel inzetbaar zijn in heel Nederland. We hechten veel waarde aan opleiding, professionaliteit en het persoonlijke contact met onze klanten.</p>
        <ul class="team-points">
          <li>Gespecialiseerde teams per dienst</li>
          <li>Regelmatige trainingen en scholing</li>
          <li>Landelijke dekking met lokale teams</li>
          <li>24/7 bereikbaarheid voor klanten</li>
        </ul>
      </div>
          <div class="team-image">
            <img :src="teamImg" alt="LMA Services Team" />
          </div>
    </div>
  </section>
</template>

    <script setup lang="ts">
    import teamImg from '../../assets/eilo-employee.png'
    </script>

    <style scoped>
.team-section {
  padding: 3rem 0;
  background: rgba(31, 164, 191, 0.04);
  border-radius: 16px;
  margin-top: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.team-content h2 {
  margin: 0 0 1rem;
  font-size: 2rem;
  color: var(--dark-text);
}

.team-content p {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  line-height: 1.8;
}

.team-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.team-points li {
  margin-bottom: 0.85rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-light);
  line-height: 1.7;
}

.team-points li::before {
  content: "►";
  position: absolute;
  left: 0;
  color: var(--primary-teal);
  font-size: 0.7rem;
}

.team-image {
  border-radius: 12px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 1024px) {
  .team-grid { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .team-section { padding: 2rem 1.5rem; margin-top: 1rem; }
}
</style>

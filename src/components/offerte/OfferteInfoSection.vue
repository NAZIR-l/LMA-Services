<template>
  <section class="offerte-info">
    <div class="info-grid">
      <div class="info-content">
        <h2>Waarom een offerte aanvragen?</h2>
        <ul class="benefits-list">
          <li>✓ Maatwerk oplossing voor uw specifieke behoeften</li>
          <li>✓ Transparante prijzen zonder verrassingen</li>
          <li>✓ Persoonlijk contact met ons team</li>
          <li>✓ Vrijblijvende offerte - geen verplichtingen</li>
          <li>✓ Respons binnen 24 uur</li>
        </ul>
        
        <div class="trust-section">
          <p style="font-weight: 700; margin-bottom: 1rem;">Waarom vertrouwen klanten ons?</p>
          <div class="trust-items">
            <div>🌍 Actief in heel Nederland</div>
            <div>✅ Gecertificeerde producten</div>
            <div>👥 Getraind personeel</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offerte-info {
  padding: 2rem 0;
}

.info-content h2 {
  margin: 0 0 1.5rem;
  font-size: 1.8rem;
  color: var(--dark-text);
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.benefits-list li {
  margin-bottom: 0.85rem;
  color: var(--text-light);
  line-height: 1.7;
}

.trust-section {
  background: rgba(31, 164, 191, 0.06);
  padding: 1.5rem;
  border-radius: 12px;
}

.trust-section p {
  margin: 0 0 1rem;
  color: var(--dark-text);
}

.trust-items {
  display: grid;
  gap: 0.75rem;
}

.trust-items div {
  color: var(--text-light);
  line-height: 1.6;
}
</style>

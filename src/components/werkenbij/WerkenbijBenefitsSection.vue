<template>
  <section class="werkenbij-benefits">
    <h2>Waarom voor LMA Services kiezen?</h2>
    <p class="section-intro">Wij zoeken gemotiveerde medewerkers die deel willen uitmaken van een professioneel team.</p>
    
    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="benefit-icon">⏰</div>
        <h3>Flexibele Werktijden</h3>
        <p>Werk wanneer het jou uitkomt, afgestemd op je eigen schema</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">📚</div>
        <h3>Training & Scholing</h3>
        <p>Wij bieden gratis training en professionele ontwikkelingskansen</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">📈</div>
        <h3>Groei Mogelijkheden</h3>
        <p>Ruimte voor persoonlijke groei en doorgroeimogelijkheden</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">💰</div>
        <h3>Competitief Salaris</h3>
        <p>Marktconforme beloning en sociale zekerheid</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">👥</div>
        <h3>Fijn Team</h3>
        <p>Werk in een ondersteunend team met open communicatie</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🌟</div>
        <h3>Waardering</h3>
        <p>Waardering voor goed werk en betrokkenheid</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.werkenbij-benefits {
  padding: 3rem 0;
}

.werkenbij-benefits h2 {
  margin: 0 0 1rem;
  text-align: center;
  font-size: 2rem;
  color: var(--dark-text);
}

.section-intro {
  text-align: center;
  color: var(--text-light);
  margin: 0 auto 3rem;
  max-width: 50rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.benefit-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(31, 164, 191, 0.12);
}

.benefit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  margin: 0 0 0.75rem;
  color: var(--dark-text);
}

.benefit-card p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .benefits-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 720px) {
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>

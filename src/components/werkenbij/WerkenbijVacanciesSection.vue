<template>
  <section class="werkenbij-vacancies">
    <h2>Huidige Vacatures</h2>
    
    <div class="vacancies-list">
      <div v-for="vacancy in vacancies" :key="vacancy.id" class="vacancy-card">
        <div class="vacancy-header">
          <h3>{{ vacancy.title }}</h3>
          <span class="vacancy-location">📍 {{ vacancy.location }}</span>
        </div>
        <p class="vacancy-description">{{ vacancy.description }}</p>
        <div class="vacancy-requirements">
          <p><strong>Vereisten:</strong></p>
          <ul>
            <li v-for="(req, i) in vacancy.requirements" :key="i">{{ req }}</li>
          </ul>
        </div>
        <router-link to="/contact" class="btn btn-primary">Solliciteer nu</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const vacancies = [
  {
    id: 1,
    title: 'Schoonmaker(s) Kantoor',
    location: 'Veghel en omgeving',
    description: 'We zoeken ervaren schoonmakers voor ons kantoorschoonmaakteam. Ervaring is een plus, maar niet verplicht!',
    requirements: [
      'Betrouwbaar en nauwkeurig',
      'Flexibel beschikbaar',
      'Goed Nederlands spreken'
    ]
  },
  {
    id: 2,
    title: 'Horeca & Events Medewerker',
    location: 'Regionaal',
    description: 'Voor ons horeca en events team zoeken we representatief personeel met sterke service mentaliteit.',
    requirements: [
      'Representatief voorkomen',
      'Gastvrij karakter',
      'Bereid om flexibel in te springen'
    ]
  },
  {
    id: 3,
    title: 'Teamleider Reiniging',
    location: 'Veghel',
    description: 'Ervaringstitulatielenaar gezocht voor leidinggevende functie. Je stuurt een team aan en zorg voor kwaliteit.',
    requirements: [
      '5+ jaar ervaring in schoonmaak',
      'Leidinggevende ervaring',
      'Stressbestendig en organisatiegericht'
    ]
  }
]
</script>

<style scoped>
.werkenbij-vacancies {
  padding: 3rem 0;
}

.werkenbij-vacancies h2 {
  margin: 0 0 2rem;
  text-align: center;
  font-size: 2rem;
  color: var(--dark-text);
}

.vacancies-list {
  display: grid;
  gap: 2rem;
}

.vacancy-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
  border-left: 4px solid var(--primary-teal);
}

.vacancy-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
}

.vacancy-header h3 {
  margin: 0;
  color: var(--dark-text);
}

.vacancy-location {
  font-size: 0.9rem;
  color: var(--primary-teal);
  font-weight: 600;
  white-space: nowrap;
}

.vacancy-description {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  line-height: 1.7;
}

.vacancy-requirements {
  margin: 1.5rem 0;
}

.vacancy-requirements p {
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: var(--dark-text);
}

.vacancy-requirements ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vacancy-requirements li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-light);
}

.vacancy-requirements li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-teal);
  font-weight: 700;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 1rem;
}

.btn-primary {
  background: var(--primary-teal);
  color: white;
}

.btn-primary:hover {
  background: var(--dark-teal);
}

@media (max-width: 720px) {
  .vacancy-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<template>
  <div class="diensten-details">
    <article v-for="(service, idx) in services" :key="service.id" :class="['diensten-service', idx % 2 === 1 ? 'reverse' : '']">
      <div class="service-content">
        <span class="service-label">Service {{ idx + 1 }}</span>
        <h2>{{ service.title }}</h2>
        <p class="service-description">{{ service.description }}</p>
        <ul class="service-features">
          <li v-for="(feature, i) in service.features" :key="i">✓ {{ feature }}</li>
        </ul>
      </div>
      <div class="service-visual">
        <img :src="service.image" :alt="service.title" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import imgA from '../../assets/eilo-clean-house.png'
import imgB from '../../assets/eilo-floor.png'
import imgC from '../../assets/eilo-employee.png'

const services = [
  {
    id: 1,
    title: 'Bedrijfs- en Kantoorschoonmaak',
    description: 'Regelmatige schoonmaakprogramma\'s speciaal afgestemd op uw bedrijf. Van dagelijks onderhoud tot wekelijkse dieptereiniging.',
    features: [
      'Regelmatig schoonmaken: dagelijkse of wekelijkse programma\'s',
      'Vloeren en tapijten: gespecialiseerde behandelingen',
      'Ramen: technische reiniging van ramen en gevels',
      'Flexibel schema afgestemd op uw openingstijden'
    ],
    image: imgA
  },
  {
    id: 2,
    title: 'Diepe Reiniging & Desinfectie',
    description: 'Voor een grondige schoonmaak gebruiken wij gekwalificeerde technieken en gecertificeerde reinigingsproducten.',
    features: [
      'Grondige reiniging van eetkamers en gemeenschappelijke ruimtes',
      'Totale desinfectie met gecertificeerde producten',
      'Koelkasten, apparatuur, werktuigen - complete hygiëne',
      'Milieuvriendelijke werkwijze'
    ],
    image: imgB
  },
  {
    id: 3,
    title: 'Voorbereiding & Nareiniging Evenementen',
    description: 'Wij zorgen dat uw eventlocatie in perfecte staat is vóór en ná het evenement.',
    features: [
      'Voorbereiding van locaties voor perfecte eerste indruk',
      'Snelle nareiniging - ruimte hersteld in recordtijd',
      'Flexibele planning rond uw events',
      'Professioneel en discrete aanpak'
    ],
    image: imgA
  },
  {
    id: 4,
    title: 'Gastvrijheid & Horeca Personeel',
    description: 'Representatief personeel voor uw bedrijfsbijeenkomsten, congressen en diners.',
    features: [
      'Representatief personeel voor alle gelegenheden',
      'Van ontvangst tot tafelbediening, volledig op maat',
      'Direct inzetbaar met professionele uitstraling',
      'Oog voor detail en proper etiquette'
    ],
    image: imgC
  }
]
</script>

<style scoped>
.diensten-details {
  display: flex;
  flex-direction: column;
}

.diensten-service {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 4rem 0;
  border-bottom: 1px solid rgba(31, 164, 191, 0.08);
}

.diensten-service:last-child { border-bottom: none; }

.diensten-service.reverse {
  grid-auto-flow: dense;
}

.diensten-service.reverse .service-visual {
  order: -1;
}

.service-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary-teal);
  font-weight: 700;
}

.service-content h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  color: var(--dark-text);
}

.service-description {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.05rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  margin-bottom: 0.85rem;
  color: var(--text-light);
  line-height: 1.7;
}

.service-visual {
  border-radius: 16px;
  overflow: hidden;
}

.service-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 1024px) {
  .diensten-service {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
  }
  .diensten-service.reverse .service-visual { order: 0; }
}

@media (max-width: 720px) {
  .diensten-service { padding: 2rem 0; gap: 1.5rem; }
  .service-content h2 { font-size: 1.6rem; }
}
</style>

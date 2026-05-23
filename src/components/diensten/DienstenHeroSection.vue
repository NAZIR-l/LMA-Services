<template>
  <section class="diensten-hero">
    <div class="container">
      <div class="section-header">
        <h1>Onze Diensten</h1>
        <p>Professionele schoonmaakoplossingen op maat voor elk bedrijfstype en locatie.</p>
      </div>
      <div class="services-preview">
        <div class="service-pill" v-for="service in services" :key="service.id">
          <span class="pill-icon">{{ service.icon }}</span>
          <span class="pill-text">{{ service.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { id: 1, icon: '🏢', name: 'Kantoorschoonmaak' },
  { id: 2, icon: '🧹', name: 'Dieptereiniging' },
  { id: 3, icon: '🎉', name: 'Evenementen' },
  { id: 4, icon: '🍽️', name: 'Horeca' }
]
</script>

<style scoped>
.diensten-hero {
  background: linear-gradient(135deg, rgba(31, 164, 191, 0.98) 0%, rgba(14, 127, 153, 0.98) 100%);
  padding: 4rem 0;
  color: white;
  text-align: center;
}

.section-header h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
}

.section-header p {
  margin: 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.92);
  max-width: 50rem;
  margin: 0 auto;
}

.services-preview {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
}

.service-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  color: white;
  font-weight: 500;
}

.pill-icon {
  font-size: 1.3rem;
}

@media (max-width: 720px) {
  .diensten-hero { padding: 3rem 0; }
  .services-preview { gap: 0.8rem; }
  .service-pill { padding: 0.6rem 1rem; font-size: 0.9rem; }
}
</style>

<template>
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow eyebrow-white" data-aos="fade-up">Wat wij aanbieden</p>
      <h1 data-aos="fade-up" data-delay="100">Onze Diensten</h1>
      <p data-aos="fade-up" data-delay="200">Professionele schoonmaakoplossingen op maat voor elk bedrijfstype en elke locatie in heel Nederland.</p>

      <div class="services-pills" data-aos="fade-up" data-delay="300">
        <div class="service-pill" v-for="s in services" :key="s.name">
          <span v-html="s.icon"></span>
          {{ s.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'Kantoorschoonmaak',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
  },
  {
    name: 'Dieptereiniging',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },
  {
    name: 'Ruiten & Gevels',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`
  },
  {
    name: 'Evenementen & Horeca',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`
  }
]
</script>

<style scoped>
.services-pills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.service-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s ease;
}
.service-pill:hover { background: rgba(255,255,255,0.22); }
</style>

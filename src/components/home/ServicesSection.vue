<template>
  <section class="home-services">
    <div class="container">
      <div class="section-header">
        <h2>Onze kerngebieden</h2>
        <p>Complete, betrouwbare schoonmaakoplossingen afgestemd op uw sector.</p>
      </div>

      <div class="services-grid">
        <article class="service-card" v-for="(s, i) in services" :key="i">
          <div class="service-top">
            <div class="service-icon" v-html="s.icon"></div>
            <h3>{{ s.title }}</h3>
          </div>

          <p class="service-desc">{{ s.desc }}</p>

          <div class="service-cta">
            <router-link :to="s.link" class="btn btn-small btn-outline">Meer info</router-link>
            <router-link to="/offerte-aanvragen" class="btn btn-small btn-primary">Offerte</router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { title: 'Bedrijfs- & Kantoorschoonmaak', desc: 'Dagelijkse of wekelijkse onderhoudsprogramma\nvoor een representatieve werkplek.', link: '/diensten', icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M7 8h.01M11 8h.01M15 8h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  { title: 'Diepte Reiniging', desc: 'Grondige reiniging en desinfectie van keuken, apparatuur en vloeren.', link: '/diensten', icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="8" r="1.5" fill="currentColor"/></svg>' },
  { title: 'Ruiten & Gevels', desc: 'Technische reiniging van ramen en gevels, binnen en buiten.', link: '/diensten', icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' },
  { title: 'Evenementen & Horeca', desc: 'Voor- en naservice voor events, inclusief hospitality support.', link: '/diensten', icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M12 7v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' }
]
</script>

<style scoped>
.home-services { padding: 5rem 0; }
.section-header { text-align:center; margin-bottom:2rem; }
.section-header h2 { margin:0; font-size:clamp(1.9rem,3.5vw,2.6rem); }
.section-header p { margin:0.5rem auto 0; max-width:56ch; color:var(--text-light); }

.services-grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:1.25rem; }
.service-card { background: linear-gradient(180deg,#ffffff 0%, #f8fdfd 100%); border-radius:14px; padding:1.25rem; box-shadow:0 12px 30px rgba(16,24,40,0.06); display:flex; flex-direction:column; justify-content:space-between; transition: transform 0.22s ease, box-shadow 0.22s ease; }
.service-card:hover { transform: translateY(-6px); box-shadow:0 30px 50px rgba(31,164,191,0.10); }
.service-top { display:flex; align-items:center; gap:1rem; }
.service-icon { width:56px; height:56px; display:inline-flex; align-items:center; justify-content:center; border-radius:12px; background:var(--light-teal); color:var(--dark-teal); }
.service-top h3 { margin:0; font-size:1.05rem; color:var(--dark-text); }
.service-desc { margin:1rem 0; color:var(--text-light); white-space:pre-line; }
.service-cta { display:flex; gap:0.5rem; }

.btn-small { padding:0.5rem 0.9rem; border-radius:999px; font-weight:700; font-size:0.9rem; }
.btn-outline { background:transparent; border:1px solid rgba(31,164,191,0.14); color:var(--primary-teal); }
.btn-primary { background:var(--primary-teal); color:white; border:1px solid var(--primary-teal); }

@media (max-width:1024px){ .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width:720px){ .services-grid { grid-template-columns: 1fr; } }
</style>

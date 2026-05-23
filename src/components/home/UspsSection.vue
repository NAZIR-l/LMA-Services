<template>
  <section class="home-usps">
    <div class="container">
      <div class="section-header">
        <h2>Uw Partner in Perfect Schoon</h2>
        <p>Waarom klanten voor LMA kiezen — betrouwbaarheid, ervaring en nabijheid.</p>
      </div>

      <div class="usp-grid">
        <div class="usp-card" v-for="(u, idx) in usps" :key="idx">
          <div class="usp-inner">
            <img class="usp-photo" :src="u.img" :alt="u.title" />
            <h3>{{ u.title }}</h3>
            <p>{{ u.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgA from '../../assets/eilo-employee.png'
import imgB from '../../assets/eilo-floor.png'
import imgC from '../../assets/eilo-clean-house.png'

const usps = [
  { title: 'Betrouwbaarheid', text: 'Strikte naleving van afspraken en kwaliteitsnormen.', img: imgA },
  { title: 'Ervaring', text: 'Specialisten in horeca, evenementen en kantooromgevingen.', img: imgB },
  { title: 'Nabijheid', text: 'Lokaal team, persoonlijk contact en snelle inzetbaarheid.', img: imgC }
]
</script>

<style scoped>
.home-usps { padding:5rem 0; }
.usp-grid { display:grid; gap:1.25rem; grid-template-columns: repeat(3, 1fr); }
.usp-card { background:linear-gradient(180deg,#fff,#f8ffff); border-radius:14px; overflow:hidden; box-shadow:0 12px 30px rgba(16,24,40,0.06); }
.usp-inner { padding:1rem; text-align:center; }
.usp-photo { width:100%; height:160px; object-fit:cover; display:block; border-radius:8px; }
.usp-card h3 { margin:0.85rem 0 0.5rem; }
.usp-card p { margin:0; color:var(--text-light); line-height:1.6; }

@media (max-width:1024px){ .usp-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width:720px){ .usp-grid { grid-template-columns: 1fr; } }
</style>

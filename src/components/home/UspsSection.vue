<template>
  <section class="home-usps section-neu section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <p class="eyebrow">Waarom LMA Services</p>
        <h2 class="section-title">Uw Partner in Perfect Schoon</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Waarom honderden bedrijven kiezen voor LMA Services als hun vaste schoonmaakpartner.</p>
      </div>

      <div class="usps-grid">
        <div
          v-for="(usp, idx) in usps"
          :key="idx"
          class="usp-card neu-card"
          data-aos="scale-up"
          :data-delay="idx * 120"
        >
          <div class="usp-image-wrap">
            <img :src="usp.img" :alt="usp.title" class="usp-photo" />
            <div class="usp-overlay">
              <div class="icon-box icon-box-white icon-box-lg">
                <span v-html="usp.icon"></span>
              </div>
            </div>
          </div>
          <div class="usp-body">
            <h3>{{ usp.title }}</h3>
            <p>{{ usp.text }}</p>
            <div class="usp-items">
              <span v-for="item in usp.items" :key="item" class="usp-tag">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const usps = [
  {
    title: 'Betrouwbaarheid',
    text: 'Strikte naleving van afspraken en kwaliteitsnormen. Altijd op tijd, altijd naar verwachting.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    items: ['Vaste afspraken', 'Kwaliteitscontrole', 'Transparante communicatie'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
  },
  {
    title: 'Ervaring & Expertise',
    text: 'Specialisten in horeca, evenementen en kantooromgevingen met jarenlange vakkennis.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    items: ['Horeca specialist', 'Evenementen expert', 'Kantoor & industrie'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  {
    title: 'Nabijheid & Service',
    text: 'Lokaal team, persoonlijk contact en snelle inzetbaarheid. Bereikbaar wanneer u ons nodig heeft.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
    items: ['Heel Nederland', 'Persoonlijk contact', 'Snel inzetbaar'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
]
</script>

<style scoped>
.home-usps { padding-bottom: 6rem; }

.usps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.usp-card { padding: 0; overflow: hidden; cursor: default; }

.usp-image-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.usp-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  border-radius: 0;
}
.usp-card:hover .usp-photo { transform: scale(1.06); }

.usp-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(31,164,191,0.1), rgba(14,127,153,0.6));
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  transition: background 0.3s ease;
}
.usp-card:hover .usp-overlay {
  background: linear-gradient(to bottom, rgba(31,164,191,0.15), rgba(14,127,153,0.75));
}

.usp-body {
  padding: 1.5rem;
}

.usp-body h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: var(--dark-text);
}

.usp-body p {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.usp-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.usp-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: var(--light-teal);
  color: var(--dark-teal);
}

@media (max-width: 900px) { .usps-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .usps-grid { grid-template-columns: 1fr; } }
</style>
